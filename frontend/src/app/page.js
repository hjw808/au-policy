import { createServerClient } from '@/lib/supabase'
import CategoryGrid from '@/components/CategoryGrid'
import StatsBar from '@/components/StatsBar'
import SignalBadge from '@/components/SignalBadge'
import Link from 'next/link'
import { getCategoryMeta } from '@/lib/categoryMeta'
import { formatDate } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

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
    if (!cats[cat]) cats[cat] = { slug: cat, policyCount: 0, donationTotal: 0, strongestSignal: 'none', maxImpact: 0 }
    cats[cat].policyCount++
  }
  for (const e of events) {
    const cat = e.category || 'general'
    if (!cats[cat]) cats[cat] = { slug: cat, policyCount: 0, donationTotal: 0, strongestSignal: 'none', maxImpact: 0 }
    const signal = e.analysis_json?.corruption_signal_strength || 'none'
    const rank = { strong: 3, moderate: 2, weak: 1, none: 0 }
    if ((rank[signal] || 0) > (rank[cats[cat].strongestSignal] || 0)) {
      cats[cat].strongestSignal = signal
    }
    if ((e.impact_score || 0) > cats[cat].maxImpact) {
      cats[cat].maxImpact = e.impact_score || 0
    }
  }

  const categories = Object.values(cats)
    .filter(c => c.policyCount > 0)
    .sort((a, b) => b.policyCount - a.policyCount)

  // Top impact highlights
  const highlights = events
    .filter(e => e.impact_score >= 6)
    .slice(0, 5)

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
      {/* Hero */}
      <section className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Follow the Money
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          30 years of Australian parliamentary decisions. Who benefited, who donated, and who had conflicts of interest.
        </p>
        <p className="text-sm text-gray-600">
          Pick a category below to explore its policy timeline.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-10">
        <StatsBar stats={stats} />
      </section>

      {/* Category Grid */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-200 mb-5">Explore by Category</h2>
        <CategoryGrid categories={categories} />
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-200 mb-5">Highest Impact Decisions</h2>
          <div className="space-y-3">
            {highlights.map((event, i) => {
              const signal = event.analysis_json?.corruption_signal_strength || 'none'
              const meta = getCategoryMeta(event.category)
              return (
                <Link key={event.policy_id || i} href={`/policy/${event.policy_id}`}>
                  <div className="bg-[#111827] border border-white/5 rounded-xl p-4 hover:border-blue-500/30 transition-all flex items-center gap-4 mb-3">
                    <span className="text-2xl">{meta.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-xs text-gray-500">{formatDate(event.date)}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">
                          {meta.label}
                        </span>
                        <SignalBadge strength={signal} size="sm" />
                      </div>
                      <p className="text-sm font-medium text-gray-200 truncate">{event.title}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xl font-bold" style={{
                        color: event.impact_score >= 7 ? '#ef4444' : '#f97316'
                      }}>
                        {event.impact_score}
                      </span>
                      <p className="text-xs text-gray-600">impact</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 text-center border border-white/5">
        <h2 className="text-xl font-bold text-gray-200 mb-2">Want to dig deeper?</h2>
        <p className="text-gray-400 mb-6">
          Search for specific policies, explore MP profiles, or follow the money trail.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/search" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
            Search Policies
          </Link>
          <Link href="/money" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors border border-white/10">
            Follow the Money
          </Link>
          <Link href="/mp" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors border border-white/10">
            Browse MPs
          </Link>
        </div>
      </section>
    </div>
  )
}
