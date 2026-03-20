/**
 * Signal strength display config — Wire design (light theme).
 */
export function signalConfig(strength) {
  const map = {
    strong:   { color: '#dc2626', label: 'Strong',   dotClass: 'bg-red-600' },
    moderate: { color: '#d97706', label: 'Moderate',  dotClass: 'bg-amber-600' },
    weak:     { color: '#9ca3af', label: 'Weak',      dotClass: 'bg-gray-400' },
    none:     { color: '#d4d4d4', label: 'None',      dotClass: 'bg-gray-300' },
  }
  return map[strength] || map.none
}

/**
 * Format a currency amount.
 */
export function formatCurrency(amount) {
  if (!amount && amount !== 0) return 'N/A'
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`
  return `$${amount.toFixed(0)}`
}

/**
 * Format a date string for display.
 */
export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-AU', {
    year: 'numeric', month: 'short'
  })
}

/**
 * Format date with day included.
 */
export function formatDateFull(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-AU', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

/**
 * Category display labels.
 */
export const categoryLabels = {
  mining: 'Mining & Resources',
  oil_gas: 'Energy & Gas',
  tax: 'Taxation',
  superannuation: 'Superannuation',
  property: 'Housing & Property',
  healthcare: 'Healthcare',
  defence: 'Defence',
  privatisation: 'Privatisation',
  resources: 'Natural Resources',
  trade: 'Trade & Tariffs',
  subsidy: 'Subsidies',
  general: 'General Policy',
}

/**
 * Get category label.
 */
export function getCategoryLabel(cat) {
  return categoryLabels[cat] || cat || 'Unknown'
}

/**
 * Category text colors for Wire design (muted, specific per category).
 */
export const categoryColors = {
  mining: 'text-amber-700',
  oil_gas: 'text-red-700',
  tax: 'text-blue-700',
  superannuation: 'text-indigo-700',
  property: 'text-violet-700',
  healthcare: 'text-emerald-700',
  defence: 'text-slate-600',
  privatisation: 'text-orange-700',
  resources: 'text-lime-700',
  trade: 'text-cyan-700',
  subsidy: 'text-pink-700',
  general: 'text-gray-500',
}

export function getCategoryColor(cat) {
  return categoryColors[cat] || categoryColors.general
}
