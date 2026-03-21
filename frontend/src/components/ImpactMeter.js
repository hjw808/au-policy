'use client'

/**
 * ImpactMeter — now direction-aware.
 *
 * verdict prop drives the color:
 *   'positive' → green (good for you)
 *   'negative' → red (costs you)
 *   'mixed'    → amber
 *   default    → gray
 */
export default function ImpactMeter({ score, size = 'md', verdict }) {
  const maxDots = 10
  const filled = Math.round(score || 0)
  const h = size === 'lg' ? 'h-3' : 'h-2'

  function dotColor(index) {
    if (index >= filled) return 'bg-gray-200'

    // Direction-aware colors when verdict is provided
    if (verdict === 'positive') return 'bg-emerald-500'
    if (verdict === 'negative') return 'bg-red-500'
    if (verdict === 'mixed') return 'bg-amber-500'

    // Fallback: magnitude-only (no verdict available)
    if (filled >= 8) return 'bg-gray-600'
    if (filled >= 5) return 'bg-gray-500'
    return 'bg-gray-400'
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxDots }).map((_, i) => (
        <div
          key={i}
          className={`${h} w-full rounded-sm ${dotColor(i)}`}
        />
      ))}
    </div>
  )
}
