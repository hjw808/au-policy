import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const party = searchParams.get('party')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 50
  const offset = (page - 1) * limit

  let query = supabase
    .from('members')
    .select('id, name, party, electorate, role', { count: 'exact' })
    .order('name')
    .range(offset, offset + limit - 1)

  if (party && party !== 'all') {
    query = query.eq('party', party)
  }

  const { data, count, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    members: data || [],
    total: count || 0,
    page,
  })
}
