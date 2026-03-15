import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createServerClient()

  // Get all policies with their timeline events
  const { data: policies } = await supabase
    .from('policies')
    .select('category, flag_score, status')
    .in('status', ['flagged', 'complete'])

  const { data: events } = await supabase
    .from('timeline_events')
    .select('category, impact_score, analysis_json')

  const { data: donations } = await supabase
    .from('donations')
    .select('donor_industry, amount_aud')

  // Build category summaries
  const cats = {}

  for (const p of (policies || [])) {
    const cat = p.category || 'general'
    if (!cats[cat]) cats[cat] = { slug: cat, policyCount: 0, donationTotal: 0, strongestSignal: 'none', maxImpact: 0 }
    cats[cat].policyCount++
  }

  // Add impact and signal data from timeline events
  for (const e of (events || [])) {
    const cat = e.category || 'general'
    if (!cats[cat]) cats[cat] = { slug: cat, policyCount: 0, donationTotal: 0, strongestSignal: 'none', maxImpact: 0 }
    const signal = e.analysis_json?.corruption_signal_strength || 'none'
    const signalRank = { strong: 3, moderate: 2, weak: 1, none: 0 }
    if ((signalRank[signal] || 0) > (signalRank[cats[cat].strongestSignal] || 0)) {
      cats[cat].strongestSignal = signal
    }
    if ((e.impact_score || 0) > cats[cat].maxImpact) {
      cats[cat].maxImpact = e.impact_score || 0
    }
  }

  // Map donation industries to policy categories (approximate)
  const industryToCat = {
    mining: 'mining', oil_gas: 'oil_gas', financial: 'tax', property: 'property',
    healthcare: 'healthcare', defence: 'defence', energy: 'oil_gas', agriculture: 'resources',
    technology: 'general', gambling: 'general', retail: 'general', media: 'general', union: 'general',
  }
  for (const d of (donations || [])) {
    const cat = industryToCat[d.donor_industry] || 'general'
    if (!cats[cat]) cats[cat] = { slug: cat, policyCount: 0, donationTotal: 0, strongestSignal: 'none', maxImpact: 0 }
    cats[cat].donationTotal += d.amount_aud || 0
  }

  // Sort by policy count descending
  const categories = Object.values(cats)
    .filter(c => c.policyCount > 0)
    .sort((a, b) => b.policyCount - a.policyCount)

  return NextResponse.json({ categories })
}
