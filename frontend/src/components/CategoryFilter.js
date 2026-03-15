'use client'
import { categoryLabels } from '@/lib/helpers'

export default function CategoryFilter({ selected, onChange }) {
  const categories = ['all', ...Object.keys(categoryLabels)]

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            selected === cat
              ? 'bg-blue-900/50 border-blue-500 text-blue-300'
              : 'bg-transparent border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300'
          }`}
        >
          {cat === 'all' ? 'All Categories' : categoryLabels[cat] || cat}
        </button>
      ))}
    </div>
  )
}
