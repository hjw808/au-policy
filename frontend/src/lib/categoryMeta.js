/**
 * Category metadata — Wire design. No emojis, no gradients.
 * Just text colors and labels.
 */
const meta = {
  mining:          { label: 'Mining & Resources',   colorClass: 'text-amber-700' },
  oil_gas:         { label: 'Energy & Gas',         colorClass: 'text-red-700' },
  tax:             { label: 'Taxation',             colorClass: 'text-blue-700' },
  superannuation:  { label: 'Superannuation',       colorClass: 'text-indigo-700' },
  property:        { label: 'Housing & Property',   colorClass: 'text-violet-700' },
  healthcare:      { label: 'Healthcare',           colorClass: 'text-emerald-700' },
  defence:         { label: 'Defence',              colorClass: 'text-slate-600' },
  privatisation:   { label: 'Privatisation',        colorClass: 'text-orange-700' },
  resources:       { label: 'Natural Resources',    colorClass: 'text-lime-700' },
  trade:           { label: 'Trade & Tariffs',      colorClass: 'text-cyan-700' },
  subsidy:         { label: 'Subsidies',            colorClass: 'text-pink-700' },
  general:         { label: 'General Policy',       colorClass: 'text-gray-500' },
}

export function getCategoryMeta(slug) {
  return meta[slug] || meta.general
}

export default meta
