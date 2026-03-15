import http, { sleep } from '../lib/http.js'
import { matchKeywords, inferCategory } from '../lib/policyKeywords.js'
import { getState, setState } from '../lib/stateStore.js'
import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

const BASE_URL = 'https://www.openaustralia.org.au/api'
const API_KEY = process.env.OPENAUSTRALIA_API_KEY

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(d) {
  return d.toISOString().split('T')[0]
}

/**
 * Add days to a date
 */
function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * Fetch and upsert all current MPs.
 */
async function ingestMembers() {
  logger.info('[INGEST:OA] Fetching current members')

  const { data } = await http.get(`${BASE_URL}/getMPs`, {
    params: { key: API_KEY, output: 'js' }
  })

  if (!Array.isArray(data)) {
    logger.warn('[INGEST:OA] getMPs did not return an array')
    return 0
  }

  const members = data.map(m => ({
    id: String(m.member_id || m.person_id),
    name: m.full_name || `${m.first_name} ${m.last_name}`,
    party: m.party || null,
    electorate: m.constituency || null,
    role: m.office?.[0]?.position || null,
    raw_json: m,
    updated_at: new Date().toISOString(),
  }))

  if (members.length > 0) {
    await db.bulkUpsertMembers(members)
  }

  logger.info(`[INGEST:OA] Upserted ${members.length} members`)
  return members.length
}

/**
 * Fetch debates for a single date and chamber type.
 * Returns array of debate objects.
 */
async function fetchDebates(date, type) {
  try {
    const { data } = await http.get(`${BASE_URL}/getDebates`, {
      params: {
        key: API_KEY,
        date,
        type,
        output: 'js',
      }
    })

    if (!Array.isArray(data)) return []
    return data
  } catch (err) {
    // 404 or empty = no debates that day (weekends, recesses)
    if (err.response?.status === 404) return []
    throw err
  }
}

/**
 * Process a single debate — check keywords and upsert if relevant.
 */
async function processDebate(debate, type) {
  const bodyText = Array.isArray(debate.speeches)
    ? debate.speeches.map(s => s.body || '').join(' ')
    : debate.body || ''

  const title = debate.subsection_title || debate.title || debate.heading || 'Untitled'
  const fullText = `${title} ${bodyText}`
  const keywords = matchKeywords(fullText)

  if (keywords.length === 0) return null

  const truncatedText = bodyText.slice(0, 8000)
  const category = inferCategory(keywords)
  const debateDate = debate.date || debate.hdate

  const policy = {
    external_id: debate.gid || `oa-${type}-${debateDate}-${title.slice(0, 50)}`,
    date: debateDate,
    title: title.slice(0, 500),
    category,
    source: 'openaustralia',
    source_url: debate.list_url || `https://www.openaustralia.org.au/debates/?id=${debate.gid}`,
    raw_text: truncatedText,
    matched_keywords: keywords,
    status: 'pending',
  }

  return db.upsertPolicy(policy)
}

/**
 * Main ingestion function for OpenAustralia data.
 */
export async function ingestOpenAustralia() {
  logger.info('[INGEST:OA] Starting OpenAustralia ingestion')

  // Step 1: Ingest members
  await ingestMembers()
  await sleep(500)

  // Step 2: Get last processed date
  const lastDate = await getState('last_openaustralia_date') || '2010-01-01'
  const startDate = addDays(new Date(lastDate), 1)
  const endDate = addDays(new Date(), -1) // yesterday

  if (startDate > endDate) {
    logger.info('[INGEST:OA] Already up to date')
    return
  }

  logger.info(`[INGEST:OA] Processing dates from ${formatDate(startDate)} to ${formatDate(endDate)}`)

  let datesProcessed = 0
  let policiesIngested = 0
  let debatesSkipped = 0

  let currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    const dateStr = formatDate(currentDate)

    // Skip weekends (less likely to have parliament)
    const dayOfWeek = currentDate.getDay()
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      currentDate = addDays(currentDate, 1)
      continue
    }

    // Fetch both chambers
    for (const type of ['representatives', 'senate']) {
      try {
        const debates = await fetchDebates(dateStr, type)

        for (const debate of debates) {
          const result = await processDebate(debate, type)
          if (result) policiesIngested++
          else debatesSkipped++
        }

        await sleep(500) // Rate limit: 500ms between calls
      } catch (err) {
        logger.warn(`[INGEST:OA] Error fetching ${type} debates for ${dateStr}: ${err.message}`)
      }
    }

    datesProcessed++

    // Update state periodically (every 30 days processed)
    if (datesProcessed % 30 === 0) {
      await setState('last_openaustralia_date', dateStr)
      logger.info(`[INGEST:OA] Checkpoint: processed ${datesProcessed} dates, ${policiesIngested} policies`)
    }

    currentDate = addDays(currentDate, 1)
  }

  // Final state update
  await setState('last_openaustralia_date', formatDate(endDate))

  logger.info(`[INGEST:OA] Processed ${datesProcessed} dates, ingested ${policiesIngested} policies, skipped ${debatesSkipped}`)
}
