import http, { sleep } from '../lib/http.js'
import { parse } from 'csv-parse/sync'
import * as cheerio from 'cheerio'
import { classifyIndustry } from '../lib/industryMap.js'
import { getState, setState } from '../lib/stateStore.js'
import * as db from '../db/queries.js'
import logger from '../lib/logger.js'
import crypto from 'crypto'

/**
 * Infer recipient party from a recipient name string.
 */
function inferParty(recipientName) {
  if (!recipientName) return 'Unknown'
  const lower = recipientName.toLowerCase()
  if (lower.includes('liberal')) return 'Liberal'
  if (lower.includes('labor') || lower.includes('labour') || lower.includes('alp')) return 'Labor'
  if (lower.includes('national')) return 'Nationals'
  if (lower.includes('green')) return 'Greens'
  if (lower.includes('one nation') || lower.includes('hanson')) return 'One Nation'
  if (lower.includes('united australia') || lower.includes('palmer')) return 'United Australia'
  if (lower.includes('democrat')) return 'Democrats'
  if (lower.includes('independent')) return 'Independent'
  return 'Other'
}

/**
 * Generate financial year strings from a start year to current.
 * e.g., 2015 → ['2015-16', '2016-17', ...]
 */
function generateFinancialYears(startYear) {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let y = startYear; y <= currentYear; y++) {
    years.push(`${y}-${String(y + 1).slice(2)}`)
  }
  return years
}

/**
 * Try to download donation data from AEC Transparency site.
 * First tries direct download endpoint, then falls back to scraping links.
 */
async function fetchDonationCSV(year) {
  // Try the direct download endpoint first
  const directUrls = [
    `https://transparency.aec.gov.au/Download/DownloadAnnualDonations?financialYear=${year}`,
    `https://transparency.aec.gov.au/AnnualDonation/DownloadCsv?financialYear=${year}`,
  ]

  for (const url of directUrls) {
    try {
      const { data } = await http.get(url, {
        responseType: 'text',
        timeout: 15000,
      })
      // Check it's actually CSV (not an HTML error page)
      if (data && !data.trim().startsWith('<!') && !data.trim().startsWith('<html')) {
        return data
      }
    } catch {
      // Try next URL
    }
  }

  // Fallback: try scraping the page for download links
  try {
    const { data: html } = await http.get('https://transparency.aec.gov.au/AnnualDonation', {
      timeout: 15000,
    })
    const $ = cheerio.load(html)
    const downloadLinks = []

    $('a[href*="Download"], a[href*="download"], a[href*="csv"], a[href*="CSV"]').each((_, el) => {
      const href = $(el).attr('href')
      if (href) downloadLinks.push(href)
    })

    for (const link of downloadLinks) {
      const fullUrl = link.startsWith('http') ? link : `https://transparency.aec.gov.au${link}`
      try {
        const { data } = await http.get(fullUrl, { responseType: 'text', timeout: 15000 })
        if (data && !data.trim().startsWith('<!')) return data
      } catch {
        // Try next
      }
    }
  } catch {
    // Page scraping failed
  }

  return null
}

/**
 * Parse a CSV string with flexible column detection.
 */
function parseDonationCSV(csvText, year) {
  let records
  try {
    records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
      trim: true,
    })
  } catch (err) {
    logger.warn(`[INGEST:AEC] CSV parse error for ${year}: ${err.message}`)
    return []
  }

  if (!records.length) return []

  // Detect column format by header names
  const headers = Object.keys(records[0]).map(h => h.toLowerCase())

  const donorCol = headers.find(h => h.includes('donor')) || headers[0]
  const recipientCol = headers.find(h => h.includes('recipient') || h.includes('party')) || headers[1]
  const amountCol = headers.find(h => h.includes('amount') || h.includes('value')) || headers[2]

  return records.map((row, idx) => {
    const donorName = row[donorCol] || Object.values(row)[0] || ''
    const recipientName = row[recipientCol] || Object.values(row)[1] || ''
    const rawAmount = row[amountCol] || Object.values(row)[2] || '0'

    const amount = parseFloat(String(rawAmount).replace(/[$,]/g, '')) || 0

    // Generate a stable external_id
    const hash = crypto.createHash('md5')
      .update(`${donorName}|${recipientName}|${amount}|${year}|${idx}`)
      .digest('hex')
      .slice(0, 16)

    return {
      external_id: `aec-${year}-${hash}`,
      donor_name: donorName.slice(0, 500),
      donor_industry: classifyIndustry(donorName),
      recipient_party: inferParty(recipientName),
      amount_aud: amount,
      financial_year: year,
      source_url: 'https://transparency.aec.gov.au/',
    }
  }).filter(d => d.donor_name && d.amount_aud > 0)
}

/**
 * Main AEC donation ingestion function.
 */
export async function ingestAECDonations() {
  logger.info('[INGEST:AEC] Starting AEC donation ingestion')

  const lastYear = await getState('last_aec_year') || '2015-16'
  const startYear = parseInt(lastYear.split('-')[0]) + 1
  const allYears = generateFinancialYears(startYear)

  if (allYears.length === 0) {
    logger.info('[INGEST:AEC] Already up to date')
    return
  }

  let totalIngested = 0
  let yearsProcessed = 0
  let lastSuccessfulYear = lastYear

  for (const year of allYears) {
    logger.info(`[INGEST:AEC] Fetching donations for ${year}`)

    const csvText = await fetchDonationCSV(year)
    if (!csvText) {
      logger.info(`[INGEST:AEC] No data available for ${year} — may not be published yet`)
      continue
    }

    const donations = parseDonationCSV(csvText, year)
    logger.info(`[INGEST:AEC] Parsed ${donations.length} donation records for ${year}`)

    for (const donation of donations) {
      await db.upsertDonation(donation)
    }

    totalIngested += donations.length
    yearsProcessed++
    lastSuccessfulYear = year

    await sleep(1000) // Be respectful to AEC server
  }

  if (yearsProcessed > 0) {
    await setState('last_aec_year', lastSuccessfulYear)
  }

  logger.info(`[INGEST:AEC] Processed ${yearsProcessed} years, ingested ${totalIngested} donations`)
}
