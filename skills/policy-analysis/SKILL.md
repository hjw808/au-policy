# Skill: Policy Analysis

## Purpose

Research and write up a complete analysis for one or more Australian policy decisions, following the project's 7-step analysis structure. Outputs data ready for insertion into the Supabase database via the seed format.

## When to Use

- Adding new policy entries to the system
- Re-analysing existing entries with better data
- Batch-processing a category (e.g., "analyse all major healthcare policies from 2010-2024")
- Responding to "add more data" or "fill out [category]" requests

## Input

The user provides one of:
- A specific policy name or legislation title (e.g., "Stage 3 Tax Cuts")
- A category to fill (e.g., "add more mining policies")
- A time period to cover (e.g., "what happened in healthcare 2015-2020")
- A raw list of policies to process

## Research Process

For EACH policy, execute these steps in order. Do not skip any step.

### 1. Identify the Policy
- Search for the legislation or policy decision on parliament.gov.au, legislation.gov.au, or via web search
- Confirm: exact title, date introduced, date passed, which chamber, which government
- Record: what it changed, what it replaced (if anything), key dollar figures
- **The output for Step 1 must lead with the change in one plain-English sentence.** What was the rule before? What is it now? A reader who only reads sentence one should instantly understand what happened. Background comes after.

### 2. Identify Beneficiaries
- Who gained financially from this policy?
- Search ATO corporate tax transparency data for companies in the affected industry
- Quantify: estimated tax savings, contract values, subsidy amounts, market impact
- Check if beneficiaries appear in the ATO data as low-tax or zero-tax entities

### 3. Research Donations
- Search AEC annual returns for the relevant industry
- Time window: 3 years before and 2 years after the policy date
- Record: donor name, amount (AUD), recipient party, financial year
- Flag: did donations increase in the lead-up to the decision?
- Check BOTH major parties — not just the governing party

### 4. Check Conflicts of Interest
- Identify key MPs who voted on or championed this policy
- Search the Register of Members' Interests for:
  - Shareholdings in affected companies or industries
  - Directorships or board positions
  - Income from affected sectors
  - Property interests relevant to property policies
- Name the MPs explicitly. Do not anonymise.

### 5. Find International Comparison
- Pick the most relevant comparison country from: Norway, UK, NZ, Canada, Denmark, Germany, Sweden, Ireland
- Research how they handle the same policy area
- **DO NOT just list rates and statistics.** Tell the story:
  - What did the country actually do? (the decision)
  - Why did they do it? (the reasoning)
  - What was the outcome for their citizens? (the result — jobs, savings, services, wealth fund, etc.)
- End with ONE plain-language sentence comparing to Australia (e.g., "Norway's citizens each have $350,000 saved in their sovereign wealth fund from oil profits. Australians have nothing equivalent.")
- The reader should feel the difference, not just see numbers.

### 6. Assess Signal Strength
Apply this rubric strictly:

**Strong signal** (all three must be true):
- Direct financial link between a donor and a policy beneficiary
- Amounts exceed $500K in aggregate from the affected industry
- Timing is suspicious (donations spike before or after the decision)

**Moderate signal** (two of three):
- Indirect but clear industry-to-policy link
- Pattern of donations from the affected sector
- Some MPs have declared relevant interests

**Weak signal** (one of three):
- Industry donations exist but are small (<$100K)
- Timing link is unclear or spread over many years
- Interests are tangential

**None**:
- No discernible financial connection in available data

When uncertain, rate ONE LEVEL LOWER than your instinct suggests.

### 7. Score Impact (1–10)
Score based on these four factors, each contributing roughly equally:

| Factor | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| Dollar value | <$100M affected | $100M–$1B | >$1B |
| People impacted | Niche industry | Specific sector | Millions of Australians |
| Duration | One-off or reversed | Multi-year | Permanent structural change |
| Resource transfer | Minor concession | Significant subsidy | Major public-to-private transfer |

