import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SignalBadge from '@/components/SignalBadge'
import ImpactMeter from '@/components/ImpactMeter'
import ReaderVerdict from '@/components/ReaderVerdict'
import { getReaderImpact } from '@/lib/readerImpact'
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
  const flagExplanations = analysis.flag_explanations || []
  const readerImpact = getReaderImpact(event)

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
      <div className="mb-6">
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
      </div>

      {/* Reader Verdict — the hero element, answers "is this good or bad for ME?" */}
      {event && (
        <div className="mb-8">
          <ReaderVerdict event={event} size="full" />

          <div className="flex items-center gap-3 mt-4">
            <span className={`font-mono text-2xl font-medium ${
              readerImpact.verdict === 'positive' ? 'text-emerald-700' :
              readerImpact.verdict === 'negative' ? 'text-red-700' :
              readerImpact.verdict === 'mixed' ? 'text-amber-700' :
              'text-gray-900'
            }`}>{event.impact_score}</span>
            <span className="text-gray-400 text-sm">/10 impact</span>
            <div className="flex-1 max-w-[200px]">
              <ImpactMeter score={event.impact_score} size="lg" verdict={readerImpact.verdict} />
            </div>
          </div>
        </div>
      )}

      {event ? (
        <div className="space-y-8">
          {/* What Changed — the plain English explainer */}
          {event.what_changed && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">What changed</h3>
              {event.what_changed.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-sm text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          )}

          {/* Who gained / Who lost — framed for the reader */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Who gained</h3>
              <ul className="space-y-1.5">
                {(event.primary_beneficiaries || []).map((b, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-emerald-500 text-xs mt-0.5">{'\u25B2'}</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Who lost out</h3>
              <ul className="space-y-1.5">
                {(event.disadvantaged_groups || []).map((d, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-gray-400 text-xs mt-0.5">{'\u25BC'}</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Revenue Impact */}
          {event.revenue_impact && (
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Revenue impact</h3>
              {event.revenue_impact.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2 last:mb-0">{paragraph}</p>
              ))}
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
              {analysis.corruption_signal_reasoning.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2 last:mb-0">{paragraph}</p>
              ))}
            </div>
          )}

          {/* Conflicts of Interest */}
          {event.conflict_of_interest_flags && event.conflict_of_interest_flags.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Declared interests</h3>
              <div className="space-y-2">
                {event.conflict_of_interest_flags.map((f, i) => (
                  <div key={i} className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">{f.member}</p>
                    <p className="text-xs text-gray-500">{f.interest}</p>
                    {f.relevance && <p className="text-xs text-gray-500 mt-1">{f.relevance}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Linked Donations */}
          {event.linked_donations && event.linked_donations.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Political donations nearby</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 text-left border-b border-gray-200">
                    <th className="pb-2 pr-4 font-medium">Donor</th>
                    <th className="pb-2 pr-4 font-medium">Industry</th>
                    <th className="pb-2 pr-4 font-medium">Amount</th>
                    <th className="pb-2 font-medium">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {event.linked_donations.map((d, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-2 pr-4 text-gray-700">{d.donor}</td>
                      <td className="py-2 pr-4 text-gray-500">{d.industry}</td>
                      <td className="py-2 pr-4 font-mono text-gray-700">{d.amount}</td>
                      <td className="py-2 text-gray-400">{d.timing || `${d.years_before_policy}y before`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {event.donations_context && (
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">{event.donations_context}</p>
              )}
            </div>
          )}

          {/* International Comparison */}
          {event.comparison_country && (
            <div className="border border-gray-200 rounded p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                How {event.comparison_country} handled this differently
              </h3>
              {event.comparison_approach && event.comparison_approach.split('\n\n').map((p, i) => (
                <p key={`a-${i}`} className="text-sm text-gray-700 mb-2">{p}</p>
              ))}
              {event.comparison_outcome && event.comparison_outcome.split('\n\n').map((p, i) => (
                <p key={`o-${i}`} className="text-sm text-gray-700 mb-2 last:mb-0">{p}</p>
              ))}
            </div>
          )}

          {/* Confidence */}
          {analysis.confidence_notes && (
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">How confident are we?</h3>
              {analysis.confidence_notes.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-xs text-gray-500 leading-relaxed mb-2 last:mb-0">{paragraph}</p>
              ))}
            </div>
          )}

          {/* Flag Reasons */}
          {flagExplanations.length > 0 ? (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Why this was flagged</h3>
              <p className="text-xs text-gray-500 mb-3">
                Our system automatically scans for patterns between policy decisions, political donations,
                and declared interests. A flag does not mean wrongdoing occurred.
              </p>
              <div className="space-y-3">
                {flagExplanations.map((f, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-3">
                    <p className="text-sm font-medium text-gray-700">{f.label}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : policy.flag_reasons && policy.flag_reasons.length > 0 ? (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Why this was flagged</h3>
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
          ) : null}
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
