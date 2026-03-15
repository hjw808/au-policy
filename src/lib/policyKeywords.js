export const policyKeywords = [
  'tax', 'royalt', 'concession', 'exemption', 'mining', 'resources',
  'superannuation', 'negative gearing', 'capital gains', 'corporate',
  'donation', 'lobbying', 'export', 'petroleum', 'gas', 'coal',
  'pharmaceutical', 'defence contract', 'privatis', 'levy', 'tariff',
  'subsid', 'rebate', 'deduction', 'write-off', 'franking',
  'dividend imputation', 'trust', 'offshore', 'transfer pricing',
  'water rights', 'spectrum', 'licence', 'procurement'
]

/**
 * Returns array of matching keywords found in the text.
 * Empty array = no policy relevance.
 */
export function matchKeywords(text) {
  if (!text) return []
  const lower = text.toLowerCase()
  return policyKeywords.filter(k => lower.includes(k))
}

/**
 * Infer a policy category from matched keywords.
 */
export function inferCategory(matchedKeywords) {
  const kws = matchedKeywords.map(k => k.toLowerCase())

  if (kws.some(k => ['mining', 'royalt', 'resources', 'coal', 'iron ore'].includes(k))) return 'mining'
  if (kws.some(k => ['petroleum', 'gas', 'lng', 'oil'].includes(k))) return 'oil_gas'
  if (kws.some(k => ['superannuation', 'franking', 'dividend imputation'].includes(k))) return 'superannuation'
  if (kws.some(k => ['negative gearing', 'capital gains', 'property'].includes(k))) return 'property'
  if (kws.some(k => ['pharmaceutical', 'health'].includes(k))) return 'healthcare'
  if (kws.some(k => ['defence contract', 'military'].includes(k))) return 'defence'
  if (kws.some(k => ['privatis'].includes(k))) return 'privatisation'
  if (kws.some(k => ['water rights', 'spectrum', 'licence'].includes(k))) return 'resources'
  if (kws.some(k => ['tax', 'concession', 'exemption', 'deduction', 'write-off', 'corporate', 'trust', 'offshore', 'transfer pricing'].includes(k))) return 'tax'
  if (kws.some(k => ['levy', 'tariff', 'export'].includes(k))) return 'trade'
  if (kws.some(k => ['subsid', 'rebate', 'procurement'].includes(k))) return 'subsidy'

  return 'general'
}
