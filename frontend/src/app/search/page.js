'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import SignalBadge from '@/components/SignalBadge'
import { formatDate, getCategoryLabel, categoryLabels } from '@/lib/helpers'

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
      <h1 className="text-3xl font-bold text-gray-100 mb-6">Search Policies</h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1) }}
          placeholder="Search for tax, mining, superannuation, negative gearing..."
          className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="text-xs text-gray-500 block mb-1">Category</label>
          <select
            value={category}
            onChange={e => { setCategory(e.target.value); setPage(1) }}
            className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Min Flag Score</label>
          <input
            type="range"
            min="0"
            max="15"
            value={minScore}
            onChange={e => { setMinScore(parseInt(e.target.value)); setPage(1) }}
            className="w-32 mt-2"
          />
          <span className="text-xs text-gray-500 ml-2">{minScore}+</span>
        </div>
      </div>

      {/* Results count */}
      {(query || category !== 'all') && (
        <p className="text-sm text-gray-500 mb-4">
          {loading ? 'Searching...' : `${total} result${total !== 1 ? 's' : ''} found`}
        </p>
      )}

      {/* Results */}
      <div className="space-y-3">
        {results.map(policy => {
          const event = policy.timeline_events?.[0]
          const analysis = event?.analysis_json || {}
          const signal = analysis.corruption_signal_strength || 'none'

          return (
            <Link key={policy.id} href={`/policy/${policy.id}`}>
              <div className="bg-[#111827] border border-white/5 rounded-xl p-5 hover:border-blue-500/30 transition-all group mb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs text-gray-500">{formatDate(policy.date)}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-800">
                        {getCategoryLabel(policy.category)}
                      </span>
                      {event && <SignalBadge strength={signal} size="sm" />}
                    </div>
                    <h3 className="font-medium text-gray-200 group-hover:text-blue-300 transition-colors">
                      {policy.title}
                    </h3>
                    {event?.primary_beneficiaries?.length > 0 && (
                      <p className="text-sm text-gray-500 mt-1">
                        Benefited: {event.primary_beneficiaries.join(', ')}
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-bold text-gray-400">
                      {event?.impact_score || policy.flag_score}
                    </span>
                    <p className="text-xs text-gray-600">{event ? 'impact' : 'flag'} score</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Empty state */}
      {!loading && results.length === 0 && (query || category !== 'all') && (
        <div className="bg-[#111827] rounded-xl p-12 text-center border border-white/5">
          <p className="text-gray-400">No matching policies found.</p>
          <p className="text-sm text-gray-600 mt-2">Try different keywords or adjust filters.</p>
        </div>
      )}

      {/* Pagination */}
      {total > 25 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-400 disabled:opacity-30 hover:bg-white/10"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-sm text-gray-500">Page {page}</span>
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={results.length < 25}
            className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-400 disabled:opacity-30 hover:bg-white/10"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
