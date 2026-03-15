import Link from 'next/link'
import { formatCurrency } from '@/lib/helpers'
import { getCategoryMeta } from '@/lib/categoryMeta'

export default function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return (
      <div className="bg-[#111827] rounded-xl p-12 text-center border border-white/5">
        <p className="text-gray-400">No policy categories found yet.</p>
        <p className="text-sm text-gray-600 mt-2">Run the ingestion pipeline to populate data.</p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map(cat => {
        const meta = getCategoryMeta(cat.slug)
        const signalColors = {
          strong: 'text-red-400',
          moderate: 'text-orange-400',
          weak: 'text-yellow-400',
          none: 'text-gray-600',
        }

        return (
          <Link key={cat.slug} href={`/category/${cat.slug}`}>
            <div className={`relative overflow-hidden bg-gradient-to-br ${meta.bg} rounded-2xl p-6 border ${meta.border} hover:scale-[1.02] transition-all cursor-pointer group`}>
              {/* Icon */}
              <div className="text-3xl mb-3">{meta.icon}</div>

              {/* Name */}
              <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors">
                {meta.label}
              </h3>

              {/* Stats row */}
              <div className="flex items-center gap-4 mt-3 text-sm">
                <span className="text-gray-400">
                  <span className="font-semibold text-gray-200">{cat.policyCount}</span> policies
                </span>
                {cat.donationTotal > 0 && (
                  <span className="text-green-400">
                    {formatCurrency(cat.donationTotal)}
                  </span>
                )}
              </div>

              {/* Signal */}
              {cat.strongestSignal && cat.strongestSignal !== 'none' && (
                <div className={`mt-2 text-xs font-semibold ${signalColors[cat.strongestSignal]}`}>
                  {cat.strongestSignal === 'strong' ? '\u26A0 Strong signals found' :
                   cat.strongestSignal === 'moderate' ? '\u26A0 Moderate signals found' :
                   'Weak signals detected'}
                </div>
              )}

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 text-gray-600 group-hover:text-gray-400 transition-colors text-lg">
                \u2192
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
