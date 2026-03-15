# CLAUDE.md — Follow the Money: Australian Policy Accountability System

## Mission

Track 30 years (1996–present) of Australian parliamentary decisions and cross-reference them with political donations, MP declared interests, and corporate tax data. Surface potential conflicts of interest and make this information accessible to ordinary Australians.

This is a public accountability tool, not a partisan project. Both major parties are scrutinised equally.

## Audience

General public. Every piece of analysis must be understandable by a non-political person in under 30 seconds. No jargon. No hedge-everything lawyerspeak. If a mining company donated $2M to a party that then gave them a $500M tax concession, say that plainly.

---

## Architecture

### Backend — Ingestion + Rules Engine (`/src/`)

Plain Node.js pipeline. Zero AI, zero API costs. Pulls government data, stores in Supabase, auto-flags suspicious policy events using deterministic rules.

**Entry point**: `node src/index.js`

- **Ingestion modules** (`/src/ingestion/`):
  - `openAustralia.js` — Hansard debates, votes, member profiles (OpenAustralia API)
  - `aecDonations.js` — AEC political donation CSVs
  - `atoTax.js` — ATO corporate tax transparency data
  - `mpInterests.js` — Register of Members Interests (HTML scraper)
  - `theyVoteForYou.js` — Voting records (They Vote For You API)

- **Rules engine** (`/src/rules/engine.js`): Runs four detection rules against each policy:
  - `donationCorrelation.js` — Did donors to the deciding party benefit from this policy?
  - `conflictOfInterest.js` — Did MPs voting on this have declared interests in affected industries?
  - `resourceCapture.js` — Does this policy transfer public resources to private entities at below-market rates?
  - `taxAvoidanceEnablement.js` — Does this policy create or preserve structures enabling tax avoidance?

- **Scoring**: Each rule returns a score. Total >= 3 means the policy is flagged for analysis.

- **Database**: Supabase (PostgreSQL). Schema in `src/db/schema.sql`.

- **Seed scripts**: `src/seed.js` (small test set), `src/seed-full.js` (100+ real decisions)

- **Supporting libs** (`/src/lib/`):
  - `industryMap.js` — Maps company/donor names to industry buckets
  - `policyKeywords.js` — Keyword filter for relevant parliamentary debates
  - `stateStore.js` — Tracks last-run timestamps per ingestor
  - `http.js` — Axios with retry + rate limiting
  - `logger.js` — Structured console logger
  - `env.js` — Environment variable validation

### Frontend — Next.js 14 (`/frontend/`)

Category timeline trees. Homepage shows a grid of policy categories. Each category links to a vertical timeline of every policy decision in that category, with donation links, conflict flags, and signal badges.

- **Key components** (`/frontend/src/components/`):
  - `CategoryGrid.js` — Homepage category tiles with counts and signal indicators
  - `TimelineTree.js` — Vertical timeline per category with year markers
  - `PolicyBranch.js` — Individual policy card within the timeline
  - `CategoryHeader.js` — Stats header for category pages
  - `YearNav.js` — Sticky sidebar year navigation (client component, IntersectionObserver)
  - `StatsBar.js` — Top-level stats strip
  - `SignalBadge.js` — Colour-coded signal strength indicator

- **Pages**:
  - `/` — Category grid homepage
  - `/category/[slug]` — Timeline tree for a specific category
  - `/policy/[id]` — Individual policy detail
  - `/mp` — All MPs list
  - `/mp/[id]` — Individual MP profile

- **API routes** (`/frontend/src/app/api/`): All export `dynamic = 'force-dynamic'`

- **Category metadata**: `/frontend/src/lib/categoryMeta.js` — Icons, colours, labels for all categories

### Deployment

- **Database**: Supabase (Singapore region) — `https://xexowrtfwbtuttqsuieh.supabase.co`
- **Frontend**: Vercel — auto-deploys from `main` branch
- **Repo**: `https://github.com/hjw808/au-policy`

---

## Data Sources

| Source | Provides | Access |
|---|---|---|
| OpenAustralia | Parliamentary speeches, votes, member profiles | REST API with key |
| They Vote For You | Voting records, policy positions | REST API with key |
| AEC (Australian Electoral Commission) | Political donation disclosures | Annual CSV dumps |
| ATO (Australian Taxation Office) | Corporate tax transparency data | Annual published data |
| APH (Parliament House) | MP declared interests (Register of Interests) | HTML scrape |

---

## Analysis Standards

When analysing ANY policy decision, ALWAYS follow this exact structure. Do not skip steps. Do not reorder.

### Step 1: What Happened (facts only)
State the policy, date, who introduced it, what it changed, and what it replaced (if anything). Use specific dollar amounts, percentages, and dates. Zero opinion in this section.

### Step 2: Who Benefited Financially
Name the companies, industries, or individuals who gained. Quantify the benefit where data exists (tax savings, contract values, subsidy amounts). Cross-reference with ATO corporate tax data to check if beneficiaries are paying tax.

### Step 3: Who Donated
List relevant political donations from AEC data. Include: donor name, amount, recipient party, financial year, and timing relative to the policy decision. Flag if donations increased before or after the decision.

### Step 4: Who Had Conflicts of Interest
Check the Register of Interests for MPs who voted on or championed this policy. Flag any declared shareholdings, directorships, or income from affected industries. Name the MPs specifically.

### Step 5: International Comparison
Compare with how at least one other country handles the same policy area. Preferred comparison countries: Norway, UK, NZ, Canada, Denmark, Germany. This shows whether Australia's approach is standard or an outlier. This step is NOT optional — it provides critical context.

