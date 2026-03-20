import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SignalBadge from '@/components/SignalBadge'
import ImpactMeter from '@/components/ImpactMeter'
import { formatDateFull, formatCurrency, getCategoryLabel, getCategoryColor } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

async function getPolicyData(id) {
  const supabase = createServerClient()

  const [policyRes, eventRes] = await Promise.all([
    supabase.from('policies').select('*').eq('id', id).single(),
    supabase.from('timeline_events').select('*').eq('policy_id', id).single(),
  ])

  return {
    policy: policyRes.data,
    event: eventRes.data,
  }
}

export default async function PolicyPage({ params }) {
  const { id } = params
  const { policy, event } = await getPolicyData(id)

  if (!policy) return notFound()

  const analysis = event?.analysis_json || {}
  const signal = analysis.corruption_signal_strength || 'none'
  const catColor = getCategoryColor(policy.category)

  return (
    <div className="max-w-[720px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href={`/category/${policy.category}`} className="hover:text-gray-600">
          {getCategoryLabel(policy.category)}
        </Link>
        <span>/</span>
        <span className="text-gray-500 truncate max-w-[200px]">{policy.title?.slice(0, 40)}...</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className={`text-[10px] font-semibold uppercase tracking-[0.5px] ${catColor}`}>
            {getCategoryLabel(policy.category)}
          </span>
          <span className="text-xs text-gray-400">{formatDateFull(policy.date)}</span>
          <SignalBadge strength={signal} />
        </div>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          {policy.title}
        </h1>

        {event && (
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-2xl font-medium text-gray-900">{event.impact_score}</span>
            <span className="text-gray-400 text-sm">/10 impact</span>
            <div className="flex-1 max-w-[200px]">
              <ImpactMeter score={event.impact_score} size="lg" />
            </div>
          </div>
        )}
      </div>

      {event ? (
        <div className="space-y-8">
          {/* Who benefited / Who lost */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-3">Primary Beneficiaries</h3>
              <ul className="space-y-1.5">
                {(event.primary_beneficiaries || []).map((b, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-400 text-xs mt-0.5">{'\u25B2'}</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3">Disadvantaged Groups</h3>
              <ul className="space-y-1.5">
                {(event.disadvantaged_groups || []).map((d, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-blue-400 text-xs mt-0.5">{'\u25BC'}</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Revenue Impact */}
          {event.revenue_impact && (
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Revenue Impact</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{event.revenue_impact}</p>
            </div>
          )}

          {/* Analysis */}
          {analysis.corruption_signal_reasoning && (
            <div className={`border-l-2 pl-4 ${
              signal === 'strong' ? 'border-red-300' :
              signal === 'moderate' ? 'border-amber-300' :
              'border-gray-200'
            }`}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Analysis</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{analysis.corruption_signal_reasoning}</p>
            </div>
          )}

          {/* Conflicts of Interest */}
          {event.conflict_of_interest_flags && event.conflict_of_interest_flags.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-violet-600 mb-3">Conflicts of Interest</h3>
              <div className="space-y-2">
                {event.conflict_of_interest_flags.map((f, i) => (
                  <div key={i} className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">{f.member}</p>
                    <p className="text-xs text-gray-500">{f.interest}</p>
                    {f.relevance && <p className="text-xs text-violet-600 mt-1">{f.relevance}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Linked Donations */}
          {event.linked_donations && event.linked_donations.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">Linked Donations</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 text-left border-b border-gray-200">
                    <th className="pb-2 pr-4 font-medium">Donor</th>
                    <th className="pb-2 pr-4 font-medium">Industry</th>
                    <th className="pb-2 pr-4 font-medium">Amount</th>
                    <th className="pb-2 font-medium">Years Before</th>
                  </tr>
                </thead>
                <tbody>
                  {event.linked_donations.map((d, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-2 pr-4 text-gray-700">{d.donor}</td>
                      <td className="py-2 pr-4 text-gray-500">{d.industry}</td>
                      <td className="py-2 pr-4 font-mono text-gray-700">{d.amount}</td>
                      <td className="py-2 text-gray-400">{d.years_before_policy}y</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* International Comparison */}
          {event.comparison_country && (
            <div className="border border-gray-200 rounded p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3">
                How {event.comparison_country} handled this differently
              </h3>
              <p className="text-sm text-gray-700 mb-2"><strong className="text-gray-900">Approach:</strong> {event.comparison_approach}</p>
              <p className="text-sm text-gray-700"><strong className="text-gray-900">Outcome:</strong> {event.comparison_outcome}</p>
            </div>
          )}

          {/* Confidence */}
          {analysis.confidence_notes && (
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Confidence Notes</h3>
              <p className="text-xs text-gray-500 italic leading-relaxed">{analysis.confidence_notes}</p>
            </div>
          )}

          {/* Flag Reasons */}
          {policy.flag_reasons && policy.flag_reasons.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Why This Was Flagged</h3>
              <div className="space-y-2">
                {policy.flag_reasons.map((r, i) => (
                  <div key={i} className="text-sm">
                    <span className="text-gray-700 font-medium">{r.rule}</span>
                    <span className="font-mono text-xs text-gray-400 ml-2">+{r.score}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="border border-gray-200 rounded p-8 text-center">
          <p className="text-sm text-gray-500">This policy has been flagged but not yet analysed.</p>
          <p className="text-xs text-gray-400 mt-1">Flag score: {policy.flag_score}</p>
        </div>
      )}

      {/* Source link */}
      {policy.source_url && (
        <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-400">
          Source: <a href={policy.source_url} target="_blank" rel="noopener" className="text-gray-600 hover:text-gray-900 underline">{policy.source}</a>
        </div>
      )}
    </div>
  )
}
