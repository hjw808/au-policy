# Australian Policy Accountability System — Build Instructions

## What You Are Building

A two-part system:

1. **Ingestion + Rules Engine** (`/src/`) — plain Node.js, zero AI, zero API costs.
   Cowork schedules this to run on the local machine. It pulls Australian government
   data, stores it in Supabase, and auto-flags suspicious policy events using
   deterministic rules.

2. **Analysis runner** — NOT built here. Claude Code reads `ANALYSIS_TASK.md`
   at runtime to process flagged items interactively. Do not conflate the two.

Your job in this file: build part 1 completely. It must be robust, idempotent,
and runnable with a single command: `node src/index.js`

---

## Stack

- **Runtime**: Node.js 20 (ESM — set `"type": "module"` in package.json)
- **Database**: Supabase via `@supabase/supabase-js`
- **HTTP**: `axios` with retry logic
- **CSV parsing**: `csv-parse`
- **HTML scraping**: `cheerio` + `axios`
- **Env vars**: `dotenv`
- **Scheduling**: none — Cowork handles scheduling externally.
  This script runs once per invocation and exits with code 0 on success.

---

## Environment Variables

Create both `.env` and `.env.example`:

```
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
OPENAUSTRALIA_API_KEY=
LOG_LEVEL=info
DRY_RUN=false
```

On startup: validate all required vars are present. If any missing, print a
clear error message listing which vars are absent and exit with code 1.
Never silently fall through with missing config.

---

## Project Structure

```
/
├── CLAUDE.md                   (this file — build instructions)
├── ANALYSIS_TASK.md            (Claude Code reads this at analysis time)
├── package.json
├── .env
├── .env.example
└── src/
    ├── index.js                Entry point — runs ingestion then rules engine
    ├── db/
    │   ├── client.js           Supabase singleton (export one instance)
    │   ├── schema.sql          Full schema — printed to console on first run
    │   └── queries.js          All DB operations as named async functions
    ├── ingestion/
    │   ├── openAustralia.js    Hansard debates, votes, members
    │   ├── aecDonations.js     AEC political donation CSVs
    │   ├── atoTax.js           ATO corporate tax transparency CSV
    │   └── mpInterests.js      Register of Members Interests HTML scraper
    ├── rules/
    │   ├── engine.js           Runs all rules, writes scores to DB
    │   ├── donationCorrelation.js
    │   ├── conflictOfInterest.js
    │   ├── taxAvoidanceEnablement.js
    │   └── resourceCapture.js
    └── lib/
        ├── http.js             Axios instance with retry + rate limiting
        ├── stateStore.js       Reads/writes last_run timestamps to Supabase
        └── logger.js           Structured console logger
```

---

## Database Schema (`src/db/schema.sql`)

Write this as a standalone SQL file. On first run (when tables do not exist),
print it to console with instructions to paste into the Supabase SQL editor.
Do NOT auto-execute — the user runs it once manually in Supabase.

