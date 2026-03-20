import Link from 'next/link'
import SignalBadge from './SignalBadge'
import { formatDate } from '@/lib/helpers'

export default function PolicyBranch({ policy }) {
  const event = policy.timeline_events?.[0]
  const analysis = event?.analysis_json || {}
  const signal = analysis.corruption_signal_strength || 'none'
  const impact = event?.impact_score || policy.flag_score || 0

  return (
    <Link href={`/policy/${policy.id}`}>
      <div className="py-3 border-b border-gray-100 flex items-start gap-4 hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded">
        <span className="font-mono text-xs text-gray-400 pt-0.5 w-16 shrink-0">
          {formatDate(policy.date)}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 leading-snug">{policy.title}</p>
          {event?.primary_beneficiaries?.length > 0 && (
            <p className="text-xs text-gray-400 mt-0.5 truncate">
              Benefited: {event.primary_beneficiaries.join(', ')}
            </p>
          )}
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <SignalBadge strength={signal} size="dot" />
          <span className="font-mono text-xs text-gray-400">{impact}/10</span>
        </div>
      </div>
    </Link>
  )
}
