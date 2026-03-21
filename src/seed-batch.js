/**
 * Batch Seed Script — Creates policies, timeline events, members, and donations.
 *
 * Run: node src/seed-batch.js [--update]
 *
 * This script:
 * 1. Reads ALL analysis files from analyses/ directory
 * 2. Creates policy records in Supabase for each analysis
 * 3. Creates timeline_events linked to those policies
 * 4. Extracts members from conflict_of_interest_flags → members table
 * 5. Extracts donations from linked_donations → donations table
 * Safe to run multiple times (uses upserts and skips existing).
 *
 * --update flag: overwrites existing timeline_events instead of skipping
 */

import 'dotenv/config'
import { validateEnv } from './lib/env.js'
import supabase from './db/client.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

validateEnv(['SUPABASE_URL', 'SUPABASE_SERVICE_KEY'])

function loadAnalysisFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const start = content.indexOf('[')
  const end = content.lastIndexOf(']') + 1
  const arrayStr = content.substring(start, end)
  const fn = new Function('return ' + arrayStr)
  return fn()
}

/**
 * Extract a clean member ID from a name string.
 * "John Howard" → "john-howard"
 * "Martin Ferguson (Resources Minister)" → "martin-ferguson"
 */
function memberNameToId(name) {
  return name
    .replace(/\s*\(.*?\)\s*/g, '') // strip parenthetical
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Extract party and role from member string.
 * "Martin Ferguson (Resources Minister 2007-2013)" → { role: "Resources Minister 2007-2013" }
 */
function parseMemberInfo(name) {
  const match = name.match(/\(([^)]+)\)/)
  const cleanName = name.replace(/\s*\(.*?\)\s*/g, '').trim()
  return {
    name: cleanName,
    role: match ? match[1] : null,
  }
}

