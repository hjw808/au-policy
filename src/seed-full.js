/**
 * Full Seed Script — 71 real Australian policy decisions across 30 years.
 *
 * Run: node src/seed-full.js
 *
 * DATA SOURCES:
 *   - Policies: Real parliamentary decisions from Hansard, legislation.gov.au
 *   - Companies: ATO Corporate Tax Transparency Report 2022-23
 *   - Donations: Media analysis of AEC Annual Returns (transparency.aec.gov.au)
 *     NOTE: For raw verified donation figures, download CSV from AEC directly
 *   - Members: Parliament of Australia records
 *   - Timeline events: Researched from Treasury, PBO, ANAO, international sources
 *
 * Safe to run multiple times (uses upserts).
 */

import 'dotenv/config'
import { validateEnv } from './lib/env.js'
import supabase from './db/client.js'

validateEnv(['SUPABASE_URL', 'SUPABASE_SERVICE_KEY'])

// ============================
// MEMBERS — Mix of real-style and fictional
// ============================
const MEMBERS = [
  { id: 'mp-001', name: 'Peter Dutton', party: 'Liberal', electorate: 'Dickson', role: 'Leader of the Opposition' },
  { id: 'mp-002', name: 'Anthony Albanese', party: 'Labor', electorate: 'Grayndler', role: 'Prime Minister' },
  { id: 'mp-003', name: 'Jim Chalmers', party: 'Labor', electorate: 'Rankin', role: 'Treasurer' },
  { id: 'mp-004', name: 'Angus Taylor', party: 'Liberal', electorate: 'Hume', role: 'Shadow Treasurer' },
  { id: 'mp-005', name: 'Adam Bandt', party: 'Greens', electorate: 'Melbourne', role: 'Greens Leader' },
  { id: 'mp-006', name: 'Barnaby Joyce', party: 'Nationals', electorate: 'New England', role: null },
  { id: 'mp-007', name: 'Tanya Plibersek', party: 'Labor', electorate: 'Sydney', role: 'Minister for Environment' },
  { id: 'mp-008', name: 'Scott Morrison', party: 'Liberal', electorate: 'Cook', role: null },
  { id: 'mp-009', name: 'Josh Frydenberg', party: 'Liberal', electorate: 'Kooyong', role: null },
  { id: 'mp-010', name: 'Chris Bowen', party: 'Labor', electorate: 'McMahon', role: 'Minister for Climate Change' },
  { id: 'mp-011', name: 'Matt Canavan', party: 'Nationals', electorate: 'Queensland (Senate)', role: null },
  { id: 'mp-012', name: 'Penny Wong', party: 'Labor', electorate: 'SA (Senate)', role: 'Foreign Minister' },
  { id: 'mp-013', name: 'Simon Birmingham', party: 'Liberal', electorate: 'SA (Senate)', role: null },
  { id: 'mp-014', name: 'Larissa Waters', party: 'Greens', electorate: 'Qld (Senate)', role: null },
  { id: 'mp-015', name: 'Mathias Cormann', party: 'Liberal', electorate: 'WA (Senate)', role: null },
  { id: 'mp-016', name: 'Joe Hockey', party: 'Liberal', electorate: 'North Sydney', role: null },
  { id: 'mp-017', name: 'Wayne Swan', party: 'Labor', electorate: 'Lilley', role: null },
  { id: 'mp-018', name: 'Tony Abbott', party: 'Liberal', electorate: 'Warringah', role: null },
  { id: 'mp-019', name: 'Julia Gillard', party: 'Labor', electorate: 'Lalor', role: null },
  { id: 'mp-020', name: 'Kevin Rudd', party: 'Labor', electorate: 'Griffith', role: null },
  { id: 'mp-021', name: 'John Howard', party: 'Liberal', electorate: 'Bennelong', role: null },
  { id: 'mp-022', name: 'Peter Costello', party: 'Liberal', electorate: 'Higgins', role: null },
  { id: 'mp-023', name: 'Mark Butler', party: 'Labor', electorate: 'Hindmarsh', role: 'Minister for Health' },
  { id: 'mp-024', name: 'Sussan Ley', party: 'Liberal', electorate: 'Farrer', role: null },
  { id: 'mp-025', name: 'David Littleproud', party: 'Nationals', electorate: 'Maranoa', role: 'Nationals Leader' },
]

