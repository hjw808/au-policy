export default function StatsBar({ stats }) {
  const items = [
    { label: 'Policies', value: stats?.total_complete || 0 },
    { label: 'Strong signals', value: stats?.strong_signals || 0 },
    { label: 'MPs tracked', value: stats?.total_members || 0 },
    { label: 'Donation records', value: stats?.total_donations || 0 },
  ]

  return (
    <div className="flex flex-wrap gap-10 py-5 border-t border-b border-gray-200">
      {items.map(item => (
        <div key={item.label}>
          <p className="font-mono text-2xl font-medium text-gray-900">
            {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