### Step 6: Signal Strength Assessment
Rate the corruption signal:
- **strong** — Direct financial link between donor/interest-holder and policy beneficiary, large sums, suspicious timing
- **moderate** — Indirect links, pattern of donations from affected industry, some conflicts declared
- **weak** — Industry donations exist but amounts are small or timing is unclear
- **none** — No discernible financial connection found

When in doubt, rate one level LOWER. Credibility depends on not overstating connections.

### Step 7: Impact Score (1–10)
Based on: dollar value affected, number of Australians impacted, duration of policy effect, degree of public resource transfer.

---

## Policy Categories

These slugs are used throughout the system. Every policy MUST have one.

| Slug | Label | Description |
|---|---|---|
| `mining` | Mining & Resources | Iron ore, coal, minerals royalties, export policies |
| `tax` | Tax & Revenue | Income tax, GST, company tax, levies |
| `oil_gas` | Energy & Gas | Petroleum, LNG, PRRT, energy market policies |
| `property` | Housing & Property | Negative gearing, CGT, housing affordability, development |
| `healthcare` | Healthcare | PBS, private health insurance, hospital funding |
| `superannuation` | Superannuation | Super contribution caps, tax concessions, SG rate |
| `defence` | Defence | Military contracts, procurement, foreign military sales |
| `privatisation` | Privatisation | Sale of public assets (Telstra, Medibank, airports, ports) |
| `trade` | Trade & Tariffs | Free trade agreements, tariffs, export subsidies |
| `subsidies` | Subsidies & Grants | Industry subsidies, R&D incentives, regional grants |
| `financial_services` | Financial Services | Banking regulation, APRA, responsible lending |
| `environment` | Environment | Carbon pricing, EPBC Act, water rights, renewables |

---

## Tone and Voice Rules

1. **Factual, not partisan.** Both Labor and Coalition receive equal scrutiny. If analysis only examines one party's donors, it is incomplete — go back and check the other side.
2. **Plain language.** Write "BHP donated $1.2M to the Liberal Party in the year before they cut the mining tax" — not "a temporal correlation between extractive industry contributions and subsequent legislative modifications."
3. **Let the data speak.** Present numbers and connections. Let people draw their own conclusions.
4. **No sensationalism.** Never use "corruption" or "scandal" in analysis text. Use "signal strength" and "conflict of interest" — these are factual descriptors.
5. **Always attribute.** Cite the data source: AEC disclosure year, APH register entry, ATO transparency report year, Hansard date.
6. **Specific over vague.** "$4.2M from 3 mining companies in 2019-21" beats "significant donations from the mining industry."

---

## Rules for AI Agents

These rules apply to ALL AI interactions with this project — whether adding data, writing analysis, building features, or answering questions.

### Data Integrity
1. **Never fabricate data.** If a real donation figure, vote record, or policy detail is not available, mark it as needing verification. Do not invent plausible-sounding numbers.
2. **Always cross-reference.** Every policy entry should link to: donations (by donor industry + timing), member interests (by MP + industry), and company tax data (by beneficiary). If a cross-reference can't be made, note it explicitly.
3. **Date everything.** "BHP donated to the Liberal Party" is useless. "BHP donated $1.2M to the Liberal Party in 2020-21 (AEC disclosure)" is useful.

### Analysis Quality
4. **Use all four rules.** Every policy must be scored by: donation correlation, conflict of interest, resource capture, and tax avoidance enablement. Don't skip any.
5. **International comparisons are mandatory.** They show whether Australia's approach is normal or an outlier — critical context for the public.
6. **Keep signal assessments conservative.** When uncertain, rate one level lower. Overstating damages credibility more than understating.
7. **Both parties, always.** If a policy analysis only examines one party's donors, it's incomplete.

### Technical Standards
8. **Respect the category system.** Every policy gets exactly one category from the list above.
9. **All pages force-dynamic.** Never add `revalidate` or static generation to pages that query Supabase.
10. **Upserts only.** All database writes use upsert with conflict resolution. Never error on duplicates. Never lose existing data.
11. **Rate limit external APIs.** OpenAustralia: 500ms between calls. APH: 1s between calls. AEC/ATO: no limit needed (CSV downloads).

### When Adding New Policies
12. Research the policy using government sources first (Hansard, legislation.gov.au, parliament.gov.au).
13. Find the corresponding AEC donation data for the relevant industry and time period.
14. Check the Register of Interests for key MPs involved.
15. Find at least one international comparison.
16. Write the analysis following the 7-step structure above.
17. Assign a category, signal strength, and impact score.
18. Include the data in the `seed-full.js` format for reproducibility.

---

## Environment Variables

| Variable | Location | Purpose |
|---|---|---|
| `SUPABASE_URL` | Backend `.env` | Database connection (same as NEXT_PUBLIC_SUPABASE_URL) |
| `SUPABASE_SERVICE_KEY` | Backend `.env` + Vercel | Full DB access, bypasses RLS |
| `NEXT_PUBLIC_SUPABASE_URL` | Vercel | Client-accessible Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel | Client-side read access |
| `OPENAUSTRALIA_API_KEY` | Backend `.env` | OpenAustralia API |
| `TVFY_API_KEY` | Backend `.env` | They Vote For You API |

---

## File Conventions

- Backend: `/src/` — Node.js, CommonJS (`require`), `"type": "module"` in package.json
- Frontend: `/frontend/src/` — Next.js 14, React Server Components by default
- Client components: Only when needed (e.g., `YearNav.js` uses `'use client'` for IntersectionObserver)
- API routes: `/frontend/src/app/api/` — all export `dynamic = 'force-dynamic'`
- Seed scripts: `/src/seed.js` (test), `/src/seed-full.js` (production data)

---

## Governing Principle

If a connection between money and policy exists in the public record, surface it clearly. If it doesn't exist, don't manufacture it. Trust comes from accuracy, not volume.
