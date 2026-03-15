/**
 * Seed Script — Insert sample data for testing the frontend.
 *
 * Run: node src/seed.js
 *
 * This inserts realistic sample data into Supabase so you can see
 * the website working before the real ingestion pipeline runs.
 * Safe to run multiple times (uses upserts with unique IDs).
 */

import 'dotenv/config'
import { validateEnv } from './lib/env.js'
import supabase from './db/client.js'

validateEnv(['SUPABASE_URL', 'SUPABASE_SERVICE_KEY'])

const MEMBERS = [
  { id: 'seed-001', name: 'Alice Morrison', party: 'Liberal', electorate: 'Wentworth', role: 'Minister for Resources' },
  { id: 'seed-002', name: 'Bob Chen', party: 'Labor', electorate: 'Grayndler', role: null },
  { id: 'seed-003', name: 'Carol Singh', party: 'Greens', electorate: 'Melbourne', role: null },
  { id: 'seed-004', name: 'David Williams', party: 'Liberal', electorate: 'Flinders', role: 'Treasurer' },
  { id: 'seed-005', name: 'Emma Johnson', party: 'Labor', electorate: 'Watson', role: null },
  { id: 'seed-006', name: 'Frank OBrien', party: 'Nationals', electorate: 'New England', role: 'Minister for Agriculture' },
]

const POLICIES = [
  {
    external_id: 'seed-policy-001',
    date: '2023-06-15',
    title: 'Petroleum Resource Rent Tax Concession Extension',
    category: 'oil_gas',
    source: 'seed',
    raw_text: 'Debate on extending petroleum resource rent tax concessions for offshore gas projects in the Browse Basin. The amendment provides additional tax offsets for companies investing in new LNG facilities.',
    matched_keywords: ['petroleum', 'tax', 'concession', 'gas', 'resources'],
    status: 'complete',
    flag_score: 9,
    flag_reasons: [
      { rule: 'donation_correlation', score: 4, detail: '5 donations totalling $2.1M from oil_gas industry to Liberal Party in 2020-23 (4 distinct donors)' },
      { rule: 'resource_capture', score: 6, detail: 'Resources policy (oil_gas) with concession, petroleum keywords — classic resource capture pattern (amplified: donation correlation also present)' },
    ],
  },
  {
    external_id: 'seed-policy-002',
    date: '2022-11-20',
    title: 'Mining Royalty Rate Review (Iron Ore)',
    category: 'mining',
    source: 'seed',
    raw_text: 'Review of mining royalty rates for iron ore exports. The proposed adjustment would reduce the effective royalty rate for tier-1 producers.',
    matched_keywords: ['mining', 'royalt', 'export', 'resources'],
    status: 'complete',
    flag_score: 11,
    flag_reasons: [
      { rule: 'donation_correlation', score: 5, detail: '8 donations totalling $3.4M from mining industry to Liberal Party in 2019-22 (6 distinct donors)' },
      { rule: 'conflict_of_interest', score: 7, detail: '3 yes-voting MPs hold interests in mining sector: Alice Morrison (Minister for Resources) — holds shares in MiningCorp' },
      { rule: 'resource_capture', score: 6, detail: 'Resources policy (mining) with royalt, export keywords — classic resource capture pattern' },
    ],
  },
  {
    external_id: 'seed-policy-003',
    date: '2024-03-10',
    title: 'Negative Gearing and Capital Gains Tax Review',
    category: 'property',
    source: 'seed',
    raw_text: 'Debate on proposed changes to negative gearing and capital gains tax discount. The bill would maintain the current 50% CGT discount and preserve negative gearing without modification.',
    matched_keywords: ['negative gearing', 'capital gains', 'tax', 'property'],
    status: 'complete',
    flag_score: 7,
    flag_reasons: [
      { rule: 'donation_correlation', score: 4, detail: '12 donations totalling $1.8M from property industry to governing party in 2021-24' },
      { rule: 'tax_avoidance_enablement', score: 3, detail: '6 companies in property sector paid <5% tax, 2 also appear as political donors' },
    ],
  },
  {
    external_id: 'seed-policy-004',
    date: '2023-09-05',
    title: 'Superannuation Tax Concession Amendments',
    category: 'superannuation',
    source: 'seed',
    raw_text: 'Amendment to superannuation contribution caps and tax treatment of high-balance superannuation accounts.',
    matched_keywords: ['superannuation', 'tax', 'concession'],
    status: 'complete',
    flag_score: 5,
    flag_reasons: [
      { rule: 'donation_correlation', score: 3, detail: '4 donations totalling $890K from financial industry to governing party' },
      { rule: 'tax_avoidance_enablement', score: 2, detail: '3 companies in financial sector paid <5% tax' },
    ],
  },
  {
    external_id: 'seed-policy-005',
    date: '2021-05-22',
    title: 'Defence Procurement Contract Framework Amendment',
    category: 'defence',
    source: 'seed',
    raw_text: 'Changes to the defence procurement framework to streamline contract awards for major defence acquisitions.',
    matched_keywords: ['defence contract', 'procurement'],
    status: 'flagged',
    flag_score: 4,
    flag_reasons: [
      { rule: 'donation_correlation', score: 2, detail: '2 donations totalling $340K from defence industry to Liberal Party' },
      { rule: 'conflict_of_interest', score: 3, detail: '1 yes-voting MP holds board position in defence-adjacent company' },
    ],
  },
]