```sql
create table if not exists system_state (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);

create table if not exists members (
  id text primary key,
  name text not null,
  party text,
  electorate text,
  role text,
  raw_json jsonb,
  updated_at timestamptz default now()
);

create table if not exists policies (
  id uuid primary key default gen_random_uuid(),
  external_id text unique not null,
  date date,
  title text not null,
  category text,
  source text,
  source_url text,
  raw_text text,
  matched_keywords jsonb default '[]',
  status text default 'pending',
  flag_score int default 0,
  flag_reasons jsonb default '[]',
  retry_count int default 0,
  ingested_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists votes (
  policy_id uuid references policies(id) on delete cascade,
  member_id text references members(id),
  vote text,
  primary key (policy_id, member_id)
);

create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  donor_name text,
  donor_industry text,
  recipient_party text,
  amount_aud numeric,
  financial_year text,
  source_url text,
  created_at timestamptz default now()
);

create table if not exists member_interests (
  id uuid primary key default gen_random_uuid(),
  member_id text references members(id),
  interest_type text,
  description text,
  company_name text,
  industry text,
  declared_date date,
  created_at timestamptz default now()
);

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  total_income_aud numeric,
  tax_paid_aud numeric,
  effective_tax_rate numeric,
  financial_year text,
  created_at timestamptz default now(),
  unique(name, financial_year)
);

create table if not exists timeline_events (
  id uuid primary key default gen_random_uuid(),
  policy_id uuid references policies(id),
  date date,
  title text,
  category text,
  impact_score numeric,
  confidence_score numeric,
  primary_beneficiaries jsonb,
  disadvantaged_groups jsonb,
  revenue_impact text,
  corporate_advantage boolean,
  conflict_of_interest_flags jsonb,
  linked_donations jsonb,
  alternative_policy text,
  comparison_country text,
  comparison_approach text,
  comparison_outcome text,
  analysis_json jsonb,
  generated_at timestamptz default now()
);

create index if not exists idx_policies_status on policies(status);
create index if not exists idx_policies_flag_score on policies(flag_score desc);
create index if not exists idx_donations_industry on donations(donor_industry);
create index if not exists idx_donations_party on donations(recipient_party);
create index if not exists idx_interests_industry on member_interests(industry);
create index if not exists idx_timeline_date on timeline_events(date desc);
```

---

## State Store (`src/lib/stateStore.js`)

Every ingestor checks when it last ran before fetching anything.
Read from and write to the `system_state` table.

Keys used:
- `'last_openaustralia_date'` — value: `'YYYY-MM-DD'`
- `'last_aec_year'` — value: `'2023-24'`
- `'last_ato_year'` — value: `'2023-24'`
- `'last_mpinterests_run'` — value: ISO timestamp

Export two functions:
```javascript
export async function getState(key)          // returns string | null
export async function setState(key, value)   // upserts, returns void
```

On null (first run), ingestors fall back to safe defaults:
- OpenAustralia: `'2010-01-01'`
- AEC / ATO: `'2015-16'`
- MP Interests: always full scrape (small dataset)

---

## Industry Bucket Map

Used by both ingestion and rules engine. Define once in `src/lib/industryMap.js`
and import everywhere needed.

```javascript
export const industryMap = [
  { keywords: ['mining', 'resources', 'coal', 'iron ore', 'minerals'],   industry: 'mining' },
  { keywords: ['petroleum', 'gas', 'lng', 'oil', 'woodside', 'santos'],  industry: 'oil_gas' },
  { keywords: ['bank', 'financ', 'invest', 'capital', 'insurance'],      industry: 'financial' },
  { keywords: ['property', 'real estate', 'developer', 'construction'],  industry: 'property' },
  { keywords: ['pharma', 'health', 'medical', 'hospital'],               industry: 'healthcare' },
  { keywords: ['media', 'news', 'broadcast', 'publish'],                 industry: 'media' },
  { keywords: ['union', 'workers', 'labour', 'employees'],               industry: 'union' },
  { keywords: ['agriculture', 'farm', 'pastoral', 'wool', 'grain'],      industry: 'agriculture' },
  { keywords: ['defence', 'weapons', 'military', 'aerospace'],           industry: 'defence' },
  { keywords: ['tech', 'software', 'digital', 'telecom'],                industry: 'technology' },
]
// Default bucket: 'other'

export function classifyIndustry(text) {
  const lower = text.toLowerCase()
  for (const bucket of industryMap) {
    if (bucket.keywords.some(k => lower.includes(k))) return bucket.industry
  }
  return 'other'
}
```

---

## Policy Keyword Filter

Also define once and import everywhere. Only ingest debates containing these:

```javascript
export const policyKeywords = [
  'tax', 'royalt', 'concession', 'exemption', 'mining', 'resources',
  'superannuation', 'negative gearing', 'capital gains', 'corporate',
  'donation', 'lobbying', 'export', 'petroleum', 'gas', 'coal',
  'pharmaceutical', 'defence contract', 'privatis', 'levy', 'tariff',
  'subsid', 'rebate', 'deduction', 'write-off'
]

export function matchKeywords(text) {
  const lower = text.toLowerCase()
  return policyKeywords.filter(k => lower.includes(k))
}
```

