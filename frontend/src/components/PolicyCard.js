import Link from 'next/link'
import SignalBadge from './SignalBadge'
import ReaderVerdict from './ReaderVerdict'
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
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-semibold uppercase tracking-[0.5px] ${catColor}`}>
              {getCategoryLabel(event.category)}
            </span>
            <ReaderVerdict event={event} size="compact" />
          </div>
          <p className="text-[15px] font-semibold text-gray-900 leading-snug">
            {event.title}
          </p>
        </div>
        <div className="text-right pt-1">
          <SignalBadge strength={signal} />
        </div>
      </div>
    </Link>
  )
}
