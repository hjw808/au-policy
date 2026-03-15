import http, { sleep } from '../lib/http.js'
import { parse } from 'csv-parse/sync'
import { classifyIndustry } from '../lib/industryMap.js'
import { getState, setState } from '../lib/stateStore.js'
import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

/**
 * Fetch the data.gov.au dataset metadata to find the latest CSV resource URL.
 */
async function findLatestCSVUrl() {
  try {
    const { data } = await http.get(
      'https://data.gov.au/api/3/action/package_show',
      { params: { id: 'corporate-transparency' } }
    )

    if (!data?.result?.resources?.length) {
      logger.warn('[INGEST:ATO] No resources found in dataset')
      return null
    }

    // Find CSV resources, sorted by most recent
    const csvResources = data.result.resources
      .filter(r => r.format?.toLowerCase() === 'csv' || r.url?.endsWith('.csv'))
      .sort((a, b) => new Date(b.created || 0) - new Date(a.created || 0))

    if (csvResources.length === 0) {
      // Try any downloadable resource
      const xlsResources = data.result.resources
        .filter(r => r.url && (r.format?.toLowerCase().includes('xls') || r.format?.toLowerCase().includes('csv')))

      if (xlsResources.length > 0) return xlsResources[0].url
      return null
    }

    return csvResources[0].url
  } catch (err) {
    logger.warn(`[INGEST:ATO] Failed to query data.gov.au: ${err.message}`)
    return null
  }
}

/**
 * Parse the ATO corporate tax transparency CSV.
 */
function parseATOCsv(csvText) {
  let records
  try {
    records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
      trim: true,
    })
  } catch (err) {
    logger.warn(`[INGEST:ATO] CSV parse error: ${err.message}`)
    return []
  }

  if (!records.length) return []

  // Detect columns — ATO CSVs vary in naming
  const headers = Object.keys(records[0])
  const findCol = (patterns) => headers.find(h => {
    const lower = h.toLowerCase()
    return patterns.some(p => lower.includes(p))
  })

  const nameCol = findCol(['entity', 'name', 'company'])
  const incomeCol = findCol(['total income', 'income'])
  const taxCol = findCol(['tax payable', 'tax paid', 'income tax'])
  const yearCol = findCol(['year', 'period', 'financial'])

  return records.map(row => {
    const name = row[nameCol] || ''
    const totalIncome = parseFloat(String(row[incomeCol] || '0').replace(/[$,]/g, '')) || 0
    const taxPaid = parseFloat(String(row[taxCol] || '0').replace(/[$,]/g, '')) || 0
    const year = row[yearCol] || ''

    // Calculate effective tax rate
    const effectiveTaxRate = totalIncome > 0 ? taxPaid / totalIncome : 0

    return {
      name: name.slice(0, 500),
      industry: classifyIndustry(name),
      total_income_aud: totalIncome,
      tax_paid_aud: taxPaid,
      effective_tax_rate: Math.round(effectiveTaxRate * 10000) / 10000, // 4 decimal places
      financial_year: year,
    }
  }).filter(c => c.name && c.total_income_aud > 0)
}

/**
 * Main ATO tax data ingestion function.
 */
export async function ingestATOTax() {
  logger.info('[INGEST:ATO] Starting ATO corporate tax ingestion')

  const csvUrl = await findLatestCSVUrl()
  if (!csvUrl) {
    logger.warn('[INGEST:ATO] Could not find CSV download URL — skipping')
    return
  }

  logger.info(`[INGEST:ATO] Downloading from: ${csvUrl}`)

  let csvText
  try {
    const response = await http.get(csvUrl, {
      responseType: 'text',
      timeout: 60000, // Large file, give it a minute
    })
    csvText = response.data
  } catch (err) {
    logger.error(`[INGEST:ATO] Download failed: ${err.message}`)
    return
  }

  const companies = parseATOCsv(csvText)
  logger.info(`[INGEST:ATO] Parsed ${companies.length} company records`)

  let ingested = 0
  for (const company of companies) {
    await db.upsertCompany(company)
    ingested++
  }

  // Track most recent year found in data
  const years = companies.map(c => c.financial_year).filter(Boolean)
  const latestYear = years.sort().pop()
  if (latestYear) {
    await setState('last_ato_year', latestYear)
  }

  logger.info(`[INGEST:ATO] Ingested ${ingested} company records, latest year: ${latestYear}`)
}