Store matched keywords in `policies.matched_keywords` for use by the rules engine.

---

## Ingestion: OpenAustralia (`src/ingestion/openAustralia.js`)

Base URL: `https://www.openaustralia.org.au/api/`

Steps:
1. Fetch current members: `getMPs?key=KEY&output=js`
   Upsert all to `members` table. Map fields: `member_id` → id, `full_name` → name,
   `party` → party, `constituency` → electorate.

2. Get `last_openaustralia_date` from state store (default: `'2010-01-01'`)

3. Iterate from that date to yesterday, one day at a time:
   - `getDebates?key=KEY&date=YYYY-MM-DD&type=representatives&output=js`
   - `getDebates?key=KEY&date=YYYY-MM-DD&type=senate&output=js`

4. For each debate returned:
   - Run `matchKeywords()` against the debate body text
   - If no matches: skip
   - If matches: upsert to `policies` table
     - `external_id`: debate `gid` field
     - `title`: debate `subsection_title` or `title`
     - `date`: debate date
     - `source`: `'openaustralia'`
     - `raw_text`: concatenated speech bodies (truncate to 8000 chars)
     - `matched_keywords`: array of matched keywords
     - `category`: infer from keywords — if 'mining'/'royalt' → 'resources',
       if 'tax'/'concession' → 'tax', if 'superannuation' → 'superannuation', etc.

5. Rate limit: sleep 500ms between API calls. This API is free, treat it gently.

6. After all dates processed, update `last_openaustralia_date` to yesterday.

7. Log: `[INGEST:OA] Processed X dates, ingested Y policies, skipped Z`

---

## Ingestion: AEC Donations (`src/ingestion/aecDonations.js`)

The AEC publishes annual donor disclosure CSVs.

URL pattern to try:
```
https://transparency.aec.gov.au/Download/DownloadAnnualDonations
```

If direct download fails, fall back to scraping the page at:
`https://transparency.aec.gov.au/AnnualDonation` to find current CSV links.

Steps:
1. Get `last_aec_year` from state store (default: `'2015-16'`)
2. Determine which years are missing up to the most recent available
3. For each missing year, download and parse the CSV
4. CSV columns vary by year — handle both these common formats:
   - Format A: `DonorName, RecipientName, DonorState, Amount, FinancialYear`
   - Format B: `Donor, Recipient, Amount, Period, State`
   Use column header detection to handle both.
5. For each row:
   - `external_id`: `{year}-{rowIndex}` (or hash of donor+recipient+amount+year)
   - `donor_industry`: run `classifyIndustry(donor_name)`
   - Infer `recipient_party` from recipient name:
     `if lower includes 'liberal' → 'Liberal', 'labor'/'labour' → 'Labor',
      'national' → 'Nationals', 'green' → 'Greens'`, etc.
   - Upsert with dedup on `external_id`
6. Update `last_aec_year` to most recent processed year
7. Log: `[INGEST:AEC] Processed X years, ingested Y donations`

---

## Ingestion: ATO Tax (`src/ingestion/atoTax.js`)

Source: data.gov.au corporate tax transparency dataset.

1. Fetch dataset listing: `https://data.gov.au/api/3/action/package_show?id=corporate-transparency`
2. Extract the most recent CSV resource URL from the response
3. Download and parse with csv-parse
4. For each row extract: entity name, total income, tax payable, effective rate, year
5. Upsert to `companies` table, dedup on `(name, financial_year)`
6. Also run `classifyIndustry(entity_name)` to populate `industry` column
7. Log: `[INGEST:ATO] Ingested X company records for year Y`

---

## Ingestion: MP Interests (`src/ingestion/mpInterests.js`)

Source: `https://www.aph.gov.au/Senators_and_Members/Members/Register`

This page lists links to each member's individual interest declaration.

Steps:
1. Fetch the index page, extract all member declaration links with cheerio
2. For each member link, fetch their individual page
3. Parse sections — interests are grouped under headings like:
   "Shares and similar interests", "Real estate", "Directorships"