## Output Format

For each policy analysed, produce a JavaScript object matching this schema (for insertion into `seed-full.js`):

```javascript
// Policy entry
{
  external_id: 'au-pol-XXX',
  date: 'YYYY-MM-DD',
  title: 'Full Policy Title',
  category: 'category_slug',        // from the category list in CLAUDE.md
  status: 'complete',
  flag_score: N,                     // sum of rule scores
  flag_reasons: [
    { rule: 'donation_correlation', score: N, detail: 'Specific detail with $ amounts and names' },
    { rule: 'conflict_of_interest', score: N, detail: 'MP names and their interests' },
    { rule: 'resource_capture', score: N, detail: 'Only if applicable' },
    { rule: 'tax_avoidance_enablement', score: N, detail: 'Only if applicable' },
  ],
  raw_text: 'Factual description of the policy, 2-4 sentences, specific dates and figures.',
  matched_keywords: ['keyword1', 'keyword2'],
}

// Timeline event (the full analysis)
{
  policy_id: null,  // linked after policy insert
  date: 'YYYY-MM-DD',
  title: 'Same as policy title',
  category: 'category_slug',
  impact_score: N,
  confidence_score: 0.7-0.95,       // how confident in the data quality
  primary_beneficiaries: ['Company A', 'Industry B'],
  disadvantaged_groups: ['Group affected negatively'],
  revenue_impact: '$X.XB over N years',
  corporate_advantage: true/false,
  conflict_of_interest_flags: [
    { mp: 'Full Name', interest: 'Shareholding in X', party: 'Liberal/Labor' }
  ],
  linked_donations: [
    { donor: 'Company Name', amount: 1200000, party: 'Liberal', year: '2020-21' }
  ],
  alternative_policy: 'What another country does differently',
  comparison_country: 'Norway',
  comparison_approach: 'How the comparison country handles this',
  comparison_outcome: 'The result of their approach',
  analysis_json: {
    corruption_signal_strength: 'strong/moderate/weak/none',
    key_finding: 'One-sentence plain-language summary of what the data shows',
    reasoning: '2-3 sentence explanation of why this signal level was assigned',
  },
}

// Related donations
{
  external_id: 'don-XXX',
  donor_name: 'Company Name Pty Ltd',
  donor_industry: 'industry_slug',
  recipient_party: 'Liberal/Labor/Nationals/Greens',
  amount_aud: 1200000,
  financial_year: '2020-21',
}
```

## Quality Checklist

Before finalising ANY policy analysis, verify:

- [ ] Date is exact (not approximate) — check Hansard or legislation.gov.au
- [ ] Dollar figures are sourced (AEC disclosure, ATO data, budget papers)
- [ ] At least one international comparison is included
- [ ] Both major parties' donation receipts are checked, not just the governing party
- [ ] Signal strength matches the rubric above — not inflated
- [ ] Impact score is justified by the four-factor table
- [ ] All MP names are real people who were actually in parliament at that time
- [ ] Company names match their legal trading names (e.g., "BHP Group Limited" not just "BHP")
- [ ] Financial years use Australian format: "2020-21" not "2020" or "FY2021"
- [ ] The `raw_text` field is factual and contains no opinion or signal language

## Batch Mode

When processing multiple policies:
1. Group by category
2. Process chronologically within each category (oldest first)
3. Look for patterns across entries (e.g., same donor appearing repeatedly)
4. Note cross-category links (e.g., a mining company that also donated during tax policy debates)
5. Output all entries together with a summary count

## Confidence Scoring

Rate confidence in your data quality:
- **0.9–0.95**: Data from official government sources (Hansard, AEC, ATO), dates confirmed
- **0.7–0.89**: Mix of official and news sources, some figures estimated
- **0.5–0.69**: Primarily news-sourced, figures approximate, dates approximate
- **Below 0.5**: Don't include it — mark as needing manual verification instead
