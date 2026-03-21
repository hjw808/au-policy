/**
 * Category metadata — Wire design. No emojis, no gradients.
 * Just text colors and labels.
 *
 * Includes normalization map to consolidate 50+ raw category slugs
 * from analysis files into ~18 display categories.
 */

const meta = {
  mining:               { label: 'Mining & Resources',      colorClass: 'text-amber-700' },
  oil_gas:              { label: 'Energy & Gas',             colorClass: 'text-red-700' },
  tax:                  { label: 'Taxation',                 colorClass: 'text-blue-700' },
  superannuation:       { label: 'Superannuation',           colorClass: 'text-indigo-700' },
  property:             { label: 'Housing & Property',       colorClass: 'text-violet-700' },
  healthcare:           { label: 'Healthcare',               colorClass: 'text-emerald-700' },
  defence:              { label: 'Defence',                  colorClass: 'text-slate-600' },
  privatisation:        { label: 'Privatisation',            colorClass: 'text-orange-700' },
  resources:            { label: 'Natural Resources',        colorClass: 'text-lime-700' },
  trade:                { label: 'Trade & Tariffs',          colorClass: 'text-cyan-700' },
  subsidy:              { label: 'Subsidies',                colorClass: 'text-pink-700' },
  infrastructure:       { label: 'Infrastructure',           colorClass: 'text-stone-600' },
  financial_regulation: { label: 'Finance & Banking',        colorClass: 'text-teal-700' },
  education:            { label: 'Education',                colorClass: 'text-sky-700' },
  immigration:          { label: 'Immigration & Security',   colorClass: 'text-rose-700' },
  industrial_relations: { label: 'Industrial Relations',     colorClass: 'text-yellow-700' },
  agriculture:          { label: 'Agriculture',              colorClass: 'text-green-700' },
  gambling:             { label: 'Gambling',                 colorClass: 'text-fuchsia-700' },
  media:                { label: 'Media & Communications',   colorClass: 'text-purple-700' },
  indigenous:           { label: 'Indigenous Affairs',        colorClass: 'text-amber-600' },
  environment:          { label: 'Environment',              colorClass: 'text-emerald-600' },
  general:              { label: 'General Policy',           colorClass: 'text-gray-500' },
}

/**
 * Maps raw category slugs from analysis files to canonical display categories.
 * Handles inconsistent naming (underscores vs hyphens, compound categories, etc.)
 */
const normalizeMap = {
  // Direct matches (already canonical)
  mining: 'mining',
  oil_gas: 'oil_gas',
  tax: 'tax',
  superannuation: 'superannuation',
  property: 'property',
  healthcare: 'healthcare',
  defence: 'defence',
  privatisation: 'privatisation',
  resources: 'resources',
  trade: 'trade',
  subsidy: 'subsidy',
  infrastructure: 'infrastructure',
  financial_regulation: 'financial_regulation',
  education: 'education',
  immigration: 'immigration',
  industrial_relations: 'industrial_relations',
  agriculture: 'agriculture',
  gambling: 'gambling',
  media: 'media',
  general: 'general',

  // Variant slugs → canonical
  'energy-utilities': 'oil_gas',
  'financial-regulation': 'financial_regulation',
  'finance': 'financial_regulation',
  'competition-law': 'financial_regulation',
  'foreign-investment': 'financial_regulation',
  'economic': 'financial_regulation',
  'industrial-relations': 'industrial_relations',
  'defence-foreign-policy': 'defence',
  'immigration-security': 'immigration',
  'immigration-politics': 'immigration',
  'security-legislation': 'immigration',
  'health-regulation': 'healthcare',
  'healthcare-regulation': 'healthcare',
  'trade-healthcare': 'healthcare',
  'property-tax': 'property',
  'tax-property': 'tax',
  'tax-small-business': 'tax',
  'tax-administration': 'tax',
  'innovation-tax': 'tax',
  'infrastructure-events': 'infrastructure',
  'resources-environment': 'resources',
  'agriculture-fisheries': 'agriculture',
  'media-regulation': 'media',
  'indigenous-affairs': 'indigenous',
  'indigenous-land': 'indigenous',
  'retirement-superannuation': 'superannuation',
  'trade-tariffs': 'trade',
  'trade-finance': 'trade',
  'innovation-education': 'education',
  'electoral-politics': 'general',
  'social-policy': 'general',
  'environment': 'environment',
}

/**
 * Normalize a raw category slug to its canonical display category.
 */
export function normalizeCategory(slug) {
  if (!slug) return 'general'
  return normalizeMap[slug] || 'general'
}

export function getCategoryMeta(slug) {
  const canonical = normalizeCategory(slug)
  return meta[canonical] || meta.general
}

/**
 * Get the canonical slug for routing/grouping purposes.
 */
export function getCanonicalSlug(slug) {
  return normalizeCategory(slug)
}

/**
 * Get all defined category entries (for listing pages).
 */
export function getAllCategories() {
  return Object.entries(meta)
    .filter(([slug]) => slug !== 'general')
    .map(([slug, m]) => ({ slug, ...m }))
}

/**
 * Get all raw slugs that map to a given canonical category.
 * Useful for database queries.
 */
export function getRawSlugsForCategory(canonical) {
  return Object.entries(normalizeMap)
    .filter(([, target]) => target === canonical)
    .map(([raw]) => raw)
}

export default meta
