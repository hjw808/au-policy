import Link from 'next/link'
import { formatCurrency } from '@/lib/helpers'
import { getCategoryMeta } from '@/lib/categoryMeta'

export default function CategoryHeader({ slug, stats }) {
  const meta = getCategoryMeta(slug)

  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <span>/</span>
        <span className="text-gray-300">{meta.label}</span>
      </div>

      {/* Title */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{meta.icon}</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-100">{meta.label}</h1>
          <p className="text-gray-500 mt-1">
            {stats.totalPolicies} policies tracked across 30 years of parliament
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="flex flex-wrap gap-6 mt-4">
        <div>
          <span className="text-2xl font-bold text-gray-100">{stats.totalPolicies}</span>
          <span className="text-sm text-gray-500 ml-2">policies</span>
        </div>
        {stats.totalDonations > 0 && (
          <div>
            <span className="text-2xl font-bold text-green-400">{formatCurrency(stats.totalDonations)}</span>
            <span className="text-sm text-gray-500 ml-2">in linked donations</span>
          </div>
        )}
        {stats.strongSignals > 0 && (
          <div>
            <span className="text-2xl font-bold text-red-400">{stats.strongSignals}</span>
            <span className="text-sm text-gray-500 ml-2">strong signals</span>
          </div>
        )}
        {stats.maxImpact > 0 && (
          <div>
            <span className="text-2xl font-bold text-orange-400">{stats.maxImpact}</span>
            <span className="text-sm text-gray-500 ml-2">highest impact</span>
          </div>
        )}
      </div>
    </div>
  )
}
