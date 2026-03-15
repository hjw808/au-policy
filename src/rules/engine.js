import * as db from '../db/queries.js'
import donationCorrelation from './donationCorrelation.js'
import conflictOfInterest from './conflictOfInterest.js'
import taxAvoidanceEnablement from './taxAvoidanceEnablement.js'
import resourceCapture from './resourceCapture.js'
import logger from '../lib/logger.js'

/**
 * Run all rules against all pending policies.
 * Updates each policy's flag_score, flag_reasons, and status.
 */
export async function runRulesEngine() {
  const pending = await db.getPendingPolicies()

  if (pending.length === 0) {
    logger.info('[RULES] No pending policies to process')
    return
  }

  logger.info(`[RULES] Processing ${pending.length} pending policies`)

  let flagged = 0
  let skipped = 0

  for (const policy of pending) {
    try {
      const results = await Promise.all([
        donationCorrelation(policy),
        conflictOfInterest(policy),
        taxAvoidanceEnablement(policy),
        resourceCapture(policy),
      ])

      // Check if resource_capture + donation_correlation both triggered → bonus
      const rcResult = results.find(r => r.rule === 'resource_capture')
      const dcResult = results.find(r => r.rule === 'donation_correlation')
      if (rcResult?.triggered && dcResult?.triggered) {
        rcResult.score += 2
        rcResult.detail += ' (amplified: donation correlation also present)'
      }

      const totalScore = results.reduce((sum, r) => sum + r.score, 0)
      const reasons = results
        .filter(r => r.triggered)
        .map(r => ({
          rule: r.rule,
          score: r.score,
          detail: r.detail,
        }))

      const newStatus = totalScore >= 3 ? 'flagged' : 'skipped'
      await db.updatePolicyFlags(policy.id, totalScore, reasons, newStatus)

      if (newStatus === 'flagged') {
        flagged++
        logger.debug(`[RULES] FLAGGED (score: ${totalScore}): ${policy.title?.slice(0, 80)}`)
      } else {
        skipped++
      }
    } catch (err) {
      logger.warn(`[RULES] Error processing policy ${policy.id}: ${err.message}`)
    }
  }

  logger.info(`[RULES] Flagged: ${flagged} | Skipped: ${skipped} | Total processed: ${pending.length}`)
}
