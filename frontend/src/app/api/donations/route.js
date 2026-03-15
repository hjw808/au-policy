import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const groupBy = searchParams.get('groupBy') || 'industry' // industry | party | year

  if (groupBy === 'industry') {
    // Aggregate donations by industry → party
    const { data } = await supabase
      .from('donations')
      .select('donor_industry, recipient_party, amount_aud')

    // Group in JS (Supabase free tier doesn't have custom RPC functions)
    const groups = {}
    for (const d of (data || [])) {
      const key = `${d.donor_industry}|${d.recipient_party}`
      if (!groups[key]) {
        groups[key] = { industry: d.donor_industry, party: d.recipient_party, total: 0, count: 0 }
      }
      groups[key].total += d.amount_aud || 0
      groups[key].count++
    }

    const flows = Object.values(groups)
      .sort((a, b) => b.total - a.total)
      .slice(0, 100)

    return NextResponse.json({ flows })
  }

  if (groupBy === 'year') {
    const { data } = await supabase
      .from('donations')
      .select('financial_year, recipient_party, amount_aud')

    const groups = {}
    for (const d of (data || [])) {
      const key = `${d.financial_year}|${d.recipient_party}`
      if (!groups[key]) {
        groups[key] = { year: d.financial_year, party: d.recipient_party, total: 0, count: 0 }
      }
      groups[key].total += d.amount_aud || 0
      groups[key].count++
    }

    return NextResponse.json({
      flows: Object.values(groups).sort((a, b) => (a.year || '').localeCompare(b.year || '')),
    })
  }

  // Default: top donors
  const { data } = await supabase
    .from('donations')
    .select('donor_name, donor_industry, recipient_party, amount_aud, financial_year')
    .order('amount_aud', { ascending: false })
    .limit(100)

  return NextResponse.json({ donations: data || [] })
}
