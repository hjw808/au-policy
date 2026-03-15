import * as db from '../db/queries.js'
import logger from '../lib/logger.js'

/**
 * Rule 2: Conflict of Interest
 *
 * Checks if MPs who voted yes on this policy have declared interests
 * in the beneficiary industry sector.
 */
export default async function conflictOfInterest(policy) {
  const result = {
    rule: 'conflict_of_interest',
    triggered: false,
    score: 0,
    detail: '',
  }

  if (!policy.category || !policy.id) return result

  const conflicted = await db.getConflictedVoters(policy.id, policy.category)

  if (conflicted.length === 0) return result

  // Scoring
  let score = 3 // Base: at least 1 MP with conflict
  if (conflicted.length >= 3) score = 5

  // Check for ministers
  const ministers = conflicted.filter(m =>
    m.role && m.role.toLowerCase().includes('minister')
  )
  if (ministers.length > 0) score += 4

  // Build detail string
  const names = conflicted.slice(0, 5).map(m => {
    const role = m.role ? ` (${m.role})` : ''
    const interest = m.member_interests?.[0]
    const interestDesc = interest
      ? ` — holds ${interest.interest_type} in ${interest.company_name || interest.industry}`
      : ''
    return `${m.name}${role}${interestDesc}`
  })

  result.triggered = true
  result.score = score
  result.detail = `${conflicted.length} yes-voting MP(s) hold interests in ${policy.category} sector: ${names.join('; ')}`

  return result
}
