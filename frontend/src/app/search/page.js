'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import SignalBadge from '@/components/SignalBadge'
import { formatDate, getCategoryLabel, getCategoryColor, categoryLabels } from '@/lib/helpers'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [minScore, setMinScore] = useState(0)
  const [results, setResults] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const doSearch = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (query) params.set('q', query)
      if (category !== 'all') params.set('category', category)
      if (minScore > 0) params.set('minScore', minScore)
      params.set('page', page)

      const res = await fetch(`/api/search?${params}`)
      const data = await res.json()
      setResults(data.results || [])
      setTotal(data.total || 0)
    } catch {
      setResults([])
      setTotal(0)
    }
    setLoading(false)
  }, [query, category, minScore, page])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query || category !== 'all') doSearch()
    }, 300)
    return () => clearTimeout(timer)
  }, [query, category, minScore, page, doSearch])

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-6">Search</h1>

      {/* Search bar */}
      <div className="mb-5">
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1) }}
          placeholder="Search policies... e.g. mining tax, superannuation, negative gearing"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="text-xs text-gray-400 block mb-1">Category</label>
          <select
            value={category}
            onChange={e => { setCategory(e.target.value); setPage(1) }}
            className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-gray-500"
          >
            <option value="all">All Categories</option>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-400 block mb-1">Min Flag Score</label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="15"
              value={minScore}
              onChange={e => { setMinScore(parseInt(e.target.value)); setPage(1) }}
              className="w-28"
            />
            <span className="font-mono text-xs text-gray-400">{minScore}+</span>
          </div>
        </div>
      </div>

      {/* Results count */}
      {(query || category !== 'all') && (
        <p className="text-xs text-gray-400 mb-4">
          {loading ? 'Searching...' : `${total} result${total !== 1 ? 's' : ''}`}
        </p>
      )}

      {/* Results */}
      <div>
        {results.map(policy => {
          const event = policy.timeline_events?.[0]
          const analysis = event?.analysis_json || {}
          const signal = analysis.corruption_signal_strength || 'none'
          const catColor = getCategoryColor(policy.category)

          return (
            <Link key={policy.id} href={`/policy/${policy.id}`}>
              <div className="py-4 border-b border-gray-100 grid grid-cols-[70px_1fr_auto] gap-4 items-start hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded">
                <span className="font-mono text-xs text-gray-400 pt-0.5">
                  {formatDate(policy.date)}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.5px] ${catColor}`}>
                      {getCategoryLabel(policy.category)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 leading-snug">
                    {policy.title}
                  </p>
                  {event?.primary_beneficiaries?.length > 0 && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      Benefited: {event.primary_beneficiaries.join(', ')}
                    </p>
                  )}
                </div>
                <div className="text-right pt-1 flex items-center gap-2">
                  <SignalBadge strength={signal} size="dot" />
                  <span className="font-mono text-xs text-gray-400">
                    {event?.impact_score || policy.flag_score}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Empty state */}
      {!loading && results.length === 0 && (query || category !== 'all') && (
        <div className="py-12 text-center">
          <p className="text-sm text-gray-400">No matching policies found.</p>
          <p className="text-xs text-gray-300 mt-1">Try different keywords or adjust filters.</p>
        </div>
      )}

      {/* Pagination */}
      {total > 25 && (
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="text-xs text-gray-500 hover:text-gray-900 disabled:text-gray-300"
          >
            {'\u2190'} Previous
          </button>
          <span className="font-mono text-xs text-gray-400">Page {page}</span>
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={results.length < 25}
            className="text-xs text-gray-500 hover:text-gray-900 disabled:text-gray-300"
          >
            Next {'\u2192'}
          </button>
        </div>
      )}
    </div>
  )
}