const DONATIONS = [
  { external_id: 'seed-don-001', donor_name: 'Woodside Energy', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 520000, financial_year: '2022-23' },
  { external_id: 'seed-don-002', donor_name: 'Santos Ltd', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 380000, financial_year: '2021-22' },
  { external_id: 'seed-don-003', donor_name: 'Chevron Australia', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 290000, financial_year: '2022-23' },
  { external_id: 'seed-don-004', donor_name: 'BHP Group', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 780000, financial_year: '2021-22' },
  { external_id: 'seed-don-005', donor_name: 'Rio Tinto', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 650000, financial_year: '2020-21' },
  { external_id: 'seed-don-006', donor_name: 'Fortescue Metals', donor_industry: 'mining', recipient_party: 'Labor', amount_aud: 420000, financial_year: '2022-23' },
  { external_id: 'seed-don-007', donor_name: 'Lendlease Group', donor_industry: 'property', recipient_party: 'Labor', amount_aud: 310000, financial_year: '2023-24' },
  { external_id: 'seed-don-008', donor_name: 'Stockland Corp', donor_industry: 'property', recipient_party: 'Liberal', amount_aud: 280000, financial_year: '2022-23' },
  { external_id: 'seed-don-009', donor_name: 'Macquarie Group', donor_industry: 'financial', recipient_party: 'Liberal', amount_aud: 560000, financial_year: '2021-22' },
  { external_id: 'seed-don-010', donor_name: 'Commonwealth Bank', donor_industry: 'financial', recipient_party: 'Labor', amount_aud: 440000, financial_year: '2022-23' },
  { external_id: 'seed-don-011', donor_name: 'BAE Systems', donor_industry: 'defence', recipient_party: 'Liberal', amount_aud: 190000, financial_year: '2020-21' },
  { external_id: 'seed-don-012', donor_name: 'CFMEU', donor_industry: 'union', recipient_party: 'Labor', amount_aud: 1200000, financial_year: '2022-23' },
]

const COMPANIES = [
  { name: 'Chevron Australia', industry: 'oil_gas', total_income_aud: 21300000000, tax_paid_aud: 0, effective_tax_rate: 0, financial_year: '2022-23' },
  { name: 'ExxonMobil Australia', industry: 'oil_gas', total_income_aud: 8900000000, tax_paid_aud: 12000000, effective_tax_rate: 0.0013, financial_year: '2022-23' },
  { name: 'Origin Energy', industry: 'energy', total_income_aud: 15600000000, tax_paid_aud: 340000000, effective_tax_rate: 0.0218, financial_year: '2022-23' },
  { name: 'Fortescue Metals', industry: 'mining', total_income_aud: 18700000000, tax_paid_aud: 4200000000, effective_tax_rate: 0.2246, financial_year: '2022-23' },
  { name: 'Lendlease Group', industry: 'property', total_income_aud: 14200000000, tax_paid_aud: 89000000, effective_tax_rate: 0.0063, financial_year: '2022-23' },
]

