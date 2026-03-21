import meta, { getCategoryMeta } from '@/lib/categoryMeta'

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
 * Category labels map — includes all canonical categories.
 * Backward-compatible export for components that use categoryLabels directly.
 */
export const categoryLabels = Object.fromEntries(
  Object.entries(meta).map(([slug, m]) => [slug, m.label])
)

/**
 * Get category label — uses normalization from categoryMeta.
 */
export function getCategoryLabel(cat) {
  return getCategoryMeta(cat).label
}

/**
 * Get category text color — uses normalization from categoryMeta.
 */
export function getCategoryColor(cat) {
  return getCategoryMeta(cat).colorClass
}
