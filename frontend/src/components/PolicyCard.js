import Link from 'next/link'
import SignalBadge from './SignalBadge'
import { formatDate, getCategoryLabel } from '@/lib/helpers'

export default function PolicyCard({ event }) {
  const analysis = event.analysis_json || {}
  const signal = analysis.corruption_signal_strength || 'none'

  return (
    <Link href={`/policy/${event.policy_id}`}>
      <div className="group bg-[#111827] border border-white/5 rounded-xl p-5 hover:border-blue-500/30 transition-all hover:translate-y-[-2px]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">{formatDate(event.date)}</p>
            <h3 className="font-semibold text-gray-100 group-hover:text-blue-300 transition-colors line-clamp-2">
              {event.title}
            </h3>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-2xl font-bold text-gray-300">{event.impact_score}<span className="text-sm text-gray-600">/10</span></span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-800">
            {getCategoryLabel(event.category)}
          </span>
          <SignalBadge strength={signal} size="sm" />
        </div>

        {/* Beneficiaries preview */}
        {event.primary_beneficiaries && event.primary_beneficiaries.length > 0 && (
          <p className="text-sm text-gray-400 line-clamp-1">
            Benefited: {event.primary_beneficiaries.join(', ')}
          </p>
        )}
      </div>
    </Link>
  )
}
