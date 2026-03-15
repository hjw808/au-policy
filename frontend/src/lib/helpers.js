/**
 * Map corruption signal strength to display properties.
 */
export function signalConfig(strength) {
  const map = {
    strong:   { color: '#ef4444', bg: 'bg-red-900/30',    border: 'border-red-500',    label: 'Strong Signal',   dot: 'bg-red-500' },
    moderate: { color: '#f97316', bg: 'bg-orange-900/30', border: 'border-orange-500', label: 'Moderate Signal', dot: 'bg-orange-500' },
    weak:     { color: '#eab308', bg: 'bg-yellow-900/30', border: 'border-yellow-500', label: 'Weak Signal',     dot: 'bg-yellow-500' },
    none:     { color: '#6b7280', bg: 'bg-gray-900/30',   border: 'border-gray-600',   label: 'No Signal',       dot: 'bg-gray-500' },
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
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

/**
 * Category display labels.
 */
export const categoryLabels = {
  mining: 'Mining & Resources',
  oil_gas: 'Oil & Gas',
  tax: 'Tax Policy',
  superannuation: 'Superannuation',
  property: 'Property & Housing',
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
