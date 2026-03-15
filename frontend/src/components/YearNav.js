'use client'
import { useState, useEffect } from 'react'

export default function YearNav({ years, accentColor }) {
  const [activeYear, setActiveYear] = useState(years[0]?.year)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const year = parseInt(entry.target.id.replace('year-', ''))
            if (year) setActiveYear(year)
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    for (const y of years) {
      const el = document.getElementById(`year-${y.year}`)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [years])

  const scrollToYear = (year) => {
    const el = document.getElementById(`year-${year}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="space-y-1">
      <p className="text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wider">Jump to year</p>
      {years.map(y => (
        <button
          key={y.year}
          onClick={() => scrollToYear(y.year)}
          className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all ${
            activeYear === y.year
              ? 'text-white font-semibold'
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
          }`}
          style={activeYear === y.year ? { backgroundColor: `${accentColor}20`, color: accentColor } : {}}
        >
          {y.year}
          <span className="text-xs text-gray-600 ml-2">{y.policies.length}</span>
        </button>
      ))}
    </div>
  )
}