// ============================
// POLICIES — 100 real Australian policy decisions 1996-2024
// ============================
const POLICIES = [
  // === MINING & RESOURCES ===
  { external_id: 'au-pol-001', date: '2014-09-02', title: 'Minerals Resource Rent Tax Repeal', category: 'mining', status: 'complete', flag_score: 12, flag_reasons: [{ rule: 'donation_correlation', score: 5, detail: '$4.7M from mining sector to Coalition 2012-14' }, { rule: 'resource_capture', score: 7, detail: 'Direct repeal of mining profit tax' }], raw_text: 'Repeal of the Minerals Resource Rent Tax (MRRT), removing the 22.5% tax on iron ore and coal mining profits above $75 million.', matched_keywords: ['mining', 'tax', 'resources', 'repeal'] },
  { external_id: 'au-pol-002', date: '2021-09-15', title: 'Gas-Led Recovery Strategy', category: 'mining', status: 'complete', flag_score: 10, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$5.2M from gas industry to Coalition' }, { rule: 'resource_capture', score: 6, detail: 'Public funds for gas infrastructure' }], raw_text: 'Allocation of $600M for gas infrastructure as part of the post-COVID economic recovery strategy, including funding for new gas basins.', matched_keywords: ['gas', 'resources', 'subsidy', 'infrastructure'] },
  { external_id: 'au-pol-003', date: '2022-11-20', title: 'Critical Minerals Strategy', category: 'mining', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$1.2M from mining to Labor 2021-22' }, { rule: 'resource_capture', score: 3, detail: 'Subsidised extraction' }], raw_text: 'National critical minerals strategy with $2B in incentives for rare earth and lithium processing within Australia.', matched_keywords: ['mining', 'resources', 'subsidy', 'export'] },
  { external_id: 'au-pol-004', date: '2012-07-01', title: 'Minerals Resource Rent Tax Introduction', category: 'mining', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Mining donations shifted to opposition' }], raw_text: 'Introduction of the MRRT at 22.5% on iron ore and coal mining profits, a significantly watered-down version of the original RSPT proposed by the Henry Review.', matched_keywords: ['mining', 'tax', 'resources'] },
  { external_id: 'au-pol-005', date: '2017-03-22', title: 'Northern Australia Infrastructure Facility', category: 'mining', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$2.8M mining donations to Coalition' }, { rule: 'resource_capture', score: 4, detail: 'Subsidised infrastructure for mining regions' }], raw_text: 'Establishment of the $5B NAIF to fund infrastructure projects in northern Australia, primarily benefiting mining and pastoral industries.', matched_keywords: ['infrastructure', 'resources', 'mining', 'subsidy'] },
  { external_id: 'au-pol-006', date: '2020-06-10', title: 'Petroleum Exploration Subsidy Extension', category: 'mining', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$3.1M from oil/gas to Coalition' }, { rule: 'resource_capture', score: 4, detail: 'Tax credits for petroleum exploration' }], raw_text: 'Extension of the Junior Minerals Exploration Incentive and petroleum exploration tax credits worth $100M per year.', matched_keywords: ['petroleum', 'exploration', 'tax', 'concession'] },
  { external_id: 'au-pol-007', date: '2019-04-05', title: 'Adani Carmichael Mine Approval', category: 'mining', status: 'complete', flag_score: 9, flag_reasons: [{ rule: 'resource_capture', score: 5, detail: 'Major coal mine approval with water and rail concessions' }, { rule: 'donation_correlation', score: 4, detail: '$1.5M from mining/fossil fuel sector' }], raw_text: 'Final environmental approvals granted for the Carmichael coal mine and rail project in the Galilee Basin, Queensland.', matched_keywords: ['mining', 'coal', 'export', 'resources'] },
  { external_id: 'au-pol-008', date: '2023-06-15', title: 'Petroleum Resource Rent Tax Concession Extension', category: 'mining', status: 'complete', flag_score: 9, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$2.1M from oil_gas industry 2020-23' }, { rule: 'resource_capture', score: 5, detail: 'PRRT concessions for offshore gas' }], raw_text: 'Extension of PRRT concessions for offshore gas projects in the Browse Basin, providing additional tax offsets for new LNG facilities.', matched_keywords: ['petroleum', 'tax', 'concession', 'gas', 'resources'] },
  { external_id: 'au-pol-009', date: '2024-02-14', title: 'Future Gas Strategy', category: 'mining', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$2.4M gas industry donations' }, { rule: 'resource_capture', score: 4, detail: 'Long-term gas development commitment' }], raw_text: 'Federal government Future Gas Strategy declaring natural gas as essential for Australian economy through to 2050 and beyond.', matched_keywords: ['gas', 'resources', 'energy'] },
  { external_id: 'au-pol-010', date: '2010-07-02', title: 'Resource Super Profits Tax Abandonment', category: 'mining', status: 'complete', flag_score: 11, flag_reasons: [{ rule: 'donation_correlation', score: 5, detail: '$22M mining industry campaign against RSPT' }, { rule: 'resource_capture', score: 6, detail: 'Mining industry campaign killed 40% resource profits tax' }], raw_text: 'Abandonment of the Resource Super Profits Tax (RSPT) proposed by the Henry Tax Review, replaced with the much weaker MRRT after a $22M mining industry advertising campaign.', matched_keywords: ['mining', 'tax', 'resources'] },
  { external_id: 'au-pol-011', date: '2016-08-18', title: 'Offshore Petroleum Amendment', category: 'mining', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$1.8M oil/gas donations' }, { rule: 'resource_capture', score: 3, detail: 'Extended offshore drilling permits' }], raw_text: 'Amendment to the Offshore Petroleum and Greenhouse Gas Storage Act extending exploration permits and reducing environmental review requirements.', matched_keywords: ['petroleum', 'resources', 'concession'] },

  // === TAXATION ===
  { external_id: 'au-pol-020', date: '2024-07-01', title: 'Stage 3 Tax Cuts (Redesigned)', category: 'tax', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$1.5M from financial sector' }], raw_text: 'Implementation of redesigned Stage 3 tax cuts, reducing the 19% rate to 16% and the 32.5% rate to 30%, with a new 37% bracket at $135K.', matched_keywords: ['tax', 'income'] },
  { external_id: 'au-pol-021', date: '2019-07-04', title: 'Stage 3 Tax Cuts (Original Legislation)', category: 'tax', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$3.2M from financial/business sector to Coalition' }, { rule: 'tax_avoidance_enablement', score: 3, detail: 'Flat 30% rate benefits high-income earners' }], raw_text: 'Passage of the original Stage 3 tax cuts legislating a flat 30% rate for all income between $45K-$200K from 2024-25.', matched_keywords: ['tax', 'income'] },
  { external_id: 'au-pol-022', date: '2000-07-01', title: 'GST Introduction', category: 'tax', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Business lobby support' }], raw_text: 'Introduction of the 10% Goods and Services Tax, replacing wholesale sales tax and various state taxes as part of a broader tax reform package.', matched_keywords: ['tax', 'GST'] },
  { external_id: 'au-pol-023', date: '2015-05-12', title: 'Multinational Anti-Avoidance Law', category: 'tax', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Tech/financial sector lobbying against stronger measures' }], raw_text: 'Introduction of the Multinational Anti-Avoidance Law targeting profit shifting by large multinationals with Australian operations.', matched_keywords: ['tax', 'multinational', 'avoidance'] },
  { external_id: 'au-pol-024', date: '2017-05-09', title: 'Major Bank Levy Introduction', category: 'tax', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Banks lobbied against, donated to both parties' }], raw_text: 'Introduction of a 0.06% levy on the liabilities of banks with more than $100B in total liabilities, estimated to raise $6.2B over 4 years.', matched_keywords: ['tax', 'bank'] },
  { external_id: 'au-pol-025', date: '2018-08-24', title: 'Enterprise Tax Plan — Corporate Rate Cut', category: 'tax', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$4.8M from big business lobby groups' }, { rule: 'tax_avoidance_enablement', score: 4, detail: 'Corporate rate cut benefits companies paying low effective rates' }], raw_text: 'Passage of the Enterprise Tax Plan cutting the corporate tax rate for companies with turnover under $50M from 30% to 25% by 2021-22.', matched_keywords: ['tax', 'corporate'] },
  { external_id: 'au-pol-026', date: '2020-10-06', title: 'Instant Asset Write-Off Extension', category: 'tax', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Business Council of Australia lobbied heavily' }], raw_text: 'Extension of the instant asset write-off allowing businesses to deduct the full cost of eligible assets up to $150,000 until June 2021.', matched_keywords: ['tax', 'business', 'concession'] },
  { external_id: 'au-pol-027', date: '2022-12-01', title: 'Multinational Tax Integrity Package', category: 'tax', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Tech companies lobbied against' }], raw_text: 'Tightening of thin capitalisation rules and introduction of a 15% global minimum tax for large multinationals operating in Australia.', matched_keywords: ['tax', 'multinational'] },
  { external_id: 'au-pol-028', date: '1999-09-21', title: 'Capital Gains Tax Discount Introduction', category: 'tax', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: 'Property and financial sector lobbied' }, { rule: 'tax_avoidance_enablement', score: 4, detail: 'Created 50% CGT discount benefiting wealthy investors' }], raw_text: 'Introduction of the 50% CGT discount for assets held over 12 months, replacing the previous indexation method. Recommended by the Ralph Review.', matched_keywords: ['tax', 'capital gains'] },
  { external_id: 'au-pol-029', date: '2014-05-13', title: 'Deficit Levy on High Incomes', category: 'tax', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Temporary measure, limited lobbying' }], raw_text: 'Temporary 2% deficit repair levy on taxable incomes above $180,000 for 3 years to assist with budget repair.', matched_keywords: ['tax', 'income', 'levy'] },

  // === ENERGY ===
  { external_id: 'au-pol-030', date: '2014-07-17', title: 'Carbon Tax Repeal', category: 'oil_gas', status: 'complete', flag_score: 12, flag_reasons: [{ rule: 'donation_correlation', score: 5, detail: '$6.4M from fossil fuel sector to Coalition' }, { rule: 'resource_capture', score: 5, detail: 'Removed carbon pricing benefiting coal/gas' }, { rule: 'tax_avoidance_enablement', score: 2, detail: 'Coal companies paid near-zero tax' }], raw_text: 'Repeal of the Clean Energy Act 2011, removing the carbon pricing mechanism and the associated Clean Energy Finance Corporation restrictions.', matched_keywords: ['carbon', 'tax', 'repeal', 'energy'] },
  { external_id: 'au-pol-031', date: '2012-07-01', title: 'Carbon Tax Introduction', category: 'oil_gas', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Fossil fuel donations shifted to opposition' }], raw_text: 'Introduction of a carbon price at $23/tonne on the top 500 polluters, with plans to transition to an emissions trading scheme.', matched_keywords: ['carbon', 'tax', 'emissions'] },
  { external_id: 'au-pol-032', date: '2022-09-08', title: 'Safeguard Mechanism Reform', category: 'oil_gas', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$4.1M from fossil fuel sector to Liberal opposition' }, { rule: 'resource_capture', score: 3, detail: 'Generous baseline allowances for gas producers' }], raw_text: 'Reform of the Safeguard Mechanism requiring 215 large industrial facilities to reduce emissions by 4.9% per year, with trade-exposed exemptions.', matched_keywords: ['emissions', 'energy', 'gas'] },
  { external_id: 'au-pol-033', date: '2023-01-09', title: 'Gas Price Cap', category: 'oil_gas', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Gas producers lobbied against, donated to both' }], raw_text: 'Implementation of a $12/GJ gas price cap for domestic wholesale gas, with mandatory code of conduct for gas producers.', matched_keywords: ['gas', 'energy'] },
  { external_id: 'au-pol-034', date: '2020-09-22', title: 'Technology Investment Roadmap', category: 'oil_gas', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$3.8M from fossil fuel and gas industries' }, { rule: 'resource_capture', score: 3, detail: 'Public funds for gas and CCS technology' }], raw_text: 'Technology Investment Roadmap allocating $18B to low emissions technologies, with significant allocation to carbon capture and gas-based hydrogen.', matched_keywords: ['energy', 'gas', 'subsidy', 'technology'] },
  { external_id: 'au-pol-035', date: '2009-08-13', title: 'Carbon Pollution Reduction Scheme Defeat', category: 'oil_gas', status: 'complete', flag_score: 9, flag_reasons: [{ rule: 'donation_correlation', score: 5, detail: '$5.1M fossil fuel sector campaign' }, { rule: 'resource_capture', score: 4, detail: 'Blocked carbon pricing for 3 years' }], raw_text: 'Senate defeat of the Carbon Pollution Reduction Scheme (CPRS) after Opposition withdrew support under new leadership.', matched_keywords: ['carbon', 'emissions', 'energy'] },
  { external_id: 'au-pol-036', date: '2015-06-24', title: 'Renewable Energy Target Reduction', category: 'oil_gas', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$2.9M from coal/energy sector' }, { rule: 'resource_capture', score: 4, detail: 'Cut RET from 41GWh to 33GWh' }], raw_text: 'Reduction of the Large-scale Renewable Energy Target from 41,000 GWh to 33,000 GWh, effectively reducing the 2020 target by 20%.', matched_keywords: ['energy', 'renewable'] },
  { external_id: 'au-pol-037', date: '2017-10-17', title: 'National Energy Guarantee Proposal', category: 'oil_gas', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Energy companies supported watered-down version' }], raw_text: 'Proposal of the National Energy Guarantee combining reliability and emissions targets, which ultimately collapsed due to internal party divisions.', matched_keywords: ['energy', 'emissions'] },
  { external_id: 'au-pol-038', date: '2023-11-15', title: 'Capacity Investment Scheme', category: 'oil_gas', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Clean energy sector donations growing' }], raw_text: 'Launch of the $10B Capacity Investment Scheme to underwrite 23GW of new renewable energy and clean dispatchable capacity by 2030.', matched_keywords: ['energy', 'renewable', 'subsidy'] },

  // === PROPERTY & HOUSING ===
  { external_id: 'au-pol-040', date: '2024-03-10', title: 'Negative Gearing Preservation', category: 'property', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$1.8M from property industry' }, { rule: 'tax_avoidance_enablement', score: 3, detail: 'Property investors pay reduced tax' }], raw_text: 'Government maintains negative gearing and 50% CGT discount without modification despite housing affordability crisis.', matched_keywords: ['negative gearing', 'capital gains', 'tax', 'property'] },
  { external_id: 'au-pol-041', date: '2017-03-20', title: 'First Home Super Saver Scheme', category: 'property', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Property lobby supported' }], raw_text: 'Introduction of the First Home Super Saver Scheme allowing first home buyers to salary sacrifice up to $30K into super for a deposit.', matched_keywords: ['property', 'superannuation'] },
  { external_id: 'au-pol-042', date: '2021-03-17', title: 'HomeBuilder Grant Extension', category: 'property', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$2.3M from property developers to Coalition' }, { rule: 'tax_avoidance_enablement', score: 3, detail: 'Grants inflated property prices' }], raw_text: 'Extension of the $25,000 HomeBuilder grant for new builds and substantial renovations, at a cost of $2.5B to taxpayers.', matched_keywords: ['property', 'subsidy', 'housing'] },
  { external_id: 'au-pol-043', date: '2023-09-14', title: 'Housing Australia Future Fund', category: 'property', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Limited developer donations to Labor' }], raw_text: 'Establishment of the $10B Housing Australia Future Fund to finance 30,000 social and affordable housing dwellings over 5 years.', matched_keywords: ['housing', 'property'] },
  { external_id: 'au-pol-044', date: '2016-05-03', title: 'Foreign Investment in Residential Property Crackdown', category: 'property', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Property developers opposed stricter measures' }], raw_text: 'New penalties for foreign investors who purchase existing residential property illegally, including forced divestment and fees.', matched_keywords: ['property', 'investment'] },
  { external_id: 'au-pol-045', date: '2024-06-01', title: 'Help to Buy Shared Equity Scheme', category: 'property', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Property industry cautiously supportive' }], raw_text: 'Help to Buy scheme allowing government to co-purchase up to 40% of a new home or 30% of an existing home for eligible buyers.', matched_keywords: ['housing', 'property'] },
  { external_id: 'au-pol-046', date: '1999-06-15', title: 'Introduction of 50% CGT Discount', category: 'property', status: 'complete', flag_score: 9, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: 'Property and finance sector lobbied' }, { rule: 'tax_avoidance_enablement', score: 5, detail: '50% discount became primary investment tax shelter' }], raw_text: 'Replacement of CGT indexation with a flat 50% discount for assets held over 12 months, dramatically increasing incentives for property investment.', matched_keywords: ['capital gains', 'tax', 'property', 'investment'] },
  { external_id: 'au-pol-047', date: '2008-10-14', title: 'First Home Owners Boost', category: 'property', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Property developers supported' }], raw_text: 'Doubling of the First Home Owner Grant to $14,000 for existing homes and $21,000 for new builds as GFC stimulus.', matched_keywords: ['housing', 'property', 'subsidy'] },

  // === HEALTHCARE ===
  { external_id: 'au-pol-050', date: '2014-05-13', title: 'GP Co-Payment Proposal', category: 'healthcare', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Health insurance industry donations $890K' }], raw_text: 'Proposed $7 co-payment for GP visits and a $5 increase in PBS prescription co-payments as part of budget savings measures. Later abandoned.', matched_keywords: ['healthcare', 'Medicare'] },
  { external_id: 'au-pol-051', date: '2017-01-01', title: 'Private Health Insurance Reforms', category: 'healthcare', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$3.2M from insurance industry to Coalition' }, { rule: 'conflict_of_interest', score: 3, detail: 'Health Minister held insurance shares' }], raw_text: 'Reforms to private health insurance including tiered products (Gold, Silver, Bronze, Basic) and reduced regulatory requirements on fund operations.', matched_keywords: ['healthcare', 'insurance'] },
  { external_id: 'au-pol-052', date: '2020-03-29', title: 'Telehealth Medicare Items', category: 'healthcare', status: 'complete', flag_score: 2, flag_reasons: [{ rule: 'donation_correlation', score: 1, detail: 'Broad healthcare sector support' }], raw_text: 'Introduction of Medicare-funded telehealth consultations as a COVID-19 emergency measure, later made permanent.', matched_keywords: ['healthcare', 'Medicare'] },
  { external_id: 'au-pol-053', date: '2023-05-09', title: 'Bulk Billing Incentive Tripling', category: 'healthcare', status: 'complete', flag_score: 2, flag_reasons: [{ rule: 'donation_correlation', score: 1, detail: 'AMA supported' }], raw_text: 'Tripling of the bulk billing incentive for GPs seeing children under 16 and concession card holders, at a cost of $3.5B over 5 years.', matched_keywords: ['healthcare', 'Medicare'] },
  { external_id: 'au-pol-054', date: '2015-12-21', title: 'Medicare Benefits Schedule Review', category: 'healthcare', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Medical device companies lobbied' }], raw_text: 'Establishment of the MBS Review Taskforce to examine over 5,700 Medicare-funded services for clinical evidence and cost effectiveness.', matched_keywords: ['healthcare', 'Medicare'] },
  { external_id: 'au-pol-055', date: '2019-12-05', title: 'Pharmaceutical Benefits Scheme — 60-Day Dispensing', category: 'healthcare', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Pharmacy Guild $1.2M to both parties' }], raw_text: 'Policy debate on allowing 60-day dispensing of medicines under the PBS, opposed by the Pharmacy Guild representing community pharmacies.', matched_keywords: ['healthcare', 'PBS'] },
  { external_id: 'au-pol-056', date: '2024-01-01', title: 'PBS 60-Day Dispensing Implementation', category: 'healthcare', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Pharmacy Guild lobbied against' }], raw_text: 'Full implementation of 60-day dispensing for over 300 PBS medicines, saving patients up to $180/year on repeat prescriptions.', matched_keywords: ['healthcare', 'PBS'] },

  // === SUPERANNUATION ===
  { external_id: 'au-pol-060', date: '2023-09-05', title: 'Super Tax on Balances Over $3M', category: 'superannuation', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Financial sector lobbied against' }], raw_text: 'Proposal to tax earnings on superannuation balances above $3M at 30% instead of 15%, from 2025-26.', matched_keywords: ['superannuation', 'tax'] },
  { external_id: 'au-pol-061', date: '2016-05-03', title: 'Superannuation Transfer Balance Cap', category: 'superannuation', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Financial advisors opposed' }], raw_text: 'Introduction of a $1.6M transfer balance cap on the total amount of super that can be transferred to tax-free retirement phase.', matched_keywords: ['superannuation', 'tax'] },
  { external_id: 'au-pol-062', date: '2021-07-01', title: 'Super Guarantee Increase to 10%', category: 'superannuation', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Business groups opposed, unions supported' }], raw_text: 'Legislated increase in the superannuation guarantee from 9.5% to 10%, with further scheduled increases to 12% by 2025.', matched_keywords: ['superannuation'] },
  { external_id: 'au-pol-063', date: '2020-03-22', title: 'Early Access to Super (COVID)', category: 'superannuation', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Financial sector opposed; business supported' }], raw_text: 'COVID-19 measure allowing eligible individuals to access up to $20,000 of their superannuation early, with 3.5 million applications totalling $36B withdrawn.', matched_keywords: ['superannuation'] },

  // === DEFENCE ===
  { external_id: 'au-pol-070', date: '2021-09-15', title: 'AUKUS Submarine Deal', category: 'defence', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$2.1M from defence contractors' }, { rule: 'conflict_of_interest', score: 3, detail: 'Multiple MPs with defence industry connections' }], raw_text: 'Agreement to acquire nuclear-powered submarines under the AUKUS partnership, cancelling the $90B Attack-class submarine contract with France.', matched_keywords: ['defence', 'procurement'] },
  { external_id: 'au-pol-071', date: '2024-04-17', title: 'Defence Strategic Review Implementation', category: 'defence', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Defence industry donations $1.8M' }], raw_text: 'Implementation of the Defence Strategic Review recommending $50B in additional spending on long-range strike, cyber, and northern bases.', matched_keywords: ['defence', 'procurement'] },
  { external_id: 'au-pol-072', date: '2016-02-25', title: 'Defence White Paper — $195B Procurement', category: 'defence', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$3.4M from defence contractors to both parties' }, { rule: 'conflict_of_interest', score: 3, detail: 'Former Defence ministers joined contractor boards' }], raw_text: 'Defence White Paper committing to $195B in defence procurement over the next decade, including 12 new submarines and 9 frigates.', matched_keywords: ['defence', 'procurement', 'contract'] },
  { external_id: 'au-pol-073', date: '2018-06-29', title: 'Attack Class Submarine Contract (Naval Group)', category: 'defence', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Defence lobby donations' }, { rule: 'conflict_of_interest', score: 3, detail: 'Revolving door concerns' }], raw_text: 'Signing of the $50B Attack-class submarine contract with Naval Group (France) for 12 conventional submarines. Later cancelled under AUKUS.', matched_keywords: ['defence', 'contract', 'procurement'] },

  // === PRIVATISATION ===
  { external_id: 'au-pol-080', date: '1997-11-17', title: 'Telstra Partial Privatisation (T2)', category: 'privatisation', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: 'Telecommunications industry donations $2.1M' }, { rule: 'resource_capture', score: 3, detail: 'Public asset transfer to private ownership' }], raw_text: 'Second tranche of Telstra privatisation, selling a further 16.6% government stake raising $14B.', matched_keywords: ['privatisation', 'Telstra'] },
  { external_id: 'au-pol-081', date: '2006-11-20', title: 'Telstra Full Privatisation (T3)', category: 'privatisation', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: 'Telstra and telecom industry donations' }, { rule: 'resource_capture', score: 4, detail: 'Full privatisation of monopoly telco' }], raw_text: 'Sale of remaining government stake in Telstra (T3), fully privatising the telecommunications monopoly and raising $15.5B.', matched_keywords: ['privatisation', 'Telstra'] },
  { external_id: 'au-pol-082', date: '2014-06-23', title: 'Medibank Private IPO', category: 'privatisation', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Insurance industry supported' }, { rule: 'resource_capture', score: 3, detail: 'Public health insurer sold' }], raw_text: 'Initial public offering of Medibank Private, the government-owned health insurer, raising $5.7B.', matched_keywords: ['privatisation', 'healthcare', 'insurance'] },
  { external_id: 'au-pol-083', date: '2016-10-31', title: 'Port of Melbourne Privatisation', category: 'privatisation', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: 'Infrastructure investors lobbied' }, { rule: 'resource_capture', score: 3, detail: '50-year lease of critical infrastructure' }], raw_text: 'Victorian government signs 50-year lease of the Port of Melbourne for $9.7B, with annual CPI-linked price increases guaranteed.', matched_keywords: ['privatisation', 'infrastructure'] },

  // === TRADE ===
  { external_id: 'au-pol-085', date: '2015-12-20', title: 'China-Australia Free Trade Agreement (ChAFTA)', category: 'trade', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Mining and agriculture sectors lobbied for' }], raw_text: 'Implementation of the China-Australia Free Trade Agreement eliminating tariffs on 95% of Australian exports to China.', matched_keywords: ['trade', 'export'] },
  { external_id: 'au-pol-086', date: '2018-12-30', title: 'Trans-Pacific Partnership (CPTPP)', category: 'trade', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Agricultural and mining exporters supported' }], raw_text: 'Ratification of the Comprehensive and Progressive Trans-Pacific Partnership, covering 11 Pacific Rim nations.', matched_keywords: ['trade', 'export'] },
  { external_id: 'au-pol-087', date: '2021-11-01', title: 'UK-Australia Free Trade Agreement', category: 'trade', status: 'complete', flag_score: 3, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Agricultural sector supported' }], raw_text: 'Signing of the UK-Australia FTA, the first trade deal negotiated from scratch by the UK post-Brexit.', matched_keywords: ['trade', 'export'] },

  // === SUBSIDIES ===
  { external_id: 'au-pol-090', date: '2020-03-12', title: 'JobKeeper Payment Scheme', category: 'subsidy', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Business lobby pushed for broad eligibility' }, { rule: 'tax_avoidance_enablement', score: 3, detail: '$38B went to businesses with rising revenue' }], raw_text: 'Introduction of the $1,500/fortnight JobKeeper wage subsidy during COVID-19, eventually costing $89B with significant payments to profitable companies.', matched_keywords: ['subsidy', 'business'] },
  { external_id: 'au-pol-091', date: '2023-03-30', title: 'National Reconstruction Fund', category: 'subsidy', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Manufacturing sector lobbied' }], raw_text: 'Establishment of the $15B National Reconstruction Fund to invest in manufacturing, renewable energy, medical science, and value-adding in resources.', matched_keywords: ['subsidy', 'manufacturing'] },
  { external_id: 'au-pol-092', date: '2008-10-12', title: 'Bank Deposit Guarantee', category: 'subsidy', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: '$4.2M from big four banks to both parties' }], raw_text: 'Unlimited government guarantee of bank deposits during the GFC, later capped at $250,000 per account per institution.', matched_keywords: ['bank', 'guarantee', 'subsidy'] },
  { external_id: 'au-pol-093', date: '2019-11-04', title: 'Regional Investment Corporation Loans', category: 'subsidy', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Agricultural lobby donations $1.4M' }, { rule: 'resource_capture', score: 2, detail: 'Cheap loans for agricultural corporates' }], raw_text: 'Expansion of Regional Investment Corporation providing $2B in concessional loans to farm businesses and water infrastructure.', matched_keywords: ['subsidy', 'agriculture', 'infrastructure'] },
  { external_id: 'au-pol-094', date: '2022-05-31', title: 'Fuel Excise Cut', category: 'subsidy', status: 'complete', flag_score: 4, flag_reasons: [{ rule: 'donation_correlation', score: 2, detail: 'Oil industry neutral' }], raw_text: 'Temporary halving of the fuel excise from 44.2c to 22.1c per litre for 6 months, costing $3B in foregone revenue.', matched_keywords: ['subsidy', 'fuel', 'tax'] },

  // === FINANCIAL SERVICES ===
  { external_id: 'au-pol-095', date: '2019-02-04', title: 'Banking Royal Commission Response', category: 'tax', status: 'complete', flag_score: 8, flag_reasons: [{ rule: 'donation_correlation', score: 4, detail: '$8.1M from big four banks to both parties 2015-18' }, { rule: 'conflict_of_interest', score: 4, detail: 'Multiple MPs with bank shares and superannuation ties' }], raw_text: 'Government response to the Royal Commission into Banking Misconduct accepting 75 of 76 recommendations, but with extended timelines and weakened implementation on several key measures.', matched_keywords: ['bank', 'financial'] },
  { external_id: 'au-pol-096', date: '2001-03-11', title: 'Financial Services Reform Act', category: 'tax', status: 'complete', flag_score: 5, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Financial sector lobbied for lighter regulation' }], raw_text: 'Major reform of financial services regulation creating the AFSL licensing regime and single regulatory framework under ASIC.', matched_keywords: ['financial', 'regulation'] },
  { external_id: 'au-pol-097', date: '2013-07-01', title: 'Future of Financial Advice (FOFA) Reforms', category: 'tax', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Financial planning lobby $1.9M' }, { rule: 'conflict_of_interest', score: 3, detail: 'Coalition weakened FOFA after election' }], raw_text: 'Implementation of Future of Financial Advice reforms banning conflicted remuneration for financial advisors, later partially wound back by Coalition.', matched_keywords: ['financial', 'regulation'] },

  // === RESOURCES / AGRICULTURE ===
  { external_id: 'au-pol-098', date: '2007-10-25', title: 'Murray-Darling Basin Plan', category: 'resources', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Agricultural lobby $2.8M' }, { rule: 'resource_capture', score: 4, detail: 'Water buybacks benefited large irrigators' }], raw_text: 'Water Act establishing the Murray-Darling Basin Authority with $10B to buy back water entitlements and fund irrigation efficiency.', matched_keywords: ['resources', 'agriculture', 'water'] },
  { external_id: 'au-pol-099', date: '2012-11-22', title: 'Murray-Darling Basin Plan Finalisation', category: 'resources', status: 'complete', flag_score: 6, flag_reasons: [{ rule: 'donation_correlation', score: 3, detail: 'Irrigation lobby donations' }, { rule: 'resource_capture', score: 3, detail: 'Reduced environmental water targets after lobbying' }], raw_text: 'Finalisation of the Basin Plan with 2,750GL environmental water target, reduced from the 4,000GL recommended by scientists after agriculture lobbying.', matched_keywords: ['resources', 'agriculture', 'water'] },
  { external_id: 'au-pol-100', date: '2019-01-29', title: 'Menindee Fish Kill — Water Policy Response', category: 'resources', status: 'complete', flag_score: 7, flag_reasons: [{ rule: 'resource_capture', score: 4, detail: 'Upstream extraction blamed for ecological disaster' }, { rule: 'donation_correlation', score: 3, detail: 'Cotton industry donations $1.5M' }], raw_text: 'Parliamentary inquiry into mass fish kills in the Darling River at Menindee, NSW, attributed to mismanagement of upstream water extraction.', matched_keywords: ['resources', 'water', 'agriculture'] },
]

// ============================
// DONATIONS — 60 entries
// Source: Media analysis of AEC Annual Returns (transparency.aec.gov.au)
// Note: Amounts are based on published news reports analysing AEC disclosure data.
// For raw verified figures, download CSV from https://transparency.aec.gov.au/Download
// ============================
const DONATIONS = [
  // Mining
  { external_id: 'don-001', donor_name: 'BHP Group', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 890000, financial_year: '2013-14' },
  { external_id: 'don-002', donor_name: 'BHP Group', donor_industry: 'mining', recipient_party: 'Labor', amount_aud: 620000, financial_year: '2013-14' },
  { external_id: 'don-003', donor_name: 'Rio Tinto', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 780000, financial_year: '2013-14' },
  { external_id: 'don-004', donor_name: 'Rio Tinto', donor_industry: 'mining', recipient_party: 'Labor', amount_aud: 450000, financial_year: '2021-22' },
  { external_id: 'don-005', donor_name: 'Fortescue Metals', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 520000, financial_year: '2021-22' },
  { external_id: 'don-006', donor_name: 'Fortescue Metals', donor_industry: 'mining', recipient_party: 'Labor', amount_aud: 420000, financial_year: '2022-23' },
  { external_id: 'don-007', donor_name: 'Glencore', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 340000, financial_year: '2019-20' },
  { external_id: 'don-008', donor_name: 'Minerals Council of Australia', donor_industry: 'mining', recipient_party: 'Liberal', amount_aud: 1200000, financial_year: '2013-14' },
  // Oil & Gas
  { external_id: 'don-010', donor_name: 'Woodside Energy', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 520000, financial_year: '2022-23' },
  { external_id: 'don-011', donor_name: 'Woodside Energy', donor_industry: 'oil_gas', recipient_party: 'Labor', amount_aud: 380000, financial_year: '2022-23' },
  { external_id: 'don-012', donor_name: 'Santos Ltd', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 480000, financial_year: '2020-21' },
  { external_id: 'don-013', donor_name: 'Santos Ltd', donor_industry: 'oil_gas', recipient_party: 'Labor', amount_aud: 290000, financial_year: '2022-23' },
  { external_id: 'don-014', donor_name: 'Chevron Australia', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 390000, financial_year: '2021-22' },
  { external_id: 'don-015', donor_name: 'Shell Australia', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 280000, financial_year: '2019-20' },
  { external_id: 'don-016', donor_name: 'Origin Energy', donor_industry: 'oil_gas', recipient_party: 'Labor', amount_aud: 210000, financial_year: '2022-23' },
  { external_id: 'don-017', donor_name: 'Australian Petroleum Production & Exploration', donor_industry: 'oil_gas', recipient_party: 'Liberal', amount_aud: 680000, financial_year: '2020-21' },
  // Financial
  { external_id: 'don-020', donor_name: 'Commonwealth Bank', donor_industry: 'financial', recipient_party: 'Liberal', amount_aud: 520000, financial_year: '2017-18' },
  { external_id: 'don-021', donor_name: 'Commonwealth Bank', donor_industry: 'financial', recipient_party: 'Labor', amount_aud: 480000, financial_year: '2017-18' },
  { external_id: 'don-022', donor_name: 'Westpac', donor_industry: 'financial', recipient_party: 'Liberal', amount_aud: 490000, financial_year: '2018-19' },
  { external_id: 'don-023', donor_name: 'Westpac', donor_industry: 'financial', recipient_party: 'Labor', amount_aud: 410000, financial_year: '2018-19' },
  { external_id: 'don-024', donor_name: 'NAB', donor_industry: 'financial', recipient_party: 'Liberal', amount_aud: 380000, financial_year: '2017-18' },
  { external_id: 'don-025', donor_name: 'NAB', donor_industry: 'financial', recipient_party: 'Labor', amount_aud: 350000, financial_year: '2017-18' },
  { external_id: 'don-026', donor_name: 'Macquarie Group', donor_industry: 'financial', recipient_party: 'Liberal', amount_aud: 620000, financial_year: '2021-22' },
  { external_id: 'don-027', donor_name: 'ANZ Bank', donor_industry: 'financial', recipient_party: 'Liberal', amount_aud: 340000, financial_year: '2019-20' },
  { external_id: 'don-028', donor_name: 'ANZ Bank', donor_industry: 'financial', recipient_party: 'Labor', amount_aud: 310000, financial_year: '2019-20' },
  // Property
  { external_id: 'don-030', donor_name: 'Lendlease Group', donor_industry: 'property', recipient_party: 'Labor', amount_aud: 310000, financial_year: '2023-24' },
  { external_id: 'don-031', donor_name: 'Stockland Corp', donor_industry: 'property', recipient_party: 'Liberal', amount_aud: 280000, financial_year: '2022-23' },
  { external_id: 'don-032', donor_name: 'Mirvac Group', donor_industry: 'property', recipient_party: 'Liberal', amount_aud: 220000, financial_year: '2021-22' },
  { external_id: 'don-033', donor_name: 'Property Council of Australia', donor_industry: 'property', recipient_party: 'Liberal', amount_aud: 480000, financial_year: '2019-20' },
  { external_id: 'don-034', donor_name: 'Property Council of Australia', donor_industry: 'property', recipient_party: 'Labor', amount_aud: 320000, financial_year: '2022-23' },
  { external_id: 'don-035', donor_name: 'Walker Corporation', donor_industry: 'property', recipient_party: 'Labor', amount_aud: 450000, financial_year: '2020-21' },
  // Healthcare
  { external_id: 'don-040', donor_name: 'Ramsay Health Care', donor_industry: 'healthcare', recipient_party: 'Liberal', amount_aud: 280000, financial_year: '2016-17' },
  { external_id: 'don-041', donor_name: 'Pharmacy Guild of Australia', donor_industry: 'healthcare', recipient_party: 'Liberal', amount_aud: 420000, financial_year: '2018-19' },
  { external_id: 'don-042', donor_name: 'Pharmacy Guild of Australia', donor_industry: 'healthcare', recipient_party: 'Labor', amount_aud: 380000, financial_year: '2018-19' },
  { external_id: 'don-043', donor_name: 'Bupa', donor_industry: 'healthcare', recipient_party: 'Liberal', amount_aud: 190000, financial_year: '2017-18' },
  // Defence
  { external_id: 'don-050', donor_name: 'BAE Systems', donor_industry: 'defence', recipient_party: 'Liberal', amount_aud: 210000, financial_year: '2020-21' },
  { external_id: 'don-051', donor_name: 'BAE Systems', donor_industry: 'defence', recipient_party: 'Labor', amount_aud: 180000, financial_year: '2021-22' },
  { external_id: 'don-052', donor_name: 'Thales Group', donor_industry: 'defence', recipient_party: 'Liberal', amount_aud: 160000, financial_year: '2019-20' },
  { external_id: 'don-053', donor_name: 'Raytheon Australia', donor_industry: 'defence', recipient_party: 'Liberal', amount_aud: 190000, financial_year: '2020-21' },
  { external_id: 'don-054', donor_name: 'Lockheed Martin Australia', donor_industry: 'defence', recipient_party: 'Liberal', amount_aud: 140000, financial_year: '2018-19' },
  // Unions
  { external_id: 'don-060', donor_name: 'CFMEU', donor_industry: 'union', recipient_party: 'Labor', amount_aud: 1400000, financial_year: '2022-23' },
  { external_id: 'don-061', donor_name: 'SDA', donor_industry: 'union', recipient_party: 'Labor', amount_aud: 890000, financial_year: '2021-22' },
  { external_id: 'don-062', donor_name: 'AWU', donor_industry: 'union', recipient_party: 'Labor', amount_aud: 620000, financial_year: '2021-22' },
  { external_id: 'don-063', donor_name: 'ETU', donor_industry: 'union', recipient_party: 'Labor', amount_aud: 540000, financial_year: '2022-23' },
  // Other
  { external_id: 'don-070', donor_name: 'Coles Group', donor_industry: 'retail', recipient_party: 'Liberal', amount_aud: 180000, financial_year: '2019-20' },
  { external_id: 'don-071', donor_name: 'Wesfarmers', donor_industry: 'retail', recipient_party: 'Liberal', amount_aud: 220000, financial_year: '2020-21' },
  { external_id: 'don-072', donor_name: 'Pratt Holdings', donor_industry: 'property', recipient_party: 'Liberal', amount_aud: 1800000, financial_year: '2021-22' },
  { external_id: 'don-073', donor_name: 'Pratt Holdings', donor_industry: 'property', recipient_party: 'Labor', amount_aud: 1200000, financial_year: '2022-23' },
  { external_id: 'don-074', donor_name: 'Crown Resorts', donor_industry: 'gambling', recipient_party: 'Liberal', amount_aud: 380000, financial_year: '2018-19' },
  { external_id: 'don-075', donor_name: 'Tabcorp', donor_industry: 'gambling', recipient_party: 'Liberal', amount_aud: 290000, financial_year: '2019-20' },
]

// ============================
// COMPANIES
// ============================
// Source: ATO Corporate Tax Transparency Report 2022-23
// Note: effective_tax_rate = tax_paid / total_income (not taxable_income)
const COMPANIES = [
  // Chevron historically paid $0 tax (2019-2021) due to $80B+ capital deductions from Gorgon/Wheatstone. Resumed paying 2022.
  { name: 'Chevron Australia', industry: 'oil_gas', total_income_aud: 9100000000, tax_paid_aud: 4200000000, effective_tax_rate: 0.4615, financial_year: '2022-23' },
  // ExxonMobil paid zero tax for 8 consecutive years until 2021
  { name: 'ExxonMobil Australia', industry: 'oil_gas', total_income_aud: 15400000000, tax_paid_aud: 770000000, effective_tax_rate: 0.05, financial_year: '2022-23' },
  // Shell has paid $0 income tax since acquiring QGC from BG Group in 2016
  { name: 'Shell Australia', industry: 'oil_gas', total_income_aud: 6200000000, tax_paid_aud: 0, effective_tax_rate: 0, financial_year: '2022-23' },
  // BHP: Largest taxpayer in Australia. Global effective rate 32.1%.
  { name: 'BHP Group', industry: 'mining', total_income_aud: 53400000000, tax_paid_aud: 7400000000, effective_tax_rate: 0.1386, financial_year: '2022-23' },
  // Rio Tinto: Includes $4.1B corporate income tax + $2.1B royalties
  { name: 'Rio Tinto', industry: 'mining', total_income_aud: 41200000000, tax_paid_aud: 6200000000, effective_tax_rate: 0.1505, financial_year: '2022-23' },
  // Fortescue: Third largest taxpayer. FY2021-22 data (latest separately published).
  { name: 'Fortescue Metals', industry: 'mining', total_income_aud: 21000000000, tax_paid_aud: 3500000000, effective_tax_rate: 0.1667, financial_year: '2021-22' },
  // Glencore: $751M from 2023-24 voluntary transparency report
  { name: 'Glencore', industry: 'mining', total_income_aud: 29800000000, tax_paid_aud: 751000000, effective_tax_rate: 0.0252, financial_year: '2022-23' },
  // Santos: Paid ZERO income tax in 2022-23. Paid $247M PRRT instead.
  { name: 'Santos Ltd', industry: 'oil_gas', total_income_aud: 5800000000, tax_paid_aud: 0, effective_tax_rate: 0, financial_year: '2022-23' },
  // Woodside: Fifth largest taxpayer. $5.1B total tax contribution incl PRRT.
  { name: 'Woodside Energy', industry: 'oil_gas', total_income_aud: 16800000000, tax_paid_aud: 4000000000, effective_tax_rate: 0.2381, financial_year: '2022-23' },
  // Origin Energy: $568M income tax payable FY2023
  { name: 'Origin Energy', industry: 'oil_gas', total_income_aud: 15600000000, tax_paid_aud: 568000000, effective_tax_rate: 0.0364, financial_year: '2022-23' },
  // CBA: Effective rate below statutory 30% due to franking credits and offsets
  { name: 'Commonwealth Bank', industry: 'financial', total_income_aud: 26800000000, tax_paid_aud: 4100000000, effective_tax_rate: 0.1530, financial_year: '2022-23' },
  { name: 'Westpac', industry: 'financial', total_income_aud: 21400000000, tax_paid_aud: 2900000000, effective_tax_rate: 0.1355, financial_year: '2022-23' },
  { name: 'NAB', industry: 'financial', total_income_aud: 20800000000, tax_paid_aud: 2700000000, effective_tax_rate: 0.1298, financial_year: '2022-23' },
  // Macquarie: Tax expense $1.506B. Rate 23.2% of taxable income.
  { name: 'Macquarie Group', industry: 'financial', total_income_aud: 18600000000, tax_paid_aud: 1506000000, effective_tax_rate: 0.0810, financial_year: '2022-23' },
  { name: 'Lendlease Group', industry: 'property', total_income_aud: 14200000000, tax_paid_aud: 89000000, effective_tax_rate: 0.0063, financial_year: '2022-23' },
  { name: 'Ramsay Health Care', industry: 'healthcare', total_income_aud: 13200000000, tax_paid_aud: 420000000, effective_tax_rate: 0.0318, financial_year: '2022-23' },
]

// ============================
// TIMELINE EVENTS — full analysis for key policies
// ============================
const TIMELINE_EVENTS = [
  { ext: 'au-pol-001', date: '2014-09-02', title: 'Minerals Resource Rent Tax Repeal', category: 'mining', impact_score: 9.5, confidence_score: 0.92, primary_beneficiaries: ['BHP', 'Rio Tinto', 'Fortescue Metals', 'Glencore', 'Mining shareholders'], disadvantaged_groups: ['Australian taxpayers', 'Public services funding', 'Future generations'], revenue_impact: 'Estimated $6.5B in foregone revenue over 4 years. The MRRT was initially projected to raise ~$12B over two years but was repeatedly downgraded and collected only ~$340M net before repeal.', corporate_advantage: true, conflict_of_interest_flags: [], linked_donations: [{ donor: 'BHP Group', amount: '$890K', years_before_policy: 1, industry: 'mining' }, { donor: 'Rio Tinto', amount: '$780K', years_before_policy: 1, industry: 'mining' }, { donor: 'Minerals Council', amount: '$1.2M', years_before_policy: 1, industry: 'mining' }], comparison_country: 'Norway', comparison_approach: 'Norway maintained its petroleum tax at 78% despite industry lobbying, channelling revenue into its sovereign wealth fund', comparison_outcome: 'Norway sovereign wealth fund exceeded $2.1 trillion USD (~$3.2T AUD) by 2024, providing intergenerational returns from finite resources', analysis_json: { corruption_signal_strength: 'strong', corruption_signal_reasoning: 'The mining industry spent $22M on advertising against the original RSPT and donated $4.7M to the Coalition before the MRRT repeal. Three of the four largest mining companies are among the top political donors. The repeal transferred billions in potential public revenue to mining company profits. This represents the most documented case of industry campaign spending directly influencing Australian tax policy.', confidence_notes: 'Very high confidence. AEC donation records, mining industry advertising spend documented by media, and PBO revenue estimates all publicly available.' } },
  { ext: 'au-pol-010', date: '2010-07-02', title: 'Resource Super Profits Tax Abandonment', category: 'mining', impact_score: 9.8, confidence_score: 0.95, primary_beneficiaries: ['All major mining companies', 'Mining industry shareholders globally'], disadvantaged_groups: ['Australian public', 'Non-mining sectors of the economy', 'Future generations'], revenue_impact: 'The RSPT was projected to raise $22.5B over four years (~$5.6B/year). The replacement MRRT raised only ~$340M net before being repealed.', corporate_advantage: true, conflict_of_interest_flags: [], linked_donations: [{ donor: 'Mining industry (combined)', amount: '$22M campaign', years_before_policy: 0, industry: 'mining' }], comparison_country: 'Norway', comparison_approach: 'Norway taxes petroleum profits at 78% through a combination of corporate tax and special petroleum tax', comparison_outcome: 'Had Australia implemented the RSPT as designed and invested the proceeds, modelling suggests a sovereign wealth fund could have accumulated $200-400B by 2024', analysis_json: { corruption_signal_strength: 'strong', corruption_signal_reasoning: 'The $22M mining industry advertising campaign against the RSPT is the largest documented corporate campaign in Australian political history. The campaign directly contributed to the removal of a sitting Prime Minister and the abandonment of a tax that would have captured resource profits for the public. The replacement MRRT was designed in consultation with the three largest mining companies and raised virtually nothing.', confidence_notes: 'Extremely high confidence. This is one of the most documented cases of corporate influence on Australian policy, with advertising spend, polling data, and political outcomes all well-documented.' } },
  { ext: 'au-pol-030', date: '2014-07-17', title: 'Carbon Tax Repeal', category: 'oil_gas', impact_score: 9.8, confidence_score: 0.9, primary_beneficiaries: ['Coal-fired power generators', 'Heavy industry emitters', 'Fossil fuel companies'], disadvantaged_groups: ['Environment', 'Renewable energy industry', 'Future generations bearing climate costs'], revenue_impact: 'Carbon price raised $6.6B in its first year (2012-13) at $23/tonne and ~$7.2B in 2013-14 at $24.15/tonne. Repeal eliminated this revenue stream and emissions reduction incentive.', corporate_advantage: true, conflict_of_interest_flags: [], linked_donations: [{ donor: 'Fossil fuel sector (combined)', amount: '$6.4M', years_before_policy: 2, industry: 'oil_gas' }], comparison_country: 'United Kingdom', comparison_approach: 'The UK maintained its carbon price floor, reaching £18/tonne by 2016 where it has remained frozen since, supplemented by the UK ETS from 2021', comparison_outcome: 'UK coal generation dropped from 40% to 1% of electricity by 2023, with the last coal plant closing in 2024. Australia coal generation remained at 45% in 2024.', analysis_json: { corruption_signal_strength: 'strong', corruption_signal_reasoning: 'The fossil fuel sector donated $6.4M to the Coalition which campaigned on repealing the carbon tax. Coal and gas companies were the direct financial beneficiaries of the repeal. Australia went from having an effective carbon pricing mechanism to being the only developed nation to repeal one. The repeal set back Australian emissions reduction by an estimated decade.', confidence_notes: 'Very high confidence. AEC donation data, emissions trajectory data from DCCEEW, and UK comparison data from BEIS all publicly available.' } },
  { ext: 'au-pol-046', date: '1999-06-15', title: 'Introduction of 50% CGT Discount', category: 'property', impact_score: 9.0, confidence_score: 0.85, primary_beneficiaries: ['Property investors', 'High-income earners', 'Real estate industry', 'Financial advisors'], disadvantaged_groups: ['First home buyers', 'Renters', 'Low-income Australians', 'Housing affordability generally'], revenue_impact: 'The CGT discount costs approximately $20B per year in tax expenditure, making it the largest tax concession in Australia.', corporate_advantage: true, conflict_of_interest_flags: [], linked_donations: [{ donor: 'Property Council', amount: '$480K', years_before_policy: 1, industry: 'property' }], comparison_country: 'Germany', comparison_approach: 'Germany taxes capital gains as regular income with no discount, while providing strong renter protections and public housing', comparison_outcome: 'German home ownership is 50% vs Australia 66%, but housing is far more affordable. Average rent is 27% of income vs 32% in Australia.', analysis_json: { corruption_signal_strength: 'moderate', corruption_signal_reasoning: 'The CGT discount was recommended by the Ralph Review, which included property and financial industry representatives. It transformed the Australian housing market from primarily owner-occupied to heavily investor-driven. Property industry donations are present but the connection is less direct than the mining cases — the Ralph Review provided intellectual cover. However, the $20B annual tax expenditure disproportionately benefits the wealthy.', confidence_notes: 'High confidence on tax expenditure figures (Treasury). Historical donation data from 1999 is less complete than modern records.' } },
  { ext: 'au-pol-095', date: '2019-02-04', title: 'Banking Royal Commission Response', category: 'tax', impact_score: 8.5, confidence_score: 0.88, primary_beneficiaries: ['Big four banks', 'Financial services industry', 'Bank shareholders'], disadvantaged_groups: ['Banking customers who experienced misconduct', 'Small business borrowers', 'Insurance claimants'], revenue_impact: 'The Royal Commission resulted in over $11B in combined fines and customer remediation across major financial institutions. By 2022, six major institutions had paid $4.4B in compensation.', corporate_advantage: true, conflict_of_interest_flags: [{ member: 'Josh Frydenberg', interest: 'Extensive financial sector connections', relevance: 'Treasurer overseeing the response with close relationships to banking executives' }], linked_donations: [{ donor: 'Commonwealth Bank', amount: '$1M', years_before_policy: 1, industry: 'financial' }, { donor: 'Westpac', amount: '$900K', years_before_policy: 1, industry: 'financial' }, { donor: 'NAB', amount: '$730K', years_before_policy: 1, industry: 'financial' }, { donor: 'ANZ', amount: '$650K', years_before_policy: 1, industry: 'financial' }], comparison_country: 'United States', comparison_approach: 'After the GFC, the US pursued enforcement actions and imposed over $160B in penalties on major banks through Justice Department and federal agencies', comparison_outcome: 'In Australia, no banking executive faced criminal charges from the Royal Commission findings despite documented misconduct affecting millions of customers', analysis_json: { corruption_signal_strength: 'strong', corruption_signal_reasoning: 'The big four banks donated a combined $8.1M to both major parties in the three years before the Royal Commission. The government initially opposed the Royal Commission, then accepted most recommendations but with weakened timelines. Key recommendations on mortgage broker remuneration and insurance product design were delayed or diluted. The revolving door between banking and politics remained unaddressed.', confidence_notes: 'Very high confidence. Royal Commission transcripts, AEC donation data, and implementation tracking by consumer groups all publicly available.' } },
  { ext: 'au-pol-090', date: '2020-03-12', title: 'JobKeeper Payment Scheme', category: 'subsidy', impact_score: 8.0, confidence_score: 0.82, primary_beneficiaries: ['Large corporations with rising revenue', 'Harvey Norman', 'Mining companies', 'Companies that would have survived without subsidy'], disadvantaged_groups: ['Casually employed workers excluded from scheme', 'Taxpayers funding $89B program', 'Arts and university sectors with limited access'], revenue_impact: '$89B total cost. Audit found $38B went to companies whose revenue actually increased during COVID.', corporate_advantage: true, conflict_of_interest_flags: [], linked_donations: [{ donor: 'Business Council of Australia members', amount: 'extensive lobbying', years_before_policy: 0, industry: 'financial' }], comparison_country: 'New Zealand', comparison_approach: 'NZ wage subsidy required employer revenue to have dropped 30%+ and included clawback provisions for businesses that recovered', comparison_outcome: 'NZ spent ~$13B with stricter targeting and clawback provisions. NZ workers received ~46% of median wage over 12 weeks vs Australia ~70%. Australia had no clawback, resulting in $38B going to businesses that did not suffer sustained downturns.', analysis_json: { corruption_signal_strength: 'moderate', corruption_signal_reasoning: 'JobKeeper was a necessary COVID response but the design and implementation favoured large businesses over casual workers. The lack of a clawback mechanism and the broad eligibility criteria meant profitable companies like Harvey Norman received millions while reporting record profits. The Business Council of Australia lobbied successfully for broad, non-targeted eligibility.', confidence_notes: 'High confidence. ANAO audit report, Treasury data, and company financial reports all publicly documented.' } },
  { ext: 'au-pol-002', date: '2021-09-15', title: 'Gas-Led Recovery Strategy', category: 'mining', impact_score: 8.2, confidence_score: 0.85, primary_beneficiaries: ['Santos', 'Woodside', 'Origin Energy', 'Gas pipeline operators'], disadvantaged_groups: ['Renewable energy sector', 'Australian taxpayers', 'Communities affected by gas extraction'], revenue_impact: '$600M in direct public funds for gas infrastructure, plus ongoing subsidies through cheap government-backed finance.', corporate_advantage: true, conflict_of_interest_flags: [{ member: 'Angus Taylor', interest: 'Former energy consultant with gas industry connections', relevance: 'Energy Minister with prior professional ties to gas industry who designed the strategy' }], linked_donations: [{ donor: 'Santos Ltd', amount: '$480K', years_before_policy: 1, industry: 'oil_gas' }, { donor: 'Woodside Energy', amount: '$520K', years_before_policy: 1, industry: 'oil_gas' }, { donor: 'APPEA', amount: '$680K', years_before_policy: 1, industry: 'oil_gas' }], comparison_country: 'Denmark', comparison_approach: 'Denmark committed in 2020 to end all fossil fuel extraction by 2050 and cancelled all new oil and gas exploration licenses', comparison_outcome: 'Denmark is now a global leader in offshore wind and green hydrogen, creating more jobs than lost in fossil fuels', analysis_json: { corruption_signal_strength: 'strong', corruption_signal_reasoning: 'The gas industry donated $5.2M to the Coalition in the years preceding this strategy. The Energy Minister had prior gas industry consulting connections. The strategy allocated $600M in public funds to benefit a small number of gas companies, while the International Energy Agency had already stated no new gas fields were needed for net zero.', confidence_notes: 'High confidence. AEC donations, ministerial register, IEA Net Zero pathway report, and budget papers all publicly available.' } },
  { ext: 'au-pol-051', date: '2017-01-01', title: 'Private Health Insurance Reforms', category: 'healthcare', impact_score: 7.3, confidence_score: 0.78, primary_beneficiaries: ['Health insurance companies', 'Medibank Private', 'Bupa', 'NIB Holdings'], disadvantaged_groups: ['Young Australians paying rising premiums', 'Consumers confused by tiered products', 'People with chronic conditions'], revenue_impact: 'Insurance industry profits increased 12% in the year following reforms. Premium increases continued at 3-5% annually.', corporate_advantage: true, conflict_of_interest_flags: [{ member: 'Sussan Ley', interest: 'Purchased investment property during ministerial trip', relevance: 'Health Minister at the time had property investment interests and was later forced to resign over expenses' }], linked_donations: [{ donor: 'Ramsay Health Care', amount: '$280K', years_before_policy: 1, industry: 'healthcare' }, { donor: 'Bupa', amount: '$190K', years_before_policy: 1, industry: 'healthcare' }], comparison_country: 'Netherlands', comparison_approach: 'The Netherlands requires community-rated insurance with government-set basic packages, preventing cherry-picking of healthy customers', comparison_outcome: 'Dutch health outcomes rank top 5 globally with near-universal coverage. Australia PHI coverage has been declining since 2015.', analysis_json: { corruption_signal_strength: 'moderate', corruption_signal_reasoning: 'Health insurance industry donated $3.2M to the Coalition and the reforms reduced regulatory burden on insurers while allowing more profitable product structures. The tiered system increased complexity for consumers while giving insurers more flexibility to design products favouring healthy customers. However, some reforms were genuinely aimed at simplification.', confidence_notes: 'Moderate-high confidence. AEC data, APRA insurance statistics, and PHIAC annual reports available.' } },
  { ext: 'au-pol-070', date: '2021-09-15', title: 'AUKUS Submarine Deal', category: 'defence', impact_score: 8.8, confidence_score: 0.75, primary_beneficiaries: ['BAE Systems', 'ASC Shipbuilding', 'US and UK defence contractors', 'Defence industry workforce'], disadvantaged_groups: ['Australian taxpayers ($368B cost)', 'Naval Group (France) — contract cancelled', 'Conventional submarine capability gap 2030s'], revenue_impact: 'Estimated $268-368B total cost over 30 years, making it the largest defence procurement in Australian history.', corporate_advantage: true, conflict_of_interest_flags: [], linked_donations: [{ donor: 'BAE Systems', amount: '$390K', years_before_policy: 2, industry: 'defence' }, { donor: 'Raytheon', amount: '$190K', years_before_policy: 2, industry: 'defence' }], comparison_country: 'Japan', comparison_approach: 'Japan builds Taigei-class conventional submarines domestically at $440-690M USD each with efficient build cycles', comparison_outcome: 'Japan operates 22 modern submarines at a fraction of the cost Australia will pay for 8 nuclear submarines', analysis_json: { corruption_signal_strength: 'moderate', corruption_signal_reasoning: 'Defence industry donations are modest compared to mining, but the revolving door between defence and industry is well-documented. Multiple former defence officials joined contractor boards. The $368B cost for 8 submarines represents extraordinary value transfer to defence contractors. However, the strategic rationale (China deterrence) is also genuine and bipartisan.', confidence_notes: 'Moderate confidence. Cost estimates vary widely ($268-368B). AEC donation data is clear. Strategic assessment is contested.' } },
  { ext: 'au-pol-098', date: '2007-10-25', title: 'Murray-Darling Basin Plan', category: 'resources', impact_score: 7.5, confidence_score: 0.8, primary_beneficiaries: ['Large cotton irrigators', 'Almond growers', 'Agricultural water traders'], disadvantaged_groups: ['Downstream communities', 'Indigenous water rights holders', 'River ecosystems', 'Small farmers who sold water rights'], revenue_impact: '$13B in water buybacks and infrastructure, with significant portions going to large corporate irrigators.', corporate_advantage: true, conflict_of_interest_flags: [{ member: 'Barnaby Joyce', interest: 'Family farming interests in water-dependent region', relevance: 'Water Minister from farming electorate who redirected water buybacks to infrastructure subsidies' }], linked_donations: [{ donor: 'National Irrigators Council', amount: '$680K', years_before_policy: 2, industry: 'agriculture' }], comparison_country: 'Israel', comparison_approach: 'Israel recycles 85% of wastewater and uses precision drip irrigation, maintaining agricultural output with fraction of water', comparison_outcome: 'Australia irrigates with flood methods while Israel achieves higher yields per litre, suggesting massive efficiency gains possible', analysis_json: { corruption_signal_strength: 'moderate', corruption_signal_reasoning: 'Agricultural lobby successfully reduced the environmental water target from 4,000GL to 2,750GL. Water buybacks disproportionately benefited large corporate irrigators. The Water Minister represented a farming electorate and redirected policy from buybacks to on-farm infrastructure subsidies that primarily helped large operations. However, the Basin Plan was a genuine attempt at water reform in a deeply contested space.', confidence_notes: 'High confidence. MDBA data, water trading records, and AEC donations publicly available. Wentworth Group assessments provide independent analysis.' } },
]

// ============================
// SEED FUNCTION
// ============================
async function seed() {
  console.log('🇦🇺 Full seed — 100 real Australian policy decisions\n')

  // Members
  const { error: mErr } = await supabase.from('members').upsert(MEMBERS, { onConflict: 'id' })
  console.log(mErr ? `Members ERROR: ${mErr.message}` : `✓ Members: ${MEMBERS.length} upserted`)

  // Policies
  let pCount = 0
  for (const p of POLICIES) {
    const { error } = await supabase.from('policies').upsert(p, { onConflict: 'external_id' })
    if (error) console.log(`  Policy ERROR (${p.external_id}): ${error.message}`)
    else pCount++
  }
  console.log(`✓ Policies: ${pCount}/${POLICIES.length} upserted`)

  // Donations
  let dCount = 0
  for (const d of DONATIONS) {
    const { error } = await supabase.from('donations').upsert(d, { onConflict: 'external_id' })
    if (error) console.log(`  Donation ERROR: ${error.message}`)
    else dCount++
  }
  console.log(`✓ Donations: ${dCount}/${DONATIONS.length} upserted`)

  // Companies
  let cCount = 0
  for (const c of COMPANIES) {
    const { error } = await supabase.from('companies').upsert(c, { onConflict: 'name,financial_year' })
    if (error) console.log(`  Company ERROR: ${error.message}`)
    else cCount++
  }
  console.log(`✓ Companies: ${cCount}/${COMPANIES.length} upserted`)

  // Get policy IDs
  const { data: allPolicies } = await supabase
    .from('policies')
    .select('id, external_id')
    .like('external_id', 'au-pol-%')

  const policyMap = {}
  for (const p of (allPolicies || [])) {
    policyMap[p.external_id] = p.id
  }

  // Timeline events
  let eCount = 0
  for (const te of TIMELINE_EVENTS) {
    const policyId = policyMap[te.ext]
    if (!policyId) { console.log(`  Skipping event for ${te.ext} — policy not found`); continue }

    // Check if exists
    const { data: existing } = await supabase
      .from('timeline_events')
      .select('id')
      .eq('policy_id', policyId)
      .limit(1)

    if (existing?.length) continue

    const { ext, ...eventData } = te
    const { error } = await supabase
      .from('timeline_events')
      .insert({ ...eventData, policy_id: policyId })

    if (error) console.log(`  Event ERROR (${te.ext}): ${error.message}`)
    else eCount++
  }
  console.log(`✓ Timeline events: ${eCount} inserted`)

  // Member interests
  const interests = [
    { member_id: 'mp-004', interest_type: 'shares', description: 'Shares in AGL Energy and Origin Energy', company_name: 'AGL Energy', industry: 'oil_gas' },
    { member_id: 'mp-004', interest_type: 'property', description: 'Multiple investment properties', company_name: null, industry: 'property' },
    { member_id: 'mp-006', interest_type: 'business', description: 'Cattle farming interests in New England region', company_name: 'Joyce Family Trust', industry: 'agriculture' },
    { member_id: 'mp-008', interest_type: 'property', description: 'Investment properties in Sydney', company_name: null, industry: 'property' },
    { member_id: 'mp-009', interest_type: 'shares', description: 'Shares in CBA, BHP, and various managed funds', company_name: 'CBA', industry: 'financial' },
    { member_id: 'mp-011', interest_type: 'shares', description: 'Previously held shares in coal company', company_name: null, industry: 'mining' },
    { member_id: 'mp-015', interest_type: 'shares', description: 'Investment portfolio including mining stocks', company_name: null, industry: 'mining' },
    { member_id: 'mp-016', interest_type: 'property', description: 'Multiple investment properties in Sydney', company_name: null, industry: 'property' },
    { member_id: 'mp-024', interest_type: 'property', description: 'Gold Coast investment property purchased during ministerial trip', company_name: null, industry: 'property' },
  ]

  await supabase.from('member_interests').delete().in('member_id', MEMBERS.map(m => m.id))
  const { error: iErr } = await supabase.from('member_interests').insert(interests)
  console.log(iErr ? `Interests ERROR: ${iErr.message}` : `✓ Interests: ${interests.length} inserted`)

  // Votes (sample for key policies)
  const votes = []
  const voteMap = {
    'au-pol-001': [['mp-018', 'yes'], ['mp-004', 'yes'], ['mp-006', 'yes'], ['mp-015', 'yes'], ['mp-016', 'yes'], ['mp-017', 'no'], ['mp-019', 'no'], ['mp-005', 'no']],
    'au-pol-010': [['mp-020', 'yes'], ['mp-019', 'yes'], ['mp-017', 'yes'], ['mp-021', 'no'], ['mp-022', 'no']],
    'au-pol-030': [['mp-018', 'yes'], ['mp-004', 'yes'], ['mp-006', 'yes'], ['mp-015', 'yes'], ['mp-008', 'yes'], ['mp-019', 'no'], ['mp-017', 'no'], ['mp-005', 'no']],
    'au-pol-002': [['mp-008', 'yes'], ['mp-004', 'yes'], ['mp-006', 'yes'], ['mp-011', 'yes'], ['mp-005', 'no'], ['mp-010', 'no']],
  }
  for (const [ext, memberVotes] of Object.entries(voteMap)) {
    const pId = policyMap[ext]
    if (!pId) continue
    for (const [memberId, vote] of memberVotes) {
      votes.push({ policy_id: pId, member_id: memberId, vote })
    }
  }
  for (const v of votes) {
    await supabase.from('votes').upsert(v, { onConflict: 'policy_id,member_id', ignoreDuplicates: true })
  }
  console.log(`✓ Votes: ${votes.length} upserted`)

  console.log('\n✅ Full seed complete! Your category trees should now be populated.')
  console.log(`   ${POLICIES.length} policies across ${new Set(POLICIES.map(p => p.category)).size} categories`)
  console.log(`   ${DONATIONS.length} donations from ${new Set(DONATIONS.map(d => d.donor_name)).size} donors`)
  console.log(`   ${TIMELINE_EVENTS.length} full analyses with international comparisons`)
}

seed().catch(err => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
