import Link from 'next/link'
import SignalBadge from './SignalBadge'
import { formatDate, getCategoryLabel, getCategoryColor } from '@/lib/helpers'

export default function PolicyCard({ event }) {
  const analysis = event.analysis_json || {}
  const signal = analysis.corruption_signal_strength || 'none'
  const catColor = getCategoryColor(event.category)

  return (
    <Link href={`/policy/${event.policy_id}`}>
      <div className="py-4 border-b border-gray-100 grid grid-cols-[70px_1fr_auto] gap-4 items-start hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded">
        <span className="font-mono text-xs text-gray-400 pt-0.5">
          {formatDate(event.date)}
        </span>
        <div>
          <p className={`text-[10px] font-semibold uppercase tracking-[0.5px] mb-1 ${catColor}`}>
            {getCategoryLabel(event.category)}
          </p>
          <p className="text-[15px] font-semibold text-gray-900 leading-snug">
            {event.title}
          </p>
          {event.primary_beneficiaries && event.primary_beneficiaries.length > 0 && (
            <p className="text-xs text-gray-400 mt-1">
              Benefited: {event.primary_beneficiaries.join(', ')}
            </p>
          )}
        </div>
        <div className="text-right pt-1">
          <SignalBadge strength={signal} />
        </div>
      </div>
    </Link>
  )
}
