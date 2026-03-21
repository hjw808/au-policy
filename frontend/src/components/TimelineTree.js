import Link from 'next/link'
import SignalBadge from './SignalBadge'
import ReaderVerdict from './ReaderVerdict'
import { formatDate } from '@/lib/helpers'

export default function TimelineTree({ years }) {
  if (!years || years.length === 0) {
    return <p className="text-sm text-gray-400">No policies found in this category.</p>
  }

  return (
    <div className="space-y-8">
      {years.map(({ year, policies }) => (
        <div key={year} id={`year-${year}`}>
          <h2 className="font-mono text-sm font-medium text-gray-400 mb-3 pb-2 border-b border-gray-200">
            {year} <span className="text-gray-300 ml-1">{policies.length}</span>
          </h2>
          <div>
            {policies.map(policy => {
              const event = policy.timeline_events?.[0]
              const analysis = event?.analysis_json || {}
              const signal = analysis.corruption_signal_strength || 'none'
              const impact = event?.impact_score || policy.flag_score || 0

              return (
                <Link key={policy.id} href={`/policy/${policy.id}`}>
                  <div className="py-3 border-b border-gray-100 flex items-start gap-4 hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded">
                    <span className="font-mono text-xs text-gray-400 pt-0.5 w-16 shrink-0">
                      {formatDate(policy.date)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        {policy.title}
                      </p>
                      <div className="mt-1">
                        <ReaderVerdict event={event} size="compact" />
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <SignalBadge strength={signal} size="dot" />
                      <span className="font-mono text-xs text-gray-400">
                        {impact}/10
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
