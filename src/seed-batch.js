/**
 * Batch Seed Script — Creates new policies and seeds their timeline event analyses.
 *
 * Run: node src/seed-batch.js
 *
 * This script:
 * 1. Reads analysis batch files from analyses/ directory
 * 2. Creates policy records in Supabase for each analysis
 * 3. Creates timeline_events linked to those policies
 * Safe to run multiple times (uses upserts and skips existing).
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

async function seedBatch() {
  console.log('📊 Batch seeding new policies and analyses\n')

  // Load batch analysis files
  const analysisDir = path.join(__dirname, '..', 'analyses')
  const batchFiles = fs.readdirSync(analysisDir).filter(f => f.startsWith('batch-'))

  let allAnalyses = []
  for (const f of batchFiles) {
    const filePath = path.join(analysisDir, f)
    const entries = loadAnalysisFile(filePath)
    console.log(`  Loaded ${entries.length} analyses from ${f}`)
    allAnalyses.push(...entries)
  }
  console.log(`\n  Total new analyses to process: ${allAnalyses.length}\n`)

  // Step 1: Create policy records
  let policiesCreated = 0
  let policiesSkipped = 0

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
      console.log(`  ✗ Policy create error (${a.ext}): ${error.message}`)
    } else {
      policiesCreated++
    }
  }
  console.log(`  Policies: ${policiesCreated} upserted\n`)

  // Step 2: Get all policy IDs
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

  // Step 3: Insert timeline events
  let inserted = 0
  let skipped = 0
  let errors = 0

  const updateMode = process.argv.includes('--update')

  for (const te of allAnalyses) {
    const policyId = policyMap[te.ext]
    if (!policyId) {
      console.log(`  ⚠ Policy not found: ${te.ext} — skipping`)
      skipped++
      continue
    }

    // Build event object (strip 'ext' and 'donations_context', add policy_id)
    const { ext, donations_context, ...eventData } = te
    const insertData = { ...eventData, policy_id: policyId }
    if (donations_context) insertData.donations_context = donations_context
    if (te.what_changed) insertData.what_changed = te.what_changed

    // Check if timeline event already exists
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
          errors++
        } else {
          inserted++
          console.log(`  ↻ Updated: ${te.title}`)
        }
      } else {
        skipped++
      }
      continue
    }

    const { error } = await supabase
      .from('timeline_events')
      .insert(insertData)

    if (error) {
      console.log(`  ✗ Event error (${te.ext}): ${error.message}`)
      errors++
    } else {
      inserted++
    }
  }

  console.log(`\n✅ Batch seed complete!`)
  console.log(`   ${policiesCreated} policies upserted`)
  console.log(`   ${inserted} new timeline events inserted`)
  console.log(`   ${skipped} skipped (already exist or policy not found)`)
  if (errors) console.log(`   ${errors} errors`)

  // Verify totals
  const { count: pCount } = await supabase
    .from('policies')
    .select('*', { count: 'exact', head: true })
  const { count: eCount } = await supabase
    .from('timeline_events')
    .select('*', { count: 'exact', head: true })

  console.log(`\n   Total policies in database: ${pCount}`)
  console.log(`   Total timeline events in database: ${eCount}`)
}

seedBatch().catch(err => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
