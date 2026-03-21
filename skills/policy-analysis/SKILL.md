# Skill: Policy Analysis

## Purpose

Research and write up a complete analysis for one or more Australian policy decisions. The output must be understandable to an ordinary Australian who has never heard of this policy. Every section should explain *what happened* before presenting numbers, names, or technical details.

## The Reader Test

Before writing any field, ask: "Would my mum understand this?" If the answer is no, rewrite it. The reader:
- Does not know what the MRRT, RSPT, CGT, or any acronym stands for
- Does not know what "foregone revenue" means
- Does not know what the AEC, ATO, or PBO are
- Does not know how political donations work in Australia
- DOES care about how this affects their taxes, services, and cost of living

Every field must pass this test.

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

### 1. Identify the Policy — Write the "What Changed" Explainer

- Search for the legislation or policy decision on parliament.gov.au, legislation.gov.au, or via web search
- Confirm: exact title, date introduced, date passed, which chamber, which government
- Record: what it changed, what it replaced (if anything), key dollar figures

**This step produces the `what_changed` field — the most important text on the page.**

Rules for `what_changed`:
- Open with ONE sentence that explains the change in kitchen-table English: "Before this policy, X. After it, Y."
- Expand with 2-3 paragraphs of background, written as a story with a beginning, middle, and end
- Define every acronym on first use: "the Minerals Resource Rent Tax (MRRT)" — never assume the reader knows
- Use active voice: "The Abbott government scrapped the tax" not "The tax was repealed"
- Name names: which PM, which party, which companies. Don't hide behind passive voice
- Include the timeline: what happened first, what happened next, what was the result
- End with one sentence that makes the consequence concrete: "The 2014 repeal finished the job — removing even this token tax."

Bad example: "The MRRT was repealed in 2014 following downgraded revenue projections."
Good example: "Before 2014, mining companies paid an extra tax when their profits from iron ore and coal were unusually high — the kind of windfall profits that come from digging up resources that belong to all Australians. In September 2014, the Abbott government scrapped it entirely."

### 2. Identify Beneficiaries

- Who gained financially from this policy?
- Search ATO corporate tax transparency data for companies in the affected industry
- Quantify: estimated tax savings, contract values, subsidy amounts, market impact
- Check if beneficiaries appear in the ATO data as low-tax or zero-tax entities

**For the output fields:**
- `primary_beneficiaries`: Each entry should include a brief description, not just a name. Example: "BHP Group — Australia's largest mining company" not just "BHP"
- `disadvantaged_groups`: Each entry should explain *why* they're disadvantaged. Example: "Australian taxpayers — lost billions in revenue from publicly-owned mineral resources" not just "Australian taxpayers"

### 3. Research Donations

- Search AEC annual returns for the relevant industry
- Time window: 3 years before and 2 years after the policy date
- Record: donor name, amount (AUD), recipient party, financial year
- Flag: did donations increase in the lead-up to the decision?
- Check BOTH major parties — not just the governing party

**For the `linked_donations` output:**
- Each entry needs a `timing` field that explains when relative to the policy: "1 year before repeal" not just "1y"
- Add a plain-English note below the table explaining what the donations are and what the total was. Example: "These are disclosed donations to the Coalition parties during 2012–14. Total mining sector donations in this window exceeded $4.7 million."

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

**Frame it as the same question with a different answer:**

Open with the shared question both countries face. Example: "Norway faces the same question Australia does: when companies extract finite natural resources that belong to the public, how much of the profit should go back to citizens?"

Then tell the story:
- What did the country actually do? (the decision)
- Why did they do it? (the reasoning)
- What was the outcome for their citizens? (the result — jobs, savings, services, wealth fund, etc.)

End with ONE plain-language sentence that makes the contrast concrete. Example: "Australia had a comparable mining boom during the same period. The difference is that Australia let mining companies negotiate their own tax down to nearly nothing, then abolish it. There is no Australian sovereign wealth fund."

The reader should *feel* the difference, not just see numbers.

### 6. Write the Revenue Impact

**This is NOT a place for shorthand like "$6.5B in foregone revenue over 4 years."**

Structure:
1. First sentence: set the context. What was the money for? Where did it come from?
2. Second sentence: what was projected vs what actually happened?
3. Third sentence: make the dollar figure real. Convert to something tangible — nurses, hospital beds, school funding, housing units. Use rough but defensible conversions.
4. Final sentence: where did the money go instead?

