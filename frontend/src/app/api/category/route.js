import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  }

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

  // Get donations relevant to this category's industry
  const industryMap = {
    mining: ['mining'], oil_gas: ['oil_gas', 'energy'], tax: ['financial'],
    property: ['property'], healthcare: ['healthcare'], defence: ['defence'],
    resources: ['mining', 'agriculture', 'oil_gas'], superannuation: ['financial'],
    trade: ['retail', 'agriculture'], subsidy: ['agriculture', 'mining', 'energy'],
    general: [],
  }
  const industries = industryMap[slug] || []

  let donations = []
  if (industries.length > 0) {
    const { data } = await supabase
      .from('donations')
      .select('donor_name, donor_industry, recipient_party, amount_aud, financial_year')
      .in('donor_industry', industries)
      .order('amount_aud', { ascending: false })
      .limit(50)
    donations = data || []
  }

  // Group policies by year
  const byYear = {}
  for (const p of (policies || [])) {
    const year = p.date ? new Date(p.date).getFullYear() : 'Unknown'
    if (!byYear[year]) byYear[year] = []
    byYear[year].push(p)
  }

  // Convert to sorted array
  const years = Object.entries(byYear)
    .map(([year, policies]) => ({ year: parseInt(year) || 0, policies }))
    .sort((a, b) => b.year - a.year)

  // Summary stats
  const totalPolicies = (policies || []).length
  const totalDonations = donations.reduce((sum, d) => sum + (d.amount_aud || 0), 0)
  const events = (policies || []).flatMap(p => p.timeline_events || [])
  const maxImpact = Math.max(0, ...events.map(e => e.impact_score || 0))
  const strongSignals = events.filter(e =>
    e.analysis_json?.corruption_signal_strength === 'strong'
  ).length

  return NextResponse.json({
    slug,
    years,
    topDonations: donations.slice(0, 20),
    stats: { totalPolicies, totalDonations, maxImpact, strongSignals },
  })
}
