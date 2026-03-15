import logger from '../lib/logger.js'

const RESOURCE_CATEGORIES = ['mining', 'oil_gas', 'agriculture', 'resources']
const CAPTURE_KEYWORDS = ['royalt', 'export', 'concession', 'levy']

/**
 * Rule 4: Resource Capture
 *
 * Triggers when a policy involves natural resources AND contains
 * keywords that suggest royalty/export/concession changes.
 * This is the classic "public resources, private profits" pattern.
 */
export default async function resourceCapture(policy) {
  const result = {
    rule: 'resource_capture',
    triggered: false,
    score: 0,
    detail: '',
  }

  if (!policy.category || !policy.matched_keywords) return result

  // Only triggers for resource-related categories
  if (!RESOURCE_CATEGORIES.includes(policy.category)) return result

  // Must contain resource capture keywords
  const keywords = Array.isArray(policy.matched_keywords)
    ? policy.matched_keywords
    : []

  const captureKeywords = keywords.filter(k =>
    CAPTURE_KEYWORDS.some(ck => k.toLowerCase().includes(ck))
  )

  if (captureKeywords.length === 0) return result

  // Scoring
  let score = 4 // Base: resource policy with capture keywords

  // Note: the engine will check if donation_correlation also triggered,
  // and add +2 if so. We just flag the base pattern here.

  result.triggered = true
  result.score = score
  result.detail = `Resources policy (${policy.category}) with ${captureKeywords.join(', ')} keywords — classic resource capture pattern`

  return result
}
