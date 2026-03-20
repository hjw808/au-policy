'use client'

export default function ImpactMeter({ score, size = 'md' }) {
  const maxDots = 10
  const filled = Math.round(score || 0)
  const h = size === 'lg' ? 'h-3' : 'h-2'

  function dotColor(index) {
    if (index >= filled) return 'bg-gray-200'
    if (filled >= 8) return 'bg-red-500'
    if (filled >= 5) return 'bg-amber-500'
    if (filled >= 3) return 'bg-yellow-400'
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
