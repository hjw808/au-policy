import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

// Connect with SAME method as the seed script
const localClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  { auth: { persistSession: false } }
)

// Connect with SAME method as Vercel frontend
const vercelClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  { auth: { persistSession: false } }
)

async function check() {
  console.log('\n=== DATA DIAGNOSTIC ===\n')

  // 1. Check URLs
  console.log('Local SUPABASE_URL:', process.env.SUPABASE_URL)
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL || '(NOT SET)')
  console.log('')

  // 2. Count ALL policies (no filter)
  const { count: totalAll, error: e1 } = await localClient
    .from('policies')
    .select('*', { count: 'exact', head: true })
  console.log('Total policies (all statuses):', totalAll, e1 ? `ERROR: ${e1.message}` : '')

  // 3. Count by status
  for (const status of ['complete', 'flagged', 'pending', 'skipped']) {
    const { count } = await localClient
      .from('policies')
      .select('*', { count: 'exact', head: true })
      .eq('status', status)
    console.log(`  status="${status}":`, count)
  }

  // 4. Sample some policy titles and statuses
  const { data: sample } = await localClient
    .from('policies')
    .select('external_id, title, status, category')
    .order('external_id')
    .limit(10)
  console.log('\nFirst 10 policies:')
  for (const p of (sample || [])) {
    console.log(`  ${p.external_id} | ${p.status} | ${p.category} | ${p.title}`)
  }

  // 5. Check if NEXT_PUBLIC_SUPABASE_URL returns different data
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== process.env.SUPABASE_URL) {
    console.log('\n⚠ WARNING: NEXT_PUBLIC_SUPABASE_URL differs from SUPABASE_URL!')
    console.log('  SUPABASE_URL:', process.env.SUPABASE_URL)
    console.log('  NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    const { count: vercelCount } = await vercelClient
      .from('policies')
      .select('*', { count: 'exact', head: true })
    console.log('  Vercel-style query total:', vercelCount)
  } else {
    console.log('\nURLs match (or NEXT_PUBLIC not set) — same database.')
  }

  // 6. Other table counts
  const { count: members } = await localClient.from('members').select('*', { count: 'exact', head: true })
  const { count: donations } = await localClient.from('donations').select('*', { count: 'exact', head: true })
  const { count: events } = await localClient.from('timeline_events').select('*', { count: 'exact', head: true })
  console.log('\nMembers:', members)
  console.log('Donations:', donations)
  console.log('Timeline events:', events)

  console.log('\n=== END DIAGNOSTIC ===\n')
}

check().catch(err => console.error('Diagnostic failed:', err.message))
