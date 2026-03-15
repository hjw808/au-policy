import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const category = searchParams.get('category')
  const minScore = parseInt(searchParams.get('minScore') || '0')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 25
  const offset = (page - 1) * limit

  if (!query && !category) {
    return NextResponse.json({ results: [], total: 0 })
  }

  let dbQuery = supabase
    .from('policies')
    .select(`
      id, title, date, category, flag_score, status, matched_keywords,
      timeline_events (impact_score, primary_beneficiaries, analysis_json)
    `, { count: 'exact' })
    .in('status', ['flagged', 'complete'])
    .gte('flag_score', minScore)
    .order('flag_score', { ascending: false })
    .range(offset, offset + limit - 1)

  // Full-text search using PostgreSQL tsvector
  if (query) {
    dbQuery = dbQuery.textSearch('fts', query, { type: 'websearch' })
  }

  if (category && category !== 'all') {
    dbQuery = dbQuery.eq('category', category)
  }

  const { data, count, error } = await dbQuery

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    results: data || [],
    total: count || 0,
    page,
    totalPages: Math.ceil((count || 0) / limit),
  })
}
