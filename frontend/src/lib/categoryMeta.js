/**
 * Category metadata — icons, colors, and labels for each policy category.
 */
const meta = {
  mining:          { icon: '\u26CF',  label: 'Mining & Resources',  color: '#f59e0b', bg: 'from-amber-950/40 to-amber-900/10',  border: 'border-amber-800/40' },
  oil_gas:         { icon: '\u26A1',  label: 'Energy & Gas',        color: '#ef4444', bg: 'from-red-950/40 to-red-900/10',      border: 'border-red-800/40' },
  tax:             { icon: '\uD83D\uDCB0', label: 'Taxation',       color: '#3b82f6', bg: 'from-blue-950/40 to-blue-900/10',    border: 'border-blue-800/40' },
  superannuation:  { icon: '\uD83C\uDFE6', label: 'Superannuation', color: '#6366f1', bg: 'from-indigo-950/40 to-indigo-900/10', border: 'border-indigo-800/40' },
  property:        { icon: '\uD83C\uDFE0', label: 'Housing & Property', color: '#8b5cf6', bg: 'from-violet-950/40 to-violet-900/10', border: 'border-violet-800/40' },
  healthcare:      { icon: '\uD83C\uDFE5', label: 'Healthcare',     color: '#10b981', bg: 'from-emerald-950/40 to-emerald-900/10', border: 'border-emerald-800/40' },
  defence:         { icon: '\uD83D\uDEE1', label: 'Defence',        color: '#64748b', bg: 'from-slate-950/40 to-slate-900/10',  border: 'border-slate-700/40' },
  privatisation:   { icon: '\uD83D\uDD11', label: 'Privatisation',  color: '#f97316', bg: 'from-orange-950/40 to-orange-900/10', border: 'border-orange-800/40' },
  resources:       { icon: '\uD83C\uDF3E', label: 'Natural Resources', color: '#84cc16', bg: 'from-lime-950/40 to-lime-900/10', border: 'border-lime-800/40' },
  trade:           { icon: '\uD83D\uDEA2', label: 'Trade & Tariffs', color: '#06b6d4', bg: 'from-cyan-950/40 to-cyan-900/10',  border: 'border-cyan-800/40' },
  subsidy:         { icon: '\uD83C\uDFF7',  label: 'Subsidies',      color: '#ec4899', bg: 'from-pink-950/40 to-pink-900/10',   border: 'border-pink-800/40' },
  general:         { icon: '\uD83D\uDCCB', label: 'General Policy',  color: '#6b7280', bg: 'from-gray-950/40 to-gray-900/10',   border: 'border-gray-700/40' },
}

export function getCategoryMeta(slug) {
  return meta[slug] || meta.general
}

export default meta
