'use client'
import { useState, useEffect } from 'react'
import { formatCurrency } from '@/lib/helpers'

const PARTY_COLORS = {
  Liberal: '#3b82f6',
  Labor: '#ef4444',
  Nationals: '#eab308',
  Greens: '#22c55e',
  'One Nation': '#f97316',
  'United Australia': '#a855f7',
  Other: '#6b7280',
}

function SankeyBar({ industry, party, total, maxTotal }) {
  const width = Math.max((total / maxTotal) * 100, 2)
  const color = PARTY_COLORS[party] || PARTY_COLORS.Other

  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="text-xs text-gray-400 w-24 truncate text-right">{industry}</span>
      <div className="flex-1 relative">
        <div
          className="h-6 rounded-sm flex items-center px-2 transition-all"
          style={{ width: `${width}%`, backgroundColor: color, minWidth: '40px', opacity: 0.8 }}
        >
          <span className="text-xs text-white font-medium truncate">{formatCurrency(total)}</span>
        </div>
      </div>
      <span className="text-xs text-gray-500 w-20 truncate">{party}</span>
    </div>
  )
}

export default function MoneyPage() {
  const [flows, setFlows] = useState([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState('industry')

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await fetch(`/api/donations?groupBy=${view}`)
        const data = await res.json()
        setFlows(data.flows || data.donations || [])
      } catch {
        setFlows([])
      }
      setLoading(false)
    }
    load()
  }, [view])

  const maxTotal = Math.max(...flows.map(f => f.total || f.amount_aud || 0), 1)

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-100 mb-2">Follow the Money</h1>
      <p className="text-gray-500 mb-8">
        Political donations mapped by industry and party. See which industries fund which parties.
      </p>

      {/* View tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'industry', label: 'By Industry' },
          { id: 'year', label: 'By Year' },
          { id: 'top', label: 'Top Donors' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`text-sm px-4 py-2 rounded-lg transition-colors ${
              view === tab.id
                ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                : 'bg-white/5 text-gray-500 border border-white/10 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(PARTY_COLORS).filter(([p]) => p !== 'Other').map(([party, color]) => (
          <div key={party} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
            <span className="text-xs text-gray-500">{party}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="bg-[#111827] rounded-xl p-6 border border-white/5">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading donation data...</div>
        ) : flows.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No donation data available yet.</p>
            <p className="text-sm text-gray-600 mt-2">Run the AEC donation ingestion first.</p>
          </div>
        ) : view === 'top' ? (
          // Top donors table
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left">
                  <th className="pb-3 pr-4">Donor</th>
                  <th className="pb-3 pr-4">Industry</th>
                  <th className="pb-3 pr-4">Party</th>
                  <th className="pb-3 pr-4">Amount</th>
                  <th className="pb-3">Year</th>
                </tr>
              </thead>
              <tbody>
                {flows.slice(0, 50).map((d, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="py-2.5 pr-4 text-gray-200">{d.donor_name}</td>
                    <td className="py-2.5 pr-4 text-gray-400">{d.donor_industry}</td>
                    <td className="py-2.5 pr-4">
                      <span style={{ color: PARTY_COLORS[d.recipient_party] || '#888' }}>
                        {d.recipient_party}
                      </span>
                    </td>
                    <td className="py-2.5 pr-4 text-green-300 font-medium">{formatCurrency(d.amount_aud)}</td>
                    <td className="py-2.5 text-gray-500">{d.financial_year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Bar chart view (industry or year)
          <div className="space-y-0.5">
            {flows.slice(0, 50).map((f, i) => (
              <SankeyBar
                key={i}
                industry={f.industry || f.year || 'Unknown'}
                party={f.party || f.recipient_party || ''}
                total={f.total || 0}
                maxTotal={maxTotal}
              />
            ))}
          </div>
        )}
      </div>

      {/* Methodology note */}
      <p className="text-xs text-gray-600 mt-4">
        Data sourced from the AEC Transparency Register. Donation amounts are as disclosed.
        Industry classification is automated and may not be 100% accurate.
      </p>
    </div>
  )
}