const TIMELINE_EVENTS = [
  {
    date: '2023-06-15',
    title: 'Petroleum Resource Rent Tax Concession Extension',
    category: 'oil_gas',
    impact_score: 8.5,
    confidence_score: 0.82,
    primary_beneficiaries: ['Offshore gas producers (Woodside, Santos, Chevron)', 'LNG export terminal operators'],
    disadvantaged_groups: ['Australian taxpayers', 'Renewable energy sector (relative disadvantage)', 'Future generations (depleted resource base)'],
    revenue_impact: 'Estimated $2.1 billion in foregone government revenue over the forward estimates period',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      { member: 'Alice Morrison', interest: 'Shares in Santos Ltd valued at $180,000', relevance: 'Minister for Resources who sponsored the bill holds direct equity in a primary beneficiary company' },
    ],
    linked_donations: [
      { donor: 'Woodside Energy', amount: '$520,000', years_before_policy: 1, industry: 'oil_gas' },
      { donor: 'Santos Ltd', amount: '$380,000', years_before_policy: 2, industry: 'oil_gas' },
      { donor: 'Chevron Australia', amount: '$290,000', years_before_policy: 1, industry: 'oil_gas' },
    ],
    alternative_policy: 'Apply the PRRT at its statutory rate without concessions; redirect revenue to sovereign wealth fund',
    comparison_country: 'Norway',
    comparison_approach: 'Norway applies a 78% combined tax rate on petroleum profits with no concession offsets, channelling revenue into the Government Pension Fund Global',
    comparison_outcome: 'Norway sovereign wealth fund reached approximately $2.4 trillion AUD equivalent by 2024, providing intergenerational wealth from finite resources',
    analysis_json: {
      corruption_signal_strength: 'strong',
      corruption_signal_reasoning: 'The combination of $1.19M in oil and gas industry donations to the governing party within 3 years, a sponsoring Minister with direct equity in a beneficiary company, and $2.1B in foregone revenue creates a strong pattern consistent with regulatory capture. The PRRT concessions disproportionately benefit a small number of multinational gas companies while Australia receives significantly less resource rent than comparable petroleum-producing nations.',
      confidence_notes: 'High confidence on donation data and MP interest declaration. Revenue impact estimate is from Parliamentary Budget Office forward estimates. The Minister holding Santos shares while sponsoring gas industry concessions is documented in the Register of Members Interests.',
    },
  },
  {
    date: '2022-11-20',
    title: 'Mining Royalty Rate Review (Iron Ore)',
    category: 'mining',
    impact_score: 9,
    confidence_score: 0.88,
    primary_beneficiaries: ['Tier-1 iron ore producers (BHP, Rio Tinto, Fortescue)', 'Mining industry shareholders'],
    disadvantaged_groups: ['State government budgets', 'Public infrastructure funding', 'Downstream manufacturing industry'],
    revenue_impact: 'Reduced effective royalty rates estimated to cost state governments $800M annually',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      { member: 'Alice Morrison', interest: 'Shares in MiningCorp Holdings valued at $95,000', relevance: 'Voted yes with declared mining sector investments' },
      { member: 'David Williams', interest: 'Family trust holds Rio Tinto shares', relevance: 'Treasurer who shaped the royalty review framework holds indirect mining equity' },
    ],
    linked_donations: [
      { donor: 'BHP Group', amount: '$780,000', years_before_policy: 1, industry: 'mining' },
      { donor: 'Rio Tinto', amount: '$650,000', years_before_policy: 2, industry: 'mining' },
      { donor: 'Fortescue Metals', amount: '$420,000', years_before_policy: 1, industry: 'mining' },
    ],
    alternative_policy: 'Implement a progressive royalty rate that increases with commodity prices, with floor rates that ensure minimum public return',
    comparison_country: 'Norway',
    comparison_approach: 'Norway levies a 22% corporate tax plus 56% special petroleum tax (78% total) on resource extraction, with all revenue directed to the sovereign wealth fund',
    comparison_outcome: 'Australia collected approximately 4% of the value of its iron ore exports in royalties in 2022, compared to Norway collecting roughly 60% of petroleum value — a gap of over $30 billion annually',
    analysis_json: {
      corruption_signal_strength: 'strong',
      corruption_signal_reasoning: 'Three of the largest iron ore companies donated a combined $1.85M to the governing party within 2 years of this review. The Minister for Resources and the Treasurer both hold mining sector investments and participated in shaping the review. The resulting royalty reduction transfers approximately $800M annually from public coffers to mining company profits. This represents a textbook pattern of resource capture where public mineral wealth is transferred to private interests with documented financial connections to decision-makers.',
      confidence_notes: 'Very high confidence. Donation data from AEC disclosures, MP interests from the Register, and royalty impact estimates from the Grattan Institute analysis.',
    },
  },
  {
    date: '2024-03-10',
    title: 'Negative Gearing and Capital Gains Tax Review',
    category: 'property',
    impact_score: 7,
    confidence_score: 0.75,
    primary_beneficiaries: ['Property investors', 'Real estate industry', 'High-income earners with investment portfolios'],
    disadvantaged_groups: ['First home buyers', 'Renters', 'Young Australians entering housing market'],
    revenue_impact: 'Maintaining current CGT discount and negative gearing costs approximately $20B annually in tax expenditure',
    corporate_advantage: true,
    conflict_of_interest_flags: [],
    linked_donations: [
      { donor: 'Lendlease Group', amount: '$310,000', years_before_policy: 1, industry: 'property' },
      { donor: 'Stockland Corp', amount: '$280,000', years_before_policy: 2, industry: 'property' },
    ],
    alternative_policy: 'Limit negative gearing to new housing only; reduce CGT discount from 50% to 25%',
    comparison_country: 'New Zealand',
    comparison_approach: 'New Zealand removed interest deductibility on investment properties (equivalent to ending negative gearing) in March 2021',
    comparison_outcome: 'New Zealand house prices fell 15% from peak by late 2022, improving affordability metrics. Rental supply did not collapse as industry had warned — vacancy rates remained stable.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Property industry donations are present and the policy clearly benefits property investors over first home buyers, but the conflict of interest signal is weaker here — no individual MPs with declared property development interests were identified voting on this specific bill. The $20B annual tax expenditure is significant public cost. The moderate signal reflects real financial connections between property industry and the decision, but without the direct personal conflicts seen in the mining and petroleum cases.',
      confidence_notes: 'Tax expenditure figures are from Treasury estimates. Donation data is from AEC. The NZ comparison data is well-documented. No individual MP conflict data was available for this vote.',
    },
  },
  {
    date: '2023-09-05',
    title: 'Superannuation Tax Concession Amendments',
    category: 'superannuation',
    impact_score: 5,
    confidence_score: 0.7,
    primary_beneficiaries: ['High-income superannuation holders', 'Financial services industry (fund managers, advisors)'],
    disadvantaged_groups: ['Low-income workers with small super balances', 'Public revenue base'],
    revenue_impact: 'Estimated $2.5B per year in concessional tax treatment of high-balance super accounts',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [
      { donor: 'Macquarie Group', amount: '$560,000', years_before_policy: 2, industry: 'financial' },
    ],
    alternative_policy: 'Cap concessional contributions at lower threshold; redirect savings to boost employer guarantee for low-income workers',
    comparison_country: 'Denmark',
    comparison_approach: 'Denmark taxes pension fund returns annually at a flat 15.3% rate with no special concessions for high-balance accounts',
    comparison_outcome: 'Denmark retirement system ranked #1 globally by Mercer in 2023, with more equitable outcomes across income levels despite higher tax on pension earnings',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Financial industry donations exist but at lower levels than the mining/petroleum cases. No direct MP conflicts of interest identified. The policy benefits the financial services industry through continued fund management of high-balance accounts, but the connection between donations and the specific policy outcome is less direct. Super policy is also genuinely complex with legitimate policy arguments on multiple sides.',
      confidence_notes: 'Revenue figures from PBO. Donation data present but limited. Denmark comparison well-documented in Mercer Global Pension Index.',
    },
  },
]

