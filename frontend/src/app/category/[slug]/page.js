import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { getCategoryMeta, getRawSlugsForCategory } from '@/lib/categoryMeta'
import CategoryHeader from '@/components/CategoryHeader'
import TimelineTree from '@/components/TimelineTree'
import YearNav from '@/components/YearNav'
import { formatCurrency } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

async function getCategoryData(slug) {
  const supabase = createServerClient()

  // Get all raw category slugs that map to this canonical category
  const rawSlugs = getRawSlugsForCategory(slug)

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
    .in('category', rawSlugs)
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

  // Get donation totals
  const industryMap = {
    mining: ['mining'], oil_gas: ['oil_gas', 'energy'], tax: ['financial', 'tax'],
    property: ['property'], healthcare: ['healthcare'], defence: ['defence'],
    resources: ['mining', 'agriculture', 'oil_gas'], superannuation: ['financial'],
    trade: ['retail', 'agriculture'], subsidy: ['agriculture', 'mining', 'energy'],
    infrastructure: ['infrastructure', 'construction'],
    financial_regulation: ['financial', 'banking'],
    education: ['education'],
    immigration: ['immigration'],
    industrial_relations: ['industrial'],
    agriculture: ['agriculture'],
    gambling: ['gambling', 'entertainment'],
    media: ['media', 'telecommunications'],
    indigenous: ['indigenous'],
    environment: ['environment'],
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
  const data = await getCategoryData(slug)

  if (!data) return notFound()

  return (
    <div>
      <CategoryHeader slug={slug} stats={data.stats} />

      <div className="flex gap-8">
        {/* Main timeline */}
        <div className="flex-1 min-w-0">
          <TimelineTree years={data.years} />
        </div>

        {/* Sidebar — year nav + top donations */}
        <aside className="hidden lg:block w-48 shrink-0">
          <div className="sticky top-20 space-y-8">
            <YearNav years={data.years} />

            {data.topDonations.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400 mb-3">
                  Top Donors
                </p>
                <div className="space-y-2">
                  {data.topDonations.slice(0, 5).map((d, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-gray-700">{d.donor_name}</span>
                      <br />
                      <span className="font-mono text-gray-500">{formatCurrency(d.amount_aud)}</span>
                      <span className="text-gray-400"> {'\u2192'} {d.recipient_party}</span>
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
