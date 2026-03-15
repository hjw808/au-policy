import { createServerClient } from '@/lib/supabase'
import PolicyCard from '@/components/PolicyCard'
import StatsBar from '@/components/StatsBar'
import Link from 'next/link'

export const revalidate = 3600 // Revalidate every hour

async function getHomeData() {
  const supabase = createServerClient()

  const [eventsRes, statsRes, strongRes] = await Promise.all([
    supabase
      .from('timeline_events')
      .select('*')
      .order('date', { ascending: false })
      .limit(20),
    Promise.all([
      supabase.from('policies').select('*', { count: 'exact', head: true }).eq('status', 'complete'),
      supabase.from('members').select('*', { count: 'exact', head: true }),
      supabase.from('donations').select('*', { count: 'exact', head: true }),
      supabase.from('timeline_events').select('*', { count: 'exact', head: true }).gte('impact_score', 7),
    ]),
    supabase
      .from('timeline_events')
      .select('*')
      .gte('impact_score', 7)
      .order('impact_score', { ascending: false })
      .limit(5),
  ])

  return {
    events: eventsRes.data || [],
    stats: {
      total_complete: statsRes[0].count || 0,
      total_members: statsRes[1].count || 0,
      total_donations: statsRes[2].count || 0,
      strong_signals: statsRes[3].count || 0,
    },
    topImpact: strongRes.data || [],
  }
}

export default async function HomePage() {
  const { events, stats, topImpact } = await getHomeData()

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
          Tracking Australian parliamentary decisions — who benefited, who donated, and who had conflicts of interest.
        </p>
        <p className="text-sm text-gray-600">
          Built with public data from OpenAustralia, AEC, ATO, and Parliament House.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <StatsBar stats={stats} />
      </section>

      {/* Highest Impact */}
      {topImpact.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-200 mb-4">Highest Impact Decisions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topImpact.map(event => (
              <PolicyCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Timeline */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-200">Recent Analysed Decisions</h2>
          <Link href="/search" className="text-sm text-blue-400 hover:text-blue-300">
            View all &rarr;
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="bg-[#111827] rounded-xl p-12 text-center border border-white/5">
            <p className="text-3xl mb-4">&#128202;</p>
            <p className="text-gray-400 mb-2">No policies analysed yet.</p>
            <p className="text-sm text-gray-600">
              Run the ingestion pipeline and Claude analysis to populate the timeline.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {events.map(event => (
              <PolicyCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

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
        </div>
      </section>
    </div>
  )
}
