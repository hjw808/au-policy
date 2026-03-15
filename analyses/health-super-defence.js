// Australian Political Accountability Timeline Events
// Healthcare, Superannuation & Defence Policy Analyses
// Data sources: AEC records, Treasury.gov.au, Department of Defence, academic research

const timeline_events = [
  // HEALTHCARE POLICIES
  {
    ext: 'au-pol-050',
    date: '2014-05-13',
    title: 'GP Co-Payment Proposal - $7 Co-pay',
    category: 'healthcare',
    impact_score: 7,
    confidence_score: 0.92,
    primary_beneficiaries: ['Medical Research Future Fund', 'Private Practitioners'],
    disadvantaged_groups: ['Low-income patients', 'Chronically ill', 'Elderly', 'Children', 'Indigenous Australians'],
    revenue_impact: '$5.0B over 10 years',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'New Zealand',
    comparison_approach: 'New Zealand allows physicians to set fees between NZ$15-NZ$50 per visit with exemptions for under-14s, but maintains universal access',
    comparison_outcome: 'NZ data shows 22% of Māori vs 13% non-Māori experience cost barriers to GPs; co-payments reduce access for low-income groups, highlighting equity concerns absent from Abbott policy design',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Policy reversed after massive community and AMA opposition. No documented donor-to-beneficiary links, though Medical Research Fund was beneficiary. Timing suggests policy was ideological rather than capture-driven. AMA opposition indicates absence of medical industry capture.',
      confidence_notes: 'High confidence (92%) based on multiple peer-reviewed sources, government documents, and extensive media coverage of reversal.'
    }
  },
  {
    ext: 'au-pol-052',
    date: '2020-03-29',
    title: 'Telehealth Medicare Items - COVID-19 Expansion',
    category: 'healthcare',
    impact_score: 6,
    confidence_score: 0.95,
    primary_beneficiaries: ['Primary care practitioners', 'Allied health providers', 'Patients with mobility constraints'],
    disadvantaged_groups: ['Rural/remote patients without broadband', 'Digitally excluded elderly'],
    revenue_impact: '$4.4B in Medicare benefits (cumulative to 2021)',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Private telehealth platform operators',
        interest: 'Revenue from government-funded video consultations',
        relevance: 'Telehealth items created market for private software/platforms used by providers'
      }
    ],
    linked_donations: [],
    comparison_country: 'Canada',
    comparison_approach: 'Canada reformed physician payment models toward blended arrangements (salary + capitation + fee-for-service) rather than expanding temporary telehealth access; no co-payments maintained under Canada Health Act',
    comparison_outcome: 'Canadian blended models show higher physician satisfaction and improved preventive screening; focus on payment reform rather than temporary crisis response suggests more sustainable access structure',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Policy was emergency pandemic response with clear public health rationale. 281 items added March-May 2020, 86.3 million services delivered. No documented corrupt intent, though private telehealth platforms benefited from market creation.',
      confidence_notes: 'Very high confidence (95%) from ANAO audit, Treasury documents, and ABS data tracking 3.5M applicants across dual 2020 release periods.'
    }
  },
  {
    ext: 'au-pol-053',
    date: '2023-05-09',
    title: 'Bulk Billing Incentive Tripling - $3.5B Investment',
    category: 'healthcare',
    impact_score: 5,
    confidence_score: 0.88,
    primary_beneficiaries: ['General practitioners', 'Children under 16', 'Commonwealth concession card holders (11.6M people)'],
    disadvantaged_groups: ['Private-paying patients losing GP capacity', 'Rural/remote GPs with high bulk-billing costs'],
    revenue_impact: '$3.5B over 4 years',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany reformed provider payment through expanded direct government contracting and performance-based incentives as part of broader healthcare modernization; combined with procurement spending on medical infrastructure',
    comparison_outcome: 'German approach integrated primary care reform with capital investment; Australia focused narrowly on bulk-billing incentive without addressing underlying GP workforce shortages or equipment/facility modernization',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Policy directly targets vulnerable populations (11.6M eligible). Incentive increases: metro $6.85→$20.65, very remote $13.15→$39.65. Evidence-based response to documented bulk-billing collapse. No documented donor influence.',
      confidence_notes: 'High confidence (88%) from Health Department budget papers and implementation tracking, though some uncertainty around actual GP uptake rates post-implementation.'
    }
  },
  {
    ext: 'au-pol-054',
    date: '2015-12-21',
    title: 'Medicare Benefits Schedule Comprehensive Review',
    category: 'healthcare',
    impact_score: 4,
    confidence_score: 0.75,
    primary_beneficiaries: ['Healthcare system efficiency', 'Practitioners with obsolete items removed'],
    disadvantaged_groups: ['Patients accessing outdated/unsafe services', 'Providers losing billing codes'],
    revenue_impact: 'Neutral to modest savings (1400 recommendations from 5700+ items)',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK reformed physician payment through National Health Service Five Year Forward View combining primary care modernization with hospital-based efficiency gains; implemented systematic elimination of ineffective services',
    comparison_outcome: 'UK achieved sustained access improvements while reducing costs; Australia\'s review (2015-2020) produced recommendations but implementation remained fragmented across budget cycles',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Large-scale review (5700 items) with 60+ clinical committees generated 1400 recommendations. Clinical task force structure suggests evidence-based approach. Turnbull lifted indexation freeze ($1B) in 2016, supporting clinical system rather than financial capture.',
      confidence_notes: 'Moderate confidence (75%) as review outcomes dispersed across multiple budget announcements; difficult to track complete implementation status and cost/benefit outcomes.'
    }
  },
  {
    ext: 'au-pol-055',
    date: '2019-12-05',
    title: 'PBS 60-Day Dispensing Debate & Consultation',
    category: 'healthcare',
    impact_score: 3,
    confidence_score: 0.82,
    primary_beneficiaries: ['Patients with stable chronic conditions', 'Pharmacy dispensing efficiency'],
    disadvantaged_groups: ['Patients requiring dose monitoring', 'Chronically unstable patients'],
    revenue_impact: 'Modest medication cost reduction for eligible patients',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Community pharmacies',
        interest: 'Potential loss of dispensing frequency revenue',
        relevance: 'Policy reduces pharmacy transaction volume despite bulk-per-prescription cost recovery'
      },
      {
        member: 'Pharmaceutical manufacturers',
        interest: 'Supply-chain predictability',
        relevance: '60-day dispensing improves inventory planning for manufacturers'
      }
    ],
    linked_donations: [],
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ implemented extended dispensing for specific chronic medications in private market; Australia developed systematic PBAC-approved list of 320+ medicines with safety criteria requiring 5+ years PBS-listing',
    comparison_outcome: 'Australia\'s approach more systematic and transparent with PBAC vetting; NZ relied on physician/pharmacy negotiation without regulatory framework',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Debate period 2019-2024 reflects genuine safety/clinical uncertainty rather than capture. PBAC recommendations (March 2024 round) based on clinical criteria: 5+ years listing, no monitoring requirements, no stockpile risk. Pharmaceutical companies may have lobbied but no documented quid-pro-quo.',
      confidence_notes: 'High confidence (82%) on clinical debate; lower confidence on lobbying activities as Pharmacy Guild and ASMI positions not transparently documented in public sources.'
    }
  },
  {
    ext: 'au-pol-056',
    date: '2024-01-01',
    title: 'PBS 60-Day Dispensing Implementation - Rollout Phase',
    category: 'healthcare',
    impact_score: 2,
    confidence_score: 0.85,
    primary_beneficiaries: ['Patients on stable chronic medications (320+ medicines)', 'Optometrists (from Sept 2024)'],
    disadvantaged_groups: ['Patients with unstable conditions requiring monitoring'],
    revenue_impact: 'Estimated $200-400M annual medication savings for eligible cohort',
    corporate_advantage: true,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany reformed pharmaceutical access through negotiated pricing frameworks and therapeutic substitution guidelines; maintained prescription frequency monitoring for clinical safety',
    comparison_outcome: 'German approach preserved clinical monitoring while reducing costs through reference pricing; Australia adopts 60-day dispensing without broader therapeutic substitution framework',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Implementation follows PBAC recommendations with staged rollout (Sept 2023 phase 1: 100 items; March 2024 phase 2: 100 items; Sept 2024 phase 3 + optometry). No political influence detected; clinical criteria publicly available.',
      confidence_notes: 'High confidence (85%) on implementation timeline and eligible medicines list; lower on actual uptake/cost-savings as real-world data still accumulating.'
    }
  },

  // SUPERANNUATION POLICIES
  {
    ext: 'au-pol-060',
    date: '2023-09-05',
    title: 'Super Tax on Balances Over $3M - Division 296',
    category: 'superannuation',
    impact_score: 6,
    confidence_score: 0.90,
    primary_beneficiaries: ['Public revenue ($2B+ annually by 2025-26)', 'Low-balance accumulation fund members'],
    disadvantaged_groups: ['High-wealth individuals (estimated 80,000 people)', 'Financial services industry revenue'],
    revenue_impact: '$2.0B+ annually from 2026 (originally 2025)',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK reformed public sector pensions from final-salary to career-average revalued earnings (2015 reforms); established unfunded liability monitoring (£1.4T liability = 45% GDP) and proposed transition to funded DC schemes for future employees',
    comparison_outcome: 'UK measures reduced public pension cost forecasts from 2.1% GDP (2022-23) to projected 1.4% GDP (2073-74); Australia targets private wealth concentration in super rather than public liability',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Policy targets <0.5% of population (80K individuals). No documented donor link to policy design. Albanese government announced February 2023 budget measure affecting only ultra-high wealth cohort unlikely to drive political donations (threshold too high).',
      confidence_notes: 'High confidence (90%) on policy design and revenue estimates from Treasury documents; uncertainty on implementation date (deferred from July 2025 to July 2026) suggests possible stakeholder pressure but no documented corporate capture.'
    }
  },
  {
    ext: 'au-pol-061',
    date: '2016-05-03',
    title: 'Superannuation Transfer Balance Cap - $1.6M Limit',
    category: 'superannuation',
    impact_score: 5,
    confidence_score: 0.88,
    primary_beneficiaries: ['Tax revenue (savings from concessional rate restriction)', 'Accumulation fund managers'],
    disadvantaged_groups: ['High-net-worth retirees', 'Self-managed fund trustees', 'Tax advisors/accountants'],
    revenue_impact: '$1.5-2.0B over 10 years (tax concession reduction)',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK maintained final-salary public sector DB schemes until 2015 reform, moving to career-average; combined with cap on tax-free lump sum access ($25K maximum); Australia focused solely on transfer balance cap without broader scheme restructure',
    comparison_outcome: 'UK reforms addressed sustainability of defined-benefit liabilities ($1.4T unfunded); Australia\'s cap addressed tax-minimization behavior in existing framework without structural reform',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Turnbull government measure announced 2016 budget with clear tax policy rationale: limit tax concessions to those with balances <$1.6M. Implementation deferred to 1 July 2017. No documented donor influence; professional advisors opposed but no quid-pro-quo evidence.',
      confidence_notes: 'High confidence (88%) from Senate Bills and Treasury Explanatory Memoranda; cap has since been indexed but original $1.6M threshold well-documented.'
    }
  },
  {
    ext: 'au-pol-062',
    date: '2021-07-01',
    title: 'Super Guarantee Rate Increase to 10.0%',
    category: 'superannuation',
    impact_score: 7,
    confidence_score: 0.93,
    primary_beneficiaries: ['Workers (0.5% employer contribution increase)', 'Retirement income security', 'Asset managers (larger funds under management)'],
    disadvantaged_groups: ['Employers (ongoing cost increase)', 'Small businesses (higher payroll costs)', 'Low-wage workers (potential reduced take-home pay)'],
    revenue_impact: 'Estimated $40-50B in additional retirement savings over 10 years',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Industry superannuation funds',
        interest: 'Asset accumulation from mandatory contributions',
        relevance: '0.5% SG increase = ~$1.5B additional annual flows to industry funds'
      }
    ],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany reformed public sector pensions to defined-contribution model with 10% employer contributions (proposed Policy Exchange reform); Australia increased mandatory DC contributions for all private sector workers on parallel 10% trajectory (reaching 12% by 2025)',
    comparison_outcome: 'Both countries converge on 10-12% employer contribution levels; Germany proposed to shift public sector to funded DC while Australia mandated universal private-sector accumulation',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Morrison government measure (announced 2020, implemented 2021) followed bipartisan support for SG increase trajectory. Industry funds benefited from expanded asset base but increase was legislated outcome of 2016 Fair Work Commission decision, not capture.',
      confidence_notes: 'Very high confidence (93%) on implementation date and phased increase schedule (10% July 2021, then 0.5% annual increases to 12% by 2025) documented in Superannuation Guarantee legislation.'
    }
  },
  {
    ext: 'au-pol-063',
    date: '2020-03-22',
    title: 'Early Access to Super (COVID) - $20K Withdrawals',
    category: 'superannuation',
    impact_score: 8,
    confidence_score: 0.91,
    primary_beneficiaries: ['Financially distressed workers (3.5M initial applicants)', 'Economically disadvantaged households'],
    disadvantaged_groups: ['Long-term retirement security (early drawdown reduces final balance)', 'Future retirees on lower balances'],
    revenue_impact: '$36.4B approved withdrawals (Mar-Dec 2020); average $7,638/application',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Canada',
    comparison_approach: 'Canada did NOT allow early superannuation/RRSP withdrawals in response to COVID; instead expanded Employment Insurance benefits, wage subsidies (CERB), and business support programs to preserve retirement savings',
    comparison_outcome: 'Canadian approach maintained retirement account integrity while providing income support; Australia\'s dual approach ($36.4B early withdrawal + JobSeeker) fragmented support, reducing long-term retirement adequacy for those who withdrew',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Emergency pandemic policy with clear public distress rationale. 1.4M repeat applications (second period). Eligibility criteria tightly defined: unemployment, wage reduction >20%, business turnover reduction >20%. Policy ended 31 December 2020. No documented corrupt intent.',
      confidence_notes: 'Very high confidence (91%) from Treasury COVID-19 Economic Response documents, ABS tracking, and superannuation fund administrator reports on 3.5M+1.4M applications.'
    }
  },

  // DEFENCE POLICIES
  {
    ext: 'au-pol-071',
    date: '2024-04-17',
    title: 'Defence Strategic Review Implementation - $50B Decade',
    category: 'defence',
    impact_score: 9,
    confidence_score: 0.89,
    primary_beneficiaries: ['Defence contractors (Lockheed Martin, BAE Systems, ASC)', 'Australian shipbuilding industry', 'Naval Group (settlement $830M)', 'Cyber/space capabilities vendors'],
    disadvantaged_groups: ['Non-defence sectors (opportunity cost)', 'International development funding (political priority shift)'],
    revenue_impact: '$50.3B additional over decade; $765B total Defence funding (2024-2034)',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Christopher Pyne (Defence Minister 2016-2018)',
        interest: 'Post-ministerial roles: chairman Nioa advisory board, Australian Missile Corporation, Xtek Ltd board',
        relevance: 'Transitioned from submarine/defence procurement decisions to defence contractor advisory roles within 4 years of office'
      }
    ],
    linked_donations: [
      {
        donor: 'Lockheed Martin (via supply chain partnerships)',
        amount: 'Estimated $257M+ Australian expenditure (not direct political donation)',
        years_before_policy: -4,
        industry: 'defence-aerospace'
      }
    ],
    comparison_country: 'Germany',
    comparison_approach: 'Germany launched EUR 100B special defense fund (2022) + reformed procurement via BwBBG Act (accelerated acquisition). Germany achieved 97 major acquisitions ($58B+) in 2024 by streamlining competition and eliminating approval delays',
    comparison_outcome: 'Germany accelerated procurement through process reform; Australia invested in strategic review + industry capability-building. German approach prioritized speed-to-capability; Australian emphasizes integrated force design',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Strong contractor-to-policy link: Lockheed Martin systems integration on submarines, BAE/ASC partnership for future frigates, Honeywell missile components. $1.06B Lockheed economic impact stated. Timing unclear whether contractors shaped strategic review or followed strategic outcome. Pyne\'s post-ministerial roles raise revolving-door concerns (~4-6 year gap sufficient for legitimate cooling-off).',
      confidence_notes: 'High confidence (89%) on funding amounts and contractor roles from Defence Department announcements; moderate confidence on policy capture causation (contractor input to strategic review not fully transparent).'
    }
  },
  {
    ext: 'au-pol-072',
    date: '2016-02-25',
    title: 'Defence White Paper 2016 - $195B Procurement',
    category: 'defence',
    impact_score: 8,
    confidence_score: 0.91,
    primary_beneficiaries: ['Defence contractors', 'Shipbuilding industry (9 frigates, 12 offshore patrol vessels)', 'Submarine designers (12 new submarines)'],
    disadvantaged_groups: ['Budget constraint other sectors', 'Domestic manufacturing (limited to major projects)'],
    revenue_impact: '$195B over decade on equipment; $30B additional beyond previous trajectory',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Marise Payne (Defence Minister 2016-2021)',
        interest: 'Post-ministerial lobbying by contractors seeking supply chain inclusion',
        relevance: 'Frigates/patrol vessel design created sustained demand for combat system integration (Lockheed Martin)'
      }
    ],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany\'s 2016 period still faced budget constraints; white paper alignment with capabilities matching UK-US defense integration. Australia committed to maximize Australian industry involvement in sustainment; Germany later (2022+) prioritized rapid acquisition over industrial policy',
    comparison_outcome: 'Turnbull\'s White Paper emphasized industrial participation policy; Germany\'s emergency funding (post-2022) bypassed domestic industrial planning for speed. Australia took 8+ years to finalize Naval Group Attack-class; Germany executing 97 acquisitions in single year via expedited procurement',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'White Paper published February 2016 (Turnbull/Payne). Strategic decision to select future submarine through open competition (2016-2018 led to Naval Group selection). No documented quid-pro-quo. Industrial participation policy visible and debated publicly. Timing aligns with strategic pivot to Indo-Pacific (not capture-driven).',
      confidence_notes: 'Very high confidence (91%) on procurement commitments from Defence White Paper official document; lower confidence on absence of lobbying pressure (not fully documented in public sources).'
    }
  },
  {
    ext: 'au-pol-073',
    date: '2018-06-29',
    title: 'Attack Class Submarine Contract - Naval Group $50B',
    category: 'defence',
    impact_score: 9,
    confidence_score: 0.87,
    primary_beneficiaries: ['Naval Group (contract value €56B= $90B AUD)', 'Lockheed Martin (combat system integration)', 'Australian submarine suppliers (1300+ firms)'],
    disadvantaged_groups: ['British submarine builders (lost to French)', 'Alternative contractors'],
    revenue_impact: '$50-90B depending on final contract terms; cancelled 2021 (settlement €555M= $830M)',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Christopher Pyne (Defence Industry Minister to 2017, Defence Minister 2018)',
        interest: 'Combat system integration contractor advisory roles (post-office)',
        relevance: 'Submarine procurement decisions (2016-2018 negotiation phase) preceded Pyne\'s advisor roles by 1-3 years'
      }
    ],
    linked_donations: [
      {
        donor: 'Naval Group (French state-owned, €31B initial contract)',
        amount: 'N/A - foreign government entity (not direct AUS political donation)',
        years_before_policy: -2,
        industry: 'defence-naval'
      },
      {
        donor: 'Lockheed Martin (via supply chain contracts)',
        amount: 'Combat system integration contract (no disclosed political donation)',
        years_before_policy: 0,
        industry: 'defence-aerospace'
      }
    ],
    comparison_country: 'Germany',
    comparison_approach: 'Germany procures submarines through ThyssenKrupp (domestic) and strategic partnerships; prioritizes European industrial base. 2024 acquisition of 4 U212CD submarines fits integrated European defense supply chain rather than bilateral 12-submarine mono-supplier arrangement',
    comparison_outcome: 'German approach maintains supplier competition (NATO partners can compete); Australia committed to 12-submarine monopsony with single foreign (then cancelled for AUKUS UK/US alternatives). Cancellation cost $830M settlement to Naval Group, demonstrating risks of sole-source long-term procurement',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Naval Group contract (€56B) finalized Feb 2019 after 2016-2018 competition phase. Lockheed Martin integration role announced alongside Naval Group award (close timing). No documented campaign donations but foreign state-owned contractor involved. Cancellation (2021) via AUKUS shift suggests contract was strategic decision, not financial capture.',
      confidence_notes: 'High confidence (87%) on contract timeline and final settlement ($830M); moderate confidence on policy capture causation (Naval Group state-owned so no political donation link possible; Lockheed Martin role concurrent with contract award suggests integration was planned, not a post-award favor).'
    }
  }
];

// Export for Supabase insertion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = timeline_events;
}