async function seed() {
  console.log('Seeding sample data...\n')

  // Members
  const { error: mErr } = await supabase.from('members').upsert(MEMBERS, { onConflict: 'id' })
  console.log(mErr ? `Members: ERROR — ${mErr.message}` : `Members: ${MEMBERS.length} upserted`)

  // Policies
  for (const p of POLICIES) {
    const { error } = await supabase.from('policies').upsert(p, { onConflict: 'external_id' })
    if (error) console.log(`Policy ERROR: ${error.message}`)
  }
  console.log(`Policies: ${POLICIES.length} upserted`)

  // Donations
  for (const d of DONATIONS) {
    const { error } = await supabase.from('donations').upsert(d, { onConflict: 'external_id' })
    if (error) console.log(`Donation ERROR: ${error.message}`)
  }
  console.log(`Donations: ${DONATIONS.length} upserted`)

  // Companies
  for (const c of COMPANIES) {
    const { error } = await supabase.from('companies').upsert(c, { onConflict: 'name,financial_year' })
    if (error) console.log(`Company ERROR: ${error.message}`)
  }
  console.log(`Companies: ${COMPANIES.length} upserted`)

  // Get policy IDs for timeline events
  const { data: seededPolicies } = await supabase
    .from('policies')
    .select('id, external_id')
    .like('external_id', 'seed-policy-%')

  const policyMap = {}
  for (const p of (seededPolicies || [])) {
    policyMap[p.external_id] = p.id
  }

  // Timeline events (matched by index to POLICIES array)
  const policyIds = ['seed-policy-001', 'seed-policy-002', 'seed-policy-003', 'seed-policy-004']
  let eventsInserted = 0

  for (let i = 0; i < TIMELINE_EVENTS.length; i++) {
    const policyId = policyMap[policyIds[i]]
    if (!policyId) continue

    // Check if event already exists
    const { data: existing } = await supabase
      .from('timeline_events')
      .select('id')
      .eq('policy_id', policyId)
      .limit(1)

    if (existing?.length) continue // Skip if already seeded

    const { error } = await supabase
      .from('timeline_events')
      .insert({ ...TIMELINE_EVENTS[i], policy_id: policyId })

    if (error) console.log(`Timeline event ERROR: ${error.message}`)
    else eventsInserted++
  }
  console.log(`Timeline events: ${eventsInserted} inserted`)

  // Sample votes
  const voteData = []
  const policy1Id = policyMap['seed-policy-001']
  const policy2Id = policyMap['seed-policy-002']

  if (policy1Id) {
    voteData.push(
      { policy_id: policy1Id, member_id: 'seed-001', vote: 'yes' },
      { policy_id: policy1Id, member_id: 'seed-002', vote: 'no' },
      { policy_id: policy1Id, member_id: 'seed-003', vote: 'no' },
      { policy_id: policy1Id, member_id: 'seed-004', vote: 'yes' },
      { policy_id: policy1Id, member_id: 'seed-006', vote: 'yes' },
    )
  }
  if (policy2Id) {
    voteData.push(
      { policy_id: policy2Id, member_id: 'seed-001', vote: 'yes' },
      { policy_id: policy2Id, member_id: 'seed-002', vote: 'no' },
      { policy_id: policy2Id, member_id: 'seed-003', vote: 'no' },
      { policy_id: policy2Id, member_id: 'seed-004', vote: 'yes' },
      { policy_id: policy2Id, member_id: 'seed-005', vote: 'no' },
    )
  }

  for (const v of voteData) {
    await supabase.from('votes').upsert(v, { onConflict: 'policy_id,member_id', ignoreDuplicates: true })
  }
  console.log(`Votes: ${voteData.length} upserted`)

  // Member interests
  const interests = [
    { member_id: 'seed-001', interest_type: 'shares', description: 'Shares in Santos Ltd valued at approximately $180,000', company_name: 'Santos Ltd', industry: 'oil_gas' },
    { member_id: 'seed-001', interest_type: 'shares', description: 'Shares in MiningCorp Holdings valued at $95,000', company_name: 'MiningCorp Holdings', industry: 'mining' },
    { member_id: 'seed-004', interest_type: 'business', description: 'Williams Family Trust holds shares in Rio Tinto', company_name: 'Rio Tinto', industry: 'mining' },
    { member_id: 'seed-004', interest_type: 'property', description: 'Investment properties in Sydney CBD and Melbourne', company_name: null, industry: 'property' },
    { member_id: 'seed-006', interest_type: 'business', description: 'Partner in OBrien Pastoral Company (cattle farm, 2000 hectares)', company_name: 'OBrien Pastoral Company', industry: 'agriculture' },
  ]

  // Clear existing seed interests and insert fresh
  await supabase.from('member_interests').delete().like('member_id', 'seed-%')
  const { error: iErr } = await supabase.from('member_interests').insert(interests)
  console.log(iErr ? `Interests: ERROR — ${iErr.message}` : `Interests: ${interests.length} inserted`)

  console.log('\n✅ Seed complete! Your frontend should now show sample data.')
  console.log('Run: cd frontend && npm run dev')
}

seed().catch(err => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
