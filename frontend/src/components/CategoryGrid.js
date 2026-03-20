import Link from 'next/link'
import { getCategoryMeta } from '@/lib/categoryMeta'

export default function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return (
      <p className="text-sm text-gray-400">No policy categories found yet. Run the ingestion pipeline to populate data.</p>
    )
  }

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {categories.map(cat => {
        const meta = getCategoryMeta(cat.slug)
        return (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
          >
            {meta.label} <span className="font-mono text-xs text-gray-400">{cat.policyCount}</span>
          </Link>
        )
      })}
    </div>
  )
}
