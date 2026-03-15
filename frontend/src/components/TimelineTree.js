import PolicyBranch from './PolicyBranch'

export default function TimelineTree({ years, accentColor }) {
  if (!years || years.length === 0) {
    return (
      <div className="bg-[#111827] rounded-xl p-12 text-center border border-white/5">
        <p className="text-gray-400">No policies found in this category yet.</p>
      </div>
    )
  }

  return (
    <div className="relative pl-8 md:pl-12">
      {/* Vertical timeline rail */}
      <div
        className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5"
        style={{ background: `linear-gradient(to bottom, ${accentColor || '#3b82f6'}, ${accentColor || '#3b82f6'}44)` }}
      />

      {years.map((yearGroup, idx) => (
        <div key={yearGroup.year} id={`year-${yearGroup.year}`} className="relative mb-10">
          {/* Year dot */}
          <div
            className="absolute -left-5 md:-left-7 top-1 w-4 h-4 rounded-full border-[3px] border-[#0a0e1a] z-10"
            style={{ backgroundColor: accentColor || '#3b82f6' }}
          />

          {/* Year label */}
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl font-bold" style={{ color: accentColor || '#3b82f6' }}>
              {yearGroup.year}
            </h3>
            <span className="text-xs text-gray-600">
              {yearGroup.policies.length} {yearGroup.policies.length === 1 ? 'policy' : 'policies'}
            </span>
          </div>

          {/* Policy branches */}
          <div className="space-y-3">
            {yearGroup.policies.map(policy => (
              <PolicyBranch key={policy.id} policy={policy} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
