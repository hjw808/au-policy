import http, { sleep } from '../lib/http.js'
import { getState, setState } from '../lib/stateStore.js'
import supabase from '../db/client.js'
import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

/**
 * They Vote For You API — structured voting records since 2006.
 * https://theyvoteforyou.org.au/help/data
 *
 * API key is optional for low-volume use but recommended.
 * Endpoints:
 *   GET /api/v1/divisions.json — list divisions (votes)
 *   GET /api/v1/divisions/:id.json — single division with voter breakdown
 *   GET /api/v1/people.json — list of all people (MPs/senators)
 */

const BASE_URL = 'https://theyvoteforyou.org.au/api/v1'

// TVFY API key is optional but helps with rate limits
// We store it in env but don't require it
function getApiParams() {
  const key = process.env.TVFY_API_KEY
  return key ? { api_key: key } : {}
}

/**
 * Fetch a page of divisions from TVFY API.
 * Returns array of division summaries.
 */
async function fetchDivisions(page = 1) {
  try {
    const { data } = await http.get(`${BASE_URL}/divisions.json`, {
      params: {
        ...getApiParams(),
        page,
      },
    })
    return Array.isArray(data) ? data : []
  } catch (err) {
    if (err.response?.status === 404) return [] // No more pages
    throw err
  }
}

/**
 * Fetch full division details including individual votes.
 */
async function fetchDivisionDetail(divisionId) {
  try {
    const { data } = await http.get(`${BASE_URL}/divisions/${divisionId}.json`, {
      params: getApiParams(),
    })
    return data
  } catch (err) {
    logger.warn(`[INGEST:TVFY] Failed to fetch division ${divisionId}: ${err.message}`)
    return null
  }
}

/**
 * Try to match a TVFY division to a policy in our database.
 * Matches by date + keyword overlap in the title/motion text.
 */
async function findMatchingPolicy(division) {
  const divDate = division.date
  if (!divDate) return null

  // Search for policies on the same date or within 1 day
  const { data: candidates } = await supabase
    .from('policies')
    .select('id, title, date, category, matched_keywords')
    .gte('date', divDate)
    .lte('date', divDate)
    .in('status', ['pending', 'flagged', 'complete'])
    .limit(50)

  if (!candidates?.length) return null

  // Score each candidate by title word overlap with the division name
  const divWords = (division.name || '').toLowerCase().split(/\s+/).filter(w => w.length > 3)

  let bestMatch = null
  let bestScore = 0

  for (const policy of candidates) {
    const titleWords = (policy.title || '').toLowerCase().split(/\s+/)
    const overlap = divWords.filter(w => titleWords.some(tw => tw.includes(w) || w.includes(tw)))
    const score = overlap.length

    if (score > bestScore && score >= 2) {
      bestScore = score
      bestMatch = policy
    }
  }

  return bestMatch
}

/**
 * Map a TVFY person ID to our members table.
 * TVFY uses numeric IDs; we need to match by name.
 */
async function mapVoterToMember(voter) {
  const name = voter.name || `${voter.first_name || ''} ${voter.last_name || ''}`.trim()
  if (!name) return null

  const member = await db.findMemberByName(name)
  return member
}

/**
 * Process a single division: match to policy, insert votes.
 */
async function processDivision(division) {
  const detail = await fetchDivisionDetail(division.id)
  if (!detail) return { matched: false }

  await sleep(500) // Rate limit

  // Try to match this division to a policy we've already ingested
  const policy = await findMatchingPolicy(division)
  if (!policy) return { matched: false }

  // Extract individual votes
  const votes = detail.votes || []
  let insertedVotes = 0

  for (const vote of votes) {
    const member = await mapVoterToMember(vote.member || vote)
    if (!member) continue

    // Map TVFY vote values to our schema
    const voteValue = (vote.vote || '').toLowerCase()
    let normalizedVote
    if (voteValue === 'aye' || voteValue === 'yes') normalizedVote = 'yes'
    else if (voteValue === 'no' || voteValue === 'nay') normalizedVote = 'no'
    else if (voteValue === 'abstention' || voteValue === 'absent') normalizedVote = 'abstain'
    else normalizedVote = voteValue

    // Upsert the vote (ignore conflicts — same person can't vote twice)
    const { error } = await supabase
      .from('votes')
      .upsert(
        { policy_id: policy.id, member_id: member.id, vote: normalizedVote },
        { onConflict: 'policy_id,member_id', ignoreDuplicates: true }
      )

    if (!error) insertedVotes++
  }

  return { matched: true, policyTitle: policy.title, votesInserted: insertedVotes }
}

/**
 * Main ingestion function for They Vote For You data.
 */
export async function ingestTheyVoteForYou() {
  logger.info('[INGEST:TVFY] Starting They Vote For You ingestion')

  // Get the last page we processed (pagination-based since TVFY sorts by date desc)
  const lastProcessedId = parseInt(await getState('last_tvfy_division_id') || '0')

  let page = 1
  let totalDivisions = 0
  let matchedDivisions = 0
  let totalVotes = 0
  let newHighestId = lastProcessedId
  let consecutiveEmpty = 0

  while (true) {
    const divisions = await fetchDivisions(page)

    if (divisions.length === 0) break

    // Check if we've reached already-processed divisions
    const newDivisions = divisions.filter(d => d.id > lastProcessedId)

    if (newDivisions.length === 0) {
      consecutiveEmpty++
      if (consecutiveEmpty >= 2) break // Two empty pages = we're past new data
      page++
      await sleep(500)
      continue
    }

    consecutiveEmpty = 0

    for (const division of newDivisions) {
      totalDivisions++

      if (division.id > newHighestId) {
        newHighestId = division.id
      }

      const result = await processDivision(division)
      if (result.matched) {
        matchedDivisions++
        totalVotes += result.votesInserted || 0
        logger.debug(`[INGEST:TVFY] Matched: "${result.policyTitle}" — ${result.votesInserted} votes`)
      }

      await sleep(300) // Rate limit between divisions
    }

    logger.info(`[INGEST:TVFY] Page ${page}: processed ${newDivisions.length} divisions, ${matchedDivisions} matched`)

    // Safety limit — don't process more than 20 pages per run
    if (page >= 20) {
      logger.info('[INGEST:TVFY] Reached page limit for this run')
      break
    }

    page++
    await sleep(500)
  }

  // Update state
  if (newHighestId > lastProcessedId) {
    await setState('last_tvfy_division_id', String(newHighestId))
  }

  logger.info(`[INGEST:TVFY] Processed ${totalDivisions} divisions, matched ${matchedDivisions} to policies, inserted ${totalVotes} votes`)
}
