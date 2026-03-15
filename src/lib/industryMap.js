export const industryMap = [
  { keywords: ['mining', 'resources', 'coal', 'iron ore', 'minerals', 'bhp', 'rio tinto', 'fortescue'],   industry: 'mining' },
  { keywords: ['petroleum', 'gas', 'lng', 'oil', 'woodside', 'santos', 'chevron', 'shell'],               industry: 'oil_gas' },
  { keywords: ['bank', 'financ', 'invest', 'capital', 'insurance', 'macquarie', 'westpac', 'anz', 'cba', 'commonwealth bank'], industry: 'financial' },
  { keywords: ['property', 'real estate', 'developer', 'construction', 'lendlease', 'stockland'],         industry: 'property' },
  { keywords: ['pharma', 'health', 'medical', 'hospital', 'ramsay', 'csl'],                                industry: 'healthcare' },
  { keywords: ['media', 'news', 'broadcast', 'publish', 'nine', 'seven', 'murdoch', 'foxtel'],            industry: 'media' },
  { keywords: ['union', 'workers', 'labour', 'employees', 'cfmeu', 'actu', 'asu'],                        industry: 'union' },
  { keywords: ['agriculture', 'farm', 'pastoral', 'wool', 'grain', 'cattle', 'grazier'],                  industry: 'agriculture' },
  { keywords: ['defence', 'weapons', 'military', 'aerospace', 'bae', 'thales', 'raytheon'],               industry: 'defence' },
  { keywords: ['tech', 'software', 'digital', 'telecom', 'telstra', 'optus'],                              industry: 'technology' },
  { keywords: ['gambling', 'casino', 'betting', 'tabcorp', 'crown', 'star entertainment'],                 industry: 'gambling' },
  { keywords: ['retail', 'woolworths', 'coles', 'wesfarmers', 'bunnings'],                                 industry: 'retail' },
  { keywords: ['energy', 'electricity', 'power', 'agl', 'origin energy', 'renewable'],                    industry: 'energy' },
]

/**
 * Classify a text string into an industry bucket.
 * Returns the first matching industry or 'other'.
 */
export function classifyIndustry(text) {
  if (!text) return 'other'
  const lower = text.toLowerCase()
  for (const bucket of industryMap) {
    if (bucket.keywords.some(k => lower.includes(k))) return bucket.industry
  }
  return 'other'
}