Bad example: "Estimated $6.5B in foregone revenue over 4 years."
Good example: "Australia's mining boom generated record profits from resources that belong to the public. The original tax would have captured roughly $12 billion per year for public use. The weakened replacement collected just $400 million total before it was repealed — locking in an estimated $6.5 billion in foregone revenue over the following four years. To put this in perspective: $6.5 billion would fund approximately 65,000 nurses for four years. That money instead remained as mining company profit and shareholder dividends."

### 7. Write the Analysis

**Tell the story, don't summarise a spreadsheet.**

Structure:
1. Lead with what this represents: "This is one of the most documented examples of..."
2. Then give the sequence of events in chronological order: X happened, then Y, then Z
3. Name the companies and amounts
4. Note any revolving-door appointments (minister → industry lobby) if they exist
5. End with the measurable gap: "The difference between X and Y represents..."

Bad example: "The mining industry spent $22M on advertising against the original RSPT and donated $4.7M to the Coalition before the MRRT repeal."
Good example: "This is one of the most documented examples of corporate lobbying directly changing Australian tax law. The sequence of events: mining companies faced a 40% super-profits tax, spent $22 million on a public ad campaign opposing it, donated $4.7 million to the Coalition in the lead-up to the repeal, and the tax was abolished."

### 8. Write the Confidence Notes

**Explain what the sources ARE, not just name them.**

The reader doesn't know what "AEC disclosures" or "PBO estimates" are. Explain each source in parentheses on first use.

Bad example: "Very high confidence. AEC donation records, mining industry advertising spend documented by media, and PBO revenue estimates all publicly available."
Good example: "We rate our confidence in this analysis as very high. Every key claim is backed by official public records: donation amounts come from the Australian Electoral Commission's mandatory disclosures (political parties are legally required to report donations above $14,500). Revenue figures come from Treasury forecasts and the Parliamentary Budget Office. The $22 million advertising campaign was tracked by Nielsen, which monitors all TV ad spending in Australia."

### 9. Write the Flag Reasons

**Explain the detection system, not just the labels.**

Each flag reason needs three things:
1. A plain-English label (not a code name like "donation_correlation")
2. An explanation of *what the pattern is* and *why it's worth examining*
3. An explicit note that a flag doesn't prove corruption — it's a pattern

Bad example: `donation_correlation +5 — $4.7M from mining sector to Coalition 2012-14`
Good example: `Donation pattern detected — Mining companies donated $4.7 million to the Coalition between 2012 and 2014. The tax that hurt their profits was repealed in 2014. When an industry donates millions to a party and that party then removes a tax on that industry, the system flags it for investigation. That doesn't prove corruption — but it's a pattern worth examining.`

### 10. Assess Signal Strength

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

### 11. Score Impact (1–10)

Score based on these four factors, each contributing roughly equally:

| Factor | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| Dollar value | <$100M affected | $100M–$1B | >$1B |
| People impacted | Niche industry | Specific sector | Millions of Australians |
| Duration | One-off or reversed | Multi-year | Permanent structural change |
| Resource transfer | Minor concession | Significant subsidy | Major public-to-private transfer |

## Output Format

For each policy analysed, produce a JavaScript object matching this schema (for insertion via `seed-batch.js`):

```javascript
{
  ext: 'au-pol-XXX',
  date: 'YYYY-MM-DD',
  title: 'Policy Title — One-Line Plain English Subtitle',
  category: 'category_slug',
  impact_score: N,
  confidence_score: 0.7-0.95,

  // NEW: The "What Changed" explainer — most important text on the page
  // 2-4 paragraphs, plain English, passes the "would my mum understand this" test
  what_changed: `Before this policy, [old rule]. In [date], the [government] [changed it to new rule].

[Background paragraph: how we got here, who pushed for it, what the timeline was]

