'use client'
import { getReaderImpact } from '@/lib/readerImpact'

/**
 * Reader Verdict — the "is this good or bad for me?" badge.
 *
 * Two sizes:
 *   'full' — banner with verdict + summary (policy detail page)
 *   'compact' — inline badge (list views)
 */
export default function ReaderVerdict({ event, size = 'full' }) {
  const impact = getReaderImpact(event)

  if (impact.verdict === 'neutral' && !event) return null

  if (size === 'compact') {
    return (
      <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${impact.color}`}>
        {impact.verdict === 'positive' && <span className="text-emerald-500">&#9650;</span>}
        {impact.verdict === 'negative' && <span className="text-red-500">&#9660;</span>}
        {impact.verdict === 'mixed' && <span className="text-amber-500">&#9644;</span>}
        {impact.label}
      </span>
    )
  }

  // Full banner
  return (
    <div className={`border rounded-md p-4 ${impact.bgColor} ${impact.borderColor}`}>
      <div className="flex items-center gap-2 mb-1">
        {impact.verdict === 'positive' && (
          <span className="text-emerald-600 text-sm font-bold">&#9650;</span>
        )}
        {impact.verdict === 'negative' && (
          <span className="text-red-600 text-sm font-bold">&#9660;</span>
        )}
        {impact.verdict === 'mixed' && (
          <span className="text-amber-600 text-sm font-bold">&#9644;</span>
        )}
        <span className={`text-sm font-semibold ${impact.color}`}>
          {impact.label}
        </span>
      </div>
      {impact.summary && (
        <p className={`text-sm ${impact.color} opacity-80`}>{impact.summary}</p>
      )}
    </div>
  )
}
