import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

/**
 * Rule 3: Tax Avoidance Enablement
 *
 * Checks if the beneficiary industry contains companies paying near-zero
 * effective tax rates, and whether any of those companies are also donors.
 */
export default async function taxAvoidanceEnablement(policy) {
  const result = {
    rule: 'tax_avoidance_enablement',
    triggered: false,
    score: 0,
    detail: '',
  }

  if (!policy.category || !policy.date) return result

  const policyYear = new Date(policy.date).getFullYear()

  const zeroTaxCompanies = await db.getZeroTaxCompanies(policy.category, policyYear)

  if (zeroTaxCompanies.length === 0) return result

  // Scoring
  let score = 2 // Base: any zero-tax companies in beneficiary industry
  if (zeroTaxCompanies.length >= 3) score += 1

  // Check if any zero-tax companies are also donors
  const companyNames = zeroTaxCompanies.map(c => c.name)
  const donorOverlap = await db.checkZeroTaxDonors(companyNames)

  if (donorOverlap.length > 0) score += 2

  // Build detail
  const companyList = zeroTaxCompanies.slice(0, 3).map(c =>
    `${c.name} (${(c.effective_tax_rate * 100).toFixed(1)}% on $${(c.total_income_aud / 1000000).toFixed(0)}M income)`
  )

  let detail = `${zeroTaxCompanies.length} companies in ${policy.category} sector paid <5% tax`
  if (donorOverlap.length > 0) {
    detail += `, ${donorOverlap.length} also appear as political donors (${donorOverlap.slice(0, 3).join(', ')})`
  }

  result.triggered = true
  result.score = score
  result.detail = detail

  return result
}