[Consequence paragraph: what happened as a result]`,

  // Each entry includes a brief description
  primary_beneficiaries: [
    'BHP Group — Australia\'s largest mining company',
    'Rio Tinto — second-largest, iron ore and aluminium',
  ],

  // Each entry explains WHY they're disadvantaged
  disadvantaged_groups: [
    'Australian taxpayers — lost billions in revenue from publicly-owned mineral resources',
    'Public services — health, education, infrastructure funding that the revenue was earmarked for',
  ],

  // Full paragraph, not shorthand. Context → projection vs reality → tangible comparison → where money went
  revenue_impact: 'Australia\'s mining boom generated record profits from resources that belong to the public. The original tax would have captured roughly $12 billion per year. The replacement collected just $400 million total. To put $6.5 billion in perspective: that would fund approximately 65,000 nurses for four years. That money instead remained as mining company profit.',

  corporate_advantage: true/false,

  conflict_of_interest_flags: [
    {
      member: 'Full Name (Role)',
      interest: 'What they held or did',
      relevance: 'Why it matters for this specific policy'
    }
  ],

  // Donations with timing context
  linked_donations: [
    {
      donor: 'Company Name',
      amount: '$890K',
      years_before_policy: 1,
      industry: 'mining',
      timing: '1 year before repeal'
    }
  ],

  // Summary note for the donations table
  donations_context: 'These are disclosed donations to the Coalition parties during 2012–14. Total mining sector donations in this window exceeded $4.7 million.',

  // International comparison — framed as shared question, different answer
  comparison_country: 'Norway',
  comparison_approach: 'Norway faces the same question Australia does: when companies extract finite natural resources that belong to the public, how much of the profit should go back to citizens? Norway\'s answer was a 78% tax on petroleum profits. The industry lobbied hard against it — just like in Australia — but the Norwegian government held firm.',
  comparison_outcome: 'Norway\'s sovereign wealth fund has accumulated over $2.1 trillion USD by 2024. That works out to roughly $380,000 per Norwegian citizen, invested for future generations. Australia had a comparable mining boom during the same period. There is no Australian sovereign wealth fund.',

  analysis_json: {
    // The story, not a summary
    corruption_signal_strength: 'strong/moderate/weak/none',
    corruption_signal_reasoning: 'This is one of the most documented examples of... [chronological story with names, amounts, sequence of events]',

    // Explain sources, not just name them
    confidence_notes: 'We rate our confidence as very high. Donation amounts come from the Australian Electoral Commission\'s mandatory disclosures (political parties are legally required to report donations above $14,500). Revenue figures come from Treasury forecasts and the Parliamentary Budget Office...',

    // Plain English flag explanations
    flag_explanations: [
      {
        label: 'Donation pattern detected',
        detail: 'Mining companies donated $4.7 million to the Coalition between 2012 and 2014. The tax that hurt their profits was repealed in 2014. When an industry donates millions to a party and that party then removes a tax on that industry, the system flags it for investigation. That doesn\'t prove corruption — but it\'s a pattern worth examining.'
      },
      {
        label: 'Public resource transferred to private profit',
        detail: 'This policy took a revenue stream that belonged to all Australians and eliminated it. The money didn\'t disappear — it stayed as mining company profit instead of entering the public budget. When a policy directly transfers public wealth to private hands, the system flags it as high-priority.'
      }
    ]
  },
}
```

## Quality Checklist

Before finalising ANY policy analysis, verify:

- [ ] `what_changed` opens with one sentence explaining before vs after in plain English
- [ ] `what_changed` defines every acronym on first use
- [ ] `what_changed` names the PM, government, and key companies — no passive voice
- [ ] `revenue_impact` includes a tangible comparison (nurses, houses, schools, etc.)
- [ ] `revenue_impact` explains where the money went instead
- [ ] `primary_beneficiaries` each have a brief description after the name
- [ ] `disadvantaged_groups` each explain WHY they're disadvantaged
- [ ] `comparison_approach` opens with the shared question both countries face
- [ ] `comparison_outcome` ends with a concrete comparison sentence
- [ ] `confidence_notes` explains what each source IS in parentheses
- [ ] `flag_explanations` each include the "doesn't prove corruption" caveat
- [ ] Date is exact (not approximate) — check Hansard or legislation.gov.au
- [ ] Dollar figures are sourced (AEC disclosure, ATO data, budget papers)
- [ ] Both major parties' donation receipts are checked, not just the governing party
- [ ] Signal strength matches the rubric — not inflated
- [ ] Impact score is justified by the four-factor table
- [ ] All MP names are real people who were actually in parliament at that time
- [ ] Company names match their legal trading names
- [ ] Financial years use Australian format: "2020-21"
- [ ] A general Australian with no policy knowledge can read this and understand what happened

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
