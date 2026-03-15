'use client'
import { signalConfig } from '@/lib/helpers'

export default function SignalBadge({ strength, size = 'md' }) {
  const config = signalConfig(strength)
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${config.bg} ${config.border} border ${sizeClasses}`}>
      <span className={`w-2 h-2 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}
