import Link from 'next/link'
import { formatCurrency } from '@/lib/helpers'
import { getCategoryMeta } from '@/lib/categoryMeta'

export default function CategoryHeader({ slug, stats }) {
  const meta = getCategoryMeta(slug)

  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <span className="text-gray-600">{meta.label}</span>
      </div>

      <p className={`text-[11px] font-semibold uppercase tracking-[1.5px] ${meta.colorClass} mb-2`}>
        Category
      </p>
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">{meta.label}</h1>

      {/* Stats strip — reader-framed */}
      <div className="flex flex-wrap gap-8 py-4 border-t border-b border-gray-200 text-sm">
        <div>
          <span className="font-mono font-medium text-gray-900">{stats.totalPolicies}</span>
          <span className="text-gray-400 ml-1.5">decisions tracked</span>
        </div>
        {stats.strongSignals > 0 && (
          <div>
            <span className="font-mono font-medium text-red-600">{stats.strongSignals}</span>
            <span className="text-gray-400 ml-1.5">worth watching</span>
          </div>
        )}
        {stats.totalDonations > 0 && (
          <div>
            <span className="font-mono font-medium text-gray-900">{formatCurrency(stats.totalDonations)}</span>
            <span className="text-gray-400 ml-1.5">in linked donations</span>
          </div>
        )}
        {stats.maxImpact > 0 && (
          <div>
            <span className="font-mono font-medium text-gray-900">{stats.maxImpact}/10</span>
            <span className="text-gray-400 ml-1.5">highest impact</span>
          </div>
        )}
      </div>
    </div>
  )
}
