import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

/**
 * Map a year to the likely governing party.
 * Approximate based on Australian federal election history.
 */
function governingParty(year) {
  if (year >= 2022) return 'Labor'
  if (year >= 2013) return 'Liberal'
  if (year >= 2007) return 'Labor'
  if (year >= 1996) return 'Liberal'
  if (year >= 1983) return 'Labor'
  return 'Liberal'
}

/**
 * Rule 1: Donation Correlation
 *
 * Checks if there were significant donations from the beneficiary industry
 * to the governing party in the 3 years before this policy was passed.
 */
export default async function donationCorrelation(policy) {
  const result = {
    rule: 'donation_correlation',
    triggered: false,
    score: 0,
    detail: '',
  }

  if (!policy.category || !policy.date) return result

  const policyYear = new Date(policy.date).getFullYear()
  const party = governingParty(policyYear)

  const donations = await db.getDonationsByIndustryAndParty(
    policy.category,
    party,
    policyYear
  )

  if (donations.length === 0) return result

  // Calculate totals
  const totalAmount = donations.reduce((sum, d) => sum + (d.amount_aud || 0), 0)
  const distinctDonors = new Set(donations.map(d => d.donor_name)).size

  // Scoring
  let score = 2 // Base: any matching donation found

  if (totalAmount > 100000) score += 1
  if (totalAmount > 500000) score += 2
  if (distinctDonors >= 3) score += 1

  const yearRange = `${policyYear - 3}-${policyYear}`
  const formattedAmount = totalAmount >= 1000000
    ? `$${(totalAmount / 1000000).toFixed(1)}M`
    : `$${(totalAmount / 1000).toFixed(0)}K`

  result.triggered = true
  result.score = score
  result.detail = `${donations.length} donations totalling ${formattedAmount} from ${policy.category} industry to ${party} Party in ${yearRange} (${distinctDonors} distinct donors)`

  return result
}
