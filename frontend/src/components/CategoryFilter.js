'use client'
import { categoryLabels } from '@/lib/helpers'

export default function CategoryFilter({ selected, onChange }) {
  const categories = ['all', ...Object.keys(categoryLabels)]

  return (
    <div className="flex flex-wrap gap-1">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`text-xs px-3 py-1.5 rounded transition-colors ${
            selected === cat
              ? 'bg-gray-900 text-white'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {cat === 'all' ? 'All' : categoryLabels[cat] || cat}
        </button>
      ))}
    </div>
  )
}
