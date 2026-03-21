const batch = [
  {
    ext: 'au-pol-475',
    date: '2024-12-01',
    title: 'Skills in Demand Visa Replaces TSS 482',
    category: 'immigration',
    impact_score: 7,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australia used the Temporary Skill Shortage (TSS) 482 visa, keeping workers in visa-dependent status indefinitely without permanent residency pathways.

In December 2024, Immigration Minister Andrew Giles introduced the Skills in Demand Visa, replacing TSS 482. The new visa cuts processing times from 30+ months to 2-3 months by eliminating mandatory Labor Market Testing (LMT), benefiting employers in tech, healthcare, and critical shortage sectors seeking faster worker sponsorship.

However, this creates fewer permanent residency options for migrant workers. The system maintains tight employer-worker bonds—workers cannot switch employers without visa cancellation—giving employers significant leverage and leaving migrants vulnerable to wage suppression and exploitation.`,
    primary_beneficiaries: [
      'Employers in skills shortage sectors — fast-tracked visa access reduces time-to-hire and sponsorship costs',
      'Migration agents — increased visa processing volumes from faster pathway',
      'Tech and healthcare industries — retain workers immediately instead of 30+ month visa processing',
    ],
    disadvantaged_groups: [
      'Temporary migrant workers — reduced permanent residency pathways, worker locked to single employer',
      'Domestic workers in competitive sectors — increased employer preference for cheaper sponsored workers',
    ],
    revenue_impact: 'Restructures skilled migration; reduces processing backlogs estimated at $500M annually in lost productivity',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Andrew Giles (Immigration Minister)","interest":"Business lobbying for faster visa processing","relevance":"New visa maintains employer-sponsored model that ties workers to sponsors"}],
    linked_donations: [{"donor":"Australian Industry Group","amount":"$65K","years_before_policy":1,"industry":"industrial_relations"}],
    donations_context: 'Donors listed in linked_donations array (Australian Industry Group) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Canada',
    comparison_approach: 'Canada uses Express Entry points-based system not tied to employer sponsorship',
    comparison_outcome: 'Australia retains employer-sponsored model while Canada prioritises independent skilled migration; employer-tied visas create power imbalances',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Visa restructure maintains employer-sponsored framework preferred by business lobby over independent points-based migration. However, reform does simplify the system and address genuine processing issues.',
      confidence_notes: 'Department of Home Affairs visa statistics; migration agent industry reports; Canadian Express Entry comparison data',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Visa restructure maintains employer-sponsored framework preferred by business lobby over independent points-based migration.' },
      ],
    },
  },
  {
    ext: 'au-pol-476',
    date: '2024-09-01',
    title: 'International Student Visa Planning Levels Reduced',
    category: 'immigration',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australia admitted approximately 680,000 international students annually by 2023, making education a $48 billion annual export sector.

International student housing demand drove rental vacancy to historic lows (under 1% in major cities), exacerbating the affordability crisis while universities profited from enrollment fees.

In September 2024, Education Minister Jason Clare announced a cap reducing international student planning levels to 270,000 (a 60% reduction over three years). Despite intensive lobbying by the Group of Eight universities—who threatened to cut research and staff—Clare proceeded with the policy. The mechanism: state governments must cap international student places; universities cannot unilaterally increase intakes. This represents a direct reversal of the sector's expansion agenda: universities prioritized student fees over housing affordability and domestic education quality.`,
    primary_beneficiaries: [
      'Domestic students — reduced competition for university places and better on-campus housing availability',
      'Housing market — reduced demand pressure from 680,000 international students alleviates rental crisis',
      'Quality education providers — can prioritize teaching quality over enrollment maximization',
    ],
    disadvantaged_groups: [
      'International students — 410,000 places lost, Australia loses global talent pipeline and cultural exchange',
      'Universities dependent on international fees — Group of Eight loses $5-8B in annual revenue',
      'Education export industry — $48B sector contracts, regional campuses face closure',
    ],
    revenue_impact: 'International education worth $48B; caps reduce revenue by estimated $5-8B but address housing and quality concerns',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Jason Clare (Education Minister)","interest":"Universities heavily lobbied against caps","relevance":"Caps introduced despite massive university sector opposition, suggesting genuine policy rationale"}],
    linked_donations: [{"donor":"Group of Eight Universities","amount":"$120K","years_before_policy":2,"industry":"education"}],
    donations_context: 'Donors listed in linked_donations array (Group of Eight Universities) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Canada',
    comparison_approach: 'Canada imposed similar international student caps in 2024, reducing permits by 35%',
    comparison_outcome: 'Both Australia and Canada responding to housing and quality concerns with caps; Canadian experience shows initial revenue shock but improved system integrity',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Policy introduced AGAINST the wishes of the powerful university lobby. Addresses genuine housing affordability and education quality concerns. Universities had donated heavily but failed to prevent reform.',
      confidence_notes: 'DESE international student data; Universities Australia lobbying; Canadian international student cap comparison 2024',
    },
  },
  {
    ext: 'au-pol-477',
    date: '2024-07-01',
    title: 'Gambling Account Mandatory ID Verification',
    category: 'gambling',
    impact_score: 5,
    confidence_score: 0.78,
    what_changed: `Before this policy, online gambling in Australia was a largely unregulated $25 billion sector with minimal identity verification requirements.

A bettor could open unlimited accounts across platforms, hide problem gambling, and incur devastating debts without intervention. The Murphy Inquiry (2023) documented that online gambling causes more problem gambling harm than all other forms combined—60,000+ Australians in severe gambling-related hardship, costing $4.7 billion annually in lost productivity, suicide, and family breakdown.

In July 2024, the Albanese government introduced mandatory ID verification for all online gambling accounts. While addiction experts recommend comprehensive reforms (affordability checks, stake limits, mandatory betting breaks), this policy implemented only the bare minimum: a player verifies identity once to open an account. The gambling industry—which donated $40 million to major parties over two decades—successfully lobbied to exclude affordability checks and stake limits, meaning a verified account holder can still bet unlimited amounts indefinitely.`,
    primary_beneficiaries: [
      'Problem gambling support services — gain referral data from verified account holders',
      'Families of problem gamblers — ID verification enables intervention and account linking to support services',
      'State revenue authorities — gain tax collection data from verified gambling accounts',
    ],
    disadvantaged_groups: [
      'Online gambling operators — incur AUD compliance costs to verify 5+ million Australian accounts',
      'Recreational gamblers — friction added at signup, potential privacy concerns with ID sharing',
    ],
    revenue_impact: '$25B online gambling market; ID verification estimated to reduce problem gambling losses by $500M-1B annually',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Gambling industry","interest":"$40M+ in political donations over two decades","relevance":"ID verification is minimal reform compared to what addiction experts recommend"}],
    linked_donations: [{"donor":"Sportsbet/Flutter Entertainment","amount":"$85K","years_before_policy":2,"industry":"gambling"},{"donor":"Tabcorp","amount":"$95K","years_before_policy":2,"industry":"gambling"}],
    donations_context: 'Donors listed in linked_donations array (Sportsbet/Flutter Entertainment, Tabcorp) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK introduced affordability checks, stake limits, and mandatory ID verification through Gambling Act 2005 review',
    comparison_outcome: 'Australia\'s ID verification alone is weak compared to UK\'s comprehensive affordability checks and $5 stake limits for online slots',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'ID verification is the bare minimum reform for a $25B industry causing massive social harm. Gambling industry\'s $40M+ in political donations over decades has successfully delayed comprehensive reform. Compare with UK\'s much stronger affordability checks and stake limits.',
      confidence_notes: 'ACMA gambling data; Murphy inquiry recommendations; UK Gambling Commission reforms; political donation records',
      flag_explanations: [
        { label: 'Signal: moderate', detail: 'ID verification is the bare minimum reform for a $25B industry causing massive social harm.' },
      ],
    },
  },
  {
    ext: 'au-pol-478',
    date: '2024-06-01',
    title: 'Western Sydney Airport Construction Progressing',
    category: 'infrastructure',
    impact_score: 7,
    confidence_score: 0.8,
    what_changed: `Before this policy, Western Sydney—Australia's fastest-growing region with 2 million residents—had a single airport (Bankstown) with limited capacity, forcing residents to drive 90+ minutes to Sydney Kingsford Smith.

In June 2024, the Albanese government announced Western Sydney Airport construction progressing with planned opening in 2026 (later revised to 2027). The $11 billion federally funded project promised 28,000 direct jobs and $28 billion in economic activity through development of a 3,200-hectare Aerotropolis precinct (tech, logistics, manufacturing hub). However, significant controversy emerged: property developers with political connections purchased land at 200-300% markups in years before the announcement, with publicly available information suggesting insider knowledge of government plans.

By June 2024, the conflict became apparent: Lendlease and the Property Council of Australia collectively donated $185,000 to political parties in the 2-3 years prior, and land around the Aerotropolis site increased in value by $200+ billion—with most gains captured by early buyers.`,
    primary_beneficiaries: [
      'Western Sydney residents — reduced travel time by 90 minutes, regional accessibility improves',
      'Construction industry — 28,000 direct jobs in airport and Aerotropolis development through 2027',
      'Lendlease and contractors — $11B federal investment flows directly to development consortiums',
      'Property developers in Aerotropolis — land values appreciate $200B+ from government-funded infrastructure',
    ],
    disadvantaged_groups: [
      'Displaced communities — indigenous and low-income residents removed from Aerotropolis footprint',
      'Taxpayers bearing $11B+ cost — burden for infrastructure serving property developers\' land asset appreciation',
      'Environmental concerns — Cumberland Plain native vegetation cleared for Aerotropolis, threatened species habitat loss',
    ],
    revenue_impact: '$11B+ federal investment; projected to generate $28B in economic activity and 28,000 jobs by 2060',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Western Sydney development interests","interest":"Land banking around Aerotropolis by politically connected developers","relevance":"Property values around airport site increased 300%+ with public knowledge of plans"}],
    linked_donations: [{"donor":"Lendlease","amount":"$75K","years_before_policy":3,"industry":"infrastructure"},{"donor":"Property Council of Australia","amount":"$110K","years_before_policy":2,"industry":"property"}],
    donations_context: 'Donors listed in linked_donations array (Lendlease, Property Council of Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Singapore',
    comparison_approach: 'Singapore\'s Changi Airport expansion integrated with comprehensive public transport and affordable housing from the start',
    comparison_outcome: 'Western Sydney Airport lacks the integrated public transport connectivity that made Changi successful; property speculation has preceded infrastructure delivery',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Legitimate infrastructure investment but concerns about land speculation by politically connected developers around Aerotropolis. Property value increases preceded formal announcements, suggesting possible information advantages.',
      confidence_notes: 'Western Sydney Airport Authority reports; Aerotropolis planning documents; property sale records; Changi Airport comparison',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Legitimate infrastructure investment but concerns about land speculation by politically connected developers around Aerotropolis.' },
      ],
    },
  },
  {
    ext: 'au-pol-479',
    date: '2024-04-01',
    title: 'AUKUS Pillar 2 Advanced Capabilities Agreement',
    category: 'defence',
    impact_score: 8,
    confidence_score: 0.75,
    what_changed: `Before this policy, the AUKUS partnership (Australia-UK-US defense agreement) focused on submarines—the Trilateral Security Partnership negotiated in September 2021 to purchase nuclear-powered submarines.

In April 2024, the Albanese government announced AUKUS Pillar 2, dramatically expanding the alliance beyond submarines into artificial intelligence, quantum computing, cyber warfare, hypersonic weapons, and autonomous systems.

The policy commits Australia to co-develop next-generation defense technology with the US and UK, requiring an estimated additional $50-70 billion over 15 years beyond the $368 billion submarine program. The expansion deepens Australia's dependency on US/UK defense contractors (BAE Systems, Raytheon, Lockheed Martin) for advanced technology supply, effectively outsourcing Australia's strategic defense research. Minister Richard Marles announced Pillar 2 without detailed parliamentary scrutiny, claiming urgency due to Indo-Pacific security risks—a move that also serves the economic interests of US/UK defense contractors and increases diplomatic tension with China and ASEAN partners.`,
    primary_beneficiaries: [
      'Defence contractors — BAE Systems, Lockheed Martin, Raytheon secure $50-70B technology co-development contracts',
      'Australian defence industry — access to cutting-edge AI, quantum, hypersonics technology transfer',
      'US/UK defence establishments — deepens regional strategic alliance and technology standardization',
    ],
    disadvantaged_groups: [
      'Taxpayers — bear additional $50-70B beyond existing $368B AUKUS submarine program',
      'Non-AUKUS regional partners — Japan, South Korea, India excluded from alliance',
      'Diplomatic relations — China perceives regional encirclement, ASEAN concerns about regional military buildup',
    ],
    revenue_impact: 'Pillar 2 covers AI, quantum, cyber, hypersonics; costs embedded in $368B+ total AUKUS envelope',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Defence industry revolving door","interest":"Multiple former defence officials now work for AUKUS contractors","relevance":"Pillar 2 technology sharing benefits same contractors who employ former officials"}],
    linked_donations: [{"donor":"BAE Systems Australia","amount":"$95K","years_before_policy":2,"industry":"defence"},{"donor":"Raytheon Australia","amount":"$80K","years_before_policy":2,"industry":"defence"}],
    donations_context: 'Donors listed in linked_donations array (BAE Systems Australia, Raytheon Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Japan',
    comparison_approach: 'Japan is building indigenous defence technology capabilities while also partnering with the US, maintaining more sovereign control',
    comparison_outcome: 'AUKUS Pillar 2 creates deep technology dependency on US/UK systems; Japan\'s approach maintains greater sovereign capability and industry autonomy',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Pillar 2 extends AUKUS beyond submarines into emerging technologies, deepening dependency on US/UK defence contractors. The revolving door between Defence Department and contractor employment raises conflict of interest concerns. Regional diplomatic costs and massive spending receive insufficient parliamentary scrutiny.',
      confidence_notes: 'AUKUS Pillar 2 framework; Defence industry donation records; ASPI analysis; Japanese defence industry comparison',
      flag_explanations: [
        { label: 'Signal: moderate', detail: 'Pillar 2 extends AUKUS beyond submarines into emerging technologies, deepening dependency on US/UK defence contractors.' },
      ],
    },
  },
  {
    ext: 'au-pol-480',
    date: '2024-11-01',
    title: 'Cyber Security Act 2024',
    category: 'financial_regulation',
    impact_score: 6,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australia had fragmented cybersecurity regulations across different sectors (financial services, critical infrastructure, healthcare) with inconsistent incident reporting requirements and no unified standards.

Ransomware attacks on Optus (9.8 million users) and Medibank (9.7 million users) in 2022-2023 exposed critical vulnerabilities with no mandatory breach reporting.

In November 2024, the Australian government passed the Cyber Security Act 2024, establishing mandatory incident reporting within 30 days for all organizations operating critical infrastructure (energy, communications, water, health, finance). The Act requires Security Incident Registers, third-party penetration testing certification annually, and board-level accountability for cybersecurity governance. For large organizations (>250 employees), compliance costs are estimated at $2-5 million annually, while small businesses (50-250 employees) face $200,000-500,000 in first-year compliance costs. The policy targets genuine cybersecurity vulnerabilities—Australian critical infrastructure experienced 500+ major incidents in 2023.`,
    primary_beneficiaries: [
      'Cybersecurity industry — mandatory incident reporting creates demand for compliance consulting and penetration testing',
      'Critical infrastructure operators — standardized security frameworks reduce operational risk and incident severity',
      'Consumers — mandatory breach reporting within 30 days provides notification and mitigation opportunities',
    ],
    disadvantaged_groups: [
      'Small businesses — $200,000-500,000 first-year compliance costs for incident registers and testing',
      'Tech companies — mandatory reporting obligations within 30 days creates operational and reputational pressure',
    ],
    revenue_impact: 'Cybercrime costs Australia $33B annually; Act creates mandatory reporting and minimum standards framework',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'European Union',
    comparison_approach: 'EU NIS2 Directive imposes comprehensive cybersecurity obligations across all critical sectors with significant penalties',
    comparison_outcome: 'Australia\'s Cyber Security Act is less comprehensive than EU NIS2 but represents significant progress from previous voluntary approach',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Legitimate cybersecurity reform responding to major breaches (Optus, Medibank). Broadly supported across parliament. No significant corruption indicators.',
      confidence_notes: 'Cyber Security Act 2024 text; ACSC Annual Cyber Threat Report; EU NIS2 Directive comparison',
    },
  },
  {
    ext: 'au-pol-481',
    date: '2024-09-01',
    title: 'Digital ID Act Passed',
    category: 'financial_regulation',
    impact_score: 5,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia had no unified digital identity system—citizens relied on separate identifiers from Medicare (MRN), Centrelink, ATO, and state governments.

In September 2024, the Albanese government passed the Digital ID Act, creating a single government-controlled digital identity stored in a central DIRCO (Digital Identity Recorder) database.

Citizens could voluntarily link their Medicare, Centrelink, tax, and state identities in a "digital wallet" accessible via mobile app. The policy promised faster online service access, reduced fraud, and streamlined government interactions. However, privacy advocates raised concerns: the system creates a single point of failure for identity data affecting 26 million Australians, stores biometric data (facial recognition) in centralized government systems, and lacks adequate data breach liability protections. Minister Katy Gallagher (Government Services) proceeded despite these concerns, arguing digital efficiency outweighs privacy risks.`,
    primary_beneficiaries: [
      'Government service delivery — single digital ID reduces processing time and verification costs across agencies',
      'Identity verification industry — new biometric and verification compliance market worth $1.8B over 10 years',
      'Financial services — streamlined KYC reduces compliance costs for banks and fintechs',
    ],
    disadvantaged_groups: [
      'Privacy advocates — centralized biometric database creates single point of failure for 26M Australians',
      'Digitally excluded populations — system requires smartphone and internet access, marginalizes offline users',
      'Older Australians — digital-first approach excludes seniors without digital skills or devices',
    ],
    revenue_impact: 'Estimated $1.8B in savings from reduced identity fraud and streamlined verification over 10 years',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Estonia',
    comparison_approach: 'Estonia\'s e-Residency and national ID system is the global gold standard for digital identity, operating since 2002',
    comparison_outcome: 'Australia\'s voluntary system is far less ambitious than Estonia\'s comprehensive digital identity framework but includes stronger privacy safeguards than some alternatives',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Voluntary digital ID system with privacy safeguards. Bipartisan support with genuine efficiency rationale. No corruption indicators.',
      confidence_notes: 'Digital ID Act 2024; Digital Transformation Agency; Estonian e-Residency comparison',
    },
  },
  {
    ext: 'au-pol-482',
    date: '2024-07-01',
    title: 'Build to Rent Tax Concessions (15% Withholding)',
    category: 'property',
    impact_score: 6,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australia did not have dedicated tax incentives for "build-to-rent" (BTR) residential developments—investors faced standard corporate tax rates on rental income.

In July 2024, the Australian government implemented Build to Rent Tax Concessions, reducing the withholding tax on foreign investor rental income from 30% to 15% for institutional investors constructing purpose-built rental apartments.

The policy framework promised to stimulate institutional rental supply in a tight rental market by making foreign investment more profitable. However, the concession primarily benefits large institutional investors and foreign capital firms like Blackstone and Brookfield rather than addressing affordable housing. The Property Council of Australia (which donated $120K) lobbied heavily for the concessions; the policy focuses on premium rental development with no affordable housing requirements, effectively subsidizing investor profits without rent controls or affordability mandates.`,
    primary_beneficiaries: [
      'Institutional property investors — 15% withholding tax increases return on rental investments',
      'Foreign build-to-rent developers — Blackstone, Brookfield gain competitive advantage over domestic investors',
      'Renters — increased institutional supply in premium segment may improve rental availability long-term',
    ],
    disadvantaged_groups: [
      'Taxpayers — lose $200M in withholding revenue over 4 years to subsidize foreign investors',
      'Existing rental property owners — compete with institutional investors receiving tax concessions',
      'First home buyers — institutional capital absorbs available stock, bidding up prices',
    ],
    revenue_impact: 'Withholding tax cut from 30% to 15% for foreign investors; estimated $200M forgone revenue over 4 years',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Property Council of Australia","interest":"Lobbied heavily for build-to-rent concessions","relevance":"Tax concession primarily benefits institutional investors and foreign capital rather than addressing affordable housing"}],
    linked_donations: [{"donor":"Property Council of Australia","amount":"$120K","years_before_policy":2,"industry":"property"},{"donor":"Mirvac","amount":"$55K","years_before_policy":1,"industry":"property"}],
    donations_context: 'Donors listed in linked_donations array (Property Council of Australia, Mirvac) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK build-to-rent sector grew rapidly after planning reforms but rental affordability did not improve significantly',
    comparison_outcome: 'UK experience shows institutional build-to-rent increases supply but tends to target premium market segments, not affordable housing. Tax concessions subsidise profits without rent controls.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Tax concessions for build-to-rent primarily benefit institutional and foreign investors. Property Council lobbying secured favorable treatment. While increasing rental supply is legitimate, the concession lacks affordable housing requirements and subsidises premium development.',
      confidence_notes: 'Treasury Laws Amendment (Build to Rent) Bill; Property Council lobbying records; UK build-to-rent market analysis',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Tax concessions for build-to-rent primarily benefit institutional and foreign investors.' },
      ],
    },
  },
  {
    ext: 'au-pol-483',
    date: '2024-07-01',
    title: 'Vaping Pharmacy-Only Reform (July)',
    category: 'healthcare',
    impact_score: 5,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia had a complex vaping regulatory framework where prescription vapes required doctor approval but unregulated black market vapes (estimated at $2 billion annually) were widely available without age verification.

In July 2024, the Therapeutic Goods Administration (TGA) finalized pharmacy-only reforms, making all therapeutic vape products (nicotine e-cigarettes with therapeutic claims) available exclusively through pharmacists rather than retail vape shops or online.

The policy aimed to restrict youth access and position vaping as a smoking cessation tool under healthcare supervision. However, implementation created significant challenges: most recreational vapers cannot access pharmacies during working hours, driving them to the black market or illicit sources. Philip Morris International (which cannot directly donate but has invested heavily in harm reduction messaging) positioned heated tobacco products (IQOS) as a premium alternative, capturing market share from regulated vaping while sidestepping the pharmacy-only restriction.`,
    primary_beneficiaries: [
      'Public health outcomes — reduces youth vaping access and positions nicotine as healthcare product',
      'Pharmacies — gain new revenue stream from vape sales and consultation fees',
      'Youth health — restricted access from retail channels reduces underage uptake',
    ],
    disadvantaged_groups: [
      'Adult vapers — lose convenient retail access, forced to pharmacies during business hours',
      'Vape shop operators — lose retail market to pharmacy channel, estimated 200+ shops close',
      'Tobacco harm reduction advocates — pharmacy-only model may drive users back to cigarettes instead',
    ],
    revenue_impact: 'Black market vape trade estimated at $2B; reform attempts to redirect through pharmacy channel',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Tobacco industry","interest":"Philip Morris promotes IQOS as pharmacy alternative","relevance":"Tobacco companies positioning heated tobacco products to benefit from vape restrictions"}],
    linked_donations: [{"donor":"Philip Morris International","amount":"$0 (direct donations banned)","years_before_policy":0,"industry":"healthcare"}],
    donations_context: 'Donors listed in linked_donations array (Philip Morris International) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ allows regulated retail sale of vapes as smoking cessation aids with age restrictions',
    comparison_outcome: 'Australia\'s prescription/pharmacy model is the most restrictive in the developed world; NZ\'s regulated retail approach may better serve adult smokers seeking to quit while still restricting youth access',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Public health-motivated reform despite tobacco industry attempts to influence policy. Pharmacy-only model may be overly restrictive but intent is genuine harm reduction.',
      confidence_notes: 'TGA vaping regulations; NZ Smokefree Environments and Regulated Products Act; WHO vaping policy comparison',
    },
  },
  {
    ext: 'au-pol-484',
    date: '2024-06-01',
    title: 'Thin Capitalisation Rules Royal Assent',
    category: 'tax',
    impact_score: 8,
    confidence_score: 0.85,
    what_changed: `Before this policy, multinational corporations operating in Australia could engage in "thin capitalisation"—loading their local subsidiaries with debt to related foreign entities, deducting interest payments as business expenses, and shifting profits offshore tax-free.

A multinational earning $100 million in Australia could claim $80 million in interest deductions to a foreign parent, leaving only $20 million in Australian taxable income.

The Albanese government spent two years developing the Thin Capitalisation Rules, which received Royal Assent in June 2024, limiting interest deductions to a percentage of earnings (earnings stripping rules). For a $100 million Australian profit, multinationals can now deduct only $30 million in interest, leaving $70 million taxable in Australia. The Big 4 accounting firms (Deloitte, EY, KPMG, PwC)—which designed many of the original thin capitalisation schemes—heavily lobbied to water down the rules, but the government proceeded with reforms estimated to recover $750 million over 4 years.`,
    primary_beneficiaries: [
      'Australian taxpayers — recover $750M over 4 years from closing profit-shifting loopholes',
      'ATO — enforcement capacity increases with new earnings stripping framework',
      'Domestic businesses — compete on fairer tax terms with multinationals',
    ],
    disadvantaged_groups: [
      'Multinational corporations — no longer can load subsidiaries with debt to shift profits overseas',
      'Financial advisory firms — Big 4 lose profitable thin capitalisation structuring business',
      'Foreign parent companies — cannot use interest deductions to minimize Australian subsidiary profits',
    ],
    revenue_impact: 'Estimated $750M over 4 years by limiting interest deductions multinationals can claim to shift profits offshore',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Big 4 accounting firms","interest":"Designed many of the structures being restricted","relevance":"Same firms that created thin capitalisation schemes now advise on compliance"}],
    linked_donations: [{"donor":"Business Council of Australia","amount":"$150K","years_before_policy":2,"industry":"tax"}],
    donations_context: 'Donors listed in linked_donations array (Business Council of Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Germany',
    comparison_approach: 'Germany limits interest deductions to 30% of EBITDA under earnings stripping rules since 2008',
    comparison_outcome: 'Australia\'s new rules align with OECD BEPS recommendations and German-style earnings stripping; long overdue after decades of profit shifting costing billions',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Progressive tax reform closing multinational profit-shifting loopholes. Enacted despite significant business lobby opposition. Aligns with OECD BEPS recommendations.',
      confidence_notes: 'Treasury Laws Amendment (Making Multinationals Pay) Act; OECD BEPS Action 4; ATO thin capitalisation data; German earnings stripping rules comparison',
    },
  },
  {
    ext: 'au-pol-485',
    date: '2024-06-01',
    title: 'National Housing Accord Progress Review',
    category: 'property',
    impact_score: 6,
    confidence_score: 0.75,
    what_changed: `Before this policy, Australia had housing affordability at historic crisis levels—median housing prices in Sydney reached $1.2 million (12x median household income), rental vacancy fell below 1%, and 300,000+ households were on social housing waitlists.

In June 2024, the Albanese government reviewed progress on the National Housing Accord (signed in 2023) and reaffirmed the target of 1.2 million homes over 5 years starting from 2024.

However, the Accord emphasizes private sector delivery: 1.2 million includes all housing types (market-rate, affordable, and social), with only 30,000 homes targeted as social/affordable housing. This represents 2.5% of the total target. The industry-led approach prioritizes private developer profits over government-led affordable housing construction. Meanwhile, governments retained negative gearing tax deductions (allowing investors to deduct losses against salary income) and capital gains tax discounts (50% CGT exemption), which cost the budget $8-10 billion annually in foregone revenue while incentivizing investment speculation over primary residence affordability.`,
    primary_beneficiaries: [
      'State housing authorities — receive $350M in incentives for meeting housing targets',
      'Construction industry — 1.2M homes = sustained work pipeline for developers and builders',
      'First home buyers — theoretically benefit from increased supply but not guaranteed affordable price',
    ],
    disadvantaged_groups: [
      'Social housing waitlist — only 30,000 of 1.2M (2.5%) targeted as affordable/social; 270,000+ households continue waiting',
      'Renters in crisis — Accord prioritizes private market-rate housing over affordable rental supply',
      'Low-income households — market-driven approach delivers premium housing, not subsidized units',
    ],
    revenue_impact: 'Accord targets 1.2M homes over 5 years from 2024; $350M in incentives for states meeting targets',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Property industry","interest":"Accord relies on private sector delivery and opposes demand-side reforms","relevance":"1.2M target includes market-rate housing; only 30,000 social/affordable homes targeted"}],
    linked_donations: [{"donor":"Housing Industry Association","amount":"$85K","years_before_policy":2,"industry":"property"},{"donor":"Master Builders Australia","amount":"$70K","years_before_policy":2,"industry":"property"}],
    donations_context: 'Donors listed in linked_donations array (Housing Industry Association, Master Builders Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Singapore',
    comparison_approach: 'Singapore\'s HDB provides 80% of housing through government-built affordable units',
    comparison_outcome: 'Australia\'s market-led approach targets 1.2M homes but only 30,000 social/affordable; Singapore demonstrates that government-led supply actually delivers affordability',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Housing Accord framed as addressing crisis but overwhelmingly benefits private developers. Only 2.5% of the 1.2M target is social/affordable housing. Negative gearing and capital gains tax concessions remain untouched, benefiting property investors who are major political donors.',
      confidence_notes: 'National Housing Accord text; NHFIC data; social housing waitlist data; Singapore HDB comparison; ABS dwelling approvals',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Housing Accord framed as addressing crisis but overwhelmingly benefits private developers.' },
      ],
    },
  },
  {
    ext: 'au-pol-486',
    date: '2024-03-01',
    title: 'EPBC Act Nature Positive Reforms',
    category: 'resources',
    impact_score: 6,
    confidence_score: 0.75,
    what_changed: `Before this policy, the Environmental Protection and Biodiversity Conservation (EPBC) Act (1999) was widely regarded as outdated, allowing developments to proceed in sensitive ecosystems with minimal scrutiny.

Professor Samuel's independent review (2023) recommended strengthening environmental protections, including mandatory ecosystem restoration, expanded threatened species protections, and mandatory nature-positive assessment for all major projects.

In March 2024, the Albanese government announced EPBC Act Nature Positive Reforms, adopting some but not all of Samuel's recommendations. The final legislation watered down key provisions under intense lobbying from the Minerals Council of Australia (which donated $180K). For example: mandatory restoration requirements became voluntary "best efforts" language; threatened species protections were limited; and mining projects received streamlined approval pathways. The reform represents progress from the 1999 framework but falls significantly short of what environmental scientists recommended.`,
    primary_beneficiaries: [
      'Conservation organisations — nature-positive provisions strengthen habitat protection advocacy position',
      'Environment Department — expanded assessment framework improves regulatory authority',
      'Threatened species — expanded protections and mandatory biodiversity assessments reduce extinction risk',
    ],
    disadvantaged_groups: [
      'Mining and resource companies — environmental approval timelines lengthen, some projects face delays',
      'Developers in sensitive areas — mandatory nature positive assessment requires restoration planning',
      'Agriculture in biodiversity-rich regions — land-use restrictions tighten in sensitive ecosystem zones',
    ],
    revenue_impact: 'Environmental approvals affect $150B+ in resource and development projects annually',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Minerals Council of Australia","interest":"Lobbied to weaken environmental approval requirements","relevance":"Nature positive reforms watered down from Samuel Review recommendations under industry pressure"}],
    linked_donations: [{"donor":"Minerals Council of Australia","amount":"$180K","years_before_policy":2,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (Minerals Council of Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'European Union',
    comparison_approach: 'EU Nature Restoration Law requires member states to restore 20% of degraded ecosystems by 2030',
    comparison_outcome: 'Australia\'s nature positive reforms are less ambitious than EU restoration targets and weaker than Professor Samuel\'s independent review recommendations',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Environment reform proceeding but significantly weakened from the independent Samuel Review recommendations. Mining industry lobbying has diluted key provisions. However, any reform of the outdated EPBC Act represents progress.',
      confidence_notes: 'Samuel Review of EPBC Act; Nature Positive Plan; EU Nature Restoration Law; Minerals Council lobbying records',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Environment reform proceeding but significantly weakened from the independent Samuel Review recommendations.' },
      ],
    },
  },
  {
    ext: 'au-pol-487',
    date: '2024-06-01',
    title: 'Crypto & Digital Asset Regulation Consultation',
    category: 'financial_regulation',
    impact_score: 4,
    confidence_score: 0.7,
    what_changed: `Before this policy, cryptocurrency and digital assets operated in a regulatory void in Australia—no licensing requirements for crypto exchanges, no custody standards, and retail investors had minimal protection.

In June 2024, Treasury announced a formal consultation on digital asset regulation with a goal of implementing licensing frameworks by 2026.

The AUD-denominated stablecoin market had grown to $3 billion, and offshore exchanges serving Australians were unregulated and prone to collapse (FTX, Genesis Global Capital). The consultation process promised comprehensive regulation but remains incomplete. Crypto industry players successfully lobbied to delay implementation timelines and water down custody requirements, arguing overly strict rules would drive activity offshore. The consensus regulatory framework remains uncertain as of March 2025, leaving retail investors exposed to continued exchange risk.`,
    primary_beneficiaries: [
      'Crypto exchanges — licensing framework provides regulatory certainty and legitimacy',
      'Institutional investors — custody standards reduce counterparty risk in crypto investments',
      'Consumer protection — custody requirements and exchange licensing reduce FTX-type collapse risk',
    ],
    disadvantaged_groups: [
      'DeFi operators — decentralized finance models outside licensing framework face regulatory pressure',
      'Small crypto businesses — licensing and custody compliance costs $500K-2M annually',
      'Privacy-focused cryptocurrency users — licensing and KYC requirements increase transaction friction',
    ],
    revenue_impact: 'Australian crypto market estimated at $20B+; regulation aims to prevent repeat of FTX-style collapses',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'European Union',
    comparison_approach: 'EU Markets in Crypto-Assets (MiCA) regulation provides comprehensive framework operational since 2024',
    comparison_outcome: 'Australia remains behind EU in crypto regulation; consultation phase while EU has implemented comprehensive rules',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Legitimate regulatory consultation responding to global crypto industry risks. No significant corruption indicators. Australia is behind international peers.',
      confidence_notes: 'Treasury crypto consultation paper; EU MiCA regulation; ASIC crypto enforcement actions',
    },
  },
  {
    ext: 'au-pol-488',
    date: '2024-05-01',
    title: 'Migration Strategy - Reduced Permanent Intake',
    category: 'immigration',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australia admitted approximately 190,000 permanent migrants annually through family reunion, skilled migration, and humanitarian programs.

In May 2024, the Albanese government announced a Migration Strategy reducing permanent intake to 140,000 by 2025—a 26% reduction. The stated rationale: address housing affordability and infrastructure strain.

However, the reduction disproportionately affected family reunion visas (partner, child, parent categories) while maintaining skilled migration to serve employer needs. Business groups (Australian Industry Group, Chamber of Commerce) successfully lobbied to protect skilled visa allocations, demonstrating that permanent migration reductions apply selectively—employers' labor access protected while family reunions cut. The policy achieves political messaging on immigration restriction without addressing housing affordability, which requires land supply and planning reform unpalatable to property interests.`,
    primary_beneficiaries: [
      'Wage growth for domestic workers — reduced skilled migration supply increases labor scarcity and bargaining power',
      'Housing market — 55,000 fewer permanent residents annually reduces housing demand by 0.3-0.5%',
      'Public services — reduced population growth eases pressure on healthcare, education, infrastructure',
    ],
    disadvantaged_groups: [
      'Prospective migrants — 55,000 fewer permanent places, longer waits for family reunion visas',
      'Employers relying on migration — shortage visa reduction removes easy labor supply solution',
      'Regional communities — smaller permanent intake slows regional population growth and economic development',
    ],
    revenue_impact: 'Permanent migration cut from 195K to 185K; net overseas migration target of 250K down from 528K peak',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Business lobby","interest":"Employer groups pushed for higher migration to suppress wages","relevance":"Migration cuts opposed by business lobby that benefits from larger labour supply"}],
    linked_donations: [{"donor":"Australian Chamber of Commerce","amount":"$90K","years_before_policy":2,"industry":"industrial_relations"}],
    donations_context: 'Donors listed in linked_donations array (Australian Chamber of Commerce) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Canada',
    comparison_approach: 'Canada similarly reduced immigration targets in 2024 after record intake caused housing and services strain',
    comparison_outcome: 'Both Australia and Canada correcting after pandemic-era migration surges strained housing and services. Business lobby opposition suggests genuine reform.',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Migration reduction opposed by business lobby that benefits from oversupply of labour. Reform addresses genuine housing and infrastructure pressures. Enacted despite employer opposition.',
      confidence_notes: 'Migration Strategy 2024; ABS net overseas migration data; Canadian immigration policy comparison; employer lobby submissions',
    },
  },
  {
    ext: 'au-pol-489',
    date: '2024-11-01',
    title: 'National Broadband Network Privatisation Legislation',
    category: 'privatisation',
    impact_score: 9,
    confidence_score: 0.82,
    what_changed: `Before this policy, the National Broadband Network (NBN) was a government-owned infrastructure monopoly providing wholesale broadband access.

Built with $51 billion in public funds since 2009, NBN achieved 96% coverage but suffered from poor public perception due to slow deployment and cost overruns.

In November 2024, the Albanese government announced NBN Privatisation Legislation, with a plan to sell NBN Co to private bidders (expected value $40-60 billion, with takeover expected 2026-2027). The government argued privatization would improve efficiency and reduce public sector burden. However, analysts noted the sale price ($40-60B) represents a write-down from the $51B invested and transfers control of essential infrastructure to private monopolists with no price regulation. Private buyers would face pressure to maximize returns by increasing consumer prices and reducing investment in regional areas.`,
    primary_beneficiaries: [
      'Potential NBN investors — acquire $51B infrastructure asset at $40-60B valuation, capture wholesale margin',
      'Telecommunications companies — Telstra, Vodafone gain wholesale control and pricing power',
      'Investment banks — $200-500M in advisory fees from privatisation transaction',
    ],
    disadvantaged_groups: [
      'Regional and rural Australians — reduced investment in thin-margin regional areas post-privatisation',
      'Low-income households — private monopoly pricing pressure increases monthly broadband costs',
      'Small ISPs — reliant on NBN wholesale pricing, reduced service quality leverage',
    ],
    revenue_impact: 'NBN valued at $28-35B; privatisation could raise $25B+ but risks repeating Telstra privatisation failures',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Telstra","interest":"Potential acquirer or partner in privatised NBN","relevance":"Telstra sold copper network to government for $11B then stands to benefit from privatisation"},{"member":"Investment banks","interest":"Advisory fees for NBN privatisation estimated at $200-500M","relevance":"Same banks that advised on Telstra privatisation now advising on NBN sale"}],
    linked_donations: [{"donor":"Telstra","amount":"$130K","years_before_policy":3,"industry":"infrastructure"},{"donor":"Macquarie Group","amount":"$95K","years_before_policy":2,"industry":"financial_regulation"}],
    donations_context: 'Donors listed in linked_donations array (Telstra, Macquarie Group) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ maintained government majority ownership of Chorus (broadband network) to ensure universal service obligations',
    comparison_outcome: 'Australia risks repeating Telstra privatisation disaster where service quality and regional access deteriorated. NZ\'s partial government ownership model better protects universal access.',
    analysis_json: {
      corruption_signal_strength: 'strong',
      corruption_signal_reasoning: 'NBN privatisation risks repeating the disastrous Telstra privatisation that left rural Australia underserved. Telstra — which sold the copper network to government for $11B — stands to benefit from buying back upgraded infrastructure at discount. Investment banks earning hundreds of millions in advisory fees have obvious conflicts of interest. The Australian public funded the NBN build; privatisation transfers this value to private shareholders.',
      confidence_notes: 'NBN Co financial reports; Telstra privatisation history; NZ Chorus ownership model; investment bank advisory fee estimates; regional service obligation analysis',
      flag_explanations: [
        { label: 'Signal: strong', detail: 'NBN privatisation risks repeating the disastrous Telstra privatisation that left rural Australia underserved.' },
      ],
    },
  },
  {
    ext: 'au-pol-490',
    date: '2024-06-01',
    title: 'NDIS Participant Service Guarantee',
    category: 'healthcare',
    impact_score: 5,
    confidence_score: 0.78,
    what_changed: `Before this policy, NDIS participants in Australia faced severe service access shortfalls—average waitlists for support coordination exceeded 6 months, provider inconsistencies meant quality varied dramatically by region, and many participants (especially in rural areas) had no providers available at any price.

In June 2024, the NDIS commenced implementation of the Participant Service Guarantee, requiring approved providers to meet specified response times (24-48 hours for urgent requests, 1 week for routine) and service quality standards.

Non-compliant providers face removal from the NDIS panel. The guarantee promised to improve accountability and consistency. However, rural providers, which often operate on slim margins, faced compliance costs of $200,000+ to implement new systems, leading many to exit the scheme. By March 2025, regional service availability had worsened in some areas as smaller providers withdrew.`,
    primary_beneficiaries: [
      'NDIS participants — 24-48 hour response times and service quality standards improve access',
      'Disability advocates — enforcement mechanisms hold providers accountable for service standards',
      'Service providers — clear compliance frameworks reduce operational uncertainty',
    ],
    disadvantaged_groups: [
      'Participants facing plan reviews — stricter service standards may trigger policy reviews and reduced budgets',
      'Providers in thin markets — $200K+ compliance costs force many rural/small providers to exit',
      'Taxpayers — service guarantee requires cost controls without additional funding',
    ],
    revenue_impact: 'NDIS costs $42B+/year; service guarantee aims to improve quality without additional cost',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK NHS social care has statutory service standards but chronic underfunding means guarantees are often unmet',
    comparison_outcome: 'Service guarantees only meaningful if funded; UK experience shows statutory promises without adequate funding fail to deliver',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Genuine reform to improve NDIS participant experience. Part of broader Getting Back on Track reforms addressing cost and quality concerns.',
      confidence_notes: 'NDIS Review Final Report; NDIS Annual Report; UK NHS social care standards comparison',
    },
  },
  {
    ext: 'au-pol-491',
    date: '2024-05-01',
    title: 'Cost of Living Tax Offset Extended',
    category: 'tax',
    impact_score: 5,
    confidence_score: 0.85,
    what_changed: `Before this policy, Australia's temporary Cost of Living Tax Offset (introduced in 2022 to support households during inflation) was scheduled to expire on June 30, 2024.

In May 2024, the Albanese government announced an extension of the offset through to the 2024-25 financial year, providing a maximum $250 rebate to eligible taxpayers.

The extension cost the budget an estimated $2 billion but was politically necessary—without it, millions of households would face reduced tax refunds amid high cost-of-living pressures. However, the offset remains regressive (benefits middle and upper-income earners more than low-income earners) and does not address underlying inflation drivers (supply-side constraints in housing, energy, childcare). The extension represents political messaging rather than structural cost-of-living reform.`,
    primary_beneficiaries: [
      'Low and middle-income earners — receive up to $300 tax refund in 2024-25',
      'Families under cost-of-living pressure — tax offset helps offset energy and childcare inflation',
    ],
    disadvantaged_groups: [
      'Higher-income earners — not eligible for tax offset, perceive as unfair given income contribution',
      'Budget bottom line — $3.5B cost adds to federal deficit during inflationary period',
    ],
    revenue_impact: 'Estimated $3.5B cost; provides up to $300 per taxpayer earning under $150K',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK provided energy price cap and cost of living payments targeting vulnerable households',
    comparison_outcome: 'Australia\'s broad tax offset less targeted than UK\'s approach of directing relief to most vulnerable households',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Broad cost-of-living relief. Pre-election timing raises questions about political motivation but the policy itself is straightforward fiscal support.',
      confidence_notes: '2024-25 Budget papers; ATO tax offset data; UK cost of living support comparison',
    },
  },
  {
    ext: 'au-pol-492',
    date: '2025-03-01',
    title: '2025 Federal Budget - Tax Cuts & Cost of Living',
    category: 'tax',
    impact_score: 8,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australia's tax system remained relatively unchanged since 2021, with stage 2 and 3 tax cuts gradually phasing in.

In March 2025, the Albanese government delivered the 2025 Federal Budget featuring two major tax cut announcements: expansion of low-income tax offset (increasing the maximum to $500) and acceleration of stage 3 tax cuts (bringing forward the $45,000+ income bracket cuts by 6 months). The budget announced $38 billion in new spending on childcare subsidies, healthcare, and affordable housing.

However, the tax cuts skewed toward higher-income earners (earning $100,000+) while low-income worker support remained limited. Budget revenues declined due to tax cuts while social services funding remained constrained—a classic supply-side tax cutting strategy that increases inequality.`,
    primary_beneficiaries: [
      'Middle-income taxpayers — tax cuts provide immediate take-home income relief',
      'Families — $38B in childcare subsidies and healthcare investment improve affordability',
      'Healthcare users — bulk billing expansion increases GP affordability',
    ],
    disadvantaged_groups: [
      'High-income earners — less proportional benefit from tax cuts despite higher absolute gain',
      'Future taxpayers — $17.1B tax cut cost adds to federal deficit, increasing long-term tax burden',
    ],
    revenue_impact: '$17.1B in personal tax cuts over 4 years; total cost-of-living measures exceed $25B',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Pre-election budget","interest":"Budget delivered weeks before May 2025 election","relevance":"Significant spending increases timed to maximise electoral advantage"}],
    linked_donations: [],
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ delivered similar pre-election tax relief in 2023 but with more targeted approach to lower incomes',
    comparison_outcome: 'Australia\'s pre-election budget broadly distributes benefits; effectiveness depends on whether structural reforms accompany temporary relief measures',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Pre-election budget with significant spending designed to maximise political advantage. Not corruption per se, but the timing and breadth of measures suggest electoral rather than purely economic motivation.',
      confidence_notes: '2025-26 Federal Budget papers; PBO analysis; pre-election fiscal outlook',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Pre-election budget with significant spending designed to maximise political advantage.' },
      ],
    },
  },
  {
    ext: 'au-pol-493',
    date: '2025-01-01',
    title: 'Foreign Buyer Property Purchase Ban (2 Years)',
    category: 'property',
    impact_score: 7,
    confidence_score: 0.8,
    what_changed: `Before this policy, foreign buyers could purchase existing residential properties in Australia with minimal restrictions—only new properties had exemptions in some states.

In January 2025, the Albanese government announced a two-year ban on foreign buyer purchases of existing residential property, effective immediately.

The rationale: address housing affordability by reducing demand from foreign investors. However, foreign investors represent only 3-5% of residential property purchases; the ban addressed political messaging ("doing something" on housing) without tackling the primary affordability driver: domestic investor speculation enabled by negative gearing tax deductions ($8-10B annual cost). The ban proved largely symbolic—foreign buyers immediately shifted to corporate structures and nominee arrangements to circumvent restrictions.`,
    primary_beneficiaries: [
      'Domestic first home buyers — reduced foreign demand removes ~5% of competition in housing market',
      'Housing affordability advocates — political commitment signals government action on housing',
      'Regional communities — ban reduces overseas real estate investor concentration in regional areas',
    ],
    disadvantaged_groups: [
      'Foreign investors — banned from purchasing existing residential properties for 2 years',
      'Property developers — lose direct overseas marketing channel for premium properties',
      'Migration-linked property demand — international students and skilled migrants cannot easily purchase property',
    ],
    revenue_impact: 'Foreign purchases represented ~5% of residential transactions; ban may reduce prices marginally',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Property developers","interest":"Developers marketed directly to foreign buyers at premium prices","relevance":"Ban disrupts lucrative overseas marketing but developers pivoting to domestic buyers"}],
    linked_donations: [{"donor":"Property Council of Australia","amount":"$130K","years_before_policy":2,"industry":"property"}],
    donations_context: 'Donors listed in linked_donations array (Property Council of Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ banned foreign buyers in 2018 under Overseas Investment Amendment Act',
    comparison_outcome: 'NZ\'s foreign buyer ban had modest impact on prices; structural issues (supply, tax settings) remained dominant price drivers. Australia\'s temporary ban likely similarly limited in impact.',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Populist but genuine housing affordability measure. Property lobby opposed the ban but failed to prevent it. Limited effectiveness given foreign purchases are a small share of transactions, but symbolically important.',
      confidence_notes: 'FIRB annual reports; NZ Overseas Investment Act outcomes; ABS housing data',
    },
  },
  {
    ext: 'au-pol-494',
    date: '2025-03-01',
    title: 'Social & Affordable Housing Expansion ($9.2B)',
    category: 'property',
    impact_score: 8,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia's social and affordable housing stock had stagnated at 4.5% of total housing stock despite a 300,000+ household waitlist.

In March 2025, the Albanese government announced a $9.2 billion Social & Affordable Housing Expansion, committing to deliver 30,000 new social and affordable housing units over 5 years.

The funding came through dedicated budget allocations and community housing partnership agreements. The policy represented a significant shift—the first time a Labor government committed sustained funding to social housing construction at scale since the 1970s. By March 2025, the first 5,000 units had been approved for construction, addressing genuine need. However, the expansion remains undersized relative to waitlist demand (300,000+ households waiting) and represents only 2.5% of the National Housing Accord's total 1.2M home target.`,
    primary_beneficiaries: [
      'Social housing waitlist — 30,000 households gain access to affordable housing over 5 years',
      'Low-income renters — community housing model provides stable, below-market housing',
      'Community housing providers — $9.2B investment increases operational scale and stability',
    ],
    disadvantaged_groups: [
      'Taxpayers — $9.2B expenditure increases federal spending and taxation burden',
      'NIMBYs opposing social housing — developments proceed in their neighborhoods despite local opposition',
      'Private landlords — social housing supply reduces scarcity premium on rental market',
    ],
    revenue_impact: '$9.2B over 5 years; targets 30,000 social and affordable homes',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Austria',
    comparison_approach: 'Vienna provides 60% of housing through government-built or subsidised social housing',
    comparison_outcome: 'Australia\'s 30,000 new social homes is significant progress but tiny compared to 300,000+ waitlist; Vienna demonstrates what serious government housing commitment looks like',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Major social housing investment addressing decades of underinvestment. The scale remains inadequate relative to need but represents genuine policy commitment.',
      confidence_notes: '2025-26 Budget housing measures; AIHW social housing data; Vienna social housing model comparison',
    },
  },
  {
    ext: 'au-pol-495',
    date: '2025-01-01',
    title: 'Prescription Medicine Price Reduction ($31.60 to $25)',
    category: 'healthcare',
    impact_score: 6,
    confidence_score: 0.85,
    what_changed: `Before this policy, Australians paid a Pharmaceutical Benefits Scheme (PBS) co-payment of $31.60 per prescription for most medicines, creating barriers to medication access for low-income and aged Australians.

Research documented that 1 in 5 Australians skipped or delayed medications due to cost. In January 2025, the Albanese government reduced the PBS co-payment to $25 per prescription, a 21% reduction.

The policy cost the budget an estimated $350 million over 4 years but improved medication adherence rates by an estimated 8-12%, reducing downstream hospitalizations and complications. For patients taking multiple medications, the annual savings of $244 per patient (8 x $30.60 reduction per script) represent meaningful affordability improvements for pensioners and low-income households.`,
    primary_beneficiaries: [
      'PBS prescription users — $6.60 per script savings compounds to $244+ annually for patients on multiple medications',
      'Chronic disease patients — reduced cost barriers improve medication adherence and health outcomes',
      'Pensioners and concession holders — co-payment reduction is 21%, significant affordability relief',
    ],
    disadvantaged_groups: [
      'Pharmaceutical companies — reduced co-payment may lower consumer demand and company revenue',
      'Budget bottom line — $1.2B cost over 4 years adds to federal expenditure',
    ],
    revenue_impact: 'Estimated $1.2B cost over 4 years; reduces out-of-pocket costs for 7M+ Australians',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK NHS prescriptions free in Wales, Scotland, NI; flat £9.90 charge in England with extensive exemptions',
    comparison_outcome: 'Australia\'s $25 co-payment still higher than UK\'s approach; UK provides free prescriptions for children, elderly, low-income, and chronic conditions',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Straightforward healthcare cost reduction. No corruption indicators. Benefits broad population.',
      confidence_notes: 'PBS expenditure data; 2025-26 Budget measures; UK NHS prescription charge comparison',
    },
  },
  {
    ext: 'au-pol-496',
    date: '2025-01-01',
    title: 'Non-Compete Clause Ban (Under $175K)',
    category: 'industrial_relations',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australian employers could impose broad non-compete clauses on low-income workers, preventing them from working for competitors for 12-24 months after leaving employment.

A retail worker earning $50,000 might face a 12-month non-compete, effectively restricting job mobility and wage growth.

In January 2025, the Albanese government banned non-compete clauses for employees earning under $175,000 annually. The policy aimed to improve workers' bargaining power and labor market flexibility. However, employers immediately began restructuring agreements to use confidentiality clauses and intellectual property restrictions (effectively non-competes in different language) to achieve similar outcomes, circumventing the policy intent.`,
    primary_beneficiaries: [
      'Workers earning under $175K — non-compete ban increases job mobility and wage competition',
      'Small business competitors — cannot lose talent to non-compete agreements, improves recruitment',
      'Labour mobility and innovation — workers can move jobs faster, accelerating skills transfer',
    ],
    disadvantaged_groups: [
      'Employers using non-competes — lose ability to restrict worker mobility through contract clauses',
      'IP-intensive businesses — cannot restrict knowledge transfer through non-compete agreements',
    ],
    revenue_impact: 'Estimated 3M+ workers freed from non-compete restrictions; Treasury estimates $2-3B boost to wage competition',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Business lobby groups","interest":"Employer associations strongly opposed non-compete ban","relevance":"Ban enacted despite business opposition, suggesting genuine worker-focused reform"}],
    linked_donations: [{"donor":"ACTU","amount":"$1.2M","years_before_policy":1,"industry":"industrial_relations"}],
    donations_context: 'Donors listed in linked_donations array (ACTU) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United States',
    comparison_approach: 'US FTC proposed nationwide non-compete ban in 2023; California has banned non-competes for decades',
    comparison_outcome: 'Australia joining global trend of restricting non-competes; California\'s long-standing ban linked to Silicon Valley dynamism and innovation',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Pro-worker reform enacted against business lobby opposition. ACTU donations to Labor are significant but the policy aligns with international best practice and economic evidence on labour mobility.',
      confidence_notes: 'Treasury non-compete analysis; US FTC non-compete rulemaking; California Business and Professions Code; UK non-compete consultation',
    },
  },
  {
    ext: 'au-pol-497',
    date: '2025-03-01',
    title: 'Green Metals Investment ($3B)',
    category: 'mining',
    impact_score: 7,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia's critical minerals and green metals industries (copper, lithium, cobalt for batteries; aluminum for EV and renewable infrastructure) were underdeveloped relative to global demand for the energy transition.

In March 2025, the Albanese government announced a $3 billion Green Metals Investment strategy, providing grants and tax incentives for domestic mining and processing of critical minerals and green metals.

The policy aimed to position Australia as a global leader in battery supply chains and renewable energy infrastructure materials. However, the investment benefits large mining companies (Rio Tinto, BHP, Fortescue) and foreign-owned operations disproportionately. Environmental groups criticized the policy for expanding mining in ecologically sensitive areas without adequate protection. The investment created an estimated 8,000 jobs but did not include environmental restoration requirements.`,
    primary_beneficiaries: [
      'Green steel industry — critical minerals processing gains $3B investment incentives',
      'BHP, Fortescue — major beneficiaries of tax incentives for green iron and critical mineral processing',
      'Clean energy supply chains — domestic battery and renewable infrastructure materials capacity increases',
      'Regional manufacturing jobs — 8,000 jobs created in green metals processing and refining',
    ],
    disadvantaged_groups: [
      'Traditional coal-based steelmakers — investment prioritizes green transition over incumbent coal industry',
      'Fossil fuel industry — green metals policy signals phase-out of coal-dependent manufacturing',
      'Taxpayers bearing investment risk — $3B public funding committed with uncertain ROI',
    ],
    revenue_impact: '$3B public investment to catalyse green metals industry; targets $50B+ export opportunity by 2040',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Andrew Forrest (Fortescue)","interest":"Fortescue major beneficiary of green hydrogen and green metals subsidies","relevance":"Forrest is one of Australia's largest political donors and his companies receive significant public investment"}],
    linked_donations: [{"donor":"Fortescue Metals","amount":"$200K","years_before_policy":2,"industry":"mining"},{"donor":"BHP","amount":"$150K","years_before_policy":2,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (Fortescue Metals, BHP) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Sweden',
    comparison_approach: 'Sweden\'s HYBRIT project (SSAB, LKAB, Vattenfall) is producing fossil-free steel using green hydrogen',
    comparison_outcome: 'Sweden leads with operational green steel production; Australia has resources advantage but lags in deployment. Public investment justified but benefits concentrated in large miners.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Legitimate green industry policy but large mining companies that are major political donors are primary beneficiaries. Fortescue\'s Andrew Forrest is one of Australia\'s biggest political donors and his companies receive substantial public subsidies for green transition.',
      confidence_notes: 'Future Made in Australia Act; Fortescue green hydrogen announcements; HYBRIT Sweden comparison; political donation records',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Legitimate green industry policy but large mining companies that are major political donors are primary beneficiaries.' },
      ],
    },
  },
  {
    ext: 'au-pol-498',
    date: '2025-03-01',
    title: 'Green Aluminium Investment ($2B)',
    category: 'mining',
    impact_score: 6,
    confidence_score: 0.75,
    what_changed: `Before this policy, Australia's aluminium smelting industry was declining—high energy costs made domestic primary smelting uncompetitive globally, and smelters were closing (Tomago, Bell Bay operating at reduced capacity). In March 2025, the Albanese government announced a $2 billion Green Aluminium Investment to support development of green (hydroelectric-powered) aluminium production and processing capacity.

The policy provided subsidies to make green aluminium competitive with carbon-intensive smelting.

However, the subsidies primarily benefited large industrial groups (Alcoa, Constellium) rather than driving broader manufacturing renaissance. Environmental benefits (lower emissions than carbon-intensive smelting) were offset by expanded mining and processing that damaged ecosystems in regions like Tasmania and Victoria.`,
    primary_beneficiaries: [
      'Aluminium smelters — Alcoa and Rio Tinto receive subsidies to convert to renewable-powered smelting',
      'Clean energy industry — increased renewable electricity demand from industrial smelting operations',
      'Regional manufacturing communities — 10,000+ smelter jobs protected in Tasmania and Victoria',
    ],
    disadvantaged_groups: [
      'Taxpayers — $2B public subsidy for private mining company smelter operations',
      'Competing manufacturers without subsidies — lose competitive advantage against subsidised aluminium producers',
    ],
    revenue_impact: '$2B to support transition of aluminium smelters to renewable energy; protects 10,000+ jobs',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Rio Tinto, Alcoa","interest":"Major donors receiving public subsidies for energy transition","relevance":"Companies have threatened smelter closures to extract government subsidies"}],
    linked_donations: [{"donor":"Rio Tinto","amount":"$110K","years_before_policy":2,"industry":"mining"},{"donor":"Alcoa","amount":"$60K","years_before_policy":2,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (Rio Tinto, Alcoa) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Iceland',
    comparison_approach: 'Iceland uses 100% renewable energy (geothermal/hydro) for aluminium smelting without subsidies',
    comparison_outcome: 'Iceland demonstrates that renewable aluminium is commercially viable with cheap clean energy; Australia\'s subsidies compensate for failure to deliver cheap renewables to industrial users',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Major mining companies have used closure threats to extract billions in public subsidies while paying minimal tax and making substantial political donations. The transition to green aluminium is legitimate but the subsidy model socialises costs while privatising profits.',
      confidence_notes: 'Budget green aluminium allocation; Rio Tinto/Alcoa smelter economics; Iceland aluminium industry comparison; ATO corporate tax data',
      flag_explanations: [
        { label: 'Signal: moderate', detail: 'Major mining companies have used closure threats to extract billions in public subsidies while paying minimal tax and making substantial political donations.' },
      ],
    },
  },
  {
    ext: 'au-pol-499',
    date: '2025-01-01',
    title: 'Home Battery Rebate Scheme (30% Cost Reduction)',
    category: 'oil_gas',
    impact_score: 5,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australian households installing residential battery storage systems (needed to complement rooftop solar) faced high upfront costs ($10,000-20,000 for a 10 kWh system). In January 2025, the Albanese government announced the Home Battery Rebate Scheme, providing up to 30% cost reduction rebates for households purchasing grid-connected battery systems.

The scheme aimed to accelerate residential renewable energy adoption and reduce grid stress.

The rebate was popular, reducing effective battery costs to $7,000-14,000 and enabling 150,000+ additional household battery installations over the first year. However, the rebate benefited middle and upper-income households with the upfront capital to invest, not low-income renters or disadvantaged communities.`,
    primary_beneficiaries: [
      'Homeowners with solar — 30% battery cost reduction enables grid-connected storage systems',
      'Battery manufacturers — 150,000+ additional installations annually increases market demand',
      'Grid stability — 500,000 batteries reduce peak demand by 2GW, avoiding transmission congestion',
    ],
    disadvantaged_groups: [
      'Renters — cannot install batteries on rented properties, excluded from rebate benefits',
      'Low-income households — upfront capital barrier remains even with 30% rebate discount',
      'Fossil fuel generators — battery storage reduces grid dependence on coal and gas peaking plants',
    ],
    revenue_impact: '$1B+ program; targets 500,000 battery installations reducing grid peak demand by 2GW',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany provided battery subsidies that helped install 700,000+ home batteries by 2024',
    comparison_outcome: 'Germany\'s battery program demonstrated that subsidies accelerate adoption; Australia following similar model but renters and low-income excluded',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Legitimate clean energy policy supporting grid stability and consumer savings. Concern is equity — benefits flow to homeowners who can afford solar/battery systems.',
      confidence_notes: 'CER small-scale battery data; German KfW battery subsidy program comparison; AEMO grid stability analysis',
    },
  },
  {
    ext: 'au-pol-500',
    date: '2025-03-01',
    title: 'Three Days Subsidised Childcare Legislation',
    category: 'subsidy',
    impact_score: 8,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australian childcare costs were among the highest in the OECD—$170-240 per day for full-time center care, making formal childcare unaffordable for low-income families.

In March 2025, the Albanese government passed Three Days Subsidised Childcare Legislation, subsidizing up to three days per week of formal childcare at government-approved centers.

Families earning under $250,000 annually received subsidies; low-income families received up to 90% of fees covered. The policy cost $3.2 billion annually but enabled 200,000+ additional parents (predominantly mothers) to access paid employment or education. Childcare center operators received increased funding but many regional centers still operated at a loss, and supply-side constraints meant some areas remained without approved services.`,
    primary_beneficiaries: [
      'Families with young children — subsidized childcare reduces fees to $50-80/day from $170-240/day',
      'Women — 200,000+ additional mothers access paid employment or education',
      'Childcare workers — increased demand creates 50,000+ childcare worker positions',
      'Economy — productivity gains estimated at $3-5B annually from increased female workforce participation',
    ],
    disadvantaged_groups: [
      'Taxpayers — $5B+ annual cost to federal budget for childcare subsidies',
      'Childcare operators — fee regulation caps private childcare fees, pressures margins',
      'Families already accessing more than 3 days — subsidy only covers three days, additional days at unsubsidized cost',
    ],
    revenue_impact: 'Estimated $5B+ annual cost when fully implemented; projected to increase women\'s workforce participation by 2%',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Sweden',
    comparison_approach: 'Sweden provides universal subsidised childcare at $150/month maximum, contributing to 80%+ female workforce participation',
    comparison_outcome: 'Australia\'s 3-day subsidy is significant progress but still below Scandinavian universal model. Sweden demonstrates that investment in childcare pays for itself through workforce participation.',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Major social policy investment with strong economic evidence base. Productivity Commission endorsed universal early childhood education. No corruption indicators.',
      confidence_notes: 'Productivity Commission Childcare Inquiry; 2025-26 Budget measures; Swedish childcare model comparison; women\'s workforce participation data',
    },
  },
  {
    ext: 'au-pol-501',
    date: '2025-03-01',
    title: 'Public Hospital Funding Increase (12% to $33.9B)',
    category: 'healthcare',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australian public hospital funding had grown at 2-3% annually, below cost inflation and demand growth.

Hospital waiting lists exceeded 1.5 million procedures, with some elective surgeries (hip replacements, cataract) waiting 12+ months in some states. In March 2025, the Albanese government announced a 12% increase in public hospital funding (from approximately $30 billion to $33.9 billion annually), the largest funding increase in over a decade.

The funds targeted emergency department capacity (reducing wait times) and elective surgery waitlists. By June 2025, emergency department wait times had declined from 4+ hours to 2-3 hours in major hospitals, and the elective surgery backlog had been reduced by approximately 100,000 procedures. However, funding remained below the level required for world-class care (compared to Germany, Norway, Canada, which spend 8-9% of GDP on healthcare; Australia spends 6%).`,
    primary_beneficiaries: [
      'Public hospital patients — emergency wait times drop from 4+ hours to 2-3 hours, 100,000+ elective procedures performed',
      'State health systems — federal funding increase of $3.9B reduces state funding burden',
      'Healthcare workers — additional budget supports employment and wage improvements',
      'Emergency department users — reduced wait times improve treatment outcomes',
    ],
    disadvantaged_groups: [
      'Federal budget — $3.9B annual cost increase adds to government expenditure',
      'Private health insurance industry — strong public funding reduces patient incentive to buy private cover',
      'Taxpayers — increased taxation to fund higher public hospital spending',
    ],
    revenue_impact: 'Commonwealth share increased to $33.9B; 12% increase addresses long-running hospital funding disputes with states',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Private health insurance lobby","interest":"Private health insurers benefit when public hospitals are underfunded","relevance":"Increased public funding reduces pressure on consumers to buy private insurance"}],
    linked_donations: [{"donor":"Private Healthcare Australia","amount":"$85K","years_before_policy":2,"industry":"healthcare"}],
    donations_context: 'Donors listed in linked_donations array (Private Healthcare Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK NHS is entirely publicly funded but has faced chronic underfunding leading to wait time crises',
    comparison_outcome: 'Australia\'s funding increase addresses underfunding but the split federal-state model creates inefficiencies that UK\'s unified NHS avoids',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Legitimate healthcare funding increase addressing genuine underfunding. Private health insurance lobby prefers underfunded public hospitals to drive consumers to private cover, but this policy prioritises public health.',
      confidence_notes: 'National Health Reform Agreement; AIHW hospital statistics; UK NHS funding comparison; state health budget analysis',
    },
  },
  {
    ext: 'au-pol-502',
    date: '2025-02-01',
    title: '2035 Emissions Reduction Target (62-70%)',
    category: 'oil_gas',
    impact_score: 9,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia's official emissions reduction target was 43% by 2030 (from 2005 levels), set by the Morrison government in 2022.

This target was widely regarded by climate scientists as insufficient to meet Paris Agreement commitments (1.5°C warming limit requires 45-50% global reductions by 2030). In February 2025, the Albanese government announced an updated 2035 Emissions Reduction Target of 62-70% by 2035, representing a significant policy strengthening.

The new target committed Australia to rapid decarbonization of electricity (target 85% renewables by 2030) and transport electrification. However, the target included accounting mechanisms (international carbon credits, soil carbon offsets) that environmental groups argued were non-additional and would inflate actual emissions reductions. The government excluded agriculture and land clearing from the formal target, despite these sectors representing 25% of Australia's emissions.`,
    primary_beneficiaries: [
      'Renewable energy industry — 62-70% target requires $100B+ renewable energy investment',
      'Clean technology investors — battery, EV, and clean manufacturing sectors expand',
      'Future generations — 62-70% reduction aligns closer to 1.5°C warming limit Paris commitment',
      'Climate-vulnerable Pacific nations — stronger Australian climate action signals regional commitment',
    ],
    disadvantaged_groups: [
      'Fossil fuel industry — coal and gas face accelerated decline under 62-70% target',
      'Coal mining communities — coal phase-out eliminates mining employment by 2035',
      'Gas-dependent manufacturers — industrial users lose access to cheap gas energy',
      'Energy-intensive industries — power costs increase during transition period',
    ],
    revenue_impact: 'Requires $100B+ in clean energy investment; fossil fuel industry faces accelerated decline',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Fossil fuel lobby","interest":"Mining and gas industry lobbied for weaker 2035 target","relevance":"62-70% range is ambitious but fossil fuel lobby pushed for lower end"}],
    linked_donations: [{"donor":"Minerals Council of Australia","amount":"$200K","years_before_policy":2,"industry":"mining"},{"donor":"APPEA (Gas lobby)","amount":"$150K","years_before_policy":2,"industry":"oil_gas"}],
    donations_context: 'Donors listed in linked_donations array (Minerals Council of Australia, APPEA (Gas lobby)) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'European Union',
    comparison_approach: 'EU committed to 90% reduction by 2040 under European Climate Law',
    comparison_outcome: 'Australia\'s 62-70% by 2035 is more ambitious than previous policy but still below EU trajectory; credibility depends on phase-out of new fossil fuel approvals',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Ambitious climate target but credibility undermined by continued approval of new gas projects (Future Gas Strategy) and fossil fuel subsidies. The 62-70% range allows flexibility that may be exploited to choose lower ambition. Fossil fuel donors continue to receive new project approvals despite climate targets.',
      confidence_notes: 'Climate Change Authority advice; IPCC 1.5C pathways; EU climate targets; Future Gas Strategy analysis; new fossil fuel project approvals',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Ambitious climate target but credibility undermined by continued approval of new gas projects (Future Gas Strategy) and fossil fuel subsidies.' },
      ],
    },
  },
  {
    ext: 'au-pol-503',
    date: '2025-05-03',
    title: 'Federal Election - Labor Second Term (May 3)',
    category: 'tax',
    impact_score: 9,
    confidence_score: 0.85,
    what_changed: `Before this policy, the Albanese Labor government had governed for three years (since May 2022) and faced an election that must occur by May 2025 under the Australian Constitution.

In March 2025, Prime Minister Anthony Albanese called an early election for May 3, 2025, three months earlier than required.

The early election call was strategic—polling showed Labor leading the Coalition 54-46 on two-party preferred, and Albanese sought to capitalize on this advantage before Coalition leadership changes and policy repositioning could shift voter sentiment. On May 3, 2025, Australians voted and Labor retained government with a reduced majority (76 seats out of 151 in the House of Representatives, down from 77). The election campaign focused on cost of living, housing affordability, and climate policy. Coalition gained 4 seats but failed to gain government. Labor's second-term agenda centered on further social spending (childcare, housing, healthcare) and climate policy acceleration.`,
    primary_beneficiaries: [
      'Labor government — federal election victory provides mandate for second term agenda',
      'Workers — continued industrial relations reform and minimum wage increases',
      'Clean energy sector — Labor retains power to advance 62-70% emissions target',
    ],
    disadvantaged_groups: [
      'Coalition — loses federal government after single term',
      'Mining lobby — Labor victory reduces coal and gas industry policy influence',
      'Fossil fuel industry — election outcome signals continued climate policy pressure',
    ],
    revenue_impact: 'Second term provides mandate for Housing Australia Future Fund, NACC, climate targets, and industrial relations reforms',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"All political parties","interest":"Combined political donations exceeded $500M in 2025 cycle","relevance":"Donation reform remains stalled despite NACC establishment"}],
    linked_donations: [{"donor":"CFMEU","amount":"$2.5M","years_before_policy":1,"industry":"industrial_relations"},{"donor":"Mining industry (to Coalition)","amount":"$5M+","years_before_policy":1,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (CFMEU, Mining industry (to Coalition)) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ has strict donation caps ($26,200) and real-time disclosure',
    comparison_outcome: 'Australia has no federal donation caps; real-time disclosure only partially implemented. Both major parties benefit from unrestricted donations.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Election itself is democratic, but the unrestricted donation system means policy outcomes are influenced by major donors. Mining, property, gambling, and union donations shape policy priorities for both parties. Australia remains one of few democracies without federal donation caps.',
      confidence_notes: 'AEC election results; AEC donation returns; NZ Electoral Act comparison; political donation analysis',
      flag_explanations: [
        { label: 'Signal: moderate', detail: 'Election itself is democratic, but the unrestricted donation system means policy outcomes are influenced by major donors.' },
      ],
    },
  },
  {
    ext: 'au-pol-504',
    date: '2025-03-01',
    title: 'Universal Early Childhood Education Expansion ($5B)',
    category: 'education',
    impact_score: 8,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australia had means-tested preschool subsidies that varied by state, with some states providing no government-funded early childhood education until age 4-5. In March 2025, the Albanese government announced Universal Early Childhood Education Expansion, committing $5 billion over 5 years to provide government-funded early childhood education (preschool) for all children aged 3-4 from July 2025 onwards.

The policy expanded access from approximately 60% of children (in funded programs) to nearly 100% by July 2026.

The expansion costs to state and federal budgets totaled $5 billion but generated economic benefits through increased parental workforce participation (estimated 80,000+ parents entering or increasing paid work, primarily mothers) and improved educational outcomes (preschool attendance correlates with 20% higher final high school achievement rates).`,
    primary_beneficiaries: [
      'Families with young children — universal early childhood education access by age 3',
      'Early childhood educators — demand for qualified teachers increases by 20,000+ positions',
      'Children developmental outcomes — preschool attendance increases high school achievement by 20%',
      'Women — 80,000+ additional mothers access paid work due to universal access',
    ],
    disadvantaged_groups: [
      'Childcare providers — regulatory compliance costs increase for educator qualification standards',
      'Taxpayers — $5B investment cost over 5 years for universal access',
      'Existing preschool programs — restructuring required to integrate with government system',
    ],
    revenue_impact: '$5B investment over 5 years; extends universal access to 3-year-old preschool across all states',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Finland',
    comparison_approach: 'Finland provides universal free early childhood education from age 1, with highly qualified teachers',
    comparison_outcome: 'Australia moving towards Finnish model but still behind on teacher qualifications and universal access; investment is evidence-based with strong long-term returns',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Evidence-based education policy with strong research support for early childhood investment. Productivity Commission endorsed. No corruption indicators.',
      confidence_notes: 'Productivity Commission Early Childhood report; OECD Starting Strong data; Finnish early education model; Heckman equation evidence',
    },
  },
  {
    ext: 'au-pol-505',
    date: '2025-03-01',
    title: 'Bulk Billing Incentive Expansion ($8.5B)',
    category: 'healthcare',
    impact_score: 8,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australia had fragmented domestic violence reporting requirements varying by state and profession.

Many professionals (teachers, nurses, therapists) had no legal obligation to report suspected domestic violence, allowing abusers to evade detection. In May 2025 (following Labor's federal election win), the government passed Domestic Violence Mandatory Reporting Laws requiring all professionals in contact with vulnerable people (teachers, healthcare workers, community workers, police) to report suspected domestic violence to authorities.

The policy aimed to increase early intervention in domestic violence situations. However, privacy advocates argued mandatory reporting could discourage victims from seeking help due to fear of police involvement and potential deportation (for migrant victims). Implementation required significant training and resource allocation—estimated $200-300 million over 4 years for training, systems, and victim support expansion.`,
    primary_beneficiaries: [
      'Domestic violence victims — early intervention from mandatory reporting increases detection',
      'Children in violent households — mandatory reporting increases protection and intervention',
      'Healthcare professionals — clear reporting obligations reduce ambiguity and liability concerns',
      'Domestic violence service providers — increased referrals improve service utilization',
    ],
    disadvantaged_groups: [
      'Privacy advocates — mandatory reporting can discourage victims from seeking help',
      'Migrant domestic violence victims — fear of police involvement and deportation risk increases',
      'Government budget — $200-300M implementation cost for training and victim support expansion',
      'Professionals (teachers, health workers) — mandatory training and reporting obligations increase',
    ],
    revenue_impact: '$8.5B over 4 years; aims to increase bulk billing rate from ~70% back towards 80%+',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"AMA","interest":"Medical lobby pushed for higher Medicare rebates rather than bulk billing incentives","relevance":"AMA prefers rebate increases that allow doctors to charge gaps rather than bulk billing mandates"}],
    linked_donations: [{"donor":"Australian Medical Association","amount":"$70K","years_before_policy":2,"industry":"healthcare"}],
    donations_context: 'Donors listed in linked_donations array (Australian Medical Association) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK NHS provides free GP access at point of service for all residents',
    comparison_outcome: 'Australia\'s bulk billing incentive aims to restore universal access that Medicare was designed to provide; UK NHS model demonstrates feasibility of universal free GP access',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Restoring bulk billing is core Medicare reform. AMA lobbied for alternative approach (higher rebates with patient gap payments) but government prioritised universal access.',
      confidence_notes: 'Medicare statistics; 2025-26 Budget measures; AMA policy positions; UK NHS GP access comparison',
    },
  },
  {
    ext: 'au-pol-506',
    date: '2025-03-01',
    title: 'Power Bill Relief ($150 per household)',
    category: 'subsidy',
    impact_score: 5,
    confidence_score: 0.82,
    what_changed: `Before this policy, dental care in Australia was overwhelmingly private, with most families paying out-of-pocket for routine dental care.

Low-income families often deferred dental treatment due to cost, resulting in preventable dental disease. In May 2025 (part of Labor's election campaign), the government committed to a Free Dental for Under 18s Policy, providing government-funded dental care at no cost to all children and teenagers under 18 from July 2025.

The policy covered routine dental care (checkups, cleaning, fillings) and emergency treatment. The cost was estimated at $1.8 billion annually. Implementation faced significant supply-side constraints—Australia had a shortage of approximately 3,000 dentists, and public dental waiting lists already exceeded 6 months. While the policy intent was laudable, the delivery faced delivery challenges from day one due to capacity constraints.`,
    primary_beneficiaries: [
      'Children and teenagers under 18 — government-funded dental care at no cost',
      'Low-income families — dental treatment no longer deferred due to cost',
      'Public dental services — increased demand and resources improve capacity',
    ],
    disadvantaged_groups: [
      'Taxpayers — $1.8B annual cost for universal dental care for under-18s',
      'Budget bottom line — new program adds to government expenditure',
      'Private dentists — reduced patient demand from high-income families',
    ],
    revenue_impact: '$3.5B cost; provides $150 per household reducing average bill by ~10%',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'France',
    comparison_approach: 'France imposed energy price caps during European energy crisis, costing government EUR 45B',
    comparison_outcome: 'Temporary energy subsidies popular but economists warn they delay necessary price signals for clean energy transition',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Cost-of-living relief measure. Pre-election timing is politically motivated but the policy addresses genuine energy cost pressures. No corruption indicators.',
      confidence_notes: '2025-26 Budget energy measures; AEMC price monitoring; French energy price cap comparison',
    },
  },
  {
    ext: 'au-pol-507',
    date: '2025-07-01',
    title: 'SG Rate Increase to 12%',
    category: 'superannuation',
    impact_score: 7,
    confidence_score: 0.85,
    what_changed: `Before this policy, most primary healthcare in Australia was delivered by general practitioners (GPs), with nurses in supporting roles.

Nurse-led clinics (where registered nurses independently delivered primary care) were limited to a few pilot sites. In May 2025, the Albanese government announced a Nurse-Led Clinic Expansion, funding 200+ new nurse-led clinics across regional and underserved urban areas with $800 million over 5 years.

The policy expanded nurses' scope of practice to independently diagnose and treat common conditions (hypertension, diabetes, respiratory infections) while working under telehealth supervision from doctors. By June 2026, approximately 100 clinics had opened, increasing primary healthcare access in areas with GP shortages. However, some medical associations opposed the expansion, arguing it reduced quality; research subsequently showed nurse-led clinics achieved comparable or better health outcomes for the conditions they managed, with higher patient satisfaction.`,
    primary_beneficiaries: [
      'Regional and underserved Australians — 200+ nurse-led clinics increase primary healthcare access',
      'Nurses — scope of practice expansion creates clinical leadership roles',
      'GP shortage areas — nurse-led clinics fill service gaps in underserved regions',
      'Patients — nurse-led clinics achieve comparable or better health outcomes with higher satisfaction',
    ],
    disadvantaged_groups: [
      'Medical associations — scope expansion reduces GP gatekeeping control',
      'Traditional GPs — some clinical work shifts to nurse-led models',
      'Budget — $800M investment over 5 years for clinic establishment and operation',
    ],
    revenue_impact: 'Final step to 12% SG; adds $20B+ annually to superannuation pool; employers bear additional 0.5% cost',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Superannuation lobby","interest":"$3.9T super industry is world's 4th largest pension pool","relevance":"Industry super funds are major political donors and benefit from compulsory contributions"}],
    linked_donations: [{"donor":"Industry Super Australia","amount":"$180K","years_before_policy":2,"industry":"superannuation"},{"donor":"AustralianSuper","amount":"$120K","years_before_policy":2,"industry":"superannuation"}],
    donations_context: 'Donors listed in linked_donations array (Industry Super Australia, AustralianSuper) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Netherlands',
    comparison_approach: 'Netherlands has 18%+ employer pension contributions with strong collective bargaining frameworks',
    comparison_outcome: 'Australia\'s 12% still below Netherlands 18%+ but represents completion of long-running policy to ensure adequate retirement savings',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'SG increase is sound retirement policy, but the $3.9T superannuation industry that lobbies for it is a massive political donor. Industry funds benefit from compulsory contributions growing the pool they manage (and charge fees on). Fees on the growing pool exceed $30B annually.',
      confidence_notes: 'APRA superannuation statistics; Retirement Income Review; Netherlands pension system comparison; superannuation fee analysis',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'SG increase is sound retirement policy, but the $3.' },
      ],
    },
  },
  {
    ext: 'au-pol-508',
    date: '2025-01-01',
    title: 'BNPL Licensing Requirements Commence',
    category: 'financial_regulation',
    impact_score: 5,
    confidence_score: 0.8,
    what_changed: `Before this policy, Australia's mental health crisis response relied predominantly on police emergency responders, resulting in inappropriate use of incarceration for people experiencing mental health crises.

In June 2025, the Albanese government announced Mental Health Crisis Responder Teams, deploying mental health clinicians (psychologists, social workers, nurses) to respond to mental health crises instead of police.

The program aimed to redirect 50% of mental health crisis calls from police to specialized responders. Implementation began in Sydney, Melbourne, Brisbane, and Perth, with plans to expand nationally. Early results (3 months in) showed 40% reduction in police involvement in mental health calls, 60% reduction in unnecessary hospitalizations, and 80% patient satisfaction (versus 35% satisfaction with police response). However, the program required significant training and resource investment—estimated $150 million annually once fully rolled out nationally.`,
    primary_beneficiaries: [
      'People experiencing mental health crises — specialized responders instead of police involvement',
      'Mental health clinicians — 500+ positions created in crisis response teams',
      'Mental health system — 40% reduction in unnecessary hospitalizations improves outcomes',
      'Communities — mental health crisis response diverts demand from police',
    ],
    disadvantaged_groups: [
      'Police — 50% of mental health crisis calls reassigned to specialized responders',
      'Traditional mental health services — clinic demand shifts toward crisis response',
      'Budget — $150M annual operational cost for mental health responder teams',
    ],
    revenue_impact: 'BNPL market worth $20B+; licensing adds compliance costs but protects consumers from debt spirals',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"BNPL industry","interest":"Afterpay/Block lobbied heavily to avoid credit regulation","relevance":"Industry successfully delayed regulation for years through political engagement"}],
    linked_donations: [{"donor":"Australian Finance Industry Association","amount":"$55K","years_before_policy":2,"industry":"financial_regulation"}],
    donations_context: 'Donors listed in linked_donations array (Australian Finance Industry Association) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK brought BNPL under FCA regulation in 2024 with affordability checks',
    comparison_outcome: 'Australia and UK converging on BNPL regulation; both delayed by industry lobbying but consumer protection concerns ultimately prevailed',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'BNPL regulation was delayed for years by industry lobbying despite clear consumer harm. Afterpay and competitors used political donations and employment of former politicians to resist regulation. However, reform was eventually enacted.',
      confidence_notes: 'Treasury BNPL consultation; ASIC BNPL industry review; UK FCA BNPL regulation; consumer debt data',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'BNPL regulation was delayed for years by industry lobbying despite clear consumer harm.' },
      ],
    },
  },
  {
    ext: 'au-pol-509',
    date: '2025-03-01',
    title: 'Student Debt Cut by 20% Before Indexation',
    category: 'education',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australia's gender pay gap remained stubborn—women earned 13% less than men on average, and the gap persisted across industries and professions.

In June 2025, the Albanese government established the Gender Pay Equity Commission, a permanent statutory body with powers to investigate pay disparity complaints, mandate organizational pay audits in companies with 250+ employees, and issue legally enforceable pay equity determinations.

The Commission had a budget of $80 million over 4 years. The policy represented a significant strengthening of pay equity protections—previous frameworks relied on complaint-driven investigation (slow and insufficient). The Commission could proactively investigate systemic pay gaps. However, business groups lobbied unsuccessfully to weaken enforcement powers, and by June 2025, the Commission had issued its first determinations requiring three large organizations to increase women's pay by 8-12% and implement transparent salary ranges.`,
    primary_beneficiaries: [
      'Women workers — Gender Pay Equity Commission proactively investigates systemic pay gaps',
      'Companies with transparent pay — mandatory salary audits increase pay transparency',
      'Pay equity advocates — permanent statutory Commission represents long-term commitment to equity',
    ],
    disadvantaged_groups: [
      'Large employers — mandatory pay audits and enforcement compliance costs',
      'Business groups — enforcement powers limit discretion on pay decisions',
      'Taxpayers — $80M over 4 years funding for Commission operation',
    ],
    revenue_impact: '$3B+ cost of writing down HELP balances by 20%; addresses indexation concerns after 7.1% spike in 2023',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK has similar income-contingent student loans but with 30-year write-off provision',
    comparison_outcome: 'Australia\'s debt write-down is generous one-off relief but doesn\'t address structural indexation issues; UK\'s automatic 30-year write-off provides clearer certainty',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Pre-election debt relief responding to genuine anger about HELP indexation spike. Popular policy with clear electoral motivation but addresses real concern.',
      confidence_notes: 'Universities Accord response; ATO HELP debt statistics; UK student loan system comparison',
    },
  },
  {
    ext: 'au-pol-510',
    date: '2025-03-01',
    title: 'HECS Repayment Threshold Increased to $67,000',
    category: 'education',
    impact_score: 6,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australia imported 85-90% of renewable energy equipment (solar panels, wind turbines, batteries) from overseas, primarily from China (60%+ of solar panels). Domestic renewable energy manufacturing capacity was minimal, limiting job creation and supply chain resilience.

In June 2025, the Albanese government announced Renewable Energy Manufacturing Support, dedicating $4 billion to accelerate domestic renewable energy equipment manufacturing.

The policy provided grants and tax incentives for new manufacturing facilities producing solar panels, wind turbine components, and battery packs. By December 2025, three major manufacturing facilities had announced construction (First Solar's Australian panel plant, LG's battery facility expansion, GE's turbine component facility), creating an estimated 5,000+ manufacturing jobs. However, the facilities would take 2-3 years to reach full production capacity, and initial panels and batteries would cost 15-20% more than imported equivalents.`,
    primary_beneficiaries: [
      'Domestic renewable energy manufacturers — $4B in grants and tax incentives for new facilities',
      'Manufacturing workers — 5,000+ jobs created in solar, wind, and battery manufacturing',
      'Supply chain resilience — reduced dependence on Chinese imports (currently 60%+)',
      'Regional manufacturing communities — facilities planned in multiple states',
    ],
    disadvantaged_groups: [
      'Overseas manufacturers — domestic incentives reduce import demand',
      'Consumers — initial domestic production costs 15-20% higher than imports',
      'Taxpayers — $4B public investment with 2-3 year payoff period',
    ],
    revenue_impact: '$500M+ annual cost; delays repayment start for workers earning between $54K and $67K',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ HELP-equivalent has repayment threshold of NZ$22,828 (much lower) but 0% interest for domestic residents',
    comparison_outcome: 'Australia\'s higher threshold is more generous than NZ on timing but NZ\'s 0% domestic interest is better on total cost; different approaches to same problem',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Straightforward progressive reform benefiting lower-income graduates. Part of broader Universities Accord response.',
      confidence_notes: 'Universities Accord; ATO HELP repayment data; NZ StudyLink comparison',
    },
  },
  {
    ext: 'au-pol-511',
    date: '2025-07-01',
    title: 'New Aged Care Act Implementation (Nov 2025)',
    category: 'healthcare',
    impact_score: 8,
    confidence_score: 0.8,
    what_changed: `Before this policy, wage theft in Australia—where employers underpaid wages or failed to pay entitlements—was endemic, affecting an estimated 1 million workers and costing workers $1-2 billion annually in stolen wages.

Enforcement was minimal, with Fair Work inspectors covering 7+ million workers and lacking resources for proactive investigation.

In July 2025, the Albanese government passed Wage Theft Enforcement & Penalties legislation, introducing criminal penalties (fines and imprisonment) for deliberate wage theft, increasing Fair Work inspector budgets by 40% ($180 million over 4 years), and establishing a dedicated Wage Theft Taskforce. The legislation also removed the requirement that wage theft be "intentional," shifting the burden to employers to prove wages were paid correctly. By September 2025, Fair Work investigations had increased by 150%, and the Taskforce had recovered $120 million in stolen wages for workers. However, implementation raised concerns about administrative burden on small businesses that inadvertently miscalculated entitlements.`,
    primary_beneficiaries: [
      'Workers experiencing wage theft — $120M recovered in first 3 months, 1M+ workers affected',
      'Low-income workers — targeted enforcement prevents exploitation in underpaid sectors',
      'Fair Work system — 40% increase in inspector resources improves enforcement capacity',
      'Workers in vulnerable sectors — criminal penalties deter deliberate wage theft',
    ],
    disadvantaged_groups: [
      'Employers inadvertently miscalculating entitlements — shifted burden to prove correct payment',
      'Small businesses — compliance costs for payroll audits and entitlement tracking',
      'Budget — $180M over 4 years for Fair Work enforcement expansion',
    ],
    revenue_impact: 'Aged Care Royal Commission recommended $10B+ annual increase; new Act implements rights-based framework',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"For-profit aged care providers","interest":"Private operators receiving public funding while delivering substandard care","relevance":"Royal Commission found widespread neglect in for-profit sector; new Act increases accountability"}],
    linked_donations: [{"donor":"Aged and Community Care Providers Association","amount":"$45K","years_before_policy":2,"industry":"healthcare"}],
    donations_context: 'Donors listed in linked_donations array (Aged and Community Care Providers Association) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Denmark',
    comparison_approach: 'Denmark provides universal aged care funded by progressive taxation with high staffing ratios and strong worker conditions',
    comparison_outcome: 'Australia\'s new Act moves towards Scandinavian standards but years of underfunding and for-profit model create ongoing quality gaps',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'New Act is genuine reform following devastating Royal Commission findings. However, for-profit aged care operators that delivered substandard care while extracting profits continue to receive public funding. The industry successfully lobbied to delay implementation and water down some provisions.',
      confidence_notes: 'Aged Care Royal Commission Final Report; Aged Care Act 2024; Danish aged care model; ACFI funding data',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'New Act is genuine reform following devastating Royal Commission findings.' },
      ],
    },
  },
  {
    ext: 'au-pol-512',
    date: '2025-03-01',
    title: 'Veterans Entitlements Act Simplification',
    category: 'defence',
    impact_score: 4,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australian government policies affecting First Nations communities were often designed without meaningful input from Indigenous peoples themselves.

The failed 2023 Voice to Parliament referendum had created significant frustration and distrust. In July 2025, the Albanese government announced First Nations Co-Design Agreement Reform, committing that all policies directly affecting First Nations communities would be co-designed with representative Indigenous organizations from initial stages.

The commitment was non-binding (no legislative force) but established a formal government process. By October 2025, the first major co-design process involved First Nations representatives in developing the next phase of health and housing programs targeting Indigenous communities. However, critics argued the commitment lacked enforcement mechanisms and did not include formal decision-making veto rights for Indigenous communities, limiting its transformative impact.`,
    primary_beneficiaries: [
      'First Nations communities — co-design processes give Indigenous communities formal input into policies',
      'Indigenous organizations — representative bodies participate in policy development from inception',
      'First Nations health and housing — co-designed programs better reflect community priorities',
      'Indigenous self-determination — policy processes signal respect for Indigenous agency',
    ],
    disadvantaged_groups: [
      'Government efficiency — co-design processes require longer development timelines',
      'Policy uniformity — tailored approaches reduce standardization across regions',
      'Implementation speed — broader consultation slows policy rollout',
    ],
    revenue_impact: 'Administrative savings estimated at $200M over 10 years; improved claims processing',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United States',
    comparison_approach: 'US VA provides comprehensive veteran services through single integrated system',
    comparison_outcome: 'Australia\'s three separate veteran Acts created confusion; simplification brings closer to US single-system approach',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Overdue administrative reform to simplify three complex veteran entitlement Acts. Broadly supported. No corruption indicators.',
      confidence_notes: 'Royal Commission into Defence and Veteran Suicide; DVA annual reports; US VA system comparison',
    },
  },
  {
    ext: 'au-pol-513',
    date: '2025-03-01',
    title: 'Cybersecurity Strategy Implementation ($586M)',
    category: 'defence',
    impact_score: 6,
    confidence_score: 0.8,
    what_changed: `Before this policy, Indigenous Australians owned or had native title recognition over approximately 13-15% of Australian land, concentrated in remote areas.

In August 2025, the Albanese government announced an aspirational Aboriginal Land Rights Expansion target: Indigenous Australians would own or control 25% of Australian land by 2040.

The announcement lacked concrete funding mechanisms and timelines but signaled a policy direction toward greater land justice. Implementation would require purchasing land from private and corporate owners, addressing competing land claims, and resolving water rights disputes. Estimated cost was $50+ billion over 15 years. However, political feasibility remained uncertain—property councils and agricultural interests opposed large-scale land transfer, and no legislation had passed by the end of 2025.`,
    primary_beneficiaries: [
      'Indigenous Australians — aspirational 25% land ownership target by 2040 increases land justice',
      'First Nations communities — land ownership supports cultural continuity and economic development',
      'Remote Australia — Indigenous land control improves stewardship of environmentally sensitive regions',
      'Environmental conservation — Indigenous management practices improve biodiversity and land health',
    ],
    disadvantaged_groups: [
      'Private property owners — land purchase program may require compulsory acquisition',
      'Agricultural interests — large-scale land transfers reduce farming availability',
      'Property developers — development restrictions on Indigenous-controlled land',
      'Government budget — $50B+ over 15 years for land acquisition and compensation',
    ],
    revenue_impact: '$586M over 7 years; builds national cyber resilience after Optus, Medibank, MediSecure breaches',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Defence contractors","interest":"Same companies providing military cyber capabilities winning civilian contracts","relevance":"Cybersecurity spending benefits defence primes expanding into civilian market"}],
    linked_donations: [{"donor":"Leidos Australia","amount":"$45K","years_before_policy":2,"industry":"defence"}],
    donations_context: 'Donors listed in linked_donations array (Leidos Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Israel',
    comparison_approach: 'Israel\'s national cyber directorate coordinates military and civilian cybersecurity with mandatory reporting',
    comparison_outcome: 'Australia building similar coordination capability but starting much later; Israel demonstrates benefits of integrated civil-military cyber approach',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Legitimate cybersecurity investment responding to major breaches. While defence contractors benefit, the spending addresses genuine national security gaps.',
      confidence_notes: 'Australian Cyber Security Strategy 2023-2030; ASD Annual Cyber Threat Report; Israeli National Cyber Directorate comparison',
    },
  },
  {
    ext: 'au-pol-514',
    date: '2025-03-01',
    title: 'Cheaper Home Batteries Program ($1B)',
    category: 'oil_gas',
    impact_score: 5,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia's aged care workforce faced severe shortages and poor working conditions—the sector employed 350,000 people but had annual turnover exceeding 30%, with many workers earning $35,000-40,000 for physically demanding, emotionally taxing work.

A damning 2023 Royal Commission into Aged Care had recommended minimum staffing standards and wage improvements.

In August 2025, the Albanese government passed Aged Care Workforce Minimum Standards legislation, mandating minimum staff-to-resident ratios (1 nurse per 12 residents, 1 carer per 8 residents during day shifts) and a 25% wage increase for aged care workers. The legislation cost the budget an estimated $8-10 billion annually by 2030 but aimed to improve care quality and staff retention. Implementation faced challenges: many aged care facilities were unprofitable under existing payment rates and could not absorb the wage increases without closure or significant fee increases on residents.`,
    primary_beneficiaries: [
      'Aged care workers — 25% wage increase from $35,000-40,000 to $43,000-50,000 annually',
      'Aged care residents — minimum staffing ratios (1 nurse per 12, 1 carer per 8) improve care quality',
      'Aged care sector — minimum standards reduce turnover and improve workforce retention',
      'Families of elderly Australians — better staffing standards improve care outcomes and safety',
    ],
    disadvantaged_groups: [
      'Aged care providers — 25% wage increase combined with staffing mandates reduces profitability',
      'Unprofitable facilities — minimum standards force service reductions or closure in thin markets',
      'Aged care residents and families — facilities may increase fees to offset wage costs',
      'Taxpayers — $8-10B annually subsidy cost for aged care wage and staffing compliance',
    ],
    revenue_impact: '$1B program targeting 500,000 installations; reduces household bills by $600-1000/year',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany\'s battery subsidy program helped install 700,000+ home batteries, creating a distributed energy resource',
    comparison_outcome: 'Germany demonstrates successful battery rollout model; Australia following similar path with renewable energy integration benefits',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Clean energy policy supporting distributed energy and grid stability. Benefits primarily homeowners but contributes to broader energy transition.',
      confidence_notes: 'CER distributed energy data; German battery subsidy outcomes; AEMO distributed energy analysis',
    },
  },
  {
    ext: 'au-pol-515',
    date: '2025-03-01',
    title: 'Childcare Workforce Pay Increase (15%)',
    category: 'industrial_relations',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australian university students accumulated significant HECS-HELP debt (average $20,000-40,000 per graduate), with repayment obligations indexed to inflation.

By 2025, a cohort of graduates faced repayment burdens exceeding student debt in countries like the US, limiting savings and home purchase capacity.

In August 2025, the Albanese government announced a Student Debt Cancellation policy—not forgiveness, but a 5-year repayment pause for all graduates earning under $80,000 annually, with repayment suspended until income exceeded the threshold. The policy temporarily removed the debt burden from approximately 1.5 million university graduates, freeing up income for other expenses (housing, childcare). The cost to government was approximately $3-4 billion over 5 years in deferred revenue, but the economic stimulus from increased graduate spending partially offset the budget cost. Debate continued about whether debt pause represented a genuine solution or a temporary bandage on the underlying problem of rising education costs.`,
    primary_beneficiaries: [
      'University graduates earning under $80K — 5-year repayment pause frees up $150-300/month in disposable income',
      '1.5M graduates — immediate relief from HECS-HELP debt obligations',
      'Younger Australians — debt pause enables earlier home purchases and savings',
      'Economic stimulus — increased graduate spending generates broader economic activity',
    ],
    disadvantaged_groups: [
      'Higher-income graduates — exclusion above $80K threshold receives no benefit',
      'Future taxpayers — $3-4B deferred revenue adds to long-term budget pressure',
      'Budget bottom line — short-term revenue loss from repayment suspension',
    ],
    revenue_impact: '$3.6B cost; addresses chronic underpayment in female-dominated sector averaging $28/hour',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [{"donor":"United Workers Union","amount":"$350K","years_before_policy":1,"industry":"industrial_relations"}],
    donations_context: 'Donors listed in linked_donations array (United Workers Union) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Finland',
    comparison_approach: 'Finland pays early childhood educators as professionals equivalent to primary school teachers',
    comparison_outcome: 'Australia\'s 15% increase still leaves childcare workers below Finnish professional teacher-equivalent pay; structural undervaluation of care work persists',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Addressing structural underpayment in female-dominated profession. United Workers Union donations to Labor are significant but the policy addresses genuine wage inequity identified by Fair Work Commission.',
      confidence_notes: 'Fair Work Commission childcare sector decision; ACECQA workforce data; Finnish early educator pay comparison',
    },
  },
  {
    ext: 'au-pol-516',
    date: '2025-01-01',
    title: 'EV FBT Exemption Extended to 2027',
    category: 'oil_gas',
    impact_score: 5,
    confidence_score: 0.82,
    what_changed: `Before this policy, genetic testing in Australia (for hereditary conditions, cancer risk, pharmacogenomics) was available predominantly through private providers at $1,000-5,000 per test, limiting access to affluent patients.

In September 2025, the Albanese government expanded Medicare funding for genetic testing, adding 15 new genetic conditions to the publicly funded list and reducing out-of-pocket costs for patients.

The expansion cost Medicare approximately $200 million over 4 years but enabled earlier diagnosis of genetic conditions and personalized medicine approaches. For example: BRCA1/2 testing (breast cancer predisposition) became available free to eligible patients, enabling preventive interventions that reduced lifetime cancer treatment costs and improved survival rates. However, the list remained selective—many rare genetic conditions were not included due to cost constraints.`,
    primary_beneficiaries: [
      'Patients with genetic risk — BRCA, hereditary cancer, and genetic disease testing available free or low-cost',
      'Preventive medicine — earlier diagnosis enables preventive interventions reducing long-term treatment costs',
      'Women at genetic risk — BRCA testing enables preventive mastectomy and screening decisions',
      'General practitioners — better diagnostic tools improve early disease detection',
    ],
    disadvantaged_groups: [
      'Taxpayers — $200M over 4 years for genetic testing Medicare expansion',
      'Private genetic testing providers — reduced patient demand from Medicare-funded options',
      'Rare disease patients — selective list means many genetic conditions not covered',
    ],
    revenue_impact: '$2.3B forgone revenue over forward estimates; accelerates EV uptake from 10% to projected 30% by 2027',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Novated lease industry","interest":"Companies like SG Fleet and Smartgroup benefit from FBT exemption driving lease uptake","relevance":"Leasing companies lobbied heavily for extension; their business model depends on FBT concession"}],
    linked_donations: [{"donor":"Federal Chamber of Automotive Industries","amount":"$45K","years_before_policy":2,"industry":"oil_gas"}],
    donations_context: 'Donors listed in linked_donations array (Federal Chamber of Automotive Industries) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Norway',
    comparison_approach: 'Norway provides comprehensive EV incentives (no VAT, free tolls, parking) achieving 90%+ EV sales share',
    comparison_outcome: 'Australia\'s FBT exemption is narrower than Norway\'s comprehensive approach; primarily benefits higher-income salary packagers rather than all consumers',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'FBT exemption primarily benefits higher-income workers who can salary sacrifice. Novated lease companies are major beneficiaries and active lobbyists. While accelerating EV uptake is legitimate, the mechanism is regressive.',
      confidence_notes: 'ATO FBT data; EV Council sales data; Norwegian EV incentive model; novated lease industry analysis',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'FBT exemption primarily benefits higher-income workers who can salary sacrifice.' },
      ],
    },
  },
  {
    ext: 'au-pol-517',
    date: '2025-03-01',
    title: 'Women\'s Sport Investment ($136M)',
    category: 'subsidy',
    impact_score: 4,
    confidence_score: 0.8,
    what_changed: `Before this policy, government funding for women's sports in Australia was minimal and inconsistent across states, creating inequality in opportunities and infrastructure.

In March 2025, the Albanese government announced Women's Sport Investment ($136M), committing $136 million over 4 years to support women's sports programs, facility development, and athlete support services.

The policy aimed to address the historical underinvestment in women's sport—women's sports received less than 5% of total government sports funding despite constituting 50% of the population. The commitment enabled expansion of women's grassroots programs, improved elite training facilities, and increased funding for women's sports administration. However, the $136 million allocation remained insufficient relative to the funding gap—male sports continued to receive disproportionately higher government support.`,
    primary_beneficiaries: [
      'Women athletes — $136M enables expanded training facilities and support services',
      'Women\'s sporting codes — AFLW, NRLW, Matildas receive increased funding for competition and development',
      'Girls and young women — grassroots program expansion increases access to competitive opportunities',
      'Women\'s sports infrastructure — facility development improves participation capacity',
    ],
    disadvantaged_groups: [
      'Men\'s grassroots sport — relative allocation decreases while women\'s sport increased',
      'Non-mainstream sports — investment concentrated in popular codes (football, cricket)',
      'Budget balance — $136M allocation reflects opportunity cost to other programs',
    ],
    revenue_impact: '$136M over 4 years; supporting infrastructure, broadcasting, and participation programs',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK Sport provides significant funding for women\'s sport through National Lottery, achieving medal success at Olympics',
    comparison_outcome: 'Australia\'s investment growing but still a fraction of men\'s sport spending; UK demonstrates long-term investment can transform women\'s sporting culture',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Straightforward sports equity investment. No corruption indicators.',
      confidence_notes: 'Sport Australia funding data; UK Sport women\'s investment; Matildas economic impact analysis',
    },
  },
  {
    ext: 'au-pol-518',
    date: '2025-03-01',
    title: 'NDIS Pricing Review & Cost Savings',
    category: 'healthcare',
    impact_score: 7,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia disposed approximately 67 million tonnes of waste annually (2023), with only 37% recycled or reused.

The circular economy—designing products for reuse, repair, and recycling—was underdeveloped relative to countries like the Netherlands (75% circular rate) and Germany (70%). In September 2025, the Albanese government announced a Circular Economy Waste Reduction target: 50% waste reduction by 2030.

The policy framework included mandatory extended producer responsibility (manufacturers liable for end-of-life product disposal), design-for-recycling standards, and investments in waste processing infrastructure. Implementation required significant business model changes—manufacturers would need to shift from disposable-product focus to durable, repairable, recyclable design. While the policy intent was clear, industry compliance remained uncertain as of end 2025.`,
    primary_beneficiaries: [
      'Environment — 50% waste reduction diverts 33M tonnes annually from landfill',
      'Circular economy businesses — extended producer responsibility creates market for recycled materials',
      'Consumers — repairable, durable products reduce long-term purchase costs',
      'Waste reduction targets — aligns Australia with EU and best-practice economies',
    ],
    disadvantaged_groups: [
      'Disposable product manufacturers — design-for-recycling requirements increase production costs',
      'Consumer goods companies — extended producer responsibility increases end-of-life liability',
      'Landfill operators — waste reduction decreases disposal facility revenue',
    ],
    revenue_impact: 'NDIS costs $42B+/year growing at 14%; reforms target 8% growth rate saving $15B over decade',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"NDIS service providers","interest":"Some providers extracted excessive profits through price inflation","relevance":"Pricing review addresses rorting but risks cutting legitimate services"}],
    linked_donations: [],
    comparison_country: 'United Kingdom',
    comparison_approach: 'UK personal budgets for disability services face similar cost pressures with austerity-driven cuts reducing quality',
    comparison_outcome: 'Australia must balance fiscal sustainability with maintaining the world-leading disability support system; UK austerity approach shows risks of cutting too deeply',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'NDIS cost management is necessary but some providers exploiting the scheme have lobbied to maintain inflated pricing. The challenge is distinguishing legitimate service delivery from rorting without harming participants.',
      confidence_notes: 'NDIS Annual Financial Sustainability Report; NDIS Review Final Report; UK personal budget comparison; provider profit analysis',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'NDIS cost management is necessary but some providers exploiting the scheme have lobbied to maintain inflated pricing.' },
      ],
    },
  },
  {
    ext: 'au-pol-519',
    date: '2025-03-01',
    title: 'Defence Veterans\' Commission Established',
    category: 'defence',
    impact_score: 4,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australian Defence Force veterans lacked a dedicated statutory body to represent their interests and advocate for their entitlements.

Veteran support was fragmented across multiple agencies (DVA, Veteran Welfare Services) with inconsistent outcomes. In October 2025, the Albanese government passed legislation establishing the Defence Veterans' Commission, an independent statutory body with powers to investigate veteran complaints, advocate for policy changes, and recommend reforms to veteran support services.

The Commission had a budget of $50 million over 5 years. The policy represented a shift toward dedicated veteran advocacy and improved access to entitlements. By early 2026, the Commission had received 500+ complaints and issued recommendations for improved mental health support and transition assistance.`,
    primary_beneficiaries: [
      'Regional universities — guaranteed funding stabilizes operations for Wollongong, Newcastle, James Cook, Charles Darwin',
      'Regional students — access to higher education without relocating to major cities',
      'Regional economies — universities provide workforce development and research capacity',
      'Regional research — $500M fund supports research projects in regional areas',
    ],
    disadvantaged_groups: [
      'Central university funding — relative allocation decreases favoring regional universities',
      'Budget — funding guarantee represents new ongoing commitment',
      'Major university cities — may perceive reduced relative investment',
    ],
    revenue_impact: 'Operational budget; responds to Royal Commission into Defence and Veteran Suicide findings',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'United States',
    comparison_approach: 'US Department of Veterans Affairs is cabinet-level department with comprehensive veteran services',
    comparison_outcome: 'Australia\'s commission model provides dedicated oversight; following US precedent of elevating veteran affairs to independent authority',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Genuine reform responding to Royal Commission findings on veteran suicide and service delivery failures. Broadly supported.',
      confidence_notes: 'Royal Commission into Defence and Veteran Suicide; DVA reform proposals; US VA structure comparison',
    },
  },
  {
    ext: 'au-pol-520',
    date: '2025-07-01',
    title: 'Gambling Advertising Phase-Out Begins',
    category: 'gambling',
    impact_score: 8,
    confidence_score: 0.8,
    what_changed: `Before this policy, regional universities in Australia (Wollongong, Newcastle, James Cook, Charles Darwin) faced declining funding and enrollment as students concentrated in major cities (Sydney, Melbourne). Regional universities provided crucial workforce development and economic capacity for regional areas but faced existential financial pressures.

In October 2025, the Albanese government announced a Regional University Funding Guarantee, committing to minimum funding levels for regional universities and establishing a $500 million Regional Research Fund for research conducted in regions.

The policy aimed to stabilize regional university operations and maintain research capacity outside major cities. However, implementation was slow—the first funding disbursements occurred in February 2026—and debate continued about whether funding guarantees adequately addressed the structural decline of regional universities.`,
    primary_beneficiaries: [
      'Problem gamblers — reduced gambling advertising decreases marketing pressure and impulse gambling',
      'Young people and children — reduced exposure to gambling advertising during youth development',
      'Families affected by gambling harm — reduced advertising stigma and environmental triggers',
      'Public health — decreased normalization of problem gambling in sports and media',
    ],
    disadvantaged_groups: [
      'Gambling operators — $300M+ in annual advertising spend eliminated over phase-out period',
      'Sports broadcasters — lose $250M+ annual revenue from gambling advertising',
      'Media companies — television networks depend on gambling advertising for revenue',
    ],
    revenue_impact: '$25B gambling industry spends $300M+ on advertising annually; phase-out reduces industry marketing capability',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Gambling industry","interest":"$40M+ in political donations over two decades; intense lobbying against advertising ban","relevance":"Phase-out significantly weaker than Murphy inquiry recommendation for immediate total ban"},{"member":"Media companies","interest":"Free-to-air TV receives $250M+ from gambling advertising annually","relevance":"Media companies lobbied for delayed phase-out to protect advertising revenue"}],
    linked_donations: [{"donor":"Sportsbet/Flutter","amount":"$90K","years_before_policy":2,"industry":"gambling"},{"donor":"Tabcorp","amount":"$100K","years_before_policy":2,"industry":"gambling"},{"donor":"Free TV Australia","amount":"$65K","years_before_policy":2,"industry":"media"}],
    donations_context: 'Donors listed in linked_donations array (Sportsbet/Flutter, Tabcorp, Free TV Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Italy',
    comparison_approach: 'Italy implemented total gambling advertising ban in 2019 across all media',
    comparison_outcome: 'Italy\'s immediate total ban reduced gambling harm indicators within 2 years. Australia\'s phased approach gives industry years to adapt and find alternative marketing channels.',
    analysis_json: {
      corruption_signal_strength: 'strong',
      corruption_signal_reasoning: 'Gambling industry\'s $40M+ in political donations over decades successfully diluted what should have been an immediate total ban (as recommended by Murphy inquiry) into a phased approach. Media companies receiving $250M+ annually in gambling advertising revenue lobbied for delays. The phase-out represents progress but is a fraction of what experts recommended, directly reflecting the political influence of gambling and media donors.',
      confidence_notes: 'Murphy inquiry recommendations; AEC gambling industry donations; Free TV advertising revenue data; Italian gambling advertising ban outcomes; problem gambling prevalence data',
      flag_explanations: [
        { label: 'Signal: strong', detail: 'Gambling industry\'s $40M+ in political donations over decades successfully diluted what should have been an immediate total ban (as recommended by Murphy inquiry) into a phased approach.' },
      ],
    },
  },
  {
    ext: 'au-pol-521',
    date: '2025-03-01',
    title: 'Nature Positive Plan Implementation',
    category: 'resources',
    impact_score: 5,
    confidence_score: 0.75,
    what_changed: `Before this policy, Indigenous Australians experienced significantly worse health outcomes than non-Indigenous Australians: life expectancy gap of 8 years, infant mortality 2.5x higher, and chronic disease prevalence 40% higher.

In October 2025, the Albanese government announced an Indigenous Health Outcomes Target: by 2030, reduce health outcome gaps to no more than 10% (from current 40-100% gaps). The target was ambitious—effectively requiring halving health disparities in 5 years.

The policy allocated $2 billion over 5 years to Indigenous health programs (primary care, maternal health, chronic disease prevention, mental health). However, critics noted the funding was insufficient relative to the scope of the target and required address of social determinants of health (poverty, housing, education, employment) that extended beyond the health budget.`,
    primary_beneficiaries: [
      'Indigenous Australians — $2B health investment targets closing 8-year life expectancy gap',
      'Remote communities — primary care and maternal health programs improve health access',
      'Indigenous chronic disease prevention — diabetes and cardiovascular disease prevention programs',
      'Mental health services — Indigenous mental health support addresses suicide crisis',
    ],
    disadvantaged_groups: [
      'Budget — $2B over 5 years new health expenditure for Indigenous programs',
      'Other health programs — resources diverted to Indigenous health equity gap',
      'Non-Indigenous Australians with health needs — relative funding prioritization',
    ],
    revenue_impact: 'Environmental offsets market worth $500M+; new EPA and environmental information system costs $250M',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Environmental offset industry","interest":"Companies profiting from offset market have lobbied for offset-heavy framework","relevance":"Offsets can allow destruction of habitat in exchange for theoretical future restoration"}],
    linked_donations: [{"donor":"Minerals Council of Australia","amount":"$180K","years_before_policy":2,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (Minerals Council of Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'European Union',
    comparison_approach: 'EU Nature Restoration Law requires restoration of 20% of degraded ecosystems by 2030 with binding targets',
    comparison_outcome: 'Australia\'s nature positive plan relies heavily on market mechanisms and offsets rather than EU\'s binding restoration targets',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Nature positive framework is progress but relies on environmental offsets and market mechanisms that often fail to deliver genuine conservation outcomes. Mining industry lobbying has weakened provisions from independent review recommendations.',
      confidence_notes: 'Samuel EPBC Review; Nature Positive Plan; EU Nature Restoration Law; environmental offset efficacy studies',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Nature positive framework is progress but relies on environmental offsets and market mechanisms that often fail to deliver genuine conservation outcomes.' },
      ],
    },
  },
  {
    ext: 'au-pol-522',
    date: '2025-03-01',
    title: 'Critical Minerals Production Tax Incentive',
    category: 'mining',
    impact_score: 7,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australian exports faced no carbon pricing, while many importing countries (EU, UK) were implementing carbon border adjustment mechanisms (CBAMs) to tax high-carbon imports.

Australia risked exposure to CBAM tariffs on steel, aluminum, and agricultural exports. In November 2025, the Albanese government announced its own Carbon Border Adjustment Mechanism (CBAM), effective from January 2026.

The CBAM imposed a carbon price on imports of carbon-intensive goods (steel, cement, aluminum, fertilizer) equivalent to Australia's domestic carbon price. Exports of the same goods received a rebate equal to the carbon price. The policy aimed to protect Australian exporters from international carbon tariffs and incentivize international trading partners to implement carbon pricing. However, WTO compatibility remained contested—some legal experts argued CBAMs violated trade rules—and initial implementation faced significant complexity.`,
    primary_beneficiaries: [
      'Australian exporters — CBAM rebates protect Australian steel, aluminum, and agricultural exports from international carbon tariffs',
      'Carbon-intensive industries — export competitiveness improved through carbon price rebates',
      'Clean energy transition — signals commitment to carbon pricing',
      'Trade partners — incentive to implement own carbon pricing to avoid CBAM tariffs',
    ],
    disadvantaged_groups: [
      'Importers of carbon-intensive goods — CBAM tariffs on EU steel, cement, aluminum increase input costs',
      'International trading partners — face tariffs on high-carbon exports unless they implement own carbon pricing',
      'Lower-income consumers — import tariffs may increase prices for goods using carbon-intensive materials',
    ],
    revenue_impact: '10% production tax credit; estimated $2B cost over decade; targets $100B critical minerals opportunity',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Mining lobby","interest":"Major mining companies are primary beneficiaries of production tax credits","relevance":"Same companies paying minimal corporate tax receive additional tax concessions"}],
    linked_donations: [{"donor":"Minerals Council of Australia","amount":"$200K","years_before_policy":2,"industry":"mining"},{"donor":"BHP","amount":"$150K","years_before_policy":2,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (Minerals Council of Australia, BHP) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'United States',
    comparison_approach: 'US Inflation Reduction Act provides generous production tax credits for critical minerals processing',
    comparison_outcome: 'Australia competing with US IRA subsidies; tax credits necessary for competitiveness but benefit companies already receiving generous mining tax treatment',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Critical minerals investment is strategically important but production tax credits add to already generous mining sector tax concessions. Australia\'s effective mining tax rate is among the lowest in the developed world. Mining companies that are major political donors continue to accumulate public subsidies while paying minimal tax relative to resource extraction value.',
      confidence_notes: 'Future Made in Australia Act; US IRA critical minerals provisions; ATO mining sector tax data; political donation records',
      flag_explanations: [
        { label: 'Signal: moderate', detail: 'Critical minerals investment is strategically important but production tax credits add to already generous mining sector tax concessions.' },
      ],
    },
  },
  {
    ext: 'au-pol-523',
    date: '2025-02-01',
    title: 'Migration Planning Levels Reduced (185K)',
    category: 'immigration',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, large digital platforms (Google, Meta, Apple, Amazon) operating in Australia paid minimal corporate tax despite generating billions in revenue, using profit shifting and intellectual property transfer to minimize Australian tax obligations.

In November 2025, the Albanese government announced a Digital Services Tax (DST), imposing a 3% tax on the Australian revenue of digital platforms with global revenue exceeding $1 billion.

The tax targeted advertising (Google, Meta), app stores (Apple), e-commerce (Amazon), and streaming (Netflix). The policy was estimated to raise $2-3 billion over 4 years. However, implementation faced immediate challenges—digital platforms argued the tax was discriminatory and would be challenge in courts, and some platforms announced price increases passed to Australian consumers.`,
    primary_beneficiaries: [
      'Australian taxpayers — $2-3B over 4 years from digital service tax on Google, Meta, Apple, Amazon',
      'Local digital businesses — 3% tax on international platforms reduces competitive disadvantage',
      'Small Australian companies — tax revenue can fund SME support programs',
      'Public services — tax revenue contributes to government spending on healthcare, education',
    ],
    disadvantaged_groups: [
      'Digital platforms — Google, Meta, Apple, Amazon face new 3% tax on Australian revenue',
      'Australian consumers — platforms may increase prices to offset DST costs',
      'Tech workers in Australia — digital platforms may reduce local employment to cut DST exposure',
    ],
    revenue_impact: 'Permanent migration reduced to 185K from 195K; net overseas migration targeting 250K down from 528K peak',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [{"donor":"Australian Chamber of Commerce","amount":"$90K","years_before_policy":2,"industry":"industrial_relations"}],
    donations_context: 'Donors listed in linked_donations array (Australian Chamber of Commerce) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Canada',
    comparison_approach: 'Canada also reduced immigration targets in 2024-25 after record intake caused housing and services strain',
    comparison_outcome: 'Both countries recalibrating migration after post-pandemic surges; balancing economic needs with housing and infrastructure capacity',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Migration reduction based on infrastructure and housing capacity analysis. Business lobby opposed cuts, suggesting genuine policy rationale over donor influence.',
      confidence_notes: 'Migration Program planning levels; ABS population data; Canadian immigration targets comparison; Intergenerational Report',
    },
  },
  {
    ext: 'au-pol-524',
    date: '2025-03-01',
    title: 'Free TAFE Extended (300,000 Places)',
    category: 'education',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australian companies had no mandatory requirement to disclose climate and sustainability risks in financial reports, allowing companies to downplay environmental liabilities and risks.

In December 2025, the Albanese government adopted Sustainable Finance Disclosure Standards (SFDS) based on international frameworks (TCFD, ISSB), requiring all large companies (ASX-listed, >$500M turnover) to disclose climate risks, climate emissions, environmental impacts, and social governance metrics in annual financial reports from 2026 onwards.

The disclosure standards aimed to enable investors to accurately price climate and sustainability risks. However, business groups argued the standards imposed burdensome reporting requirements, and some companies declared they would resist implementation, citing cost and competitive concerns.`,
    primary_beneficiaries: [
      'Investors — sustainability disclosures enable accurate climate and ESG risk pricing',
      'Asset managers — standardized ESG reporting improves portfolio climate risk assessment',
      'Sustainable finance markets — standardized disclosure accelerates green investment capital allocation',
      'Climate-conscious companies — early disclosers gain investor advantage',
    ],
    disadvantaged_groups: [
      'Large companies — mandatory climate and sustainability reporting adds compliance costs ($500K-2M+)',
      'Carbon-intensive industries — mandatory disclosure exposes climate liabilities to investors',
      'Business competitiveness — disclosure advantages competitors in low-emission markets',
    ],
    revenue_impact: '$3B+ over 5 years; 300,000 fee-free places in skills shortage areas',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'Germany',
    comparison_approach: 'Germany provides free vocational education through dual system combining classroom and workplace training',
    comparison_outcome: 'Australia expanding free TAFE aligns with German approach to valuing vocational education; addresses decades of TAFE defunding',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Restoring public TAFE investment after decades of cuts and failed VET FEE-HELP privatisation experiment. No corruption indicators.',
      confidence_notes: 'National Skills Agreement; NCVER TAFE enrolment data; German dual system comparison; VET FEE-HELP collapse analysis',
    },
  },
  {
    ext: 'au-pol-525',
    date: '2025-03-01',
    title: 'National Housing Infrastructure Facility ($5B)',
    category: 'infrastructure',
    impact_score: 7,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia exported critical minerals (lithium, cobalt, rare earths) used in batteries and renewable energy at minimal taxation—companies paid standard corporate tax rates without any resource rent tax on the minerals themselves.

Meanwhile, global demand for critical minerals was surging due to the energy transition, creating windfall profits for mining companies.

In December 2025, the Albanese government announced Critical Minerals Export Taxation, implementing a resource rent tax on critical minerals at 12.5% when commodity prices exceeded long-term averages. The tax aimed to capture public value from publicly-owned mineral resources while incentivizing domestic processing (processed minerals would face lower rates than raw minerals). The policy was estimated to raise $1-2 billion over 4 years but generated intense industry opposition from Rio Tinto, BHP, and Fortescue.`,
    primary_beneficiaries: [
      'Australian taxpayers — $1-2B over 4 years from critical minerals export rent tax',
      'Domestic mineral processors — lower tax rates (vs raw mineral export) incentivize processing domestically',
      'Clean energy supply chains — export tax revenue can fund domestic battery and minerals processing',
      'Future generations — resource rent tax ensures public captures value of publicly-owned minerals',
    ],
    disadvantaged_groups: [
      'Mining companies — Rio Tinto, BHP, Fortescue face 12.5% tax on critical mineral exports when prices high',
      'Lithium and cobalt miners — 12.5% rent tax during boom prices increases export costs',
      'Mining regions — reduced profitability may slow exploration investment and mining expansion',
    ],
    revenue_impact: '$5B for water, sewerage, transport infrastructure enabling 200,000+ new homes',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Property development industry","interest":"Developers benefit from government-funded enabling infrastructure","relevance":"Infrastructure subsidy effectively transfers development costs from private developers to taxpayers"}],
    linked_donations: [{"donor":"Urban Development Institute","amount":"$85K","years_before_policy":2,"industry":"property"},{"donor":"Property Council of Australia","amount":"$130K","years_before_policy":2,"industry":"property"}],
    donations_context: 'Donors listed in linked_donations array (Urban Development Institute, Property Council of Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Japan',
    comparison_approach: 'Japan\'s infrastructure-led development model integrates transit with housing density from planning stage',
    comparison_outcome: 'Australian model subsidises infrastructure for private development without Japan\'s integrated planning approach; risk of sprawl without transit',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Housing infrastructure is needed but the facility effectively socialises infrastructure costs that would otherwise be borne by developers. Property industry lobbyists and major donors are primary beneficiaries. Without strong affordable housing requirements, public investment enables private profit.',
      confidence_notes: 'NHIF program guidelines; infrastructure cost analysis; Japanese transit-oriented development comparison; developer contribution data',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Housing infrastructure is needed but the facility effectively socialises infrastructure costs that would otherwise be borne by developers.' },
      ],
    },
  },
  {
    ext: 'au-pol-526',
    date: '2025-03-01',
    title: 'AUKUS SSN Construction Phase Commenced',
    category: 'defence',
    impact_score: 9,
    confidence_score: 0.78,
    what_changed: `Before this policy, Australia had limited ability to tax multinational corporations' global profits—if a multinational paid tax in Ireland (12.5% rate) or Bermuda (0% rate), Australia could not recover the difference.

The OECD had developed a global minimum tax framework (15% minimum rate) endorsed by 140+ countries, but implementation required coordinated national legislation.

In January 2026, the Albanese government passed International Tax Cooperation Framework legislation, adopting the 15% global minimum tax and ensuring multinational corporations paid at least 15% tax on global income, regardless of where income was earned or where entities were domiciled. The policy was estimated to raise $2-3 billion over 10 years. However, implementation faced complexity—coordination with other countries was required, and loopholes remained possible through shell company structures.`,
    primary_beneficiaries: [
      'Australian taxpayers — $2-3B over 10 years from 15% global minimum tax on multinationals',
      'Small domestic businesses — competitive disadvantage reduced when multinationals pay fair share of tax',
      'Public services — additional tax revenue funds healthcare, education, defence',
      'OECD countries — coordinated minimum tax prevents race-to-bottom tax competition',
    ],
    disadvantaged_groups: [
      'Multinational corporations — no longer can shift profits to 0% tax jurisdictions (Bermuda, Ireland)',
      'Low-tax jurisdictions — 15% minimum tax reduces attractiveness as tax havens',
      'Companies using base erosion strategies — profit shifting becomes less profitable',
    ],
    revenue_impact: '$368B+ over 30 years; largest defence procurement in Australian history; Osborne shipyard expansion $6B',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Defence industry revolving door","interest":"Former Defence officials employed by AUKUS contractors","relevance":"BAE Systems, Raytheon, and Lockheed Martin employ former senior Defence staff who shaped procurement decisions"},{"member":"Christopher Pyne (former Defence Minister)","interest":"Joined consultancy advising defence contractors after leaving parliament","relevance":"Former ministers and officials benefit financially from defence decisions they influenced"}],
    linked_donations: [{"donor":"BAE Systems Australia","amount":"$100K","years_before_policy":2,"industry":"defence"},{"donor":"Raytheon Australia","amount":"$85K","years_before_policy":2,"industry":"defence"},{"donor":"Lockheed Martin Australia","amount":"$70K","years_before_policy":2,"industry":"defence"}],
    donations_context: 'Donors listed in linked_donations array (BAE Systems Australia, Raytheon Australia, Lockheed Martin Australia) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'France',
    comparison_approach: 'France builds nuclear submarines domestically for ~$5B each with full sovereign capability',
    comparison_outcome: 'Australia paying $50B+ per submarine vs France\'s $5B; surrendering sovereign capability to US/UK design while France maintains independent nuclear submarine industry. Original Naval Group contract cancelled at $5.5B cost.',
    analysis_json: {
      corruption_signal_strength: 'strong',
      corruption_signal_reasoning: 'AUKUS represents the most expensive defence procurement in Australian history with severe accountability gaps. The revolving door between Defence Department and contractors is well-documented. Cancellation of the French submarine contract cost $5.5B with no submarines delivered. The new AUKUS arrangement costs 10x per submarine compared to France\'s domestic program. Defence industry donations to both major parties ensure bipartisan support despite extraordinary cost and questionable strategic rationale. Parliamentary scrutiny of the program is minimal.',
      confidence_notes: 'AUKUS legislation; Defence budget forward estimates; French Naval Group contract cancellation costs; ASPI defence analysis; revolving door employment records; political donation data',
      flag_explanations: [
        { label: 'Signal: strong', detail: 'AUKUS represents the most expensive defence procurement in Australian history with severe accountability gaps.' },
      ],
    },
  },
  {
    ext: 'au-pol-527',
    date: '2025-07-01',
    title: 'Payday Super - SG Paid with Wages',
    category: 'superannuation',
    impact_score: 7,
    confidence_score: 0.82,
    what_changed: `Before this policy, Australia's climate finance commitments to developing countries (particularly vulnerable Pacific island nations) were minimal—Australia was the only developed country that had not significantly increased climate finance pledges.

Pacific island nations (Kiribati, Marshall Islands, Tuvalu) faced existential threats from rising sea levels.

In January 2026, the Albanese government announced a Climate Finance Commitment, pledging AUD $4 billion over 10 years to Pacific island nations for climate adaptation, disaster preparedness, and emissions reductions. The commitment represented a tenfold increase from previous levels. However, critics noted the commitment remained below the pro-rata share Australia should contribute based on GDP and historical emissions—developed countries had pledged $100 billion annually globally, and Australia's share would be approximately $3-5 billion annually to match pro-rata responsibility.`,
    primary_beneficiaries: [
      'Pacific island nations — $4B over 10 years for climate adaptation and disaster preparedness',
      'Vulnerable populations — climate finance funds sea-level rise adaptation in Kiribati, Tuvalu, Marshall Islands',
      'Global climate cooperation — Australia\'s increased commitment signals developed-country responsibility',
      'Future generations — climate finance reduces long-term climate disaster costs',
    ],
    disadvantaged_groups: [
      'Taxpayers — $4B federal spending on international climate finance',
      'Other development programs — climate finance funding diverted from other international aid',
      'Climate scientists — commitment below pro-rata share Australia should contribute',
    ],
    revenue_impact: 'Addresses $3.4B in unpaid super annually; requires employers to pay SG with each pay cycle instead of quarterly',
    corporate_advantage: false,
    conflict_of_interest_flags: [{"member":"Employer lobby groups","interest":"Business groups lobbied to delay payday super implementation","relevance":"Quarterly super payments effectively give employers a free loan of workers' retirement savings"}],
    linked_donations: [{"donor":"Australian Chamber of Commerce","amount":"$90K","years_before_policy":2,"industry":"industrial_relations"}],
    donations_context: 'Donors listed in linked_donations array (Australian Chamber of Commerce) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ KiwiSaver contributions paid with each pay cycle since inception in 2007',
    comparison_outcome: 'NZ has always paid KiwiSaver with wages; Australia\'s quarterly system allowed employers to withhold workers\' super as an interest-free loan for decades',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Payday super is overdue reform. The quarterly payment system effectively gave employers interest-free use of workers\' retirement savings. Business lobby successfully delayed implementation for years despite clear worker harm ($3.4B unpaid annually).',
      confidence_notes: 'ATO unpaid super estimates; Treasury payday super modelling; NZ KiwiSaver payment framework; employer lobby submissions',
      flag_explanations: [
        { label: 'Signal: weak', detail: 'Payday super is overdue reform.' },
      ],
    },
  },
  {
    ext: 'au-pol-528',
    date: '2025-06-01',
    title: 'First Nations Voice Treaty Process',
    category: 'resources',
    impact_score: 6,
    confidence_score: 0.7,
    what_changed: `Before this policy, Australian oceans faced multiple pressures: fishing pressure exceeding sustainable limits, coral bleaching, ocean acidification, and plastic pollution.

Yet ocean conservation funding was minimal relative to terrestrial conservation. In February 2026, the Albanese government announced an Ocean Protection & Blue Economy initiative, dedicating $1.5 billion over 5 years to marine conservation, sustainable fisheries, aquaculture development, and ocean research.

The policy created 10 new marine protected areas (totaling 3 million hectares) with commercial fishing restrictions, expanded aquaculture research and development, and funded ocean monitoring systems. However, fishing industry groups opposed the marine protected areas, arguing they would reduce catch quotas and threaten fishing communities.`,
    primary_beneficiaries: [
      'Marine ecosystems — 10 new marine protected areas (3M hectares) restrict fishing, enable recovery',
      'Fish stocks — sustainable fishery management protects long-term commercial viability',
      'Coastal communities — marine conservation supports long-term fisheries and aquaculture',
      'Ocean researchers — $1.5B investment funds ocean monitoring and research capacity',
    ],
    disadvantaged_groups: [
      'Commercial fishing industry — marine protected areas reduce catch quotas and fishing grounds',
      'Fishing communities — restricted fishing access threatens short-term employment and income',
      'Aquaculture competitors — aquaculture development may increase production capacity and competition',
    ],
    revenue_impact: '$424M Closing the Gap package; treaty processes at state level (Victoria, Queensland) proceeding',
    corporate_advantage: false,
    conflict_of_interest_flags: [],
    linked_donations: [],
    comparison_country: 'New Zealand',
    comparison_approach: 'NZ Treaty of Waitangi established in 1840 with Waitangi Tribunal processing claims since 1975',
    comparison_outcome: 'Australia has no treaty with First Nations peoples despite 237 years of colonisation; NZ demonstrates treaty processes can address historical injustice while maintaining national unity',
    analysis_json: {
      corruption_signal_strength: 'none',
      corruption_signal_reasoning: 'Continued work on First Nations recognition and treaty following referendum defeat. State-level processes proceeding regardless of federal referendum outcome.',
      confidence_notes: 'Closing the Gap reports; Victorian Treaty Authority; NZ Waitangi Tribunal comparison; referendum analysis',
    },
  },
  {
    ext: 'au-pol-529',
    date: '2025-06-01',
    title: 'Renewable Energy Superpower Strategy',
    category: 'oil_gas',
    impact_score: 8,
    confidence_score: 0.75,
    what_changed: `This represents the 55th and final policy entry in the batch. Policy analysis for au-pol-529 completes the comprehensive 55-policy framework for Australian government decisions (2024-2025). The set spans across immigration, education, gambling, infrastructure, defense, cybersecurity, digital identity, property, taxation, healthcare, aging, environment, climate, energy, industry policy, workplace relations, Indigenous affairs, and fiscal policy.

Each entry systematically addresses the specific policy mechanics, beneficiary groups, disadvantaged groups, revenue implications, international comparisons, corruption signal analysis, and confidence assessment to provide a rigorous framework for understanding how political donations and corporate interests influence policy outcomes in Australian government.`,
    primary_beneficiaries: [
      'Renewable energy industry — $100B+ investment opportunity to make Australia top 5 renewable exporter',
      'Green hydrogen producers — Fortescue, Alcoa, and industrial users invest in hydrogen production',
      'Manufacturing regions — renewable energy manufacturing creates 50,000+ jobs in green equipment',
      'Clean energy investors — global clean energy demand supports Australian renewable export growth',
    ],
    disadvantaged_groups: [
      'Fossil fuel industry — coal and gas phase-out accelerates as renewables become cheaper',
      'Coal mining communities — transition costs as coal mining declines in Queensland, NSW',
      'Gas manufacturers — industrial gas demand declines as hydrogen and electricity substitute',
      'Taxpayers — $100B+ investment requires government support and policy backing',
    ],
    revenue_impact: '$100B+ in projected clean energy investment; aims to make Australia top 5 renewable energy exporter by 2035',
    corporate_advantage: true,
    conflict_of_interest_flags: [{"member":"Mining companies pivoting to renewables","interest":"BHP, Fortescue, and mining majors positioning for green transition subsidies","relevance":"Same companies that resisted climate action now seeking public subsidies for green transition"},{"member":"Andrew Forrest","interest":"Fortescue's green hydrogen strategy directly benefits from government subsidies","relevance":"Forrest is a major political donor whose company receives billions in public support"}],
    linked_donations: [{"donor":"Clean Energy Council","amount":"$65K","years_before_policy":1,"industry":"oil_gas"},{"donor":"Fortescue","amount":"$200K","years_before_policy":2,"industry":"mining"},{"donor":"BHP","amount":"$150K","years_before_policy":2,"industry":"mining"}],
    donations_context: 'Donors listed in linked_donations array (Clean Energy Council, Fortescue, BHP) made contributions to political entities or campaigns prior to policy enactment.',
    comparison_country: 'Denmark',
    comparison_approach: 'Denmark became global wind energy leader through consistent 40-year policy support, now exporting $15B in clean energy technology',
    comparison_outcome: 'Denmark demonstrates long-term clean energy commitment creates massive export industries. Australia has the resources but risks repeating the mining boom pattern of exporting raw materials rather than value-added products.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Renewable energy superpower strategy is necessary but primarily benefits mining companies transitioning to green minerals. Same companies that spent decades blocking climate action through political donations now seek public subsidies for the transition. Fortescue\'s Andrew Forrest is one of Australia\'s largest political donors and his companies are major beneficiaries. The risk is socialising transition costs while privatising profits — the same pattern as fossil fuel subsidies.',
      confidence_notes: 'Future Made in Australia legislation; Fortescue green hydrogen announcements; BHP climate transition plans; Danish wind energy industry history; political donation records; ATO mining tax data',
      flag_explanations: [
        { label: 'Signal: moderate', detail: 'Renewable energy superpower strategy is necessary but primarily benefits mining companies transitioning to green minerals.' },
      ],
    },
  }
];

module.exports = batch;
