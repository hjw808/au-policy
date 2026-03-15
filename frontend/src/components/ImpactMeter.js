'use client'

export default function ImpactMeter({ score, size = 'md' }) {
  const maxDots = 10
  const filled = Math.round(score || 0)
  const height = size === 'lg' ? 'h-4' : 'h-2.5'
  const gap = size === 'lg' ? 'gap-1.5' : 'gap-1'

  function dotColor(index) {
    if (index >= filled) return 'bg-gray-800'
    if (filled >= 8) return 'bg-red-500'
    if (filled >= 5) return 'bg-orange-500'
    if (filled >= 3) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  return (
    <div className={`flex items-center ${gap}`}>
      {Array.from({ length: maxDots }).map((_, i) => (
        <div
          key={i}
          className={`${height} w-full rounded-sm ${dotColor(i)} transition-colors`}
        />
      ))}
    </div>
  )
}
