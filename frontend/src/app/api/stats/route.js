import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createServerClient()

  const [complete, flagged, members, donations, strongSignals] = await Promise.all([
    supabase.from('policies').select('*', { count: 'exact', head: true }).eq('status', 'complete'),
    supabase.from('policies').select('*', { count: 'exact', head: true }).eq('status', 'flagged'),
    supabase.from('members').select('*', { count: 'exact', head: true }),
    supabase.from('donations').select('*', { count: 'exact', head: true }),
    supabase.from('timeline_events').select('*', { count: 'exact', head: true }).gte('impact_score', 7),
  ])

  return NextResponse.json({
    total_complete: complete.count || 0,
    total_flagged: flagged.count || 0,
    total_members: members.count || 0,
    total_donations: donations.count || 0,
    strong_signals: strongSignals.count || 0,
  })
}
