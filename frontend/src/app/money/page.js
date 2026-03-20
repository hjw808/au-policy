'use client'
import { useState, useEffect } from 'react'
import { formatCurrency } from '@/lib/helpers'

const PARTY_COLORS = {
  Labor: '#dc2626',
  Liberal: '#2563eb',
  Nationals: '#ca8a04',
  Greens: '#16a34a',
  'One Nation': '#ea580c',
  'United Australia': '#7c3aed',
  Other: '#6b7280',
}

function FlowBar({ label, party, total, maxTotal }) {
  const width = Math.max((total / maxTotal) * 100, 3)
  const color = PARTY_COLORS[party] || PARTY_COLORS.Other

  return (
    <div className="flex items-center gap-3 py-1">
      <span className="text-xs text-gray-500 w-24 text-right truncate shrink-0">{label}</span>
      <div className="flex-1">
        <div
          className="h-5 rounded-sm flex items-center px-2"
          style={{ width: `${width}%`, backgroundColor: color, minWidth: '40px', opacity: 0.75 }}
        >
          <span className="text-[10px] text-white font-medium truncate">{formatCurrency(total)}</span>
        </div>
      </div>
      <span className="text-xs text-gray-400 w-20 truncate shrink-0">{party}</span>
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
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-1">Follow the Money</h1>
      <p className="text-sm text-gray-400 mb-6">
        Political donations mapped by industry and party from the AEC Transparency Register.
      </p>

      {/* View tabs */}
      <div className="flex gap-1 mb-6">
        {[
          { id: 'industry', label: 'By Industry' },
          { id: 'year', label: 'By Year' },
          { id: 'top', label: 'Top Donors' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`text-xs px-3 py-1.5 rounded transition-colors ${
              view === tab.id
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-5">
        {Object.entries(PARTY_COLORS).filter(([p]) => p !== 'Other').map(([party, color]) => (
          <div key={party} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color }} />
            <span className="text-[10px] text-gray-400">{party}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div>
        {loading ? (
          <p className="text-sm text-gray-400 py-12 text-center">Loading donation data...</p>
        ) : flows.length === 0 ? (
          <p className="text-sm text-gray-400 py-12 text-center">
            No donation data available yet. Run the AEC donation ingestion first.
          </p>
        ) : view === 'top' ? (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 text-left border-b border-gray-200">
                <th className="pb-2 pr-4 font-medium">Donor</th>
                <th className="pb-2 pr-4 font-medium">Industry</th>
                <th className="pb-2 pr-4 font-medium">Party</th>
                <th className="pb-2 pr-4 font-medium">Amount</th>
                <th className="pb-2 font-medium">Year</th>
              </tr>
            </thead>
            <tbody>
              {flows.slice(0, 50).map((d, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-gray-700">{d.donor_name}</td>
                  <td className="py-2 pr-4 text-gray-500">{d.donor_industry}</td>
                  <td className="py-2 pr-4">
                    <span style={{ color: PARTY_COLORS[d.recipient_party] || '#888' }}>
                      {d.recipient_party}
                    </span>
                  </td>
                  <td className="py-2 pr-4 font-mono text-gray-700">{formatCurrency(d.amount_aud)}</td>
                  <td className="py-2 text-gray-400">{d.financial_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="space-y-0.5">
            {flows.slice(0, 50).map((f, i) => (
              <FlowBar
                key={i}
                label={f.industry || f.year || 'Unknown'}
                party={f.party || f.recipient_party || ''}
                total={f.total || 0}
                maxTotal={maxTotal}
              />
            ))}
          </div>
        )}
      </div>

      {/* Source note */}
      <p className="text-[10px] text-gray-300 mt-6">
        Source: AEC Transparency Register. Industry classification is automated and may not be 100% accurate.
      </p>
    </div>
  )
}