async function seedBatch() {
  console.log('📊 Batch seeding policies, events, members, and donations\n')

  // Load ALL analysis files from analyses/ directory
  const analysisDir = path.join(__dirname, '..', 'analyses')
  const allFiles = fs.readdirSync(analysisDir).filter(f => f.endsWith('.js'))

  let allAnalyses = []
  for (const f of allFiles) {
    const filePath = path.join(analysisDir, f)
    try {
      const entries = loadAnalysisFile(filePath)
      console.log(`  Loaded ${entries.length} analyses from ${f}`)
      allAnalyses.push(...entries)
    } catch (err) {
      console.log(`  ⚠ Failed to load ${f}: ${err.message}`)
    }
  }
  console.log(`\n  Total analyses to process: ${allAnalyses.length}\n`)

  // ============================================================
  // STEP 1: Upsert policy records
  // ============================================================
  let policiesCreated = 0

  for (const a of allAnalyses) {
    const policyData = {
      external_id: a.ext,
      date: a.date,
      title: a.title,
      category: a.category,
      source: 'batch-analysis',
      raw_text: `Policy analysis for ${a.title}`,
      matched_keywords: [a.category],
      status: 'complete',
      flag_score: a.impact_score,
      flag_reasons: [],
    }

    const { error } = await supabase
      .from('policies')
      .upsert(policyData, { onConflict: 'external_id' })

    if (error) {
      console.log(`  ✗ Policy error (${a.ext}): ${error.message}`)
    } else {
      policiesCreated++
    }
  }
  console.log(`  Policies: ${policiesCreated} upserted\n`)

  // ============================================================
  // STEP 2: Get all policy IDs
  // ============================================================
  const { data: allPolicies, error: pErr } = await supabase
    .from('policies')
    .select('id, external_id')
    .like('external_id', 'au-pol-%')

  if (pErr) {
    console.error('Failed to fetch policies:', pErr.message)
    process.exit(1)
  }

  const policyMap = {}
  for (const p of (allPolicies || [])) {
    policyMap[p.external_id] = p.id
  }
  console.log(`  Found ${Object.keys(policyMap).length} policies in database\n`)

  // ============================================================
  // STEP 3: Insert/update timeline events
  // ============================================================
  let eventsInserted = 0
  let eventsSkipped = 0
  let eventsErrors = 0
  const updateMode = process.argv.includes('--update')

  for (const te of allAnalyses) {
    const policyId = policyMap[te.ext]
    if (!policyId) {
      console.log(`  ⚠ Policy not found: ${te.ext} — skipping`)
      eventsSkipped++
      continue
    }

    const { ext, donations_context, ...eventData } = te
    const insertData = { ...eventData, policy_id: policyId }
    if (donations_context) insertData.donations_context = donations_context
    if (te.what_changed) insertData.what_changed = te.what_changed

    const { data: existing } = await supabase
      .from('timeline_events')
      .select('id')
      .eq('policy_id', policyId)
      .limit(1)

    if (existing?.length) {
      if (updateMode) {
        const { error: upErr } = await supabase
          .from('timeline_events')
          .update(insertData)
          .eq('policy_id', policyId)
        if (upErr) {
          console.log(`  ✗ Update error (${te.ext}): ${upErr.message}`)
          eventsErrors++
        } else {
          eventsInserted++
        }
      } else {
        eventsSkipped++
      }
      continue
    }

    const { error } = await supabase
      .from('timeline_events')
      .insert(insertData)

    if (error) {
      console.log(`  ✗ Event error (${te.ext}): ${error.message}`)
      eventsErrors++
    } else {
      eventsInserted++
    }
  }

  console.log(`\n  Timeline events: ${eventsInserted} inserted/updated, ${eventsSkipped} skipped`)
  if (eventsErrors) console.log(`  ${eventsErrors} errors`)

  // ============================================================
  // STEP 4: Extract and upsert MEMBERS from conflict_of_interest_flags
  // ============================================================
  console.log('\n📋 Extracting members from conflict_of_interest_flags...\n')

  const memberMap = new Map() // id → { name, role, appearances }

  for (const a of allAnalyses) {
    if (!a.conflict_of_interest_flags) continue
    for (const flag of a.conflict_of_interest_flags) {
      if (!flag.member) continue
      const info = parseMemberInfo(flag.member)
      const id = memberNameToId(flag.member)

      if (!memberMap.has(id)) {
        memberMap.set(id, {
          id,
          name: info.name,
          role: info.role,
          policies: [a.ext],
          raw_json: { interests: [{ policy: a.ext, interest: flag.interest, relevance: flag.relevance }] },
        })
      } else {
        const existing = memberMap.get(id)
        existing.policies.push(a.ext)
        existing.raw_json.interests.push({ policy: a.ext, interest: flag.interest, relevance: flag.relevance })
        if (!existing.role && info.role) existing.role = info.role
      }
    }
  }

  let membersUpserted = 0
  let membersErrors = 0

  for (const [id, member] of memberMap) {
    const { error } = await supabase
      .from('members')
      .upsert({
        id,
        name: member.name,
        role: member.role || '',
        party: '', // We don't have party data in the analysis files
        electorate: '',
        raw_json: member.raw_json,
      }, { onConflict: 'id' })

    if (error) {
      console.log(`  ✗ Member error (${id}): ${error.message}`)
      membersErrors++
    } else {
      membersUpserted++
    }
  }

  console.log(`  Members: ${membersUpserted} upserted (${memberMap.size} unique)`)
  if (membersErrors) console.log(`  ${membersErrors} errors`)

  // ============================================================
  // STEP 5: Extract and upsert DONATIONS from linked_donations
  // ============================================================
  console.log('\n💰 Extracting donations from linked_donations...\n')

  let donationsUpserted = 0
  let donationsErrors = 0
  let donationIndex = 0

  for (const a of allAnalyses) {
    if (!a.linked_donations) continue
    for (const d of a.linked_donations) {
      donationIndex++
      const externalId = `${a.ext}-donation-${donationIndex}`

      const donationData = {
        external_id: externalId,
        donor_name: d.donor || d.company || 'Unknown',
        donor_industry: a.category || '',
        recipient_party: d.party || '',
        amount_aud: parseFloat(String(d.amount || '0').replace(/[^0-9.]/g, '')) || 0,
        financial_year: d.year || d.financial_year || '',
        source_url: '',
      }

      const { error } = await supabase
        .from('donations')
        .upsert(donationData, { onConflict: 'external_id' })

      if (error) {
        console.log(`  ✗ Donation error (${externalId}): ${error.message}`)
        donationsErrors++
      } else {
        donationsUpserted++
      }
    }
  }

  console.log(`  Donations: ${donationsUpserted} upserted`)
  if (donationsErrors) console.log(`  ${donationsErrors} errors`)

  // ============================================================
  // FINAL: Verify totals
  // ============================================================
  const { count: pCount } = await supabase
    .from('policies')
    .select('*', { count: 'exact', head: true })
  const { count: eCount } = await supabase
    .from('timeline_events')
    .select('*', { count: 'exact', head: true })
  const { count: mCount } = await supabase
    .from('members')
    .select('*', { count: 'exact', head: true })
  const { count: dCount } = await supabase
    .from('donations')
    .select('*', { count: 'exact', head: true })

  console.log(`\n✅ Batch seed complete!`)
  console.log(`   Policies in database:        ${pCount}`)
  console.log(`   Timeline events in database:  ${eCount}`)
  console.log(`   Members in database:          ${mCount}`)
  console.log(`   Donations in database:        ${dCount}`)
}

seedBatch().catch(err => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
