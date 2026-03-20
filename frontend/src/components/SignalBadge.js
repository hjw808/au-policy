'use client'
import { signalConfig } from '@/lib/helpers'

export default function SignalBadge({ strength, size = 'md' }) {
  const config = signalConfig(strength)
  if (strength === 'none' || !strength) return null

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${config.dotClass}`} />
      {size !== 'dot' && (
        <span className="text-[10px] text-gray-400">{config.label}</span>
      )}
    </span>
  )
}
