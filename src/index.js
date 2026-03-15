import 'dotenv/config'
import { validateEnv } from './lib/env.js'
import { checkTablesExist, getRunSummary } from './db/queries.js'
import { readFileSync } from 'fs'
import { ingestOpenAustralia } from './ingestion/openAustralia.js'
import { ingestAECDonations } from './ingestion/aecDonations.js'
import { ingestATOTax } from './ingestion/atoTax.js'
import { ingestMPInterests } from './ingestion/mpInterests.js'
import { ingestTheyVoteForYou } from './ingestion/theyVoteForYou.js'
import { runRulesEngine } from './rules/engine.js'
import logger from './lib/logger.js'

async function main() {
  console.log('\n🇦🇺 Australian Policy Accountability System')
  console.log('=' .repeat(50))

  // Validate environment
  validateEnv(['SUPABASE_URL', 'SUPABASE_SERVICE_KEY', 'OPENAUSTRALIA_API_KEY'])

  const isDryRun = process.env.DRY_RUN === 'true'
  if (isDryRun) {
    console.log('🔍 DRY RUN MODE — will validate config but not write to database\n')
  }

  // Check if schema exists
  const tablesExist = await checkTablesExist()
  if (!tablesExist) {
    const schema = readFileSync('./src/db/schema.sql', 'utf8')
    console.log('\n' + '='.repeat(50))
    console.log('FIRST RUN — Schema setup required.')
    console.log('Paste the following SQL into your Supabase SQL editor:')
    console.log('(Dashboard → SQL Editor → New query → Paste → Run)\n')
    console.log(schema)
    console.log('='.repeat(50))
    console.log('Then re-run: node src/index.js\n')
    process.exit(0)
  }

  logger.info('[SYSTEM] Starting ingestion run')
  const startTime = Date.now()

  // Run each ingestor independently — one failing does not stop others
  const ingestors = [
    ['OpenAustralia', ingestOpenAustralia],
    ['AEC Donations', ingestAECDonations],
    ['ATO Tax', ingestATOTax],
    ['MP Interests', ingestMPInterests],
    ['They Vote For You', ingestTheyVoteForYou],
  ]

  for (const [name, fn] of ingestors) {
    if (isDryRun) {
      logger.info(`[INGEST:${name}] Skipped (dry run)`)
      continue
    }

    try {
      await fn()
    } catch (err) {
      logger.error(`[INGEST:${name}] Failed: ${err.message}`)
      if (err.stack) logger.debug(err.stack)
    }
  }

  // Run rules engine
  if (!isDryRun) {
    logger.info('[RULES] Running rules engine')
    try {
      await runRulesEngine()
    } catch (err) {
      logger.error(`[RULES] Failed: ${err.message}`)
    }
  }

  // Print summary
  const summary = await getRunSummary()
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

  console.log('\n' + '='.repeat(50))
  console.log('RUN COMPLETE')
  console.log(`Time     : ${elapsed}s`)
  console.log(`Ingested : ${summary.ingested_this_run} new policies`)
  console.log(`Flagged  : ${summary.total_flagged} total flagged`)
  console.log(`Pending  : ${summary.total_pending} pending analysis`)
  console.log(`Complete : ${summary.total_complete} analysed`)
  console.log(`Skipped  : ${summary.total_skipped} skipped`)
  console.log('='.repeat(50) + '\n')

  // Guidance for next steps
  if (summary.total_complete === 0 && summary.total_flagged > 0) {
    console.log('NEXT STEP: Run analysis with Claude Code:')
    console.log('  claude "Read ANALYSIS_TASK.md and process flagged policies"\n')
  }
}

main().catch(err => {
  logger.error('[FATAL]', err.message)
  if (err.stack) logger.debug(err.stack)
  process.exit(1)
})
