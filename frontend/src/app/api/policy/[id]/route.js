import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const supabase = createServerClient()
  const { id } = params

  // Fetch the policy
  const { data: policy, error: pError } = await supabase
    .from('policies')
    .select('*')
    .eq('id', id)
    .single()

  if (pError || !policy) {
    return NextResponse.json({ error: 'Policy not found' }, { status: 404 })
  }

  // Fetch the timeline event (analysis)
  const { data: event } = await supabase
    .from('timeline_events')
    .select('*')
    .eq('policy_id', id)
    .single()

  // Fetch related donations
  const { data: donations } = await supabase
    .from('donations')
    .select('donor_name, donor_industry, recipient_party, amount_aud, financial_year')
    .eq('donor_industry', policy.category)
    .order('amount_aud', { ascending: false })
    .limit(20)

  // Fetch yes-voters with interests
  const { data: voters } = await supabase
    .from('votes')
    .select(`
      vote,
      members:member_id (id, name, party, role,
        member_interests (interest_type, company_name, industry)
      )
    `)
    .eq('policy_id', id)
    .eq('vote', 'yes')
    .limit(50)

  return NextResponse.json({
    policy,
    event: event || null,
    donations: donations || [],
    voters: voters || [],
  })
}
