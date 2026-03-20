'use client'

export default function YearNav({ years }) {
  if (!years || years.length === 0) return null

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400 mb-3">
        Jump to year
      </p>
      <div className="flex flex-wrap gap-1">
        {years.map(({ year, policies }) => (
          <a
            key={year}
            href={`#year-${year}`}
            className="font-mono text-xs text-gray-400 hover:text-gray-900 px-1.5 py-0.5 rounded hover:bg-gray-100 transition-colors"
          >
            {year}
          </a>
        ))}
      </div>
    </div>
  )
}
