import Link from 'next/link'
import SignalBadge from './SignalBadge'
import { formatCurrency, formatDate } from '@/lib/helpers'

export default function PolicyBranch({ policy }) {
  const event = policy.timeline_events?.[0]
  const analysis = event?.analysis_json || {}
  const signal = analysis.corruption_signal_strength || 'none'
  const impact = event?.impact_score || policy.flag_score || 0
  const beneficiaries = event?.primary_beneficiaries || []
  const donations = event?.linked_donations || []
  const conflicts = event?.conflict_of_interest_flags || []
  const isComplete = policy.status === 'complete'

  return (
    <Link href={`/policy/${policy.id}`}>
      <div className="bg-[#111827] border border-white/5 rounded-xl p-5 hover:border-blue-500/30 transition-all group cursor-pointer">
        {/* Top row: date + signal + impact */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500">{formatDate(policy.date)}</span>
            {isComplete && <SignalBadge strength={signal} size="sm" />}
          </div>
          <div className="text-right shrink-0">
            <span className="text-lg font-bold" style={{
              color: impact >= 7 ? '#ef4444' : impact >= 4 ? '#f97316' : '#6b7280'
            }}>
              {impact}
            </span>
            <span className="text-xs text-gray-600 ml-1">/10</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="font-semibold text-gray-200 group-hover:text-blue-300 transition-colors mb-1">
          {policy.title}
        </h4>

        {/* Beneficiaries */}
        {beneficiaries.length > 0 && (
          <p className="text-xs text-gray-500 mb-2">
            Benefited: {beneficiaries.slice(0, 3).join(', ')}
            {beneficiaries.length > 3 && ` +${beneficiaries.length - 3} more`}
          </p>
        )}

        {/* Donations linked */}
        {donations.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {donations.slice(0, 3).map((d, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-900/20 text-green-400 border border-green-800/30">
                {d.amount || formatCurrency(d.amount_aud)} \u2190 {d.donor || d.donor_name}
              </span>
            ))}
            {donations.length > 3 && (
              <span className="text-xs text-green-600">+{donations.length - 3} more</span>
            )}
          </div>
        )}

        {/* Conflict of interest flags */}
        {conflicts.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {conflicts.slice(0, 2).map((c, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-purple-900/20 text-purple-400 border border-purple-800/30">
                \u26A0 {c.member} \u2014 {c.interest?.slice(0, 40)}
              </span>
            ))}
          </div>
        )}

        {/* Analysis snippet */}
        {analysis.corruption_signal_reasoning && (
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
            {analysis.corruption_signal_reasoning}
          </p>
        )}

        {/* Not yet analysed */}
        {!isComplete && (
          <p className="text-xs text-gray-600 mt-2 italic">
            Flagged (score {policy.flag_score}) \u2014 awaiting analysis
          </p>
        )}
      </div>
    </Link>
  )
}
