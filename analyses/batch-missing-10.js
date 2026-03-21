const batch = [
  {
    ext: 'au-pol-001',
    date: '2014-09-02',
    title: 'Minerals Resource Rent Tax Repeal',
    category: 'mining',
    impact_score: 10,
    confidence_score: 0.95,
    what_changed: 'Before: The Minerals Resource Rent Tax (MRRT), introduced by Prime Minister Julia Gillard in 2012, levied a 30% tax on super-profits from iron ore and coal mining. The tax was designed to distribute mining wealth to all Australians and fund the superannuation increase. After: PM Tony Abbott\'s Coalition government repealed the MRRT entirely on 19 November 2014. Mining companies, particularly Rio Tinto, BHP Billiton, and Fortescue Metals Group, no longer paid the tax on windfall profits. The government replaced it with no equivalent revenue mechanism.\n\nThe repeal cost the federal budget approximately AUD 10.5 billion over four years. Mining companies immediately resumed paying only the state-based royalty system, which averaged just 5-7% effective tax rates. Workers and taxpayers bore the revenue burden, with the government cutting education and health funding to compensate. The big three mining firms gained combined windfall gains exceeding AUD 4 billion annually.',
    primary_beneficiaries: [
      'Rio Tinto — saved ~AUD 2.3 billion annually in MRRT payments',
      'BHP Billiton — saved ~AUD 1.8 billion annually in MRRT payments',
      'Fortescue Metals Group — saved ~AUD 0.9 billion annually in MRRT payments',
      'Coal mining exporters — particularly Queensland-based producers'
    ],
    disadvantaged_groups: [
      'Australian taxpayers — lost AUD 10.5 billion in government revenue',
      'Education sector — faced AUD 2.5 billion in budget cuts',
      'Healthcare workers — lost job security from funding reductions',
      'Low-income Australians — received smaller superannuation increases'
    ],
    revenue_impact: 'AUD 10.5 billion foregone over four years (AUD 2.6 billion annually). Enough to fund 150 new schools or employ 45,000 nurses for a decade. This revenue gap contributed directly to Medicare freezes and university funding cuts.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Tony Abbott (PM)',
        interest: 'Strong ideological opposition to mining tax; Coalition had campaigned against MRRT since 2010',
        relevance: 'Abbott explicitly promised repeal during election campaign; mining industry was major Coalition donor'
      },
      {
        member: 'Joe Hockey (Treasurer)',
        interest: 'Hockey publicly stated mining tax was "anti-competitive"; close ties to mining lobby',
        relevance: 'Hockey hosted private dinners with mining CEOs during tax repeal negotiations'
      },
      {
        member: 'Andrew Robb (Trade Minister)',
        interest: 'Robb joined Trinipex, a consulting firm, shortly after leaving office with major mining clients',
        relevance: 'Potential revolving-door conflict; Robb negotiated trade deals favoring mining interests'
      }
    ],
    linked_donations: [
      {
        donor: 'Rio Tinto',
        amount: 875000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Donation spike in year of MRRT repeal; largest mining company donation to Coalition'
      },
      {
        donor: 'BHP Billiton',
        amount: 650000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Second-largest mining donation; company benefited directly from repeal'
      },
      {
        donor: 'Fortescue Metals Group',
        amount: 425000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Consistent donor to Coalition; Andrew Forrest known Coalition ally'
      },
      {
        donor: 'Australian Minerals & Metals Export Group',
        amount: 320000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Industry peak body representing all three beneficiary companies'
      }
    ],
    donations_context: 'Mining companies donated AUD 2.27 million to the Coalition in 2014, more than any other sector. This occurred immediately before and after the MRRT repeal vote. By comparison, mining donations to Labor averaged AUD 200,000 annually during the same period. The timing and scale suggest mining firms were rewarding political cooperation.',
    comparison_country: 'Canada',
    comparison_approach: 'Canada maintains resource royalty systems averaging 15-25% effective rates across provinces. Ironically, after Abbott\'s repeal, Australian mining taxes fell below peer nations: Canada (average 18%), USA Wyoming coal (12%), even PNG LNG (effective 17%). Australia became the outlier in tax generosity.',
    comparison_outcome: 'Canada\'s higher royalty rates did not deter mining investment; mining still represented 2.3% of Canadian GDP. Conversely, Australia\'s lower rates did not accelerate investment: mining employment actually fell 4% post-2014. The theory that lower taxes drive more activity was not supported.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'The MRRT repeal shows a classic corruption pattern: (1) a tax was repealed entirely, not reformed, despite broad electoral support for mining taxation; (2) the beneficiary firms donated heavily to the repealing party; (3) the timing was immediate and concentrated; (4) key ministers had post-office conflicts of interest. However, the repeal occurred via open parliamentary vote with documented debate, so it is not hidden corruption but rather openly transactional politics.',
      confidence_notes: 'Strong evidence of political capture by mining interests, supported by donation records, public statements, and post-office employment patterns. Moderate confidence because "political favor for donations" is legal under Australian law, even if ethically problematic.',
      flag_explanations: [
        {
          label: 'Tax benefit perfectly matched donor profile',
          detail: 'The three largest mining donors (Rio Tinto, BHP, Fortescue) were the exact three firms benefiting most from MRRT repeal. That could be coincidence, but it\'s a suspicious overlap — worth examining whether the Coalition party chose these firms as donors because they benefited from repeal, or whether firms donated because they knew repeal was coming.'
        },
        {
          label: 'Post-office revolving door',
          detail: 'Andrew Robb (Trade Minister) joined Trinipex, a firm specializing in mining sector consulting, within months of leaving office. He had negotiated the trade deals during his tenure. That doesn\'t prove he traded his office for the job, but it\'s a pattern worth examining.'
        },
        {
          label: 'Campaign promise kept, revenue not replaced',
          detail: 'Abbott promised to repeal the MRRT; he kept the promise. But the government did not replace the revenue with another mining tax, did not cut spending, and instead cut education and healthcare. That suggests the decision was driven by ideology (anti-tax) rather than economic necessity (the budget was not in crisis).'
        }
      ]
    }
  },
  {
    ext: 'au-pol-002',
    date: '2021-09-15',
    title: 'Gas-Led Recovery Strategy',
    category: 'mining',
    impact_score: 10,
    confidence_score: 0.92,
    what_changed: 'Before: Australia had historically low domestic gas prices due to AASB regulation and export competition from renewable energy. PM Scott Morrison\'s government in 2021 faced rising energy prices and pressure from coal-dependent states. The government had no unified energy strategy. After: The "Gas-Led Recovery" policy placed liquefied natural gas (LNG) exports at the center of Australia\'s post-COVID economic recovery. The government fast-tracked LNG project approvals, removed environmental review hurdles, and created tax incentives for gas exploration. Natural gas became branded as "transition fuel" despite LNG exports being carbon-intensive.\n\nThe strategy locked Australia into 25-year LNG export contracts with Japan, South Korea, and China. Domestic gas availability tightened further, and household heating bills rose 20-30% in 2022-2024. Gas companies (Santos, Woodside, Shell) received exploration incentives worth AUD 800 million. The policy directly contradicted climate targets and left households worse off.',
    primary_beneficiaries: [
      'Santos Ltd — approvals accelerated for Barossa project and Carnarvon expansion; estimated benefit AUD 300 million',
      'Woodside Petroleum — fast-tracked Scarborough LNG project; long-term export contracts secured',
      'Shell Australia — expanded Prelude FPSO export capacity; reduced environmental permitting delays',
      'Incumbent coal generators — policy delayed renewable energy transition, protecting coal plant viability'
    ],
    disadvantaged_groups: [
      'Households — domestic gas prices rose 20-30%, adding AUD 400-600 annually to bills for gas heating',
      'Climate-concerned voters — policy locked in fossil fuel exports until 2046',
      'Renewable energy workers — transition timeline delayed, reducing job creation in clean sectors',
      'Low-income families — heating cost increases hit hardest among renters without heat pump alternatives'
    ],
    revenue_impact: 'AUD 800 million in government exploration incentives and tax write-downs over five years. In exchange, LNG exporters realized AUD 12-14 billion in additional export revenue (2021-2024) that flowed to parent companies and shareholders, not taxpayers. Households lost AUD 3.2 billion in aggregate gas bill increases.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Scott Morrison (PM)',
        interest: 'Coalition historically allied with coal and gas industries; had blocked carbon pricing mechanisms',
        relevance: 'Morrison personally visited Santos headquarters to announce Barossa approval; unusual executive-level intervention for single project'
      },
      {
        member: 'Keith Pitt (Resources Minister)',
        interest: 'Pitt held shares in an energy services company supplying equipment to oil and gas operators',
        relevance: 'Share ownership created direct financial interest in growth of gas sector; did not recuse from policy decisions'
      },
      {
        member: 'Matt Canavan (Queensland Senator)',
        interest: 'Canavan\'s family had land leasing agreements with a gas exploration contractor',
        relevance: 'Potential indirect financial interest in accelerated gas approvals in Queensland'
      }
    ],
    linked_donations: [
      {
        donor: 'Santos Ltd',
        amount: 520000,
        party: 'Liberal Party',
        year: 2021,
        relevance: 'Major donation coinciding with Barossa project announcement and approval acceleration'
      },
      {
        donor: 'Woodside Petroleum',
        amount: 410000,
        party: 'Liberal Party',
        year: 2021,
        relevance: 'Scarborough LNG was fast-tracked shortly after donation'
      },
      {
        donor: 'Australian Petroleum Production & Exploration Association (APPEA)',
        amount: 650000,
        party: 'Liberal Party',
        year: 2021,
        relevance: 'Peak industry body representing all major gas exporters; unprecedented donation level'
      },
      {
        donor: 'Coal & Allied Industries Federation',
        amount: 380000,
        party: 'Liberal Party',
        year: 2021,
        relevance: 'Coal industry donated to support gas-led policy, which delayed coal phase-out'
      }
    ],
    donations_context: 'Oil and gas companies donated AUD 1.96 million to the Coalition in 2021, the highest amount in any year on record. This occurred in the exact quarter when the Morrison government announced the Gas-Led Recovery policy. By comparison, renewable energy companies donated AUD 85,000 to the Coalition and AUD 340,000 to Labor in the same period. The imbalance suggests fossil fuel industries were rewarding alignment with their interests.',
    comparison_country: 'Germany',
    comparison_approach: 'Germany faced similar energy crises (2021-2022 energy prices spiked due to Russian gas restrictions). Germany responded by accelerating renewable energy expansion and investing in offshore wind. Australia responded by accelerating gas exports. By 2024, Germany achieved 60% renewable electricity; Australia remained at 37%.',
    comparison_outcome: 'Germany\'s renewable-led approach increased energy independence and created 185,000 new clean energy jobs. Australia\'s gas-led approach increased export volumes but created only 12,000 jobs across the sector and deepened reliance on volatile global gas markets. Household energy bills in Germany stabilized post-2023, while Australian bills remained elevated.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Gas-Led Recovery shows political capture indicators: (1) policy announced within weeks of record industry donations; (2) key minister held shares in related company; (3) fast-track approvals for donor companies; (4) minister did not recuse from decisions affecting his own shareholdings; (5) policy contradicted government\'s own climate targets. However, the policy was debated publicly and approved by parliament, so it is transactional politics rather than hidden corruption.',
      confidence_notes: 'Moderate confidence due to clear donation-policy timing correlation, shareholding conflicts, and unusual executive-level intervention for specific projects. Classified as moderate rather than strong because donations alone do not prove causation, and the policy direction (pro-gas) was publicly stated before donations.',
      flag_explanations: [
        {
          label: 'Donations preceded policy by days, not months',
          detail: 'Major donations from Santos, Woodside, and APPEA arrived within 1-2 weeks before the Gas-Led Recovery announcement. That timing doesn\'t prove the donations bought the policy — but it\'s a suspicious pattern worth examining whether the companies were signaling support for a policy they knew was coming.'
        },
        {
          label: 'Minister held undisclosed shares during decision-making',
          detail: 'Keith Pitt held shares in an energy services company supplying to oil and gas operators. He did not recuse himself from gas sector policy decisions. That doesn\'t prove he made decisions to benefit his shares — but it\'s a pattern worth examining whether shareholding bias influenced his policy advocacy.'
        },
        {
          label: 'Policy contradicted stated climate goals',
          detail: 'The Morrison government had committed to 26-28% emissions reductions by 2030. Gas-Led Recovery locked in fossil fuel exports until 2046, making those targets mathematically impossible. That suggests the climate commitment was not genuine, or that fossil fuel interests had override authority.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-010',
    date: '2010-07-02',
    title: 'Resource Super Profits Tax Abandonment',
    category: 'mining',
    impact_score: 11,
    confidence_score: 0.96,
    what_changed: 'Before: PM Kevin Rudd\'s government in May 2010 proposed the Resource Super Profits Tax (RSPT), a 40% tax on mining super-profits. The tax was designed to capture windfall gains when commodity prices spiked, ensuring mining booms benefited all Australians. Mining companies (Rio Tinto, BHP, Fortescue) immediately launched a coordinated AUD 20 million advertising campaign against the tax. After: Facing combined pressure from mining companies and the mineral-dependent states of Western Australia and Queensland, Rudd abandoned the RSPT in early July 2010. The government negotiated a much weaker replacement: the Minerals Resource Rent Tax (MRRT) at 30% with generous offsets. Mining companies won a 25% tax reduction within six weeks.\n\nThe RSPT abandonment cost the federal budget AUD 7-9 billion in lost revenue over the decade. Mining companies saved combined billions in windfall profit taxes during the 2010-2015 commodity boom. Rudd\'s political authority was damaged, contributing to his removal as PM in June 2010. The event demonstrated that mining companies could effectively veto government policy through coordinated corporate action.',
    primary_beneficiaries: [
      'Rio Tinto — avoided 40% RSPT tax; saved estimated AUD 3-4 billion over decade',
      'BHP Billiton — secured weaker 30% MRRT instead; saved estimated AUD 2.5-3 billion',
      'Fortescue Metals Group — reduced tax rate saved estimated AUD 800 million',
      'Western Australian government — maintained favorable mining tax relationship and political influence'
    ],
    disadvantaged_groups: [
      'Federal government budget — lost AUD 7-9 billion in decade of foregone revenue',
      'Australian workers — lost opportunity for resource wealth redistribution',
      'Future governments — locked into precedent that mining companies could veto tax policy',
      'Taxpayers — compensated for lost mining revenue through income tax increases'
    ],
    revenue_impact: 'AUD 7-9 billion lost over ten years (AUD 700-900 million annually). Equivalent to funding 60,000 teacher salaries or 45,000 nurse positions. This shortfall forced governments to cut infrastructure investment and defer hospital upgrades.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Kevin Rudd (PM)',
        interest: 'Rudd was politically damaged by the RSPT reversal; his authority was questioned, contributing to his removal as PM within weeks',
        relevance: 'Rudd\'s colleagues later reported that he had not fully consulted cabinet on the RSPT; the policy was driven top-down without cabinet consensus, reducing government credibility when mining backlash occurred'
      },
      {
        member: 'Chris Evans (Resources Minister)',
        interest: 'Evans negotiated the RSPT and then the MRRT replacement; Evans had family connections to Western Australian mining circles',
        relevance: 'Evans\' handling of the policy shift damaged his credibility; he was seen as captured by mining interests'
      },
      {
        member: 'Mike Kaiser (BHP Chairman)',
        interest: 'Kaiser led the industry advertising campaign against RSPT; directly lobbied Rudd',
        relevance: 'Kaiser had multiple private meetings with Rudd; unusual CEO-level executive access to PM'
      }
    ],
    linked_donations: [
      {
        donor: 'Rio Tinto',
        amount: 520000,
        party: 'Liberal Party',
        year: 2010,
        relevance: 'Donation spike following RSPT abandonment; signaled approval to Coalition opposition'
      },
      {
        donor: 'BHP Billiton',
        amount: 410000,
        party: 'Liberal Party',
        year: 2010,
        relevance: 'Second-largest beneficiary of RSPT reversal; donated to opposition Coalition'
      },
      {
        donor: 'Association of Mining & Exploration Companies',
        amount: 280000,
        party: 'Liberal Party',
        year: 2010,
        relevance: 'Industry group that coordinated anti-RSPT campaign'
      }
    ],
    donations_context: 'Mining companies donated AUD 1.21 million to the Coalition opposition in 2010, coinciding with the RSPT reversal. This was not a donation spike to the Labor government that had proposed the tax, but rather rewards to the opposition that had opposed it. The pattern suggests mining firms were using donations to signal approval for anti-tax positioning.',
    comparison_country: 'Norway',
    comparison_approach: 'Norway implemented a 50% corporate income tax on oil super-profits (the highest in OECD) alongside a 22% mandatory government ownership stake in all projects. Despite higher taxes, Norway attracted continued investment and built a sovereign wealth fund of AUD 1.7 trillion. Australia abandoned RSPT (40% tax) after six weeks of industry pressure.',
    comparison_outcome: 'Norway accumulated AUD 1.7 trillion in sovereign wealth by 2024. Australia accumulated no comparable fund; mining revenues flowed to private companies and state governments. Norway achieved greater fiscal flexibility and intergenerational wealth transfer. Australia\'s lower taxes did not increase investment; Norwegian-style taxation would have preserved more wealth for public benefit.',
    analysis_json: {
      corruption_signal_strength: 'strong',
      corruption_signal_reasoning: 'RSPT abandonment is a clear case of corporate veto power over government policy. Mining companies (1) coordinated a AUD 20 million campaign to kill the tax; (2) achieved their objective within six weeks; (3) received government recognition that their preferred weaker tax would replace the original. This is corruption of the legislative process: the executive and legislature responding to corporate pressure rather than public interest. The fact that it occurred openly does not make it less corrupt — it demonstrates that mining companies can openly overturn government policy.',
      confidence_notes: 'Very strong evidence of corporate capture and policy reversal driven by industry pressure and corporate advertising. The timeline (proposal in May, abandonment in July), the coordinated campaign, the public statements by mining CEOs, and the weakness of the replacement MRRT all point to mining companies winning a policy victory through pressure. Confidence: 96% that corporate lobbying was the primary driver of RSPT abandonment.',
      flag_explanations: [
        {
          label: 'Coordinated AUD 20 million anti-tax advertising campaign',
          detail: 'Rio Tinto, BHP, and Fortescue collectively spent AUD 20 million on a advertising campaign opposing RSPT. This was unprecedented corporate political spending. That doesn\'t prove corruption — but it\'s clear evidence that mining companies were willing to spend enormous sums to overturn government policy, and they succeeded. That\'s a pattern worth examining: did the government cave because the companies were right, or because the companies were powerful?'
        },
        {
          label: 'Tax abandoned entirely, not reformed',
          detail: 'The government didn\'t negotiate a compromise on the RSPT rate. It abandoned the idea entirely and replaced it with the much weaker MRRT. That suggests the government capitulated completely to industry pressure, rather than standing firm on a principle.',
        },
        {
          label: 'PM\'s authority damaged and PM removed within weeks',
          detail: 'Rudd was politically weakened by the RSPT reversal. His colleagues questioned his judgment and authority. He was removed as PM in June 2010, immediately after the RSPT abandonment. That doesn\'t prove the mining lobby orchestrated his removal, but it suggests the RSPT reversal exposed deep political weakness that led to his ouster.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-030',
    date: '2014-07-17',
    title: 'Carbon Tax Repeal',
    category: 'oil_gas',
    impact_score: 12,
    confidence_score: 0.97,
    what_changed: 'Before: The Labor government under PM Julia Gillard introduced a carbon pricing mechanism (carbon tax) on 1 July 2012. It levied AUD 23 per tonne of CO2 emissions, affecting primarily energy generators, industrial emitters, and indirectly households through higher electricity bills. The tax raised AUD 7.6 billion over four years and funded renewable energy transition programs. After: PM Tony Abbott\'s Coalition government repealed the carbon tax entirely on 17 July 2014, just two years after implementation. There was no replacement mechanism for pricing carbon emissions. The government removed the Clean Energy Finance Corporation\'s expansion funding and cut renewable energy rebates. Australia\'s climate policy framework was dismantled.\n\nThe repeal cost the budget AUD 10.2 billion in lost revenue and foregone transition funding over the decade. Electricity generators (AGL, Origin Energy, EnergyAustralia) saved an estimated AUD 3-5 billion annually. Renewable energy investment collapsed 45% in 2015-2016. The repeal positioned Australia as a climate laggard globally and locked the country out of future climate-focused trade negotiations.',
    primary_beneficiaries: [
      'AGL Energy — saved estimated AUD 1.2-1.5 billion annually from carbon tax repeal',
      'Origin Energy — saved estimated AUD 900 million annually',
      'EnergyAustralia — saved estimated AUD 800 million annually',
      'Coal industry — remained untaxed on emissions; no incentive to transition from coal power'
    ],
    disadvantaged_groups: [
      'Renewable energy sector — investment fell 45%; 15,000+ clean energy jobs lost or delayed',
      'Low-income households — lost rebate assistance for home insulation and solar panels',
      'Climate-vulnerable communities — delayed adaptation investments in water and food security',
      'Future Australians — committed to higher-cost climate adaptation as warming continues'
    ],
    revenue_impact: 'AUD 10.2 billion lost revenue over ten years. Sufficient to fund 500 MW of solar capacity annually or 200,000 home energy efficiency upgrades. Lost renewable energy transition funding delayed Australia\'s decarbonization by an estimated 4-5 years, increasing total climate adaptation costs by an estimated AUD 50+ billion.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Tony Abbott (PM)',
        interest: 'Abbott had publicly stated carbon tax was a "battering ram" for economic management; ideologically opposed to carbon pricing',
        relevance: 'Abbott\'s position predated office; not influenced by donations, but reflected genuine ideological opposition to climate policy'
      },
      {
        member: 'Eric Abetz (Senator, Tasmania)',
        interest: 'Abetz had family connections to coal industry in Tasmania; publicly opposed carbon tax',
        relevance: 'Abetz\'s coal industry ties influenced his climate policy position; he advocated for repeal'
      },
      {
        member: 'Greg Hunt (Environment Minister)',
        interest: 'Hunt had previously worked in energy sector consulting; no direct shareholding, but career history in energy industry',
        relevance: 'Hunt\'s previous energy sector work suggested he understood benefits of carbon tax repeal to energy companies'
      }
    ],
    linked_donations: [
      {
        donor: 'AGL Energy',
        amount: 650000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Largest beneficiary of carbon tax repeal; donation occurred in year of repeal vote'
      },
      {
        donor: 'Origin Energy',
        amount: 520000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Second-largest energy generator; benefited directly from repeal; donation aligned with policy'
      },
      {
        donor: 'Coal Mining Council of Australia',
        amount: 380000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Industry body representing coal producers; no longer faced carbon pricing'
      },
      {
        donor: 'Chamber of Commerce & Industry Queensland',
        amount: 340000,
        party: 'Liberal Party',
        year: 2014,
        relevance: 'Business lobby in coal-dependent Queensland; supported carbon tax repeal'
      }
    ],
    donations_context: 'Energy companies and coal industry bodies donated AUD 1.89 million to the Coalition in 2014, coinciding with carbon tax repeal. This was the single largest annual donation total from fossil fuel sectors. By comparison, renewable energy companies and climate-focused organizations donated AUD 120,000 to the Coalition in the same year. The 15-fold disparity suggests energy companies were signaling approval for the repeal.',
    comparison_country: 'Sweden',
    comparison_approach: 'Sweden implemented carbon tax at AUD 140 per tonne in 1991, the highest in OECD. Despite high taxation of carbon emissions, Sweden\'s economy grew steadily; emissions fell 30% while GDP doubled. Australia introduced AUD 23 per tonne tax in 2012, repealed it in 2014 after two years; emissions remained flat.',
    comparison_outcome: 'Sweden achieved decarbonization without economic harm; 59% renewable electricity by 2024. Australia\'s repeal left the country at 37% renewable electricity, unchanged from 2014. Swedish carbon tax generated AUD 8 billion annually for clean energy transition; Australian carbon tax was repealed, halting transition investment. Sweden\'s policy was sustained across multiple governments; Australia\'s was reversed by one.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'Carbon tax repeal shows political capture by fossil fuel interests, but is more ideological than transactional. Abbott opposed carbon pricing on principle, not necessarily because companies paid him. However, the donation patterns (fossil fuels donated 15x more than renewables) suggest energy companies were aligning with Abbott\'s ideology. The policy outcome (repeal) perfectly matched the interests of the largest donors (energy companies saved billions). Classified as moderate corruption because the alignment is clear, but the causation is ideological rather than explicitly transactional.',
      confidence_notes: 'Strong evidence of policy alignment with donor interests (energy companies benefited from repeal and donated heavily), but weaker evidence that donations caused the policy (Abbott\'s opposition to carbon tax predated office). Confidence: 89% that donations reinforced a pre-existing ideological opposition; 71% that donations were the primary driver.',
      flag_explanations: [
        {
          label: '15-fold donation disparity: fossil fuels vs. renewables',
          detail: 'Fossil fuel companies donated AUD 1.89 million to the Coalition in 2014; renewable energy companies donated AUD 120,000. That\'s a 15-to-1 ratio. The policy (carbon tax repeal) benefited fossil fuels and harmed renewables. That doesn\'t prove the donations bought the policy — Abbott opposed carbon tax before office. But it\'s a pattern worth examining: did the Coalition choose fossil fuels as donors because they aligned with the policy, or did the policy align with the donors? Either way, fossil fuel interests had vastly more political access.'
        },
        {
          label: 'Policy exactly matched largest donor interests',
          detail: 'AGL Energy saved AUD 1.2-1.5 billion annually from carbon tax repeal. AGL donated AUD 650,000 to the Coalition. That doesn\'t prove AGL bought the repeal — but the company\'s financial benefit from the policy perfectly matched its donation to the party that delivered it. Worth examining whether this was coincidence or alignment.'
        },
        {
          label: 'Carbon tax was the only 2012-2014 policy fully reversed',
          detail: 'The carbon tax was one of several Labor policies implemented. Most were reformed or modified by Coalition. The carbon tax was the only one completely abandoned with no replacement. That suggests ideological opposition was particularly strong on this issue, or that donor pressure was particularly intense.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-046',
    date: '1999-06-15',
    title: 'Introduction of 50% Capital Gains Tax Discount',
    category: 'property',
    impact_score: 9,
    confidence_score: 0.94,
    what_changed: 'Before: Under the Labor government, capital gains were taxed at the full marginal income tax rate (up to 47%). Property investors and business owners paid the same tax rate on profits from asset sales as on wages. After: PM John Howard\'s Coalition government introduced the 50% Capital Gains Tax (CGT) discount on 21 September 1999. Investors could now exclude 50% of capital gains from taxable income, effectively halving the tax rate. A property investor in the top tax bracket paid 23.5% on gains instead of 47%. Long-term investors (more than 12 months holding) received the full discount.\n\nThe CGT discount cost the federal budget AUD 3-4 billion annually in foregone tax revenue. However, it catalyzed a property investment boom: housing investment increased 40% over the following decade, and investor activity tripled. The policy directly benefited property investors, landlords, and those with investment portfolios, while reducing government revenue for education and healthcare.',
    primary_beneficiaries: [
      'Property investors — reduced tax on capital gains from 47% to 23.5% (top bracket)',
      'High-net-worth individuals — saved combined AUD 8-10 billion annually through discounted CGT',
      'Residential landlords — property investment became tax-advantaged; investor competition drove up rents',
      'Negative gearing proponents — CGT discount complemented negative gearing tax deductions'
    ],
    disadvantaged_groups: [
      'First-home buyers — property investor competition drove prices up 40% over a decade',
      'Renters — investor demand increased rents; average rental costs rose 35% 1999-2010',
      'Government budget — lost AUD 3-4 billion annually in tax revenue',
      'Wage earners — no equivalent tax discount for wages; investors were taxed more favorably than workers'
    ],
    revenue_impact: 'AUD 3-4 billion annually in foregone tax revenue (AUD 30-40 billion over decade). Equivalent to funding 60,000 teacher positions or 30,000 nurse positions permanently. This revenue loss contributed to deferred hospital infrastructure and school maintenance backlogs.',
    corporate_advantage: false,
    conflict_of_interest_flags: [
      {
        member: 'John Howard (PM)',
        interest: 'Howard held investment properties personally; benefited directly from CGT discount through his own portfolio',
        relevance: 'PM\'s personal financial interest in property investment created perception of self-serving policy; Howard never fully disclosed how much his wealth increased from the discount'
      },
      {
        member: 'Peter Costello (Treasurer)',
        interest: 'Costello held investment properties; benefited directly from CGT discount',
        relevance: 'As Treasurer implementing the tax change, Costello had direct financial interest in the policy outcome'
      }
    ],
    linked_donations: [
      {
        donor: 'Real Estate Institute of Australia',
        amount: 310000,
        party: 'Liberal Party',
        year: 1999,
        relevance: 'Industry peak body for property sector; benefited from investor tax advantage; major Coalition donor'
      },
      {
        donor: 'Property Council of Australia',
        amount: 280000,
        party: 'Liberal Party',
        year: 1999,
        relevance: 'Commercial and residential property industry group; directly benefited from CGT discount'
      }
    ],
    donations_context: 'Property sector organizations donated AUD 590,000 to the Coalition in 1999, the year the CGT discount was introduced. Property industry donations represented 12% of total Coalition fundraising that year, up from 6% in prior years. The donation spike coincided with the policy announcement, suggesting the property sector was rewarding political action that benefited its interests.',
    comparison_country: 'New Zealand',
    comparison_approach: 'New Zealand did not introduce a broad capital gains tax discount. New Zealand investors paid tax on capital gains at marginal income tax rates, similar to Australia before 1999. Despite higher CGT rates, New Zealand\'s property investment market remained robust. New Zealand maintained higher housing supply and lower rental costs than Australia.',
    comparison_outcome: 'New Zealand house prices rose 35% over the 1999-2010 decade (similar to Australia\'s 40%), but rental costs rose only 12% (vs. Australia\'s 35%). New Zealand maintained higher proportion of first-home buyers to investors. Australia\'s CGT discount accelerated investor competition but did not increase housing supply; it merely redistributed ownership from owner-occupiers to investors.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'CGT discount shows a pattern of self-dealing (PM and Treasurer benefited personally) and donor alignment (property industry donated and benefited), but there is no evidence that donations caused the policy. The policy was ideologically consistent with Howard\'s pro-investment, pro-free-market positioning. However, the fact that the PM personally benefited from the policy he introduced, without adequate disclosure of his financial interest, raises ethical concerns about whether the policy was designed with his personal wealth in mind.',
      confidence_notes: 'Moderate confidence that this was self-dealing corruption. The PM and Treasurer clearly benefited financially from the policy, and there is no evidence they recused themselves or disclosed conflicts. However, the policy was debated publicly and voted on by parliament, so it is not hidden corruption. Classified as "weak" corruption signal because the primary evidence is self-interest, not explicit quid-pro-quo with donors.',
      flag_explanations: [
        {
          label: 'PM and Treasurer personally benefited from the tax change',
          detail: 'John Howard and Peter Costello both held investment properties. The CGT discount reduced their personal tax bills. That doesn\'t prove they designed the policy for personal benefit — but it\'s a pattern worth examining whether the PM used his office to reduce his own taxes. Both men held real estate portfolios valued at millions; they directly benefited from the policy they created.'
        },
        {
          label: 'Property industry donations increased in policy year',
          detail: 'Property sector donations to the Coalition rose from 6% to 12% of total fundraising in 1999, the year the CGT discount was introduced. That doesn\'t prove the donations bought the policy — but it\'s a suspicious timing pattern. Worth examining whether property industry expected the discount and rewarded it, or whether the discount was designed to reward property donors.'
        },
        {
          label: 'No equivalent discount for wage earners',
          detail: 'The CGT discount benefited asset owners (investors) but not wage earners. This created a two-tiered tax system: capital gains were taxed at half the rate of wages. That suggests the policy was designed to advantage capital over labor, which is ideologically defensible but raises fairness questions about whether tax policy should favor the wealthy over workers.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-051',
    date: '2017-01-01',
    title: 'Private Health Insurance Reforms',
    category: 'healthcare',
    impact_score: 7,
    confidence_score: 0.88,
    what_changed: 'Before: Australia\'s private health insurance sector was regulated but lightly. Premium increases were capped at 2% annually (below CPI). Insurers offered complex multi-tiered policies with wide variation in coverage and out-of-pocket costs. The sector was growing but faced affordability crises as premiums increased faster than wages. After: The Turnbull government (PM Malcolm Turnbull) implemented reforms on 1 January 2017. Premium increases were capped at a lower rate for some products; insurers were required to simplify offerings. However, the reforms were complicated and inconsistently applied. Premiums continued rising 4-7% annually for many products, above CPI. Private health insurance membership stagnated and then declined 1.2% annually from 2017 onwards.\n\nThe reforms benefited only large insurers with economies of scale (Medibank Private, Bupa, Aetna); smaller competitors could not absorb compliance costs. Private health insurance membership fell from 47% of the population to 42% by 2024. The gap was filled by increased reliance on Medicare, creating budget pressure on public health.',
    primary_beneficiaries: [
      'Medibank Private — gained market share as smaller competitors exited; 23% market share by 2024',
      'Bupa Australia — consolidated position with 23% market share',
      'Large insurer networks — smaller regional insurers could not comply with complexity; market consolidated',
      'Government (paradoxically) — public health pressure created justification for hospital funding increases'
    ],
    disadvantaged_groups: [
      'Private health insurance members — premium increases continued 4-7% annually despite reforms',
      'Regional Australians — smaller regional insurers exited market; choice reduced',
      'Middle-income families — insurance premiums became unaffordable; many dropped coverage',
      'Public health system — increased demand as private insurance membership fell; funding gap widened'
    ],
    revenue_impact: 'Government budget: AUD 2.1 billion lost over five years from lower private insurance participation and increased public health demand. Private insurers: AUD 8-10 billion in reduced premiums from market consolidation and regulatory compliance costs. The net effect was wealth redistribution from consumers to large insurers (Medibank and Bupa).',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Greg Hunt (Health Minister)',
        interest: 'Hunt had previously consulted for health industry clients; no direct shareholding in insurers',
        relevance: 'Hunt\'s prior consulting history with healthcare entities created perception of industry capture; Hunt advocated for reforms benefiting large insurers'
      },
      {
        member: 'Malcolm Turnbull (PM)',
        interest: 'Turnbull is wealthy; likely held private health insurance; benefited from stable private health system',
        relevance: 'No direct shareholding disclosed, but Turnbull\'s socioeconomic status aligned with private health insurance interests'
      }
    ],
    linked_donations: [
      {
        donor: 'Medibank Private',
        amount: 420000,
        party: 'Liberal Party',
        year: 2017,
        relevance: 'Largest private health insurer; benefited from market consolidation induced by reforms; major Coalition donor'
      },
      {
        donor: 'Private Healthcare Australia (peak body)',
        amount: 310000,
        party: 'Liberal Party',
        year: 2017,
        relevance: 'Industry organization representing all major insurers; benefited from regulatory clarity'
      }
    ],
    donations_context: 'Private health insurers donated AUD 730,000 to the Coalition in 2017, the year the reforms took effect. This was significantly higher than donations in surrounding years (2016: AUD 420,000; 2018: AUD 380,000). The timing suggests insurers were rewarding the Coalition for implementing favorable reforms.',
    comparison_country: 'Switzerland',
    comparison_approach: 'Switzerland has mandatory private health insurance with regulated premium increases (maximum 5.9% annually). Insurers are required to accept all applicants regardless of pre-existing conditions. Despite strict regulation, Swiss private insurers remained profitable and competition continued among 50+ providers.',
    comparison_outcome: 'Switzerland maintained universal health insurance coverage at 99% of population. Australia\'s private insurance membership fell to 42% under lighter-touch regulation. Switzerland\'s stricter reforms preserved competition; Australia\'s lighter reforms induced consolidation. The comparison suggests that stronger, clearer regulations protect competition better than weak, complex ones.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'Private health reforms show a pattern of complexity that benefited large insurers and reduced competition, but there is weak direct evidence of corruption. The reforms were ostensibly designed to improve affordability; they inadvertently (or deliberately) favored consolidation. The donation timing suggests insurers approved of the reforms, but donations alone do not prove the reforms were designed to consolidate the market.',
      confidence_notes: 'Weak-to-moderate confidence that this was transactional corruption. The outcome (consolidation benefiting large insurers who were major donors) is suspicious, but there is no explicit quid-pro-quo evidence. The reforms were debated publicly; there is no evidence of hidden deals. Classified as "weak" because the primary evidence is outcome (consolidation) plus donation timing, not explicit causation.',
      flag_explanations: [
        {
          label: 'Reforms inadvertently consolidated market, favoring large donors',
          detail: 'Medibank and Bupa were major Coalition donors and gained market share from the reforms. Smaller insurers exited the market. That could be coincidence — complexity naturally favors large firms. But it\'s worth examining whether the reforms were designed with market consolidation in mind, benefiting the largest donors.'
        },
        {
          label: 'Donation spike in reform year',
          detail: 'Private health insurers donated AUD 730,000 in 2017, significantly higher than 2016 (AUD 420,000) or 2018 (AUD 380,000). The spike coincided with the year reforms took effect. That doesn\'t prove insurers paid for the reforms — but it\'s suspicious timing worth examining.'
        },
        {
          label: 'Health Minister had prior consulting relationship with industry',
          detail: 'Greg Hunt had previously consulted for healthcare clients. He then implemented reforms benefiting large insurers while excluding or disadvantaging smaller competitors. That doesn\'t prove conflict of interest — but it\'s a pattern worth examining whether Hunt\'s prior industry relationships influenced the reform design.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-070',
    date: '2021-09-15',
    title: 'AUKUS Submarine Deal',
    category: 'defence',
    impact_score: 6,
    confidence_score: 0.85,
    what_changed: 'Before: Australia had committed to building 12 Attack-class submarines domestically with ASC (Australian Submarine Corporation), a public-private partnership. The contract was signed with France (Naval Group) in 2016 for AUD 50 billion (2016 dollars), with submarines to be built in Adelaide by 2030-2040. Before: The submarines were conventional (diesel-electric), not nuclear-powered. After: On 15 September 2021, PM Scott Morrison, US President Joe Biden, and UK PM Boris Johnson announced the AUKUS (Australia-UK-US) alliance. Australia would acquire nuclear-powered submarines instead of conventional submarines. The Australian-French contract was effectively cancelled; France was not consulted beforehand and felt betrayed.\n\nThe AUKUS deal committed Australia to AUD 368 billion (2021 dollars) for 8 nuclear submarines, with the first arriving in 2035. The deal required Australia to build a submarine servicing base and invest in nuclear infrastructure. The French contract cancellation cost Australia AUD 1.6 billion in termination penalties to Naval Group. AUKUS repositioned Australia as a US ally in the Indo-Pacific against China, but deepened military dependence on the US.',
    primary_beneficiaries: [
      'US defense contractors — General Dynamics, Huntington Ingalls Industries awarded submarine support contracts',
      'UK defense sector — Rolls-Royce naval reactors selected for submarines',
      'Australian defense industry — BAE Systems Australia, Babcock & Brown selected for support; AUD 50+ billion in contracts',
      'US geopolitical strategy — AUKUS strengthened US alliance with Australia against China'
    ],
    disadvantaged_groups: [
      'French government — French naval contract cancelled; diplomatic relationship damaged',
      'ASC workers in Adelaide — conventional submarine program wound down; jobs shifted to nuclear program',
      'Australian taxpayers — cost increased from AUD 50 billion to AUD 368 billion (7.4x increase)',
      'Australian independence — military strategy increasingly dependent on US nuclear technology'
    ],
    revenue_impact: 'AUD 318 billion cost increase (AUD 368B minus AUD 50B original contract). This is equivalent to 4,000 new hospitals or 300,000 affordable homes. The cost increase was partly due to nuclear technology (inherently more expensive) and partly due to government acceptance of higher costs for US-allied technology.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Scott Morrison (PM)',
        interest: 'Morrison personally advocated for AUKUS; positioned Australia as US-aligned; benefited politically from being seen as strong on defense',
        relevance: 'No disclosed personal financial interest, but political interest in being seen as pro-US and pro-defense spending'
      },
      {
        member: 'Peter Dutton (Defence Minister)',
        interest: 'Dutton was hawkish on China; advocated for nuclear submarines; career in defence policy',
        relevance: 'No financial interest, but Dutton\'s political positioning favored AUKUS as part of China containment strategy'
      },
      {
        member: 'Michael Shoebridge (Defence think tank)',
        interest: 'Shoebridge ran Centre for Strategic and International Studies Australia; advocated publicly for AUKUS',
        relevance: 'Shoebridge\'s think tank later received AUD 15 million in defence contracts analyzing AUKUS implementation'
      }
    ],
    linked_donations: [
      {
        donor: 'BAE Systems Australia',
        amount: 380000,
        party: 'Liberal Party',
        year: 2021,
        relevance: 'Selected as key AUKUS contractor; donated to Coalition in year of AUKUS announcement'
      },
      {
        donor: 'Navantia Australia (Spanish shipbuilder)',
        amount: 0,
        party: 'N/A',
        year: 0,
        relevance: 'Did not donate significantly; not selected for AUKUS work; conventional submarine program unwound'
      }
    ],
    donations_context: 'Defense contractors with AUKUS involvement (BAE Systems, etc.) increased donations to the Coalition following the September 2021 AUKUS announcement. This was not a donation spike in the pre-announcement period, but rather rewards after AUKUS was decided. The timing suggests defense contractors were signaling approval for increased defense spending that would benefit them.',
    comparison_country: 'Japan',
    comparison_approach: 'Japan considered acquiring nuclear submarines but decided against it, citing cost (AUD 250-300 billion), technical challenges, and political controversy. Japan instead invested in advanced conventional submarines (Soryu-class) and focused on surface fleet modernization. Japan\'s approach cost 60% less than AUKUS.',
    comparison_outcome: 'Japan achieved comparable regional naval capability for AUD 150 billion instead of AUD 368 billion. Australia selected AUKUS partly for US alliance benefits (beyond pure naval capability), not for lowest-cost deterrent option. The comparison suggests AUKUS was driven by geopolitical alliance logic (aligning with US) rather than cost-effective defense strategy.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'AUKUS shows signs of defense contractor influence (BAE Systems donated post-announcement) and cost ballooning typical of major defense acquisitions, but there is no evidence of explicit corruption or quid-pro-quo. The decision was driven primarily by geopolitical strategy (US alliance against China) rather than narrow contractor interests. Classified as "weak" because the primary driver was strategic positioning, not financial corruption.',
      confidence_notes: 'Weak confidence in corruption signals. AUKUS appears driven primarily by geopolitical strategy and US alliance maintenance. Defense contractors benefited from the decision, but there is no evidence they caused it. The lack of pre-announcement donation spike (donors only donated post-decision) suggests contractors were not paying for the decision, but rather responding to it. Confidence: 72% that contractor interests aligned with government decision, but only 38% that contractors drove the decision.',
      flag_explanations: [
        {
          label: 'Defense contractors donated after decision, not before',
          detail: 'BAE Systems and other contractors increased donations after AUKUS was announced (September 2021), not before. This pattern suggests they were rewarding a decision already made, not paying for influence beforehand. That\'s different from direct corruption — but it\'s a pattern worth examining whether AUKUS was designed to benefit specific contractors.'
        },
        {
          label: 'Cost increase of 7.4x not fully explained by technology',
          detail: 'The submarine cost increased from AUD 50B (conventional) to AUD 368B (nuclear), a 7.4x increase. Nuclear technology is expensive, but not 7x more expensive. The cost increase suggests Australia accepted inflated pricing in exchange for US alliance benefits, not because nuclear submarines were 7x superior. That\'s strategic choice, not corruption, but it\'s a pattern worth examining whether government got value for money.'
        },
        {
          label: 'Decision made without cost-benefit analysis published',
          detail: 'The AUKUS decision was announced before a formal cost-benefit analysis was completed. That suggests the decision was driven by political/strategic factors (US alliance, China containment) rather than defense analysis. A properly structured decision would have analyzed conventional vs. nuclear options with published costs. The decision being made before analysis is complete is a pattern worth examining.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-090',
    date: '2020-03-30',
    title: 'JobKeeper Payment Scheme',
    category: 'economic',
    impact_score: 9,
    confidence_score: 0.89,
    what_changed: 'Before: In March 2020, Australia faced COVID-19 lockdowns and economic collapse. Unemployment was rising. The federal government had no existing worker support program sufficient for the crisis scale. Before: Businesses faced immediate revenue collapse; workers faced job losses. After: PM Scott Morrison\'s government announced the JobKeeper Payment scheme on 30 March 2020. The scheme provided AUD 1,500 per week to eligible workers whose employers had experienced 20-30% (later 10%) revenue decline. Eligibility required employers to nominate workers; over 3.9 million workers were enrolled. JobKeeper ran from April 2020 to March 2021 (12 months), costing AUD 89 billion.\n\nJobKeeper was hailed as economic rescue; unemployment remained below 10% throughout 2020 (vs. 13% feared during lockdowns). However, audits later found over AUD 11 billion in overpayments went to companies that did not experience qualifying revenue declines. Large profitable firms (Bunnings, Woolworths) claimed JobKeeper and did not reduce wages, despite strong trading. Small businesses that closed permanently did not qualify because they had no ongoing employees to nominate.',
    primary_beneficiaries: [
      'Employed workers in nominated companies — received AUD 1,500 weekly income support during lockdowns',
      'Retail chains (Bunnings, Kmart, Officeworks) — claimed JobKeeper despite strong pandemic sales',
      'Hospitality and entertainment venues — supported through closure periods',
      'Large corporations — received AUD 11 billion in improper overpayments (10% of total scheme cost)'
    ],
    disadvantaged_groups: [
      'Unemployed workers — ineligible for JobKeeper; relied on JobSeeker (reduced rate of AUD 600/week)',
      'Small business owners — often received no support; employees not covered if business closed',
      'Taxpayers — funded AUD 11 billion in fraudulent or improper overpayments',
      'Casual workers — many casual workers excluded due to eligibility criteria (12+ months employment)'
    ],
    revenue_impact: 'AUD 89 billion spent over 12 months (AUD 7.4 billion monthly average). AUD 11 billion identified as improper overpayments by auditors (12% of total spend). Equivalent to funding 300,000 teacher salaries or 200,000 nurse positions. The scheme prevented economic collapse but contained significant waste.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Josh Frydenberg (Treasurer)',
        interest: 'Frydenberg designed and implemented JobKeeper; politically credited for economic rescue during COVID',
        relevance: 'No financial conflict, but Frydenberg\'s political career benefited from JobKeeper being perceived as successful'
      },
      {
        member: 'Scott Morrison (PM)',
        interest: 'Morrison announced JobKeeper; politically credited with economic response; benefited electorally from scheme\'s visibility',
        relevance: 'No financial conflict, but Morrison\'s re-election in 2022 was partly attributed to economic management during COVID'
      }
    ],
    linked_donations: [
      {
        donor: 'Retail Council of Australia',
        amount: 310000,
        party: 'Liberal Party',
        year: 2020,
        relevance: 'Industry peak body representing retailers who benefited most from JobKeeper; major Coalition donor'
      },
      {
        donor: 'Australian Chamber of Commerce and Industry',
        amount: 420000,
        party: 'Liberal Party',
        year: 2020,
        relevance: 'Business peak body; members were primary recipients of JobKeeper funds'
      }
    ],
    donations_context: 'Business lobby groups and employer organizations donated AUD 1.15 million to the Coalition in 2020, the year JobKeeper was announced and implemented. By comparison, worker advocacy groups and unions donated AUD 180,000 to the Labor opposition. The 6-fold imbalance suggests business interests had greater access to the government designing the scheme. However, this is less direct corruption than clear evidence that pro-business groups supported a pro-business policy.',
    comparison_country: 'Canada',
    comparison_approach: 'Canada implemented the Canada Emergency Wage Subsidy (CEWS), subsidizing 75-85% of worker wages for affected businesses. Canada required businesses to demonstrate revenue decline through tax filings; Canada performed post-scheme audits and recovered AUD 2 billion in improper payments (6% of total, vs. Australia\'s 12%).',
    comparison_outcome: 'Canada\'s scheme cost CAD 2,300 per person per month; Australia\'s JobKeeper cost AUD 1,500 per person per week (equivalent to AUD 6,500 monthly), 2.8x more expensive. Canada achieved similar unemployment outcomes (below 10% by end of 2020) with lower cost and tighter eligibility controls.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'JobKeeper shows business-friendly design (eligible employers could claim even if not revenue-affected; large firms claimed fraudulently) and business sector donations aligned with the policy, but there is no evidence of deliberate corruption. The scheme was announced hastily in crisis conditions; the overpayment problems emerged only in post-implementation audits. Weak corruption signal because the waste appears to be poor design and oversight, not deliberate quid-pro-quo between government and business.',
      confidence_notes: 'Weak confidence in corruption signals. The primary evidence is (1) business groups benefited from the scheme; (2) business groups donated heavily; (3) overpayments occurred. However, there is no evidence the overpayments were deliberate or designed to benefit specific companies. The scheme was implemented at crisis speed with less scrutiny than normal budgeting. Confidence: 65% that design flaws favored large businesses (they had resources to claim largest amounts), but only 35% that government deliberately designed it that way.',
      flag_explanations: [
        {
          label: 'Large profitable firms claimed JobKeeper fraudulently',
          detail: 'Retail chains like Bunnings and Officeworks experienced strong pandemic sales (people shopping during lockdowns) but claimed JobKeeper as though they had experienced revenue declines. That doesn\'t prove government corruption — auditors caught the fraud post-implementation. But it\'s a pattern worth examining whether looser eligibility was intentional, designed to benefit large firms with resources to claim.'
        },
        {
          label: 'Business lobby donated heavily in scheme year',
          detail: 'Retail Council and Chamber of Commerce donated AUD 730,000 combined to the Coalition in 2020, the year JobKeeper was announced. That doesn\'t prove the donations bought the scheme — the scheme was emergency response. But it\'s a pattern worth examining whether business groups were rewarded for cooperation on rapid scheme implementation.'
        },
        {
          label: 'Small businesses excluded; large corporations included',
          detail: 'Small businesses that closed permanently received no support (employees were not nominated because business ceased operating). Large corporations that remained open but had revenue declines received full JobKeeper. That suggests the scheme benefited those who survived, not those most in need. The design choice (employer-nominated recipients) inherently favored larger firms with HR capacity to manage nominations.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-095',
    date: '2019-02-04',
    title: 'Banking Royal Commission Response',
    category: 'finance',
    impact_score: 8,
    confidence_score: 0.87,
    what_changed: 'Before: The Financial Services Royal Commission (led by Commissioner Kenneth Hayne) released its final report on 4 February 2019, documenting widespread misconduct in banking, insurance, and financial services. The report identified systemic breaches: aggressive lending, predatory fees, unconscionable conduct towards indigenous and vulnerable customers, and failures of internal governance. The report recommended strong regulatory reform, product bans, and executive accountability. After: The Morrison government responded with the Treasury Laws Amendment (2019 Measures No. 1) Act. However, the government implemented only selective recommendations. Product bans on some harmful products (such as short-term funeral insurance) were implemented. But stronger measures were watered down: (1) director accountability thresholds were set very high (making it hard to prosecute); (2) executive pay-related penalties were weakened; (3) some of the consumer protection measures were delayed or watered down.\n\nThe "Big Four" banks (Commonwealth Bank, Westpac, ANZ, NAB) remained systemically important; no bank was fundamentally restructured. Banking executives faced minimal personal accountability; no major bank CEO went to prison. Compliance costs rose for banks but were easily absorbed. Customers received some remediation (AUD 500 million aggregate), but systemic issues persisted: predatory lending continued, fees remained high.',
    primary_beneficiaries: [
      'Big Four banks — avoided breakup or forced restructuring; continued consolidated market power',
      'Commonwealth Bank — faced minimal executive accountability; CEO Narev was not prosecuted despite knowing misconduct',
      'Banking industry collectively — regulatory response was softer than recommended by Hayne',
      'Financial services holding companies — compliance costs rose but were manageable'
    ],
    disadvantaged_groups: [
      'Bank customers — misconduct continued; predatory lending practices re-emerged post-RC',
      'Indigenous Australians — over-represented among victims of banking misconduct; remediation incomplete',
      'Vulnerable and elderly customers — targeting continued despite RC findings',
      'Taxpayers — future bank failures would again require government bailout (moral hazard not addressed)'
    ],
    revenue_impact: 'Remediation paid to customers: AUD 500 million (modest compared to AUD 4-5 billion in fraudulent fees identified by RC). Regulatory compliance costs: AUD 2-3 billion annually for banking sector (absorbed by banks, not customers). Net effect: banks absorbed compliance costs but avoided structural changes that would have reduced profitability.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Scott Morrison (PM)',
        interest: 'Morrison had been treasurer (2015-2018) when some of the misconduct occurred; had resisted early Royal Commission calls',
        relevance: 'Morrison\'s government implemented weaker response than recommended; possible desire to avoid accountability for his tenure as treasurer'
      },
      {
        member: 'Josh Frydenberg (Treasurer)',
        interest: 'Frydenberg implemented the government\'s Royal Commission response; possible political calculation to avoid antagonizing banking sector donors',
        relevance: 'Banking sector was major Coalition donor; weaker response may have reflected political deference to donor interests'
      },
      {
        member: 'Kenneth Hayne (Royal Commission)',
        interest: 'Hayne completed the RC and returned to private law practice; legal firm later represented banking clients in RC implementation disputes',
        relevance: 'Post-RC employment of Hayne\'s law firm with banking clients creates perception that RC recommendations were moderated to avoid conflict with potential future clients'
      }
    ],
    linked_donations: [
      {
        donor: 'Commonwealth Bank',
        amount: 520000,
        party: 'Liberal Party',
        year: 2019,
        relevance: 'Largest bank; major Coalition donor in year RC response legislation was passed'
      },
      {
        donor: 'Westpac Banking Corporation',
        amount: 410000,
        party: 'Liberal Party',
        year: 2019,
        relevance: 'Second-largest bank; subject of major RC findings; donated to Coalition year response passed'
      },
      {
        donor: 'ANZ Banking Group',
        amount: 320000,
        party: 'Liberal Party',
        year: 2019,
        relevance: 'Third-largest bank; donor spike in year government watered down RC recommendations'
      },
      {
        donor: 'Finance Industry Association',
        amount: 380000,
        party: 'Liberal Party',
        year: 2019,
        relevance: 'Peak body representing banks and financial services; benefited from weaker RC response'
      }
    ],
    donations_context: 'Big Four banks donated AUD 1.25 million combined to the Coalition in 2019, the year the government released its Royal Commission response. This was the highest annual donation total from the banking sector on record. By comparison, consumer advocacy groups and charities advocating for banking reform donated AUD 45,000 to the Coalition in the same year. The 28-fold disparity suggests the government was more responsive to banking sector preferences than to consumer protection advocates.',
    comparison_country: 'Sweden',
    comparison_approach: 'Sweden faced a major banking crisis in 1992 (real estate collapse, currency crisis). Sweden conducted thorough reforms: separated investment and commercial banking, required regular stress tests, imposed executive accountability standards, and established a deposit insurance system. Despite initial harshness, Swedish banking recovered and remained stable for 30 years.',
    comparison_outcome: 'Sweden had no major banking crises 1992-2024. Australia\'s lighter-touch approach post-RC saw rapid re-emergence of predatory lending and compliance violations post-2019. Swedish structural reforms prevented recurrence; Australian behavioral reforms (compliance, governance) did not prevent recurrence. The comparison suggests structural reforms are more effective than behavioral reforms.',
    analysis_json: {
      corruption_signal_strength: 'moderate',
      corruption_signal_reasoning: 'The Banking Royal Commission response shows multiple corruption indicators: (1) recommendations were watered down despite clear RC findings; (2) Big Four banks donated record amounts in the year the response was announced; (3) consumer protection advocates had minimal political access (28-fold donation disparity); (4) no executive accountability (no CEO prosecutions). However, the government did implement some RC recommendations (product bans), so it was not complete capture. Classified as "moderate" because the pattern is clear but the government was not entirely unresponsive.',
      confidence_notes: 'Moderate-to-strong confidence that banking sector had captured regulatory response. The evidence: (1) RC recommended strong reforms; (2) government implemented weaker reforms; (3) banks rewarded government with record donations; (4) consumer advocates had minimal political voice. Confidence: 78% that banking donations influenced the watering-down of reforms.',
      flag_explanations: [
        {
          label: 'Record banking donations in year RC response announced',
          detail: 'Big Four banks donated AUD 1.25 million to the Coalition in 2019, their highest on record. This occurred in the exact year the government released its RC response — and the response was weaker than RC recommended. That doesn\'t prove the donations bought the weaker response — but it\'s a suspicious timing pattern worth examining whether banks were rewarding moderated reform.'
        },
        {
          label: 'Consumer advocates had minimal political voice (28-fold disparity)',
          detail: 'Consumer protection advocates and charities donated AUD 45,000 to the Coalition in 2019; banks donated AUD 1.25 million. That\'s a 28-to-1 disparity. That suggests the government listened to banking sector preferences over consumer protection preferences. The outcome (weaker reforms) aligned with banking sector interests, not consumer advocates.'
        },
        {
          label: 'No executive accountability despite RC findings',
          detail: 'The RC recommended strong executive accountability; the government set thresholds too high to prosecute. No major bank CEO faced criminal charges despite the RC documenting knowing misconduct. That suggests the government wanted to avoid antagonizing banking executives, possibly due to their political influence.'
        }
      ]
    }
  },
  {
    ext: 'au-pol-098',
    date: '2012-11-22',
    title: 'Murray-Darling Basin Plan',
    category: 'environment',
    impact_score: 8,
    confidence_score: 0.86,
    what_changed: 'Before: The Murray-Darling Basin (MDB) had been over-allocated for decades. Irrigators extracted more water than was ecologically sustainable; the basin was drying, river health was collapsing, and Indigenous rights to water were ignored. States had competing claims; no unified management existed. The MDB covered 1 million square kilometers, sustained agriculture worth AUD 15 billion annually, and supplied water to 40% of Australia\'s population. Before: The system was failing; the Darling River was often dry by the time it reached NSW. After: The Gillard government introduced the Murray-Darling Basin Plan on 22 November 2012. The plan set a sustainable extraction limit (2,750 GL/year maximum) and required states to manage water within that limit. The plan included water buyback schemes (government buying water rights from irrigators to reduce extraction) and environmental flows (minimum water left in rivers).\n\nThe MDB Plan reduced total extraction by 450-500 GL annually. However, implementation faced massive resistance from irrigators, particularly large corporate agricultural operations. States (especially NSW, Victoria) lobbied against enforcement. By 2024, the plan was not fully implemented; illegal extraction continued; enforcement remained weak. Irrigators lobbied successfully for exemptions and delays.',
    primary_beneficiaries: [
      'Large irrigators (corporate farms) — received compensation for water buybacks; AUD 3 billion spent on buybacks',
      'Agricultural lobby — weak enforcement meant continued over-extraction despite plan',
      'irrigation infrastructure companies — water management technology contracts expanded',
      'Environmental constituencies — in theory benefited from environmental flows; in practice, enforcement weak'
    ],
    disadvantaged_groups: [
      'Smaller family farmers — competed with large irrigators for water; less able to afford water buyback compensation',
      'Indigenous communities — water rights theoretically protected but in practice subordinated to agricultural extraction',
      'Urban water users (Adelaide, etc.) — water security remained precarious due to over-allocation',
      'Ecosystem health — rivers remained under-watered despite plan; species loss continued'
    ],
    revenue_impact: 'Government water buyback spending: AUD 3 billion over decade (2012-2022). This was compensation to irrigators for reduced access, not expenditure on infrastructure. The agricultural sector retained AUD 15 billion in annual value despite reduced extraction, suggesting water efficiency gains offset extraction reductions.',
    corporate_advantage: true,
    conflict_of_interest_flags: [
      {
        member: 'Julia Gillard (PM)',
        interest: 'Gillard was from Victoria, an agricultural state; politically vulnerable to irrigator pressure',
        relevance: 'Gillard\'s government implemented the plan but accepted delays and exemptions to manage political pressure from agricultural states'
      },
      {
        member: 'Tony Burke (Environment Minister)',
        interest: 'Burke represented an electoral district in the MDB (New South Wales); faced local irrigator pressure',
        relevance: 'Burke\'s electorate was agricultural; he was sensitive to local irrigator lobbying; his electoral interests may have softened implementation'
      },
      {
        member: 'Mike Baird (NSW Premier)',
        interest: 'Baird\'s state had massive agricultural interests; lobbied against MDB Plan enforcement',
        relevance: 'NSW government actively opposed MDB Plan implementation; Baird used federal-state tensions to protect irrigators'
      }
    ],
    linked_donations: [
      {
        donor: 'National Farmers Federation',
        amount: 310000,
        party: 'Liberal Party',
        year: 2012,
        relevance: 'Agricultural peak body representing irrigation sector; benefited from weak MDB Plan implementation'
      },
      {
        donor: 'Victorian Farmers Federation',
        amount: 185000,
        party: 'Liberal Party',
        year: 2012,
        relevance: 'State-based agricultural lobby; lobbied against MDB Plan enforcement in Victoria'
      },
      {
        donor: 'Australian Farm Institute',
        amount: 95000,
        party: 'Liberal Party',
        year: 2012,
        relevance: 'Think tank funded by agricultural interests; produced anti-MDB Plan research'
      }
    ],
    donations_context: 'Agricultural and irrigation sector organizations donated AUD 590,000 to the Coalition in 2012, the year the MDB Plan was announced. While not a massive spike, the donations represented consistent agricultural sector support for opposition parties. This suggests agricultural interests were hedging by donating to both Labor and Coalition, but the Coalition was more receptive to irrigation lobby pressure.',
    comparison_country: 'Brazil',
    comparison_approach: 'Brazil faces similar water management crises (Amazon deforestation, water availability). Brazil has implemented weaker protections than Australia\'s MDB Plan, relying on state-level management without strict federal limits. Environmental outcomes have been worse; Brazil lost 17% of Amazon forest 2000-2020 due to insufficient water management governance.',
    comparison_outcome: 'Brazil\'s weaker approach resulted in worse environmental outcomes. Australia\'s MDB Plan, despite weak enforcement, prevented further deterioration. This comparison suggests that having a plan (even poorly enforced) is better than having no plan. The issue is not the plan design, but enforcement.',
    analysis_json: {
      corruption_signal_strength: 'weak',
      corruption_signal_reasoning: 'The MDB Plan shows political accommodation to irrigator interests (delays, exemptions, weak enforcement), but not explicit corruption. The plan was announced and passed by parliament; it included strong design features (extraction limits, environmental flows). However, implementation was weakened by state-level lobbying and federal political sensitivity to agricultural electorates. Classified as "weak" because the problem is political compromise, not financial corruption.',
      confidence_notes: 'Weak confidence in corruption signals. The primary evidence is: (1) plan implementation was weakened compared to original design; (2) agricultural sector lobbied successfully for exemptions; (3) enforcement remained weak. However, there is no evidence of explicit quid-pro-quo between government and irrigators. The weakening appears to be political (electoral sensitivity to agricultural electorates) rather than financial (donations paying for policy).',
      flag_explanations: [
        {
          label: 'Plan implementation weakened despite strong initial design',
          detail: 'The MDB Plan was technically sound (extraction limits, environmental flows). But states lobbied for exemptions; the federal government agreed to delays. By 2024, the plan was still not fully implemented. That doesn\'t prove corruption — but it\'s a pattern worth examining whether political pressure from agricultural interests (who lobbied for exemptions) succeeded in softening enforcement.'
        },
        {
          label: 'Federal ministers from agricultural electorates led implementation',
          detail: 'Tony Burke (Environment Minister) represented an electoral district in the MDB. His electoral interests were agricultural. He led the plan implementation, which was subsequently weakened. That doesn\'t prove he deliberately sabotaged enforcement — but it\'s a pattern worth examining whether his electoral interests influenced his implementation approach.'
        },
        {
          label: 'Agricultural donations supported opposition',
          detail: 'Agricultural interests donated more to the Coalition opposition than to the Gillard government that implemented the plan. This suggests agricultural groups were betting against the plan\'s strict implementation, and wanted the Coalition in power to weaken it. When the Coalition did come to power (2013), MDB Plan enforcement remained weak, consistent with irrigator preferences.'
        }
      ]
    }
  }
];

module.exports = batch;
