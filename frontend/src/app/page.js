import { createServerClient } from '@/lib/supabase'
import Link from 'next/link'
import { getCategoryMeta } from '@/lib/categoryMeta'
import { formatDate, getCategoryColor } from '@/lib/helpers'
import SignalBadge from '@/components/SignalBadge'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

async function getHomeData() {
  const supabase = createServerClient()

  const [policiesRes, eventsRes, statsRes] = await Promise.all([
    supabase
      .from('policies')
      .select('category, flag_score, status')
      .in('status', ['flagged', 'complete']),
    supabase
      .from('timeline_events')
      .select('category, impact_score, analysis_json, date, title, policy_id')
      .order('impact_score', { ascending: false }),
    Promise.all([
      supabase.from('policies').select('*', { count: 'exact', head: true }).eq('status', 'complete'),
      supabase.from('members').select('*', { count: 'exact', head: true }),
      supabase.from('donations').select('*', { count: 'exact', head: true }),
      supabase.from('timeline_events').select('*', { count: 'exact', head: true }).gte('impact_score', 7),
    ]),
  ])

  const policies = policiesRes.data || []
  const events = eventsRes.data || []

  // Build category summaries
  const cats = {}
  for (const p of policies) {
    const cat = p.category || 'general'
    if (!cats[cat]) cats[cat] = { slug: cat, policyCount: 0 }
    cats[cat].policyCount++
  }

  const categories = Object.values(cats)
    .filter(c => c.policyCount > 0)
    .sort((a, b) => b.policyCount - a.policyCount)

  // Top impact highlights
  const highlights = events
    .filter(e => e.impact_score >= 6)
    .slice(0, 10)

  return {
    categories,
    highlights,
    stats: {
      total_complete: statsRes[0].count || 0,
      total_members: statsRes[1].count || 0,
      total_donations: statsRes[2].count || 0,
      strong_signals: statsRes[3].count || 0,
    },
  }
}

export default async function HomePage() {
  const { categories, highlights, stats } = await getHomeData()

  return (
    <div>
      {/* Hero — pure typography */}
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-[42px] font-bold leading-[1.1] tracking-tight text-gray-900 mb-3">
          Who benefits from<br />Australian policy?
        </h1>
        <p className="text-base text-gray-500 max-w-xl leading-relaxed">
          {stats.total_complete} parliamentary decisions cross-referenced with political
          donations, declared interests, and corporate tax data. All from public government records.
        </p>
      </div>

      {/* Numbers — inline row, not boxed cards */}
      <div className="flex flex-wrap gap-10 py-5 border-t border-b border-gray-200 mb-10">
        <div>
          <p className="font-mono text-2xl font-medium text-gray-900">{Number(stats.total_complete).toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-0.5">Policies</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-medium text-gray-900">{Number(stats.total_members).toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-0.5">MPs tracked</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-medium text-gray-900">{Number(stats.total_donations).toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-0.5">Donation records</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-medium text-gray-900">{Number(stats.strong_signals).toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-0.5">Strong signals</p>
        </div>
      </div>

      {/* Browse by category — text links, not cards */}
      <div className="mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400 mb-4">Browse by category</p>
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
      </div>

      {/* Content stream — highest impact decisions */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400 mb-4">Highest impact decisions</p>
        <div>
          {highlights.map((event, i) => {
            const signal = event.analysis_json?.corruption_signal_strength || 'none'
            const meta = getCategoryMeta(event.category)
            const catColor = getCategoryColor(event.category)

            return (
              <Link key={event.policy_id || i} href={`/policy/${event.policy_id}`}>
                <div className="py-4 border-b border-gray-100 grid grid-cols-[70px_1fr_auto] gap-4 items-start hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded">
                  {/* Date */}
                  <span className="font-mono text-xs text-gray-400 pt-0.5">
                    {formatDate(event.date)}
                  </span>

                  {/* Body */}
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.5px] mb-1 ${catColor}`}>
                      {meta.label}
                    </p>
                    <p className="text-[15px] font-semibold text-gray-900 leading-snug">
                      {event.title}
                    </p>
                  </div>

                  {/* Signal dot */}
                  <div className="text-right pt-1">
                    <SignalBadge strength={signal} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
