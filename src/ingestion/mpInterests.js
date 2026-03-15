import http, { sleep } from '../lib/http.js'
import * as cheerio from 'cheerio'
import { classifyIndustry } from '../lib/industryMap.js'
import { setState } from '../lib/stateStore.js'
import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

const BASE_URL = 'https://www.aph.gov.au'
const REGISTER_URL = `${BASE_URL}/Senators_and_Members/Members/Register`

/**
 * Map section headings to interest types.
 */
function classifyInterestType(heading) {
  const lower = heading.toLowerCase()
  if (lower.includes('share') || lower.includes('investment') || lower.includes('financ')) return 'shares'
  if (lower.includes('real estate') || lower.includes('property') || lower.includes('land')) return 'property'
  if (lower.includes('director') || lower.includes('board') || lower.includes('office')) return 'board'
  if (lower.includes('gift') || lower.includes('hospitality') || lower.includes('travel')) return 'gift'
  if (lower.includes('trust') || lower.includes('partnership') || lower.includes('business')) return 'business'
  if (lower.includes('membership') || lower.includes('organisation')) return 'membership'
  return 'other'
}

/**
 * Extract the first company/entity name from a description.
 * Looks for patterns like "shares in X", "director of Y", etc.
 */
function extractCompanyName(text) {
  if (!text) return null

  // Common patterns in interest declarations
  const patterns = [
    /(?:shares?\s+in|director\s+of|member\s+of|employed\s+by|interest\s+in)\s+([A-Z][A-Za-z\s&.,'()]+(?:Ltd|Pty|Inc|Corp|Group|Holdings|Trust|Fund|Bank|Australia)?)/i,
    /([A-Z][A-Z][A-Za-z\s&.,']+(?:Ltd|Pty|Inc|Corp|Group|Holdings|Trust|Fund|Bank))/,
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match?.[1]) {
      return match[1].trim().slice(0, 200)
    }
  }

  return null
}

/**
 * Fetch the register index page and get links to individual member declarations.
 */
async function fetchMemberLinks() {
  logger.info('[INGEST:MPI] Fetching register index page')

  const { data: html } = await http.get(REGISTER_URL, { timeout: 30000 })
  const $ = cheerio.load(html)
  const links = []

  // Look for links to individual member pages
  $('a[href*="Register"]').each((_, el) => {
    const href = $(el).attr('href')
    const text = $(el).text().trim()

    if (href && text && !href.includes('Previous') && !href.includes('#') && text.length > 3) {
      const fullUrl = href.startsWith('http') ? href : `${BASE_URL}${href}`
      links.push({ url: fullUrl, name: text })
    }
  })

  // Also look for links that point to member-specific pages
  $('a[href*="/Members/"], a[href*="/Senators/"]').each((_, el) => {
    const href = $(el).attr('href')
    const text = $(el).text().trim()

    if (href && text && href.includes('Register') && text.length > 3) {
      const fullUrl = href.startsWith('http') ? href : `${BASE_URL}${href}`
      if (!links.some(l => l.url === fullUrl)) {
        links.push({ url: fullUrl, name: text })
      }
    }
  })

  logger.info(`[INGEST:MPI] Found ${links.length} member declaration links`)
  return links
}

/**
 * Parse a member's individual interest declaration page.
 */
async function parseInterestPage(url, memberName) {
  let html
  try {
    const { data } = await http.get(url, { timeout: 15000 })
    html = data
  } catch (err) {
    logger.warn(`[INGEST:MPI] Failed to fetch ${memberName}: ${err.message}`)
    return []
  }

  const $ = cheerio.load(html)
  const interests = []

  // Interest declarations are typically under headings (h2/h3/h4)
  // with list items or paragraphs below each heading
  const sections = $('h2, h3, h4')

  sections.each((_, heading) => {
    const headingText = $(heading).text().trim()
    const interestType = classifyInterestType(headingText)

    // Get content between this heading and the next
    let next = $(heading).next()
    while (next.length && !next.is('h2, h3, h4')) {
      // Look for list items
      next.find('li').each((_, li) => {
        const text = $(li).text().trim()
        if (text && text.length > 5 && !text.toLowerCase().includes('nil')) {
          interests.push({
            interest_type: interestType,
            description: text.slice(0, 1000),
            company_name: extractCompanyName(text),
            industry: classifyIndustry(text),
          })
        }
      })

      // Also check direct text content (some pages use <p> instead of <li>)
      if (next.is('p, div') && !next.find('li').length) {
        const text = next.text().trim()
        if (text && text.length > 10 && !text.toLowerCase().includes('nil')) {
          interests.push({
            interest_type: interestType,
            description: text.slice(0, 1000),
            company_name: extractCompanyName(text),
            industry: classifyIndustry(text),
          })
        }
      }

      next = next.next()
    }
  })

  return interests
}

/**
 * Main MP interests ingestion function.
 */
export async function ingestMPInterests() {
  logger.info('[INGEST:MPI] Starting MP interests ingestion')

  const memberLinks = await fetchMemberLinks()

  if (memberLinks.length === 0) {
    logger.warn('[INGEST:MPI] No member declaration links found — page structure may have changed')
    return
  }

  let membersScraped = 0
  let interestsInserted = 0

  for (const { url, name } of memberLinks) {
    // Try to find this member in our members table
    const member = await db.findMemberByName(name)
    if (!member) {
      logger.debug(`[INGEST:MPI] No member match for "${name}" — skipping`)
      continue
    }

    const interests = await parseInterestPage(url, name)

    if (interests.length > 0) {
      const interestRecords = interests.map(i => ({
        member_id: member.id,
        interest_type: i.interest_type,
        description: i.description,
        company_name: i.company_name,
        industry: i.industry,
        declared_date: new Date().toISOString().split('T')[0],
      }))

      await db.replaceInterests(member.id, interestRecords)
      interestsInserted += interestRecords.length
    }

    membersScraped++
    await sleep(1000) // 1 request per second — APH is a government server
  }

  await setState('last_mpinterests_run', new Date().toISOString())

  logger.info(`[INGEST:MPI] Scraped ${membersScraped} members, inserted ${interestsInserted} interests`)
}
