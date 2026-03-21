# Analysis Task — Australian Policy Accountability System

## What You Are Doing

You are the analysis agent for the Australian Policy Accountability System.
The ingestion pipeline has already run and flagged suspicious policy events in
Supabase. Your job is to process those flagged policies using your full analytical
capability and write structured findings back to the database.

This runs on the developer's Claude Code subscription — no external API calls,
no additional cost. You are the AI.

## CRITICAL: Writing Standard

**Before writing ANY analysis, read `skills/policy-analysis/SKILL.md` first.**

Every field you write must be understandable to an ordinary Australian who has
never heard of this policy. The reader does not know what acronyms stand for,
does not know what "foregone revenue" means, and does not know how political
donations work. Every section must explain what happened before presenting
numbers or technical details.

Key requirements:
- `what_changed` field: 2-4 paragraphs explaining before vs after in plain English
- `revenue_impact`: must include tangible comparisons (nurses, houses, schools)
- `primary_beneficiaries`: each entry must include a brief description
- `disadvantaged_groups`: each entry must explain WHY they're disadvantaged
- `comparison_approach`: must open with the shared question both countries face
- `confidence_notes`: must explain what each source IS (not just name it)
- `flag_explanations`: must be plain English with "doesn't prove corruption" caveat
- All acronyms defined on first use
- Active voice, name names, tell the story chronologically

---

## Environment Setup

Before starting, verify the following are present:
- `.env` file with `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
- Node.js available
- The ingestion system has run at least once (`node src/index.js`)

If anything is missing, state what is needed and stop.

---

## Step 1 — Check the Queue

Run this query against Supabase to see what needs processing:

```javascript
// Use the existing Supabase client at src/db/client.js
const { data: queue } = await supabase
  .from('policies')
  .select(`
    id, title, date, category, flag_score, flag_reasons,
    matched_keywords, raw_text, source_url
  `)
  .eq('status', 'flagged')
  .order('flag_score', { ascending: false })
  .limit(25)
```

Print a summary table: how many flagged, top 5 by score, categories breakdown.
Ask: "Process all 25, or a specific subset?" — wait for confirmation before
proceeding if there are more than 10 items. For 10 or fewer, proceed automatically.

---

## Step 2 — For Each Policy, Pull Full Context

Before analysing any policy, pull all related data so your analysis is grounded
in actual evidence — not assumptions.

```javascript
// Pull donations linked to this policy's category, prior to policy date
const { data: donations } = await supabase
  .from('donations')
  .select('donor_name, donor_industry, recipient_party, amount_aud, financial_year')
  .eq('donor_industry', policy.category)
  .lte('financial_year', policyYear)  // only donations BEFORE the policy
  .order('amount_aud', { ascending: false })
  .limit(20)

// Pull MPs who voted yes + their declared interests
const { data: conflictedVoters } = await supabase
  .from('votes')
  .select(`
    vote,
    members (id, name, party, role,
      member_interests (interest_type, company_name, industry, description)
    )
  `)
  .eq('policy_id', policy.id)
  .eq('vote', 'yes')

// Pull zero-tax companies in this policy's sector
const { data: zeroTaxCompanies } = await supabase
  .from('companies')
  .select('name, effective_tax_rate, tax_paid_aud, total_income_aud, financial_year')
  .eq('industry', policy.category)
  .lt('effective_tax_rate', 0.05)
  .order('total_income_aud', { ascending: false })
  .limit(10)
```

---

## Step 3 — Generate the Analysis Prompt

Based on the policy and its context, you must first write yourself a
specific, evidence-grounded analysis prompt before analysing.

The prompt you write for yourself must:
- Name specific donors, amounts, and how many years before the policy they gave
- Name specific MPs with conflicts and their exact declared interests
- Name specific companies and their effective tax rates
- Reference the actual policy text or keywords that indicate who benefits
- Ask for the most accurate international comparison for THIS specific policy type
  (not a generic one — think about what country genuinely did this differently)
- Be more specific than any template could be, because you have the actual data

Write the self-prompt in this format:

```
SELF-PROMPT for: [policy title] ([date])

You are analysing whether the following Australian policy decision primarily
benefited private/corporate interests over the public interest.

POLICY: [title]
DATE: [date]
CATEGORY: [category]
FLAG REASONS: [list from flag_reasons]
FLAG SCORE: [score]/10

POLICY TEXT EXCERPT:
[first 1500 chars of raw_text]

DONATION EVIDENCE:
[list each donation: "- $X from [donor] ([industry]) to [party] in [year] — X years before this policy"]
[if no donations: "No donations found matching this industry/party/timeframe combination"]

CONFLICT OF INTEREST EVIDENCE:
[list each conflicted voter: "- [MP name] ([party], [role]) voted YES — holds [interest_type] in [company] ([industry])"]
[if none: "No conflicts of interest found in declared interests"]

TAX RECORD EVIDENCE:
[list zero-tax companies: "- [company] paid $X tax on $Y income (effective rate: Z%) in [year]"]
[if none: "No zero-tax companies found in this sector"]

Now produce a rigorous accountability analysis. Return valid JSON only,
no markdown fences, no preamble:

