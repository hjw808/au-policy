import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const supabase = createServerClient()
  const { id } = params

  // Fetch member
  const { data: member, error } = await supabase
    .from('members')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !member) {
    return NextResponse.json({ error: 'Member not found' }, { status: 404 })
  }

  // Fetch their declared interests
  const { data: interests } = await supabase
    .from('member_interests')
    .select('*')
    .eq('member_id', id)

  // Fetch their votes on flagged/complete policies
  const { data: votes } = await supabase
    .from('votes')
    .select(`
      vote,
      policies:policy_id (id, title, date, category, flag_score, status)
    `)
    .eq('member_id', id)
    .limit(100)

  // Get donations to their party
  const { data: partyDonations } = await supabase
    .from('donations')
    .select('donor_name, donor_industry, amount_aud, financial_year')
    .eq('recipient_party', member.party)
    .order('amount_aud', { ascending: false })
    .limit(20)

  return NextResponse.json({
    member,
    interests: interests || [],
    votes: votes || [],
    partyDonations: partyDonations || [],
  })
}
