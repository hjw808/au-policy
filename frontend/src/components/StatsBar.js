export default function StatsBar({ stats }) {
  const items = [
    { label: 'Policies Analysed', value: stats?.total_complete || 0, color: 'text-blue-400' },
    { label: 'Strong Signals', value: stats?.strong_signals || 0, color: 'text-red-400' },
    { label: 'MPs Tracked', value: stats?.total_members || 0, color: 'text-purple-400' },
    { label: 'Donations Mapped', value: stats?.total_donations || 0, color: 'text-green-400' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(item => (
        <div key={item.label} className="bg-[#111827] rounded-xl p-4 border border-white/5 text-center">
          <p className={`text-3xl font-bold ${item.color}`}>
            {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
          </p>
          <p className="text-xs text-gray-500 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