{
  "primary_beneficiaries": string[],
  "disadvantaged_groups": string[],
  "revenue_impact": string,
  "corporate_advantage": boolean,
  "conflict_of_interest_flags": [{"member": string, "interest": string, "relevance": string}],
  "linked_donations": [{"donor": string, "amount": string, "years_before_policy": number, "industry": string}],
  "corruption_signal_strength": "none" | "weak" | "moderate" | "strong",
  "corruption_signal_reasoning": string,
  "alternative_policy": string,
  "comparison_country": string,
  "comparison_approach": string,
  "comparison_outcome": string,
  "comparison_period": string,
  "impact_score": number (0-10),
  "confidence_notes": string
}
```

---

## Step 4 — Run the Analysis

Using the self-prompt you generated, produce the structured JSON analysis.

Rules for your analysis:
- Only reference entities (donors, MPs, companies) that appear in the evidence
  you were given. Do not introduce names not in the data.
- If a corruption signal is "strong", impact_score must be 7 or higher.
- If corruption_signal_strength is "none", say so clearly — not every flagged
  policy is actually corrupt. Some are just imperfect policy.
- For the international comparison: pick the most directly analogous country
  that genuinely implemented an alternative. Be specific about outcomes and dates.
  Norway's petroleum fund, New Zealand's negative gearing removal, Denmark's
  payroll tax reform — use real cases with real figures.
- confidence_notes must acknowledge what data was missing or limited.

---

## Step 5 — Self-Check Before Writing

Before writing to the database, verify your output:

1. Is every named entity in your analysis present in the evidence you were given?
   If you named a donor that wasn't in the donations list — remove it.

2. Does impact_score match corruption_signal_strength?
   - strong → score must be ≥ 7
   - moderate → score 4–7
   - weak → score 2–4
   - none → score < 3
   If mismatched — fix before writing.

3. Are all required JSON fields present and correctly typed?
   Run a mental schema check before writing.

4. Is comparison_outcome specific? ("Norway's sovereign wealth fund reached
   $1.6T AUD equivalent by 2023" is specific. "They did better" is not.)

If any check fails — fix the output. Do not write a flawed record.

---

## Step 6 — Write to Supabase

```javascript
// Write the timeline event
const { error } = await supabase
  .from('timeline_events')
  .insert({
    policy_id: policy.id,
    date: policy.date,
    title: policy.title,
    category: policy.category,
    impact_score: analysis.impact_score,
    confidence_score: 0.85,  // adjust down if confidence_notes mentions major gaps
    what_changed: analysis.what_changed,  // NEW: plain English explainer
    primary_beneficiaries: analysis.primary_beneficiaries,
    disadvantaged_groups: analysis.disadvantaged_groups,
    revenue_impact: analysis.revenue_impact,
    corporate_advantage: analysis.corporate_advantage,
    conflict_of_interest_flags: analysis.conflict_of_interest_flags,
    linked_donations: analysis.linked_donations,
    donations_context: analysis.donations_context,  // NEW: plain English note for donations table
    alternative_policy: analysis.alternative_policy,
    comparison_country: analysis.comparison_country,
    comparison_approach: analysis.comparison_approach,
    comparison_outcome: analysis.comparison_outcome,
    analysis_json: analysis,  // includes flag_explanations, confidence_notes, corruption_signal_*
    generated_at: new Date().toISOString()
  })

if (error) {
  console.error(`Failed to write event for policy ${policy.id}:`, error)
} else {
  // Mark policy complete
  await supabase
    .from('policies')
    .update({ status: 'complete', updated_at: new Date().toISOString() })
    .eq('id', policy.id)

  console.log(`✓ ${policy.title} (score: ${analysis.impact_score}/10, signal: ${analysis.corruption_signal_strength})`)
}
```

---

## Step 7 — Repeat for Each Policy

Process each flagged policy in the queue one at a time.
After each write, print the one-line status above before moving to the next.

Do not batch or skip. Each policy deserves its own full context pull and
its own self-generated prompt. The quality of the output depends on this.

---

## Step 8 — Session Summary

After processing all policies in the queue, print:

```
========================================
ANALYSIS SESSION COMPLETE
Processed : X policies
  Strong signal  : X
  Moderate signal: X
  Weak signal    : X
  No signal      : X
Highest impact : [policy title] (score: X/10)
Remaining queue: X still flagged
========================================
```

If there are still flagged policies remaining (because you hit a natural stopping
point), say so explicitly and confirm the next run command.

---

## How to Run This

In a terminal, from the project root:

```bash
claude "Read ANALYSIS_TASK.md and process all flagged policies in Supabase"
```

Or to process a specific number:
```bash
claude "Read ANALYSIS_TASK.md and process the top 5 highest-scored flagged policies"
```

Or to check status without processing:
```bash
claude "Read ANALYSIS_TASK.md Step 1 only — show me the current queue status"
```

---

## Important Notes

- You are not calling an external AI API. You are the AI. Your analytical
  capability is what produces the analysis — use it fully.
- Each session will process 10–25 policies before natural context limits.
  This is fine — run again tomorrow for the next batch.
- The `status` column tracks everything. Already-complete policies will not
  appear in the queue (filtered by `status = 'flagged'`).
- If a policy looks like it was mis-flagged by the rules engine (e.g. it matched
  keywords but is clearly a procedural matter), set status to 'skipped' instead
  of writing a low-quality analysis. Quality over volume.