4. For each interest found:
   - `interest_type`: map heading to `'shares'|'property'|'board'|'other'`
   - `description`: raw text of the item
   - `company_name`: extract first entity/company name mentioned
   - `industry`: `classifyIndustry(company_name + ' ' + description)`
5. Match member to `members` table by name (fuzzy: lowercase + trim)
   If no match found, log warning and skip — do not insert orphaned interests
6. Delete existing interests for this member before inserting fresh ones
   (register changes, re-scraping is the cleanest approach)
7. Rate limit: 1 request per second — APH is a government server
8. Log: `[INGEST:MPI] Scraped X members, inserted Y interests`

---

## Rules Engine (`src/rules/engine.js`)

Runs after all ingestion completes. Processes all `status = 'pending'` policies.

```javascript
export async function runRulesEngine() {
  const pending = await db.getPendingPolicies()  // no limit — process all

  let flagged = 0, skipped = 0

  for (const policy of pending) {
    const results = await Promise.all([
      donationCorrelation(policy),
      conflictOfInterest(policy),
      taxAvoidanceEnablement(policy),
      resourceCapture(policy),
    ])

    const totalScore = results.reduce((sum, r) => sum + r.score, 0)
    const reasons = results.filter(r => r.triggered).map(r => ({
      rule: r.rule,
      score: r.score,
      detail: r.detail,
    }))

    const newStatus = totalScore >= 3 ? 'flagged' : 'skipped'
    await db.updatePolicyFlags(policy.id, totalScore, reasons, newStatus)

    if (newStatus === 'flagged') flagged++
    else skipped++
  }

  logger.info(`[RULES] Flagged: ${flagged} | Skipped: ${skipped}`)
}
```

Each rule module exports a default async function with this signature:
```javascript
export default async function ruleName(policy) {
  return {
    rule: 'rule_name',
    triggered: boolean,
    score: number,
    detail: string,   // human-readable explanation of what was found
  }
}
```

---

### Rule 1: Donation Correlation

Query donations where `donor_industry` matches `policy.category`
and `recipient_party` was the governing party when policy passed
and donation `financial_year` is within 3 years before policy year.

Map policy categories to governing party from this lookup:
```javascript
// Approximate — based on election history
const governingParty = (year) => {
  if (year >= 2022) return 'Labor'
  if (year >= 2013) return 'Liberal'
  if (year >= 2007) return 'Labor'
  return 'Liberal'
}
```

Scoring:
- Any matching donation found: +2
- Total donations in window > $100,000: +1
- Total donations in window > $500,000: +2
- Three or more distinct donors same industry: +1

Detail string: `"3 donations totalling $1.2M from oil_gas industry to Liberal Party in 2019-21"`

---

### Rule 2: Conflict of Interest

Join `votes` → `members` → `member_interests` where:
- `vote = 'yes'` on this policy
- `member_interests.industry` matches `policy.category`

Scoring:
- 1 MP with conflict: +3
- 3+ MPs with conflicts: +5
- Any MP with role containing 'Minister': +4

Detail string: `"2 yes-voting MPs hold shares in mining sector: John Smith (Minister), Jane Doe"`

---

### Rule 3: Tax Avoidance Enablement

Query `companies` where:
- `industry` matches `policy.category`
- `financial_year` = year before policy
- `effective_tax_rate < 0.05` (less than 5%)

Also check if any of these companies appear as `donor_name` in `donations`.

Scoring:
- Any zero-tax companies in beneficiary industry: +2
- 3+ zero-tax companies: +1 additional
- Zero-tax company also appears in donations table: +2 additional

Detail string: `"4 companies in financial sector paid <5% tax in 2020-21, 2 also appear as donors"`

---

### Rule 4: Resource Capture

Only triggers when:
- `policy.category IN ('mining', 'oil_gas', 'agriculture')`
- AND `policy.matched_keywords` contains any of: `['royalt', 'export', 'concession', 'levy']`

Scoring:
- Conditions met: +4
- Donation correlation also triggered for same policy: +2 additional

Detail string: `"Resources policy with royalty/export keywords — classic resource capture pattern"`

---

## Entry Point (`src/index.js`)

