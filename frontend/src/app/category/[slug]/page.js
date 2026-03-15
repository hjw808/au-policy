import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { getCategoryMeta } from '@/lib/categoryMeta'
import CategoryHeader from '@/components/CategoryHeader'
import TimelineTree from '@/components/TimelineTree'
import YearNav from '@/components/YearNav'
import { formatCurrency } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

async function getCategoryData(slug) {
  const supabase = createServerClient()

  // Get all policies in this category
  const { data: policies } = await supabase
    .from('policies')
    .select(`
      id, external_id, date, title, category, status, flag_score, flag_reasons, matched_keywords,
      timeline_events (
        id, impact_score, confidence_score, primary_beneficiaries, disadvantaged_groups,
        revenue_impact, corporate_advantage, conflict_of_interest_flags, linked_donations,
        comparison_country, comparison_approach, comparison_outcome, analysis_json
      )
    `)
    .eq('category', slug)
    .in('status', ['flagged', 'complete'])
    .order('date', { ascending: false })

  if (!policies || policies.length === 0) return null

  // Group by year
  const byYear = {}
  for (const p of policies) {
    const year = p.date ? new Date(p.date).getFullYear() : 0
    if (!byYear[year]) byYear[year] = []
    byYear[year].push(p)
  }

  const years = Object.entries(byYear)
    .map(([year, policies]) => ({ year: parseInt(year), policies }))
    .sort((a, b) => b.year - a.year)

  // Get donation totals for this category's industries
  const industryMap = {
    mining: ['mining'], oil_gas: ['oil_gas', 'energy'], tax: ['financial'],
    property: ['property'], healthcare: ['healthcare'], defence: ['defence'],
    resources: ['mining', 'agriculture', 'oil_gas'], superannuation: ['financial'],
    trade: ['retail', 'agriculture'], subsidy: ['agriculture', 'mining', 'energy'],
    general: [],
  }
  const industries = industryMap[slug] || []
  let topDonations = []
  let totalDonations = 0

  if (industries.length > 0) {
    const { data } = await supabase
      .from('donations')
      .select('donor_name, donor_industry, recipient_party, amount_aud, financial_year')
      .in('donor_industry', industries)
      .order('amount_aud', { ascending: false })
      .limit(10)
    topDonations = data || []
    totalDonations = topDonations.reduce((sum, d) => sum + (d.amount_aud || 0), 0)
  }

  const events = policies.flatMap(p => p.timeline_events || [])
  const maxImpact = Math.max(0, ...events.map(e => e.impact_score || 0))
  const strongSignals = events.filter(e =>
    e.analysis_json?.corruption_signal_strength === 'strong'
  ).length

  return {
    years,
    topDonations,
    stats: {
      totalPolicies: policies.length,
      totalDonations,
      maxImpact,
      strongSignals,
    }
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = params
  const meta = getCategoryMeta(slug)
  const data = await getCategoryData(slug)

  if (!data) return notFound()

  return (
    <div>
      <CategoryHeader slug={slug} stats={data.stats} />

      <div className="flex gap-8">
        {/* Main timeline */}
        <div className="flex-1 min-w-0">
          <TimelineTree years={data.years} accentColor={meta.color} />
        </div>

        {/* Sidebar — year nav + top donations */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-8">
            <YearNav years={data.years} accentColor={meta.color} />

            {data.topDonations.length > 0 && (
              <div>
                <p className="text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wider">
                  Top Donors
                </p>
                <div className="space-y-2">
                  {data.topDonations.slice(0, 5).map((d, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-gray-300">{d.donor_name}</span>
                      <br />
                      <span className="text-green-400">{formatCurrency(d.amount_aud)}</span>
                      <span className="text-gray-600"> \u2192 {d.recipient_party}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
