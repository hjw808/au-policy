import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SignalBadge from '@/components/SignalBadge'
import ImpactMeter from '@/components/ImpactMeter'
import { formatDate, formatCurrency, getCategoryLabel } from '@/lib/helpers'

export const revalidate = 3600

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

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <span>/</span>
        <span className="text-gray-300">{policy.title?.slice(0, 50)}...</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-xs px-2.5 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800">
            {getCategoryLabel(policy.category)}
          </span>
          <span className="text-sm text-gray-500">{formatDate(policy.date)}</span>
          <SignalBadge strength={signal} />
        </div>
        <h1 className="text-3xl font-bold text-gray-100 mb-4">{policy.title}</h1>

        {event && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">Impact Score</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white">{event.impact_score}</span>
              <span className="text-gray-600">/10</span>
              <div className="flex-1 max-w-xs">
                <ImpactMeter score={event.impact_score} size="lg" />
              </div>
            </div>
          </div>
        )}
      </div>

      {event ? (
        <div className="space-y-8">
          {/* Who benefited / Who lost */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-red-400 mb-3">Primary Beneficiaries</h3>
              <ul className="space-y-1.5">
                {(event.primary_beneficiaries || []).map((b, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#9650;</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-blue-400 mb-3">Disadvantaged Groups</h3>
              <ul className="space-y-1.5">
                {(event.disadvantaged_groups || []).map((d, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#9660;</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Revenue Impact */}
          {event.revenue_impact && (
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-yellow-400 mb-2">Revenue Impact</h3>
              <p className="text-gray-300">{event.revenue_impact}</p>
            </div>
          )}

          {/* Corruption Signal Reasoning */}
          {analysis.corruption_signal_reasoning && (
            <div className={`rounded-xl p-5 border ${
              signal === 'strong' ? 'bg-red-950/20 border-red-900/50' :
              signal === 'moderate' ? 'bg-orange-950/20 border-orange-900/50' :
              'bg-[#111827] border-white/5'
            }`}>
              <h3 className="text-sm font-semibold text-gray-200 mb-2">Analysis</h3>
              <p className="text-gray-300 leading-relaxed">{analysis.corruption_signal_reasoning}</p>
            </div>
          )}

          {/* Conflicts of Interest */}
          {event.conflict_of_interest_flags && event.conflict_of_interest_flags.length > 0 && (
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-purple-400 mb-3">Conflicts of Interest</h3>
              <div className="space-y-3">
                {event.conflict_of_interest_flags.map((f, i) => (
                  <div key={i} className="bg-purple-950/20 rounded-lg p-3 border border-purple-900/30">
                    <p className="font-medium text-gray-200">{f.member}</p>
                    <p className="text-sm text-gray-400">{f.interest}</p>
                    <p className="text-xs text-purple-300 mt-1">{f.relevance}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Linked Donations */}
          {event.linked_donations && event.linked_donations.length > 0 && (
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-green-400 mb-3">Linked Donations</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-left">
                      <th className="pb-2 pr-4">Donor</th>
                      <th className="pb-2 pr-4">Industry</th>
                      <th className="pb-2 pr-4">Amount</th>
                      <th className="pb-2">Years Before</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.linked_donations.map((d, i) => (
                      <tr key={i} className="border-t border-white/5">
                        <td className="py-2 pr-4 text-gray-300">{d.donor}</td>
                        <td className="py-2 pr-4 text-gray-400">{d.industry}</td>
                        <td className="py-2 pr-4 text-green-300">{d.amount}</td>
                        <td className="py-2 text-gray-400">{d.years_before_policy}y</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* International Comparison */}
          {event.comparison_country && (
            <div className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 rounded-xl p-5 border border-blue-900/30">
              <h3 className="text-sm font-semibold text-blue-300 mb-3">
                How {event.comparison_country} did it differently
              </h3>
              <p className="text-gray-300 mb-2"><strong>Approach:</strong> {event.comparison_approach}</p>
              <p className="text-gray-300"><strong>Outcome:</strong> {event.comparison_outcome}</p>
            </div>
          )}

          {/* Confidence */}
          {analysis.confidence_notes && (
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Confidence Notes</h3>
              <p className="text-sm text-gray-500 italic">{analysis.confidence_notes}</p>
            </div>
          )}

          {/* Flag Reasons */}
          {policy.flag_reasons && policy.flag_reasons.length > 0 && (
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Why This Was Flagged</h3>
              <div className="space-y-2">
                {policy.flag_reasons.map((r, i) => (
                  <div key={i} className="text-sm">
                    <span className="text-gray-300 font-medium">{r.rule}</span>
                    <span className="text-gray-600 mx-2">+{r.score}</span>
                    <p className="text-gray-500 ml-0 mt-0.5">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#111827] rounded-xl p-8 text-center border border-white/5">
          <p className="text-gray-400">This policy has been flagged but not yet analysed by Claude.</p>
          <p className="text-sm text-gray-600 mt-2">Flag score: {policy.flag_score}</p>
        </div>
      )}

      {/* Source link */}
      {policy.source_url && (
        <div className="mt-8 text-sm text-gray-600">
          Source: <a href={policy.source_url} target="_blank" rel="noopener" className="text-blue-500 hover:text-blue-400">{policy.source}</a>
        </div>
      )}
    </div>
  )
}