```javascript
import 'dotenv/config'
import { validateEnv } from './lib/env.js'
import { checkTablesExist } from './db/queries.js'
import { readFileSync } from 'fs'
import { ingestOpenAustralia } from './ingestion/openAustralia.js'
import { ingestAECDonations } from './ingestion/aecDonations.js'
import { ingestATOTax } from './ingestion/atoTax.js'
import { ingestMPInterests } from './ingestion/mpInterests.js'
import { runRulesEngine } from './rules/engine.js'
import { getRunSummary } from './db/queries.js'
import logger from './lib/logger.js'

async function main() {
  validateEnv(['SUPABASE_URL', 'SUPABASE_SERVICE_KEY', 'OPENAUSTRALIA_API_KEY'])

  const tablesExist = await checkTablesExist()
  if (!tablesExist) {
    const schema = readFileSync('./src/db/schema.sql', 'utf8')
    console.log('\n' + '='.repeat(50))
    console.log('FIRST RUN — Schema setup required.')
    console.log('Paste the following into your Supabase SQL editor:\n')
    console.log(schema)
    console.log('='.repeat(50))
    console.log('Then re-run: node src/index.js\n')
    process.exit(0)
  }

  logger.info('[INGEST] Starting ingestion run')

  // Run each ingestor independently — one failing does not stop others
  for (const [name, fn] of [
    ['OpenAustralia', ingestOpenAustralia],
    ['AEC Donations', ingestAECDonations],
    ['ATO Tax', ingestATOTax],
    ['MP Interests', ingestMPInterests],
  ]) {
    try {
      await fn()
    } catch (err) {
      logger.error(`[INGEST:${name}] Failed: ${err.message}`)
    }
  }

  logger.info('[RULES] Running rules engine')
  await runRulesEngine()

  const summary = await getRunSummary()
  console.log('\n' + '='.repeat(50))
  console.log(`RUN COMPLETE`)
  console.log(`Ingested : ${summary.ingested_this_run} new policies`)
  console.log(`Flagged  : ${summary.total_flagged} total flagged`)
  console.log(`Pending  : ${summary.total_pending} pending analysis`)
  console.log(`Complete : ${summary.total_complete} analysed`)
  console.log('='.repeat(50) + '\n')

  // Print Cowork setup instructions on very first successful run
  if (summary.total_complete === 0 && summary.total_flagged > 0) {
    console.log('NEXT STEP: Run analysis with Claude Code:')
    console.log('  claude "Read ANALYSIS_TASK.md and process flagged policies"\n')
  }
}

main().catch(err => {
  logger.error('[FATAL]', err.message)
  process.exit(1)
})
```

---

## Error Handling Rules

1. Never crash the process — wrap each ingestor in try/catch in main()
2. Network errors: retry 3x with exponential backoff (1s, 2s, 4s), then skip
3. Parse errors: log the offending row with enough context to debug, then continue
4. Supabase errors: log and skip that record — never lose previously good data
5. Upserts must use `onConflict` ignore/update — never error on duplicates

---

## Build Order for Claude Code

1. `package.json` (include all deps: @supabase/supabase-js, axios, csv-parse,
   cheerio, dotenv)
2. `.env.example`
3. `src/db/schema.sql`
4. `src/lib/logger.js`
5. `src/lib/http.js` (axios with retry)
6. `src/lib/industryMap.js`
7. `src/lib/policyKeywords.js`
8. `src/db/client.js`
9. `src/db/queries.js`
10. `src/lib/stateStore.js`
11. `src/ingestion/openAustralia.js`
12. `src/ingestion/aecDonations.js`
13. `src/ingestion/atoTax.js`
14. `src/ingestion/mpInterests.js`
15. `src/rules/donationCorrelation.js`
16. `src/rules/conflictOfInterest.js`
17. `src/rules/taxAvoidanceEnablement.js`
18. `src/rules/resourceCapture.js`
19. `src/rules/engine.js`
20. `src/index.js`

After building all files, verify by running: `node src/index.js`
Expected output on first run: schema printed to console, exits cleanly.
