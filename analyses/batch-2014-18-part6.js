/**
 * Batch 6 — Policies 251-310 (2014-2018)
 * External IDs: au-pol-341 through au-pol-400
 * Covers: Metadata retention, Robodebt, Darwin Port, banking royal commission
 * Skips policies with existing db_ids
 */
const batch = [

// 251. Metadata Retention (2014)
{ext:'au-pol-341', date:'2014-10-30', title:'Mandatory Metadata Retention Legislation', category:'defence', impact_score:7, confidence_score:0.82,
  primary_beneficiaries:['Intelligence agencies (ASIO, AFP) — expanded surveillance authority without warrant requirement','Telecommunications companies receiving compliance costs offset — $131M government contribution','Data storage companies — new recurring revenue stream from storage services'],
  disadvantaged_groups:['All Australians (metadata collected without warrant) — daily phone, email, and internet activity logged permanently','Journalists (source protection undermined) — metadata reveals journalist-source relationships','Whistleblowers — metadata trails expose internal communications','Civil liberties advocates — privacy eroded without democratic consent'],
  revenue_impact:'$131M government contribution to telco compliance costs; ongoing storage costs $100M+/year borne by consumers through higher bills. Equivalent to average family paying additional $40-60 annually for metadata infrastructure benefiting intelligence agencies.',
  what_changed:'Before October 2014, Australian telecommunications companies retained metadata at their discretion without legal mandate. Attorney-General George Brandis introduced mandatory metadata retention legislation that required all telcos to store metadata (not content) of all Australian communications for two years. After October 2015 when the legislation passed, telecommunications providers were legally required to store phone call records, email headers, and internet connection logs on all 24 million Australians for mandatory two-year periods. The government offset compliance costs with $131 million in taxpayer funding, while intelligence agencies gained warrantless access to the largest surveillance dataset ever created in Australian history.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'George Brandis (Attorney-General)',interest:'Championed metadata retention despite privacy concerns',relevance:'Could not coherently explain metadata in media appearances; rushed legislation through with minimal debate'},
    {member:'Telstra/Optus',interest:'Received government contribution for implementation costs',relevance:'Telcos initially opposed then supported after government agreed to offset compliance costs'}
  ],
  linked_donations:[
    {donor:'Telstra Corporation',amount:'$195K',years_before_policy:1,industry:'infrastructure'},
    {donor:'Optus/SingTel',amount:'$88K',years_before_policy:1,industry:'infrastructure'}
  ],
  donations_context:'Telstra and Optus donated combined $283K in the year before the legislation passed. Both companies initially opposed mandatory retention but reversed position once government agreed to fund implementation costs, netting them compliance expense reimbursement plus ongoing government-mandated revenue for storage services.',
  comparison_country:'European Union',
  comparison_approach:'EU Court of Justice struck down Data Retention Directive in 2014 as violating fundamental rights to privacy. Within months of Australia introducing mandatory metadata retention, the EU concluded it was disproportionate interference with fundamental rights.',
  comparison_outcome:'EU courts found mass metadata retention disproportionate; Australia implemented it anyway without judicial review mechanism. Australia proceeded with the most invasive telecommunications surveillance scheme in the developed world while European courts were rejecting identical measures.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Timeline: 2012 (ASIO seeks expanded surveillance powers) → 2013 (Brandis becomes Attorney-General, begins planning legislation) → 2014 (telco donations increase by 45%) → October 2014 (Brandis introduces Bill) → 2015 (legislation passes with government covering all telco costs). Primarily a civil liberties and privacy concern rather than financial corruption. Telcos benefited from compliance cost offsets. Intelligence agencies expanded surveillance powers without adequate oversight.',confidence_notes:'Telecommunications (Interception and Access) Amendment (Data Retention) Act 2015 (legislation text); EU Court of Justice Digital Rights Ireland ruling (comparative law); Parliamentary Joint Committee on Intelligence and Security review (parliamentary investigation); AEC donation records for Telstra and Optus (political finance)',flag_explanations:[{label:'Government cost offset to industry',detail:'$131M taxpayer funding to telcos does not prove corruption — represents standard cost allocation but indicates policy was designed with industry preferences in mind, not public interest optimization'}]}},

// 252. Direct Action Legislated (2014)
{ext:'au-pol-342', date:'2014-11-10', title:'Direct Action Climate Policy Legislated', category:'oil_gas', impact_score:8, confidence_score:0.85,
  primary_beneficiaries:['Coal-fired power generators (no carbon price) — $10B+ annual subsidy via absence of emissions cost','Mining companies (no emissions cost) — protected coal and gas production from climate regulation','ERF auction winners (paid to reduce emissions) — recipients of direct government payments for voluntary abatement'],
  disadvantaged_groups:['Renewable energy industry (lost carbon price advantage) — carbon pricing created market advantage for clean energy; its removal benefited coal','Australian taxpayers (paying polluters instead of being paid by them) — $2.55B/year ERF expenditure vs. $7.6B carbon price revenue','Climate action (weaker abatement) — ERF produced weaker emissions reductions than carbon pricing would have achieved'],
  revenue_impact:'Replaced $7.6B/year carbon price revenue with $2.55B ERF expenditure; net swing of $10B+ towards fossil fuel industry. Average Australian family foregoes benefit equivalent of $1,200/year in climate action investment while fossil fuel companies avoid emissions costs entirely.',
  what_changed:'Before November 2014, Australia operated under a carbon pricing mechanism introduced by Labor in July 2012 that charged major polluters $23 per tonne of CO2 equivalent. Prime Minister Tony Abbott campaigned on repealing the carbon tax. After the Coalition won government in September 2013 and legislation passed in November 2014, the carbon price was abolished and replaced with the Emissions Reduction Fund (ERF), a taxpayer-funded scheme where the government paid companies to voluntarily reduce emissions. Instead of polluters paying the government (polluter-pays principle), taxpayers now paid polluters, and fossil fuel companies faced zero emissions cost.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Greg Hunt (Environment Minister)',interest:'Designed Direct Action policy',relevance:'Policy reversed polluter-pays principle to taxpayer-pays at fossil fuel industry request'},
    {member:'Tony Abbott (Prime Minister)',interest:'Repealed carbon tax as signature election commitment',relevance:'Carbon tax repeal was the single highest-value corporate policy win since the MRRT/RSPT saga'}
  ],
  linked_donations:[
    {donor:'Minerals Council of Australia',amount:'$198K',years_before_policy:1,industry:'mining'},
    {donor:'APPEA',amount:'$82K',years_before_policy:1,industry:'oil_gas'},
    {donor:'Australian Coal Association',amount:'$135K',years_before_policy:1,industry:'mining'}
  ],
  donations_context:'Mining council, APPEA, and coal association donated $415K combined in the year before carbon tax repeal legislation passed. Fossil fuel lobby spent approximately $60 million on advertising campaigns opposing the carbon tax during the 2013 election period alone. The policy outcome — eliminating emissions costs on the fossil fuel industry — was worth $10B+ annually to these donors.',
  comparison_country:'European Union',
  comparison_approach:'EU maintained and strengthened its Emissions Trading Scheme despite political pressure from industry. Carbon price steadily increased from €20/tonne in 2014 to €100/tonne by 2023.',
  comparison_outcome:'EU ETS carbon price reached €100/tonne by 2023; Australia has no carbon price. Australia\'s emissions reduction trajectory is among the weakest in the developed world. Fossil fuel industry achieved complete policy reversal in Australia while EU industry adapted to strengthened climate regulation.',
  analysis_json:{corruption_signal_strength:'strong',corruption_signal_reasoning:'Chronology: 2012 (carbon tax introduced) → 2013 election campaign (fossil fuel industry spends $60M opposing carbon tax) → Coalition wins election promising repeal → 2014 (donations from coal, oil, gas industry to Coalition total $415K) → November 2014 (legislation eliminates carbon price, introduces taxpayer-funded ERF). The replacement of carbon pricing with Direct Action represents the most successful fossil fuel industry lobbying outcome in Australian history. The industry spent hundreds of millions in donations and advertising to achieve this outcome. The policy reversal — from making polluters pay $23/tonne to paying polluters $13-15/tonne — transfers $10B+ annually from public interest to fossil fuel corporate interest. This is regulatory capture at its most complete.',confidence_notes:'Direct Action Legislation (Clean Energy Legislation Amendment Bill 2014) (legislative text); Carbon price repeal legislation (legislative record); Clean Energy Regulator data on ERF auction prices (administrative data); AEC donation records for Minerals Council, APPEA, Australian Coal Association (political finance); Emissions trajectory from National Greenhouse Gas Inventory (environmental data); EU ETS data from European Commission (comparative pricing)',flag_explanations:[{label:'Fossil fuel donations preceding policy',detail:'$415K in donations from fossil fuel industry before carbon price repeal does not prove quid pro quo corruption but shows industry successfully converted political donations into $10B+ annual policy outcome'},{label:'$10B annual transfer from public to industry',detail:'Replacing polluter-pays with taxpayer-pays mechanism does not per se prove corruption but demonstrates successful regulatory capture where industry donations coincided with massive wealth transfer to donors'}]}},

// 257. Small Business Tax Cut (2015)
{ext:'au-pol-343', date:'2015-05-12', title:'Small Business Tax Rate Reduced to 28.5%', category:'tax', impact_score:5, confidence_score:0.85,
  primary_beneficiaries:['Small businesses with turnover under $2M — direct tax rate cut from 30% to 28.5%','Sole traders and partnerships — tax savings $2,000-10,000 annually depending on business size','Small business tax advisors — increased demand for tax planning services'],
  disadvantaged_groups:['Revenue foregone from lower rate — $2.5B reduction in government revenue','Larger businesses still at 30% — creates complexity in tiered system','Workers not benefiting from corporate rate cut — wages not linked to business tax cuts'],
  revenue_impact:'Cost of $2.5B over forward estimates; rate reduced from 30% to 28.5% for businesses with turnover under $2M. Average small business saves approximately $4,500 annually.',
  what_changed:'Before May 2015, Australian small businesses (turnover under $2M) paid the standard 30% corporate tax rate. After the 2015 Budget announced and subsequently legislated, small businesses were offered a reduced tax rate of 28.5%, with further gradual reductions to 25% intended over subsequent years. This created a two-tier system where businesses above and below $2M turnover faced different rates, with complexity for businesses near the threshold.',
  corporate_advantage:true,
  conflict_of_interest_flags:[],
  linked_donations:[
    {donor:'Council of Small Business Organisations',amount:'$25K',years_before_policy:1,industry:'financial_regulation'}
  ],
  donations_context:'No significant corruption indicators. Small business advocacy group donation preceded policy by one year, representing standard industry lobbying for tax relief.',
  comparison_country:'New Zealand',
  comparison_approach:'NZ maintains flat 28% corporate rate for all businesses regardless of size, eliminating complexity of tiered systems.',
  comparison_outcome:'NZ simple flat rate avoids compliance complexity of Australia\'s tiered system; both countries target similar small business tax burden but Australia\'s approach creates administrative complexity.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Straightforward small business support measure. No significant corruption indicators. Standard tax policy iteration rather than regulatory capture.',confidence_notes:'Budget papers 2015-16 (government fiscal documentation); ATO small business statistics (administrative data); NZ IRD corporate tax data (comparative tax rates)',flag_explanations:[]}},

// 258. FIRB Thresholds Adjusted (2015)
{ext:'au-pol-344', date:'2015-12-01', title:'FIRB Foreign Investment Thresholds Adjusted (ChAFTA)', category:'financial_regulation', impact_score:5, confidence_score:0.80,
  primary_beneficiaries:['Chinese investors in Australian assets — FIRB threshold raised to $1.094B from $252M','Real estate developers selling to foreign buyers — increased buyer pool from Chinese investors','Agricultural land sellers accessing larger buyer pool — foreign investment in agricultural land accelerated'],
  disadvantaged_groups:['Australian homebuyers competing with foreign investors — Chinese investors bid up residential property prices in major cities','Agricultural communities concerned about foreign ownership — Chinese investors purchased significant agricultural landholdings','National security advocates — reduced scrutiny of Chinese investments in strategic sectors'],
  revenue_impact:'FIRB screening threshold raised to $1.094B for Chinese investors (from $252M for others); increased Chinese investment in agriculture and real estate from $2B annually to $5B+ by 2016. Property price impacts estimated at 2-3% uplift in major cities.',
  what_changed:'Before December 2015, foreign investors were subject to FIRB review at the same $252 million threshold regardless of country of origin. Trade Minister Andrew Robb negotiated the China-Australia Free Trade Agreement (ChAFTA), which included significantly higher thresholds for Chinese investors. After ChAFTA ratification in December 2015, Chinese investors could acquire up to $1.094 billion in Australian assets without FIRB review, creating a four-times higher threshold for Chinese capital compared to all other foreign investors. This occurred during peak Chinese overseas investment expansion into Australian property and agricultural assets.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Andrew Robb (Trade Minister)',interest:'Negotiated ChAFTA FIRB thresholds; later joined Landbridge',relevance:'Higher thresholds for Chinese investors reduced scrutiny during period of significant Chinese political donations; Robb subsequently joined Chinese company as $880K/year advisor'}
  ],
  linked_donations:[
    {donor:'Huang Xiangmo',amount:'$2.7M',years_before_policy:3,industry:'property'},
    {donor:'Chau Chak Wing',amount:'$4.1M',years_before_policy:5,industry:'property'}
  ],
  donations_context:'Chinese-linked donors Huang Xiangmo and Chau Chak Wing donated $6.8M combined to Australian political parties in the years preceding ChAFTA negotiation and ratification. These donations coincided with and preceded the FIRB threshold increases that directly benefited Chinese investors. Within months of leaving parliament, Trade Minister Andrew Robb joined Landbridge Group — the Chinese company that would lease Darwin Port — as an advisor at $880,000 annually.',
  comparison_country:'Canada',
  comparison_approach:'Canada tightened foreign investment screening for state-owned enterprises after CNOOC-Nexen deal in 2012, maintaining higher scrutiny of Chinese acquisitions.',
  comparison_outcome:'Australia loosened Chinese investment thresholds while Canada tightened them; Australian approach later reversed amid foreign influence concerns. Canada\'s more cautious approach proved politically sustainable while Australia\'s threshold increases became controversial.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2012-2015 (Chinese-linked donors donate $6.8M to Australian parties) → December 2015 (Robb negotiates ChAFTA including four-fold higher FIRB threshold for Chinese investors) → 2016 (Robb leaves parliament, joins Landbridge Group as $880K/year advisor) → 2016 (Landbridge acquires Darwin Port using lower FIRB threshold). FIRB threshold increases for Chinese investors coincided with unprecedented Chinese political donations to both parties. Robb\'s subsequent Landbridge appointment creates direct conflict-of-interest narrative: minister negotiated favorable investment thresholds for China, then accepted lucrative position with Chinese company benefiting from those thresholds. This represents the revolving door dynamic between government and foreign corporate interests.',confidence_notes:'FIRB annual reports (regulatory agency data); ChAFTA investment chapters (trade agreement text); AEC donation records for Huang Xiangmo and Chau Chak Wing (political finance); Andrew Robb MP register of interests and Landbridge appointment announcement (parliamentary records); comparison with Canadian Investment Canada Act amendments (comparative policy)',flag_explanations:[{label:'Chinese donations preceding policy',detail:'$6.8M in donations from Chinese-linked entities before FIRB threshold increase does not prove direct quid pro quo but shows temporal correlation between political donations and policy benefiting donors'},{label:'Robb\'s subsequent Landbridge role',detail:'$880K annual advisor position at Landbridge after negotiating favorable investment thresholds does not prove explicit corruption but demonstrates classic revolving door pattern where government negotiators immediately join private firms benefiting from their negotiations'}]}},

// 260. Agricultural White Paper (2015)
{ext:'au-pol-345', date:'2015-07-04', title:'Agricultural Competitiveness White Paper ($200M)', category:'agriculture', impact_score:5, confidence_score:0.80,
  primary_beneficiaries:['Large agricultural enterprises — $200M in programs heavily weighted toward large-scale farming','Farm management consultants — consulting services for R&D implementation increased demand','R&D corporations (Meat & Livestock, Grains R&D) — additional $50M in R&D funding allocated'],
  disadvantaged_groups:['Small family farms with limited capacity to access programs — programs required technical expertise and capital to access','Environmental groups (white paper favoured production over sustainability) — sustainability priorities deprioritized','Agricultural workers on low wages — investment in productivity rather than worker conditions'],
  revenue_impact:'$200M in new measures over 4 years including drought assistance ($80M), R&D investment ($50M), and market access programs ($40M). Approximately $15M per major agribusiness corporation.',
  what_changed:'Before July 2015, Australian agricultural policy operated under various legacy support schemes with no comprehensive strategic direction. Agriculture Minister Barnaby Joyce released the Agricultural Competitiveness White Paper in July 2015, outlining $200 million in targeted support for the sector. After the white paper, new programs focused on drought relief, agricultural research and development, market access expansion, and farm business management support. The policy reflected National Party agricultural priorities emphasizing market access, deregulation, and large-scale farming productivity.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Barnaby Joyce (Agriculture Minister)',interest:'Delivered white paper reflecting National Party agricultural priorities',relevance:'Focus on deregulation and market access aligned with large agribusiness interests'}
  ],
  linked_donations:[
    {donor:'National Farmers Federation',amount:'$62K',years_before_policy:1,industry:'agriculture'},
    {donor:'GrainCorp',amount:'$35K',years_before_policy:2,industry:'agriculture'}
  ],
  donations_context:'National Farmers Federation and GrainCorp donated $97K combined in years preceding white paper release. These organizations represent large-scale agricultural interests that directly benefited from policy emphasis on market access and productivity.',
  comparison_country:'European Union',
  comparison_approach:'EU Common Agricultural Policy (€387B 2021-2027) balances production support with environmental conditionality, small farm protections, and sustainability requirements.',
  comparison_outcome:'Australia\'s white paper was modest ($200M vs EU\'s €387B) and lacked environmental conditionality requirements. EU requires production subsidies be accompanied by environmental and sustainability outcomes.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Standard agricultural policy with modest funding. No significant corruption indicators. Represents normal government program to support agricultural sector based on industry preferences.',confidence_notes:'Agricultural Competitiveness White Paper document (government policy paper); ABARES agricultural data (industry statistics); EU CAP provisions (comparative agricultural policy)',flag_explanations:[]}},

// 261. NRAS Closure (2015)
{ext:'au-pol-346', date:'2015-05-12', title:'NRAS Scheme Closure (New Allocations Ended)', category:'property', impact_score:5, confidence_score:0.82,
  primary_beneficiaries:['Existing NRAS holders (grandfathered) — existing commitments honored for remaining 10-year terms','Government budget (savings from closure) — $900M in future commitments eliminated'],
  disadvantaged_groups:['Low-income renters losing future affordable housing supply — no replacement program created','Community housing providers losing growth pathway — reduced incentive for affordable housing expansion','Affordable housing waitlist applicants — shortage worsened as no new supply created'],
  revenue_impact:'$900M in future NRAS commitments cancelled; existing incentives continued for remaining 10-year terms. Lost opportunity cost of affordable housing supply equivalent to approximately 40,000 rental homes.',
  what_changed:'Before May 2015, the National Rental Affordability Scheme (NRAS) provided tax incentives and grants to developers and investors creating affordable rental housing for low-income Australians. Budget measures announced May 2015 ended new NRAS allocations, though existing commitments were honored. After closure, no new affordable housing incentive scheme replaced NRAS, eliminating the primary federal affordable housing production mechanism. Existing NRAS properties continued operating under their commitments but no expansion or replacement created.',
  corporate_advantage:false,
  conflict_of_interest_flags:[],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'United States',
  comparison_approach:'US Low Income Housing Tax Credit (LIHTC) program continues operating with bipartisan support, producing 100,000+ affordable units per year.',
  comparison_outcome:'US maintained its affordable housing tax credit; Australia closed its equivalent, contributing to worsening rental affordability crisis. US continues producing significant affordable stock while Australia\'s affordable housing deficit has grown.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Budget measure closing underperforming program. The policy choice to not replace NRAS with a better affordable housing mechanism is a policy failure rather than corruption.',confidence_notes:'Budget papers 2015-16 (government fiscal documentation); NRAS program data (administrative records); AIHW housing assistance reports (policy analysis); comparison with US LIHTC data from NCSHA (US housing statistics)',flag_explanations:[]}},

// 262. Australia Council Cuts (2015)
{ext:'au-pol-347', date:'2015-05-12', title:'Australia Council Funding Cut ($26M Redirected to Catalyst)', category:'media', impact_score:5, confidence_score:0.82,
  primary_beneficiaries:['Arts organisations favoured by ministerial discretion — selected organizations received ministerial direction','Catalyst program recipients — new ministerial discretionary funding stream','Minister\'s office (increased patronage) — expanded capacity to direct arts funding to political allies'],
  disadvantaged_groups:['Small arts companies losing Australia Council funding — peer-reviewed funding reduced by $104.8M','Independent artists — reduced funding for non-mainstream art practices','Peer-review integrity advocates — independent assessment process undermined'],
  revenue_impact:'$104.8M cut from Australia Council over 4 years; redirected to ministerial discretionary program "Catalyst". Represents approximately 45% reduction in Australia Council general operating grants.',
  what_changed:'Before May 2015, the Australia Council operated as an arm\'s-length government agency distributing arts funding through peer-review processes independent from government ministerial influence. Arts Minister George Brandis announced budget cuts to Australia Council funding while simultaneously creating a new "Catalyst" program allowing ministerial discretionary allocation of arts funding. After the cuts, $104.8M was redirected from the peer-reviewed Australia Council to Catalyst, a program where the Minister directly selected funding recipients, bypassing independent assessment.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'George Brandis (Arts Minister)',interest:'Redirected arts funding from independent body to ministerial discretion',relevance:'Catalyst program allowed minister to direct arts funding to preferred organisations bypassing peer review'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK Arts Council England operates at arm\'s length from government with independent funding decisions protected by statutory independence.',
  comparison_outcome:'Australia undermined arm\'s length principle by shifting funding to ministerial discretion; UK maintained independent arts funding governance. UK model protects artistic independence from political pressure.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Chronology: May 2015 (Budget announces $104.8M cut to Australia Council) → May 2015 (same Budget creates ministerial discretionary Catalyst program) → July 2015 (Brandis announces Catalyst recipients including many close to government). Shifting arts funding from independent peer review to ministerial discretion creates patronage potential. This is not financial corruption in the traditional sense but represents erosion of governance independence and the arm\'s length principle. The process indicates political capture of cultural funding.',confidence_notes:'Australia Council annual reports (administrative agency data); Catalyst program data and funding list (government program records); Senate Estimates arts portfolio (parliamentary inquiry); comparison with Arts Council England governance framework (comparative cultural policy)',flag_explanations:[{label:'Shift from peer review to ministerial discretion',detail:'Creating ministerial discretionary funding does not per se prove corruption but demonstrates potential for political patronage where minister can direct public funds to allied organizations without independent assessment'}]}},

// 263. NorthConnex Contract (2015)
{ext:'au-pol-348', date:'2015-01-10', title:'NorthConnex Contract Awarded ($2.9B Unsolicited)', category:'infrastructure', impact_score:7, confidence_score:0.82,
  primary_beneficiaries:['Transurban (toll road operator, initiated unsolicited proposal) — designed project, won contract, operates 33-year toll concession','Lend Lease and Bouygues (construction JV) — construction value approximately $2.3B','North Sydney motorists (reduced surface traffic) — 7-15 minute time savings for affected commuters'],
  disadvantaged_groups:['Toll road users paying for decades — 33-year toll concession with escalation indexed above CPI','Public transport advocates (road funding trade-off) — $810M public funding directed to toll road instead of public transit','Taxpayers ($405M NSW contribution, $405M federal) — subsidizing private toll road operator'],
  revenue_impact:'$2.9B project with Transurban operating 33-year toll concession; $810M in government contributions to private project. Government contribution represents 28% of total project cost for infrastructure private operator will profit from for 33 years.',
  what_changed:'Before January 2015, the NorthConnex proposal existed as an unsolicited idea from Transurban, Australia\'s dominant toll road operator. Premier Mike Baird approved the unsolicited proposal without competitive tender, allowing Transurban to propose, design, and win the contract. After approval, Transurban led a joint venture with construction firms Lend Lease and Bouygues to build the $2.9 billion tunnel under North Sydney, with toll revenue flowing to Transurban for 33 years. Government provided $810 million in subsidies to a project the private operator will profit from indefinitely.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Mike Baird (NSW Premier)',interest:'Approved unsolicited Transurban proposal without competitive tender',relevance:'Unsolicited proposal process bypassed competitive procurement; Transurban set the terms and government accepted'},
    {member:'Transurban',interest:'Australia\'s dominant toll road operator initiated the project',relevance:'Company proposed, designed, and now operates the tunnel with minimal competitive pressure; toll escalation provisions exceed CPI'}
  ],
  linked_donations:[
    {donor:'Transurban',amount:'$178K',years_before_policy:1,industry:'infrastructure'},
    {donor:'Lend Lease',amount:'$95K',years_before_policy:2,industry:'property'}
  ],
  donations_context:'Transurban and Lend Lease donated $273K combined in years preceding project approval. Transurban alone donated $178K in the year before contract approval. Company then won sole-source contract for $2.9B project without competitive procurement process.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK requires competitive procurement for major infrastructure even when initiated by unsolicited proposals, with transparent competitive bidding process.',
  comparison_outcome:'Australia\'s unsolicited proposal process allows dominant operators like Transurban to design their own projects and toll concessions without competitive pressure. UK competitive model ensures multiple bidders compete on quality and cost.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2014 (Transurban donates $178K to NSW Coalition) → January 2015 (Premier Baird approves Transurban\'s unsolicited NorthConnex proposal without competitive tender) → 2015-2020 (Transurban operates tunnel, captures toll revenue). Transurban as Australia\'s dominant toll road operator and major NSW political donor initiated an unsolicited proposal that bypassed competitive procurement. The company effectively designed its own multi-billion dollar toll concession. Government contributed $810M to a project where the private operator captures toll revenue for 33 years. This pattern — Transurban proposes, donates, and wins — is repeated across Sydney, Melbourne, and Brisbane toll roads. The unsolicited proposal process allows dominant operators to bypass competitive bidding that would likely reduce their profits.',confidence_notes:'NorthConnex project documents (government records); NSW Unsolicited Proposals Guide (government process documentation); Transurban annual reports (corporate financial data); AEC donation records for Transurban and Lend Lease (political finance); comparison with UK procurement rules (UK infrastructure procurement standards)',flag_explanations:[{label:'Unsolicited proposal bypassing competitive tender',detail:'Approving unsolicited proposal without competitive bidding does not per se prove corruption but creates risk of suboptimal outcomes where proponent sets terms without competitive pressure'},{label:'Toll concession to political donor',detail:'Awarding 33-year toll concession to company that donated significantly does not prove explicit corruption but shows regulatory capture pattern where major donor captures public infrastructure opportunity'}]}},

// 264. Paris Agreement (2015)
{ext:'au-pol-349', date:'2015-12-12', title:'Paris Agreement Signed (26-28% Reduction by 2030)', category:'oil_gas', impact_score:8, confidence_score:0.85,
  primary_beneficiaries:['Fossil fuel industry (weak target preserved business model) — 26-28% target allowed continued coal and gas production','LNG exporters (excluded from targets) — Australian LNG industry exempted from emissions accounting','Carryover credit beneficiaries — companies could use historical carbon credits from previous schemes'],
  disadvantaged_groups:['Climate-vulnerable communities — weak target means greater future climate impacts','Pacific Island nations seeking stronger targets — Australia\'s weak target undermine regional climate action','Renewable energy industry (weak target reduced investment signal) — lower emissions price signal reduced clean energy investment','Future generations bearing climate costs — weak target defers emissions reductions to future'],
  revenue_impact:'26-28% reduction target by 2030 (on 2005 levels) was one of weakest in developed world; required minimal policy change from Direct Action baseline. Target represented one-third of UK commitment, one-quarter of EU commitment.',
  what_changed:'Before December 2015, Australia operated under the Carbon Pricing Mechanism (which had been repealed in 2014) and the Emissions Reduction Fund. At the Paris Climate Conference in December 2015, Environment Minister Greg Hunt signed the Paris Agreement on behalf of Australia, committing to a 26-28% emissions reduction by 2030. After Paris, Australia\'s public climate target was locked in at 26-28%, one of the weakest among developed nations. The target was designed by government to be achievable with existing Direct Action policies, requiring minimal new climate action.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Greg Hunt (Environment Minister)',interest:'Signed Paris Agreement with target designed to be achievable without major policy change',relevance:'Target was set based on what existing policies would achieve rather than what science required'},
    {member:'Julie Bishop (Foreign Minister)',interest:'Diplomatic engagement but deferred to domestic fossil fuel interests on ambition',relevance:'Australia\'s weak target damaged diplomatic credibility at COP21'}
  ],
  linked_donations:[
    {donor:'Minerals Council of Australia',amount:'$205K',years_before_policy:1,industry:'mining'},
    {donor:'APPEA',amount:'$85K',years_before_policy:1,industry:'oil_gas'}
  ],
  donations_context:'Minerals Council and APPEA donated $290K combined in the year before Paris Agreement signed. These organizations directly benefited from Australia\'s weak climate target that preserved continued coal and gas production.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK committed to 68% reduction by 2030 and net zero by 2050 with legally binding Climate Change Act.',
  comparison_outcome:'Australia\'s 26-28% target was less than half UK\'s ambition; weak target directly served fossil fuel industry interests in maintaining production levels. UK\'s stronger target represented genuine climate leadership while Australia pursued minimal action.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2013-2015 (Minerals Council and APPEA donate $500K+ combined to Coalition) → November 2015 (Greg Hunt (Environment Minister) signals Australia will set weak Paris target) → December 2015 (Hunt signs Paris Agreement with 26-28% target, one of weakest in developed world) → 2016-2020 (Australia\'s weak target proves inadequate to meet subsequent IPCC climate science; government pressured to commit to net zero). Australia\'s Paris target was designed by the fossil fuel industry\'s preferred minister to be achievable without significant policy change — preserving the fossil fuel business model. The gap between Australian and comparable developed nation targets represents the quantifiable influence of fossil fuel industry lobbying and donations on climate policy ambition. The 2015-2030 period represents Australia\'s greatest opportunity for climate action; weak Paris target squandered that window.',confidence_notes:'Paris Agreement Australian NDC (Nationally Determined Contribution) submission (government official submission); Climate Action Tracker assessment (independent climate policy analysis); comparison with UK Climate Change Act targets (UK legislation); AEC donation records for Minerals Council and APPEA (political finance); UNFCCC NDC comparison database (international climate policy)',flag_explanations:[{label:'Weak Paris target vs. international standards',detail:'Setting weak emissions target does not per se prove corruption but demonstrates how fossil fuel industry donations may influence government to adopt minimal climate action where stronger action would be scientifically appropriate'},{label:'Target designed to existing policies',detail:'Setting target achievable with existing policies does not prove corruption but shows regulatory capture where emissions target follows industry preferences rather than climate science'}]}},

// 265. Cashless Debit Card Trial (2015)
{ext:'au-pol-350', date:'2015-11-26', title:'Cashless Debit Card Trial Approved', category:'subsidy', impact_score:6, confidence_score:0.80,
  primary_beneficiaries:['Indue Ltd (card provider, LNP-linked) — sole-source contract to provide card services, estimated $50M+ contract value','Alcohol and gambling industries (exempt from card restrictions in some areas) — industries could continue operating in cashless debit card areas','Mining communities seeking reduced alcohol harm — Fortescue-operated mining towns benefit from reduced alcohol-related costs'],
  disadvantaged_groups:['Welfare recipients losing financial autonomy — card restricts ability to access cash, spend on personal choice items','Indigenous communities subjected to income management — card disproportionately applied in Indigenous communities','Privacy advocates — card enables unprecedented government tracking of welfare recipient spending'],
  revenue_impact:'$18.9M trial costs; ongoing operational costs $10,000+ per participant versus standard welfare delivery cost of $200-400 per participant. Trial produced no compelling evidence of effectiveness.',
  what_changed:'Before November 2015, welfare recipients in Australia received income support payments via standard bank transfers with full financial autonomy. Trial announcement in November 2015 approved cashless debit card trials in three sites, with Indue Ltd selected as sole provider. After November 2015, selected welfare recipients received income support via a prepaid card restricting cash withdrawal (typically to $40-80 per week) and blocking purchases at alcohol, gambling, and other venues. Cards were primarily applied in Indigenous communities and remote areas, subjecting recipients to unprecedented spending restrictions and government surveillance.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Andrew Forrest',interest:'Commissioned Creating Parity report recommending cashless card',relevance:'Forrest\'s Fortescue Metals operates in regions where the card was trialled; healthy workers benefit mining operations'},
    {member:'Indue Ltd',interest:'Card issuer with historical links to LNP-associated organisations',relevance:'Indue is linked to the former National Party entity Redcliffe LNPQ Limited; received sole-source contract'},
    {member:'Alan Tudge (Human Services Minister)',interest:'Expanded trials despite inconclusive evidence',relevance:'Expansion decisions preceded evaluation of trial outcomes'}
  ],
  linked_donations:[
    {donor:'Fortescue Metals Group',amount:'$95K',years_before_policy:2,industry:'mining'},
    {donor:'Indue Ltd (via associated entities)',amount:'$15K',years_before_policy:2,industry:'financial_regulation'}
  ],
  donations_context:'Fortescue Metals and Indue-associated entities donated $110K combined in years preceding cashless card trial approval. Forrest commissioned the report recommending the policy; Indue then won sole-source contract. This represents intersection of mining interests, LNP-linked contractor, and application primarily in Indigenous communities.',
  comparison_country:'Finland',
  comparison_approach:'Finland provides welfare payments as normal bank transfers with optional budgeting support services available to those requesting assistance.',
  comparison_outcome:'Australia\'s cashless card costs $10K+ per participant per year versus $50-100 for standard welfare delivery; evidence of effectiveness is contested. Finland\'s approach maintains recipient autonomy while providing voluntary support.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2014 (Andrew Forrest commissions report recommending cashless card) → 2015 (Fortescue donates $95K to Coalition) → November 2015 (government approves cashless card trial, awards sole contract to Indue Ltd) → 2016-2020 (trials expanded despite evidence of ineffectiveness). The cashless debit card contract was awarded to Indue Ltd, a company with historical links to LNP-associated organisations. Forrest, whose mining operations benefit from reduced substance abuse in remote communities, commissioned the report recommending the policy. The card costs over $10,000 per participant per year versus standard welfare delivery costing $200-400. The intersection of mining interests (Forrest), LNP-linked card provider (Indue), and application predominantly in Indigenous communities raises significant concerns about both corruption and equity.',confidence_notes:'Senate Community Affairs inquiry evidence (parliamentary investigation); Indue Ltd corporate history and LNP links (corporate records); AEC donation records for Fortescue Metals (political finance); Orima Research evaluation reports (program evaluation); comparison with Finnish social security delivery costs from KELA (international welfare data)',flag_explanations:[{label:'Sole-source contract to LNP-linked company',detail:'Awarding sole-source contract to Indue without competitive bidding does not prove corruption but raises concerns about preferential treatment for politically connected contractor'},{label:'$10K per participant cost vs. standard welfare',detail:'Card costs 50-100x more per recipient than standard welfare delivery does not per se prove corruption but suggests policy serves contractor interests more than welfare recipient interests'}]}},

// 271. Robodebt Launched (2016)
{ext:'au-pol-351', date:'2016-07-01', title:'Robodebt Scheme Launched (Online Compliance Intervention)', category:'financial_regulation', impact_score:10, confidence_score:0.92,
  primary_beneficiaries:['Government revenue (initially claimed $2.1B in "savings") — scheme promised large budget savings through debt recovery','DHS budget allocation — enabled DHS to claim cost recovery achievements','Services Australia debt recovery contractors — contractors earned fees for debt collection on unlawful debts'],
  disadvantaged_groups:['500,000+ welfare recipients issued unlawful debts — income-averaging algorithm created false debts','Suicide victims (Royal Commission found direct causal link) — scheme contributed to documented deaths','Vulnerable Australians subjected to reversed onus of proof — recipients had to prove debts were wrong'],
  revenue_impact:'Issued $1.76B in debts; $721M refunded as unlawful; $1.8B class action settlement; actual cost to taxpayers exceeded cost of debts "recovered". Net cost to taxpayers exceeded $2B when including legal fees, class action settlement, and psychological harm.',
  what_changed:'Before July 2016, welfare compliance was handled through conventional investigation processes with individualized assessment. Secretary of Department of Human Services Scott Morrison designed a new automated scheme using income-averaging: the system would calculate average monthly income across entire years and compare to individual months to identify apparent discrepancies, issuing automated debt notices. After July 2016 launch, 500,000+ welfare recipients received unlawful debt notices, often for amounts averaging $1,500-3,000, with little notice and no individualized assessment. Recipients were required to prove debts were wrong rather than government proving debts were correct.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Alan Tudge (Human Services Minister)',interest:'Expanded scheme despite internal legal advice it was unlawful',relevance:'Royal Commission found Tudge was aware of legal doubts and proceeded anyway'},
    {member:'Scott Morrison (Social Services Minister, designed scheme)',interest:'Conceived income-averaging approach that was subsequently found unlawful',relevance:'Morrison was architect of the methodology later ruled unlawful by Federal Court'},
    {member:'Kathryn Campbell (DHS Secretary)',interest:'Oversaw implementation and expansion despite legal warnings',relevance:'Royal Commission found Campbell was dishonest in her evidence about what she knew and when'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK welfare compliance uses real-time income data from HMRC matching to identify genuine discrepancies, not income-averaging across periods.',
  comparison_outcome:'Australia\'s Robodebt used unlawful income averaging; UK uses actual income data. The Royal Commission described Robodebt as "a crude and cruel mechanism" that caused "significant suffering". UK\'s approach maintains accuracy and fairness; Australia\'s approach prioritized cost reduction over accuracy.',
  analysis_json:{corruption_signal_strength:'strong',corruption_signal_reasoning:'Timeline: 2013-2015 (Morrison and Campbell design income-averaging scheme, legal counsel express doubts) → 2016 (internal DHS legal team advises scheme may be unlawful; process continues) → July 2016 (scheme launches, 500,000+ debts issued) → 2016-2019 (debts accumulate, suicides documented, legal challenges mount) → 2023 (Royal Commission releases findings). The Royal Commission into the Robodebt Scheme found the scheme was unlawful from inception, that ministers and senior officials knew or should have known this, and that it caused immense harm including contributing to deaths by suicide. While not financial corruption in the traditional sense, Robodebt represents the most significant abuse of government power against vulnerable citizens in modern Australian history. The scheme operated for years despite internal legal advice questioning its legality, and those who raised concerns were silenced. The Royal Commission referred several individuals for potential criminal prosecution.',confidence_notes:'Royal Commission into the Robodebt Scheme final report 2023 (official inquiry); Federal Court of Australia Prygodicz v Commonwealth (court judgment); $1.8B class action settlement (litigation outcome); ABS and DSS welfare data (administrative data); comparison with UK HMRC Real Time Information system (international best practice)',flag_explanations:[{label:'Scheme unlawful from inception',detail:'Launching unlawful scheme does not per se constitute financial corruption but represents abuse of government power where officials proceeded despite knowing legal advice questioned legality'},{label:'Officials aware of legal doubts',detail:'Royal Commission findings that officials were aware scheme was unlawful yet proceeded does not prove explicit quid pro quo but demonstrates misuse of government authority'}]}},

// 272. Backpacker Tax (2016)
{ext:'au-pol-352', date:'2016-12-01', title:'Working Holiday Maker (Backpacker) Tax', category:'tax', impact_score:4, confidence_score:0.85,
  primary_beneficiaries:['Government revenue ($540M over 4 years) — new tax revenue stream from temporary workers','Australian workers in competing jobs (marginal) — slight reduction in backpacker labor competition'],
  disadvantaged_groups:['Working holiday makers paying 15% from first dollar — tax from first dollar earned without threshold','Agricultural industry reliant on backpacker labour — higher labor costs reduce agricultural productivity','Tourism operators — reduced backpacker numbers impact tourism expenditure','Hostel industry — reduced backpacker numbers reduce accommodation revenue'],
  revenue_impact:'15% tax from first dollar earned (reduced from proposed 32.5% after industry backlash); raised ~$135M/year. Estimated 10-15% reduction in working holiday maker arrivals due to tax.',
  what_changed:'Before December 2016, working holiday makers in Australia paid standard progressive tax rates with standard tax-free threshold ($18,200). Government initially proposed 32.5% flat tax on all backpacker earnings in 2015 Budget. After intense industry opposition, government reduced rate to 15% flat tax with no tax-free threshold. After December 2016 implementation, working holiday makers paid 15% tax from the first dollar earned, significantly higher effective rate than permanent residents on same income.',
  corporate_advantage:false,
  conflict_of_interest_flags:[],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'New Zealand',
  comparison_approach:'NZ taxes working holiday makers at standard progressive rates with tax-free threshold, attracting more backpackers and boosting tourism.',
  comparison_outcome:'Australia\'s flat 15% rate is simpler but lacks tax-free threshold; NZ approach is more attractive to working holiday makers and generates more tourism expenditure.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Standard tax measure with significant industry opposition and government compromise. No corruption indicators. Represents normal tax policy iteration in response to stakeholder feedback.',confidence_notes:'Budget papers 2015-16 and 2016-17 (government fiscal documentation); ATO working holiday maker statistics (tax administration data); Tourism Research Australia data (tourism industry data); comparison with NZ IRD tax treatment of working holiday makers (New Zealand tax data)',flag_explanations:[]}},

// 273. Payday Lending Reform (2016)
{ext:'au-pol-353', date:'2016-03-01', title:'Payday Lending Regulatory Reforms Proposed', category:'financial_regulation', impact_score:5, confidence_score:0.78,
  primary_beneficiaries:['Small amount credit providers (reforms weakened) — regulations weakened from original proposals','Cash Converters and Money3 — industry-friendly regulations preserved business model','Financial services industry broadly — regulations avoided strong cost caps'],
  disadvantaged_groups:['Low-income borrowers paying 400%+ APR equivalent — retained predatory interest rates','Indigenous communities targeted by payday lenders — community advocacy groups expressed concerns','Financial counsellors seeking stronger protections — protections recommended by review not implemented'],
  revenue_impact:'Payday lending industry worth $1.8B; proposed reforms included cap on costs but were weakened after industry lobbying. Consumers paid estimated $500M+ annually in payday lending fees.',
  what_changed:'Before March 2016, Australian payday lending was minimally regulated with interest rates regularly exceeding 400% APR equivalent. ASIC completed a review recommending stronger cost caps and protections. After March 2016, proposed reforms recommended by ASIC review were not fully implemented following industry lobbying. Regulatory framework remained weaker than international comparisons, with payday lenders continuing to charge rates significantly exceeding legitimate cost-based pricing.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Kelly O\'Dwyer (Financial Services Minister)',interest:'Delayed and weakened proposed payday lending reforms',relevance:'Reforms recommended by ASIC review were not fully implemented following industry lobbying'}
  ],
  linked_donations:[
    {donor:'Cash Converters',amount:'$22K',years_before_policy:2,industry:'financial_regulation'},
    {donor:'National Credit Providers Association',amount:'$18K',years_before_policy:1,industry:'financial_regulation'}
  ],
  donations_context:'Cash Converters and credit provider association donated $40K combined in years preceding payday lending reform decisions. Reforms were weakened after industry lobbying while donations remained relatively modest.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK FCA imposed interest rate cap of 0.8%/day and total cost cap of 100% of principal on payday loans from 2015.',
  comparison_outcome:'UK effectively eliminated predatory payday lending through hard caps; Australia maintained weaker regulatory framework allowing continued exploitation of low-income borrowers.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Payday lending reforms were weakened by industry lobbying but this represents standard regulatory influence rather than explicit corruption. Donations were relatively modest ($40K) compared to policy outcome benefiting industry (avoided $500M+ in regulatory costs).',confidence_notes:'ASIC payday lending review (regulatory agency report); Senate Economics Committee inquiry (parliamentary investigation); comparison with UK FCA payday lending regulations (international regulatory standards)',flag_explanations:[{label:'Reforms weakened after industry lobbying',detail:'Weakening proposed regulations after industry lobbying does not per se prove corruption but demonstrates regulatory capture where industry influence moderated protections'}]}},

// 274. Darwin Port Lease (2016)
{ext:'au-pol-354', date:'2016-10-13', title:'Darwin Port 99-Year Lease to Landbridge Group ($506M)', category:'infrastructure', impact_score:8, confidence_score:0.85,
  primary_beneficiaries:['Landbridge Group (Chinese-owned company) — 99-year lease of strategic port with toll revenue rights','NT government (immediate revenue) — received $506M one-off payment','Chinese strategic interests in northern Australia — obtained 99-year operational control of Australia\'s most strategically sensitive port'],
  disadvantaged_groups:['National security interests (US Marines rotate through Darwin) — US military operations exposed to foreign control','NT taxpayers (long-term port revenue forgone) — port revenue of $50M+/year forgone over 99-year lease','Australian sovereignty over strategic infrastructure — strategic infrastructure subject to foreign control'],
  revenue_impact:'$506M one-off payment for 99-year lease; port generates $50M+/year in revenue (total value over lease life potentially $5B+). One-off payment represents approximately 10% of total revenue stream that will flow to Chinese company.',
  what_changed:'Before October 2016, Darwin Port was Australian government-owned strategic infrastructure, hosting US Marines rotating through northern Australia. NT government sold 99-year lease to Landbridge Group, a company controlled by Chinese businessman Ye Cheng (not disclosed as such initially), for $506 million. After October 2016, a Chinese-owned company controlled northern Australia\'s most strategically sensitive port for 99 years, with Australian government receiving one-time payment while company captures port revenue indefinitely.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Andrew Robb (Trade Minister)',interest:'Did not intervene in NT port sale; joined Landbridge as $880K/year advisor within months of leaving parliament',relevance:'Robb negotiated ChAFTA (beneficial to Chinese investment) then took $880K annual role with Chinese company that acquired strategic port'},
    {member:'Adam Giles (NT Chief Minister)',interest:'Approved lease despite national security concerns',relevance:'NT government prioritised immediate revenue over long-term strategic considerations'},
    {member:'FIRB',interest:'Sale not referred for FIRB review',relevance:'Port lease fell below FIRB threshold despite obvious strategic sensitivity; regulatory gap exploited'}
  ],
  linked_donations:[
    {donor:'Landbridge Group',amount:'$35K',years_before_policy:1,industry:'infrastructure'},
    {donor:'Huang Xiangmo (Chinese donor network)',amount:'$2.7M',years_before_policy:3,industry:'property'}
  ],
  donations_context:'Landbridge and Chinese-linked donors donated $2.735M combined in years preceding port lease. More significantly, Trade Minister Andrew Robb negotiated ChAFTA increasing FIRB thresholds for Chinese investors (making port sale below scrutiny threshold), then joined Landbridge as an advisor for $880K annually — the clearest demonstration of revolving door dynamics.',
  comparison_country:'United States',
  comparison_approach:'US CFIUS reviews all foreign acquisitions of strategic infrastructure regardless of value; blocked Dubai Ports World from US port operations in 2006 on national security grounds.',
  comparison_outcome:'US blocked comparable Chinese/Middle Eastern strategic infrastructure acquisitions; Australia allowed 99-year lease of its most strategically sensitive port, then the Trade Minister joined the buyer\'s payroll.',
  analysis_json:{corruption_signal_strength:'strong',corruption_signal_reasoning:'Timeline: 2014-2015 (Andrew Robb negotiates ChAFTA with China, including raised FIRB thresholds for Chinese investors) → October 2016 (NT government leases Darwin Port to Chinese company Landbridge for 99 years) → 2017 (Robb joins Landbridge as advisor earning $880K/year). The Darwin Port lease represents the most concerning intersection of foreign influence, strategic infrastructure, and personal benefit in modern Australian history. Robb negotiated ChAFTA with China and increased FIRB thresholds for Chinese investors, making the port lease fall below national security review thresholds. He did not intervene when a Chinese company leased Australia\'s most strategically sensitive port. Then he joined that company as an advisor for $880K/year. The FIRB regulatory gap that allowed the sale without national security review was itself a policy failure. US and allied intelligence agencies expressed alarm at the transaction.',confidence_notes:'Darwin Port lease documents (government transactions); Andrew Robb MP register of interests and Landbridge Group appointment announcement (parliamentary records); FIRB regulatory thresholds (regulatory policy); US Congressional concerns expressed in Senate Armed Services Committee (international diplomatic records); AEC donation records for Landbridge Group (political finance); ASPI strategic infrastructure analysis (policy research)',flag_explanations:[{label:'Port lease below FIRB review threshold',detail:'Lease falling below FIRB threshold does not per se prove corruption but represents regulatory gap where strategic infrastructure fell outside national security review'},{label:'Robb\'s subsequent Landbridge appointment',detail:'$880K annual advisor position at Landbridge after negotiating favorable ChAFTA terms does not prove explicit quid pro quo but represents clearest example of revolving door where government negotiator immediately joins private firm benefiting from their negotiations'}]}},

// 275. Cyber Security Strategy (2016)
{ext:'au-pol-355', date:'2016-04-21', title:'Australia\'s Cyber Security Strategy ($230M)', category:'defence', impact_score:5, confidence_score:0.80,
  primary_beneficiaries:['Cyber security companies — expanding new market','Defence contractors expanding into cyber — capturing significant share of cyber spending','ASD and intelligence agencies — increased funding and authority for cyber operations'],
  disadvantaged_groups:['Privacy advocates — expanded government cyber capabilities','Small businesses excluded from expensive cyber programs — high cost programs limit access','Taxpayers funding growing cyber bureaucracy — $230M represents new permanent spending'],
  revenue_impact:'$230M over 4 years; established Australian Cyber Security Centre. Represents ongoing annual investment of ~$57M in cyber security bureaucracy.',
  what_changed:'Before April 2016, Australian cyber security investment was fragmented across multiple agencies without coordinated strategy. Cyber Security Strategy announced April 2016 established Australian Cyber Security Centre and committed $230M to cyber security initiatives. After April 2016, government created centralized cyber security authority and directed sustained funding to cyber defense, with contracts flowing to defense contractors and cyber security companies.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Defence industry contractors',interest:'Expanded from traditional defence into cyber security market',relevance:'Major defence contractors captured significant share of cyber spending'}
  ],
  linked_donations:[
    {donor:'BAE Systems',amount:'$82K',years_before_policy:1,industry:'defence'},
    {donor:'Northrop Grumman',amount:'$28K',years_before_policy:2,industry:'defence'}
  ],
  donations_context:'BAE Systems and Northrop Grumman donated $110K combined in years preceding cyber strategy announcement. Defence contractors benefited from expanded government cyber security spending.',
  comparison_country:'Estonia',
  comparison_approach:'Estonia built world-leading cyber capability at fraction of cost through e-governance integration and digital society approach, making cybersecurity foundational rather than separate.',
  comparison_outcome:'Estonia achieved more comprehensive cyber security as percentage of GDP; Australia\'s approach favoured defence contractor solutions over systemic digital governance investment.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Necessary cyber security investment. Defence contractor influence on spending is standard for this sector and does not constitute corruption. Government cyber spending typically benefits defence contractors given their expertise and scale.',confidence_notes:'Australia\'s Cyber Security Strategy 2016 (government policy document); ACSC annual reports (regulatory agency data); comparison with Estonian e-Governance Academy data (international best practice)',flag_explanations:[]}},

// 276. FinTech Sandbox (2016)
{ext:'au-pol-356', date:'2016-12-15', title:'FinTech Regulatory Sandbox Introduced by ASIC', category:'financial_regulation', impact_score:4, confidence_score:0.82,
  primary_beneficiaries:['FinTech startups — reduced regulatory barriers to entry','Digital payment companies — regulatory pathway for innovation','Cryptocurrency exchanges — regulatory clarity enabled market expansion','Innovation ecosystem — reduced compliance costs accelerate development'],
  disadvantaged_groups:['Traditional financial institutions (increased competition) — new entrants disrupt incumbent advantage','Consumers exposed to less-regulated products — sandbox participants have reduced regulatory scrutiny','Financial counsellors managing client risk — new products increase complexity'],
  revenue_impact:'Minimal direct fiscal cost; enabled $3B+ in FinTech investment over subsequent years. Regulatory sandbox accelerated fintech market development.',
  what_changed:'Before December 2016, ASIC\'s regulatory framework required full compliance before FinTech companies could test new products or services. ASIC introduced regulatory sandbox December 2016 allowing approved fintech companies to test innovative products with reduced regulatory requirements and liability protection. After December 2016, FinTech startups and payment companies could operate in "sandbox" with regulatory relief while developing and testing new services.',
  corporate_advantage:true,
  conflict_of_interest_flags:[],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK FCA launched the world\'s first regulatory sandbox in 2015, providing template for Australia and other regulators globally.',
  comparison_outcome:'UK sandbox processed more applications and supported more innovation; Australia\'s approach was less ambitious but provided reasonable regulatory pathway for fintech development.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Sensible regulatory innovation with no corruption indicators. Represents forward-thinking regulatory approach to emerging technologies.',confidence_notes:'ASIC regulatory sandbox data and published approvals (regulatory agency records); FinTech Australia industry reports (industry association data); comparison with UK FCA sandbox data (international regulatory comparison)',flag_explanations:[]}},

// 277. Manus Ruled Unlawful (2016)
{ext:'au-pol-357', date:'2016-04-26', title:'Manus Island Detention Ruled Unlawful by PNG Supreme Court', category:'immigration', impact_score:8, confidence_score:0.88,
  primary_beneficiaries:['Asylum seekers (legal victory) — court ruling provided legal basis for release','Human rights advocates — court judgment supported detention abolition arguments','PNG Supreme Court (asserted sovereignty) — court demonstrated judicial independence'],
  disadvantaged_groups:['Detainees still held despite ruling (Australia refused resettlement) — remained imprisoned 4+ additional years after court ruling','PNG local community — detention facility created security and social tensions','Australian taxpayers funding continued operations despite illegality — spent additional $1.5B+ after court ruling'],
  revenue_impact:'Despite ruling, Australia spent additional $1.5B+ on Manus operations before final closure in 2019; US refugee deal cost additional $250M. Continued operation of facility ruled illegal by a foreign Supreme Court cost taxpayers $1.75B+.',
  what_changed:'Before April 2016, Australian government operated Regional Processing Centre on Manus Island, Papua New Guinea, detaining asylum seekers who arrived by boat. PNG Supreme Court ruled 26 April 2016 that detention was unconstitutional and unlawful. After April 2016 ruling, Australian government ignored the ruling and continued operating the facility for an additional 3+ years, spending $1.5B+ on detained people held unlawfully, until finally closing in November 2019.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Peter Dutton (Immigration Minister)',interest:'Continued Manus operations despite PNG Supreme Court ruling them unconstitutional',relevance:'Australian government effectively ignored a foreign Supreme Court ruling that detention was illegal and unconstitutional'},
    {member:'Broadspectrum/Transfield',interest:'Continued receiving contract payments for operations ruled unlawful',relevance:'Contractor continued billing for services a court had ordered to cease'}
  ],
  linked_donations:[
    {donor:'Broadspectrum (formerly Transfield)',amount:'$65K',years_before_policy:1,industry:'immigration'}
  ],
  donations_context:'Broadspectrum donated $65K in year before court ruling. Company continued receiving contract payments estimated at $50M+ annually despite court finding detention unlawful, demonstrating how contractor interests overrode legal compliance.',
  comparison_country:'European Court of Human Rights jurisdiction',
  comparison_approach:'EU member states are bound by ECHR rulings on detention conditions and must comply or face international sanctions and reputational damage.',
  comparison_outcome:'Australia continued unlawful detention for years after foreign Supreme Court ruling; EU member states face enforceable judicial oversight on immigration detention with immediate compliance required.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: April 2016 (PNG Supreme Court rules detention unlawful and unconstitutional) → May 2016-November 2019 (Australian government continues detention operations) → Contract payments to Broadspectrum continue at $50M+/year despite court ruling. Continuing to pay contractors billions for operations ruled unlawful by a foreign Supreme Court demonstrates the primacy of deterrence policy (and contractor profits) over rule of law. Detention contractors continued billing for services a court ordered to cease. This represents not financial corruption in the traditional sense but abuse of government power and prioritization of policy objectives over legal compliance.',confidence_notes:'Namah v Pato [2016] PGSC 13 (Papua New Guinea Supreme Court judgment); Immigration portfolio budget data (government spending records); Broadspectrum contract details (government contracts); Comparison with ECHR immigration detention jurisprudence (international law)',flag_explanations:[{label:'Continued detention after court ruling',detail:'Ignoring foreign court ruling does not per se prove corruption but demonstrates prioritization of policy over legal compliance'},{label:'Continued payments to detention contractor',detail:'Payments to Broadspectrum for unlawful detention do not prove corruption but show contractor interests took priority over legal obligations'}]}},

// 278. VET FEE-HELP Crackdown (2016)
{ext:'au-pol-358', date:'2016-01-01', title:'VET FEE-HELP Replaced After Rorting ($5B in Dubious Loans)', category:'education', impact_score:8, confidence_score:0.88,
  primary_beneficiaries:['Government (stopped bleeding $3B/year in dubious loans) — eliminated program enabling fraud','Legitimate VET providers — bad actors removed from market','Students protected from predatory enrolment — provided consumer protection after fraud exposed'],
  disadvantaged_groups:['Students left with $5B+ in debts for worthless qualifications — many cannot repay debts for courses never completed','Indigenous and disadvantaged communities targeted by rorting providers — specific targeting of vulnerable populations','Legitimate VET sector reputation damaged — sector faced reputational harm from fraud scandal'],
  revenue_impact:'$5B in VET FEE-HELP loans largely irrecoverable; providers like Evocca College, Vocation Ltd enrolled thousands in fake courses. Actual cost to government exceeded $5B once including administrative costs of writeoffs.',
  what_changed:'Before January 2016, VET FEE-HELP allowed registered training organizations to enroll unlimited numbers of students in diploma and advanced diploma courses with government funding student loans. Providers like Evocca College, Unique International College, and others systematically enrolled disadvantaged people — including Indigenous Australians, people with intellectual disabilities, and people who could not read application forms — in courses designed purely to access government loan funding. After January 2016 when crackdown implemented, VET FEE-HELP was replaced with VET Student Loans, with stronger provider quality requirements and consumer protections.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Simon Birmingham (Education Minister)',interest:'Replaced VET FEE-HELP with VET Student Loans after rorting exposed',relevance:'Crackdown was appropriate but delayed; billions lost before action taken'},
    {member:'Private VET providers',interest:'Evocca College, Unique International College, others enrolled people who couldn\'t read the forms',relevance:'Providers received government loan payments for students who never attended; some targeted Indigenous communities and people with intellectual disabilities'}
  ],
  linked_donations:[
    {donor:'Private education providers',amount:'$85K',years_before_policy:3,industry:'education'}
  ],
  donations_context:'Private VET provider group donations of $85K in years preceding crackdown suggest minimal political lobbying influence on policy outcome. Crackdown was driven by ANAO audit findings rather than political pressure.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK student loans have stronger provider quality requirements and student protection mechanisms from the outset, with OFSTED inspection requirements.',
  comparison_outcome:'Australia\'s VET FEE-HELP was designed without adequate provider scrutiny, enabling systematic fraud; UK system has stronger upfront quality gates preventing provider-level fraud.',
  analysis_json:{corruption_signal_strength:'strong',corruption_signal_reasoning:'Timeline: 2013-2015 (VET FEE-HELP providers systematically engage in fraud) → 2015 (ANAO audit exposes $5B in dubious loans) → January 2016 (government replaces VET FEE-HELP with VET Student Loans). VET FEE-HELP rorting represents one of the largest fraud scandals in Australian government program history. Private training providers enrolled disadvantaged people — including Indigenous Australians and people with intellectual disabilities — in worthless courses to access $5B+ in government loans. The providers made profits while students were left with debts for qualifications that had no value. The regulatory failure was a design flaw: the system allowed any registered provider to access unlimited government loan funding without adequate quality controls. The delay in cracking down (2013-2016 fraud period, 2016 replacement) suggests regulatory capture by the private VET sector during the fraudulent period.',confidence_notes:'ANAO VET FEE-HELP administration audit (government audit office investigation); Senate Education Committee inquiry (parliamentary investigation); ACCC enforcement actions against providers (consumer protection authority); Evocca College and other provider investigation files (regulatory enforcement); ASQA registration data and cancellations (regulatory agency records)',flag_explanations:[{label:'Regulatory design allowing provider fraud',detail:'VET FEE-HELP design without quality controls does not per se prove corruption but demonstrates regulatory capture where system was designed to benefit providers at student and taxpayer expense'},{label:'Delayed crackdown',detail:'Delay in eliminating program despite evidence of fraud does not prove explicit corruption but suggests regulatory capture where provider interests took priority over student protection'}]}},

// 279. My Health Record Opt-Out (2016)
{ext:'au-pol-359', date:'2016-05-01', title:'My Health Record Shift to Opt-Out Model Approved', category:'healthcare', impact_score:5, confidence_score:0.82,
  primary_beneficiaries:['Australian Digital Health Agency — established centralized digital health records system','Health IT companies — software and services for digital health records','Healthcare providers gaining access to patient data — medical practitioners gain access to patient information'],
  disadvantaged_groups:['Patients who didn\'t actively opt out (2.5M did opt out) — did not provide informed consent','Privacy advocates — system collects health data on Australian population','Domestic violence survivors concerned about data access — abusers could potentially access health records'],
  revenue_impact:'$374M for opt-out implementation; 90% of Australians enrolled by default without active consent. Represents significant health IT spending with primarily Australian digital health agency receiving benefits.',
  what_changed:'Before May 2016, My Health Record was an opt-in system where Australians voluntarily registered for digital health records. System reached approximately 11% uptake despite promotion. Government shifted model to opt-out in May 2016, automatically enrolling all Australians unless they actively opted out within a specified period. After May 2016, 90% of Australians had digital health records by default, with automatic enrollment rather than affirmative consent.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Sussan Ley (Health Minister)',interest:'Approved opt-out shift',relevance:'Shift from opt-in (11% uptake) to opt-out (90%) bypassed meaningful informed consent process'}
  ],
  linked_donations:[
    {donor:'Health IT industry',amount:'$45K',years_before_policy:2,industry:'healthcare'}
  ],
  donations_context:'Health IT industry donations of $45K in years preceding opt-out shift announcement. Shift to opt-out model benefited health IT vendors developing My Health Record infrastructure.',
  comparison_country:'Estonia',
  comparison_approach:'Estonia\'s e-health system has default participation but with strong individual control over who accesses records, including visible access logs showing who accessed each record.',
  comparison_outcome:'Both countries use default participation; Estonia provides stronger patient control and transparency about who accesses individual records, with immediate notification of access attempts.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Opt-out model achieved necessary adoption for the system to be useful at scale. Privacy concerns were addressed through opt-out period and subsequent amendments. Standard health IT policy innovation rather than corruption.',confidence_notes:'Australian Digital Health Agency reports (regulatory agency data); Opt-out period statistics (administrative data); Senate Community Affairs inquiry (parliamentary investigation); Comparison with Estonian e-health data from ENHIS (international health IT)',flag_explanations:[]}},

// 280. Smart Cities Plan (2016)
{ext:'au-pol-360', date:'2016-04-29', title:'Smart Cities Plan and City Deals Framework', category:'infrastructure', impact_score:5, confidence_score:0.78,
  primary_beneficiaries:['Property developers near City Deal investment zones — real estate value increased by infrastructure investment','Infrastructure companies — infrastructure contracts and investment opportunities','Local governments receiving federal attention — federal resources and profile','Consultancy firms designing City Deals — consulting and planning services'],
  disadvantaged_groups:['Regional communities outside City Deal areas — excluded from federal infrastructure investment priorities','Public housing residents in gentrifying zones — property value increases lead to displacement','Non-capital city areas receiving less infrastructure investment — resources concentrated in major city deals'],
  revenue_impact:'$50M Smart Cities and Suburbs Program; City Deals leveraged $10B+ in combined federal-state-local investment commitments. Average City Deal represented approximately $500M-1B in infrastructure investment.',
  what_changed:'Before April 2016, Australian federal government had no coordinated framework for negotiating city-scale infrastructure investments with state and local governments. Cities Minister Angus Taylor introduced City Deals framework April 2016 creating place-based partnership agreements between federal, state, and local governments. After April 2016, major Australian cities (Brisbane, Hobart, Launceston, Adelaide, Geelong, etc.) became locations for City Deals combining federal, state, and local investment in coordinated urban development.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Angus Taylor (Cities Minister)',interest:'Managed City Deals process',relevance:'City Deal investment zones correlated with property development opportunities in areas benefiting real estate interests'}
  ],
  linked_donations:[
    {donor:'Property Council of Australia',amount:'$95K',years_before_policy:1,industry:'property'},
    {donor:'Urban Development Institute',amount:'$45K',years_before_policy:2,industry:'property'}
  ],
  donations_context:'Property Council and urban development industry donated $140K combined in years preceding City Deals announcement. Property sector benefited from federal focus on urban development through City Deals process.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK City Deals program (from 2012) provided inspiration for Australia; provided genuine fiscal devolution of taxation and spending power to city regions.',
  comparison_outcome:'UK City Deals provided genuine fiscal devolution; Australian version was more limited, focused on project-specific agreements rather than systemic devolution of resources or authority.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Property development interests benefited from City Deal investment zones but this is inherent to urban infrastructure investment. No specific corruption indicators. Standard urban development policy where infrastructure investment creates property value increases.',confidence_notes:'Smart Cities Plan document (government policy); City Deal agreements (government agreements); Property Council and Urban Development Institute donation data (industry donations); Comparison with UK City Deals from Centre for Cities analysis (international comparison)',flag_explanations:[{label:'Property developer benefits from investment',detail:'Infrastructure investment creating property value increases does not prove corruption but demonstrates how infrastructure spending benefits real estate interests'}]}},

// 286. Snowy Hydro 2.0 (2017)
{ext:'au-pol-361', date:'2017-03-16', title:'Snowy Hydro 2.0 Announcement ($2B Initial, Now $12B+)', category:'infrastructure', impact_score:8, confidence_score:0.80,
  primary_beneficiaries:['Snowy Hydro Limited (government-owned) — capital asset and operations expansion','Webuild/Clough (construction JV) — construction contract estimated at $5-8B','Energy industry gaining storage capacity — pumped hydro storage increases grid capacity'],
  disadvantaged_groups:['Taxpayers funding massive cost blowout ($2B to $12B+) — project cost increased 600%','Kosciuszko National Park (tunnelling and construction impacts) — environmental impact from mining operations','Electricity consumers paying for over-capitalised storage — electricity bills may increase if storage not fully utilized'],
  revenue_impact:'Original $2B estimate grew to $12B+; feasibility study cost $29M; project economics depend on very high wholesale electricity prices. Cost blowout represents $10B+ increase in taxpayer liability.',
  what_changed:'Before March 2017, Snowy Hydro 2.0 was conceptual idea without feasibility study or business case. Prime Minister Malcolm Turnbull announced Snowy 2.0 as political response to electricity price crisis March 2017, committing $2B without completion of feasibility assessment. After announcement, project feasibility was studied (2017-2018) revealing true cost was approximately $10B rather than initial $2B estimate. Project proceeded despite massive cost escalation, with costs continuing to rise to $12B+ by 2020.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Malcolm Turnbull (Prime Minister)',interest:'Announced Snowy 2.0 without business case or feasibility study',relevance:'$2B announcement made for political purposes during energy crisis; actual costs 6x higher'},
    {member:'Angus Taylor (Energy Minister)',interest:'Continued project despite cost blowouts',relevance:'Taylor\'s electorate-level energy interests and relationships with energy sector influenced continued support'}
  ],
  linked_donations:[
    {donor:'Origin Energy',amount:'$95K',years_before_policy:1,industry:'oil_gas'},
    {donor:'AGL Energy',amount:'$82K',years_before_policy:1,industry:'oil_gas'}
  ],
  donations_context:'Origin and AGL Energy donated $177K combined in year before Snowy 2.0 announcement. Energy companies benefit from expanded storage capacity that increases grid stability.',
  comparison_country:'Norway',
  comparison_approach:'Norway\'s pumped hydro storage was developed at actual market costs through commercial decision-making by publicly-owned energy company Statkraft, with realistic cost estimates.',
  comparison_outcome:'Snowy 2.0 cost blowout (600%) suggests political announcement preceded economic analysis; comparable international projects are built at fraction of the cost per MW storage capacity.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2017 (Energy price crisis peaks, political pressure for government action) → March 2017 (Turnbull announces Snowy 2.0 at $2B without feasibility study) → 2017-2018 (feasibility study reveals $10B actual cost) → 2018-2022 (costs rise to $12B+). Snowy 2.0 was announced without a business case for political purposes during an energy crisis. The 600% cost blowout from $2B to $12B+ suggests the original announcement was knowingly unrealistic. While the project may ultimately provide useful energy storage, the process represents taxpayer-funded political marketing rather than sound infrastructure planning.',confidence_notes:'Snowy 2.0 feasibility assessment (GHD consultant report); Snowy Hydro corporate updates and investor presentations (corporate records); AEMO Integrated System Plan (grid planning data); Senate Estimates energy portfolio (parliamentary inquiry); Comparison with international pumped hydro costs from International Hydropower Association',flag_explanations:[{label:'Announcement without feasibility study',detail:'Announcing $2B infrastructure project without completed business case does not per se prove corruption but demonstrates poor fiscal management and potential political motivation'},{label:'600% cost blowout',detail:'Project cost increasing from $2B to $12B does not prove corruption but suggests original estimate was unrealistic and announcement was politically motivated'}]}},

// 287. Marriage Equality Survey (2017)
{ext:'au-pol-362', date:'2017-09-12', title:'Marriage Equality Postal Survey ($122M)', category:'subsidy', impact_score:5, confidence_score:0.90,
  primary_beneficiaries:['Marriage equality advocates (decisive 61.6% Yes result) — decisive public mandate for marriage equality legislation','LGBTIQ+ Australians — democratic validation of marriage equality support','Australia Post (survey administration) — significant contract for postal administration'],
  disadvantaged_groups:['LGBTIQ+ Australians subjected to public debate about their rights — marathon public campaign debating whether LGBTIQ+ Australians deserved equal treatment','$122M spent on survey that could have been a parliamentary vote — alternative democratic process would cost nothing','Mental health impact on LGBTIQ+ youth during campaign — documented increases in suicidality and distress during campaign period'],
  revenue_impact:'$122M cost for postal survey that was non-binding; a parliamentary free vote would have cost nothing. Represents $122M in opportunity cost for public purpose.',
  what_changed:'Before September 2017, Australian law did not permit marriage between same-sex couples. Prime Minister Malcolm Turnbull, facing internal Coalition pressure from conservative faction, decided not to allow a parliamentary vote on marriage equality as normal democratic process. Instead, government spent $122M conducting a non-binding postal survey asking Australians whether same-sex marriage should be legal. After September 2017 survey was held (61.6% Yes result), parliament legislated marriage equality in December 2017, confirming the survey result.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Malcolm Turnbull (Prime Minister)',interest:'Used postal survey to manage internal Coalition politics',relevance:'Spent $122M on survey rather than allowing free parliamentary vote due to conservative faction pressure'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'New Zealand',
  comparison_approach:'NZ legislated marriage equality through a parliamentary conscience vote in 2013 at no additional cost, with democratic process directly resolving the issue.',
  comparison_outcome:'NZ achieved same result through normal democratic process with no cost; Australia spent $122M on non-binding survey that inflicted unnecessary harm on LGBTIQ+ community during campaign period.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Political management of internal party dynamics rather than corruption. The $122M cost was wasteful but not corrupt. Survey served political purpose of managing Coalition internal divisions.',confidence_notes:'ABS postal survey results (official election administration data); ABS cost data for survey administration (government financial records); NZ Marriage (Definition of Marriage) Amendment Act 2013 (comparative legislation); Mental health impact studies from Australian Institute of Health and Welfare and Lifeline (health impact data)',flag_explanations:[]}},

// 288. Penalty Rates Reduction (2017)
{ext:'au-pol-363', date:'2017-07-01', title:'Fair Work Commission Sunday Penalty Rates Reduction', category:'industrial_relations', impact_score:7, confidence_score:0.85,
  primary_beneficiaries:['Restaurant and hospitality employers — reduced labor costs estimated at $600M-800M annually','Retail employers — penalty rate reduction saved estimated $400M-600M annually','Australian Chamber of Commerce members — member businesses benefited from lower penalty rates','Employers in selected industries — hospitality, retail, and fast food particularly benefited'],
  disadvantaged_groups:['700,000+ hospitality and retail workers losing $2,000-6,000/year — penalty rate reduction meant lower weekend pay','Single parents working weekends — disproportionately affected by lower weekend penalty rates','Students reliant on penalty rates — penalty rates made part-time work livable; reduction decreased income security'],
  revenue_impact:'Reduced Sunday rates from 200% to 150% in hospitality, 175% in retail; transferred estimated $1.2B/year from workers to employers. Approximately $1,700-2,500 per affected worker per year.',
  what_changed:'Before July 2017, hospitality and retail workers received Sunday penalty rates of 200% (hospitality) and 200-250% (retail), reflecting the principle that weekend work should be compensated at premium rates. Fair Work Commission, an independent statutory body, reviewed penalty rates in response to employer campaign. After July 2017 decision, Sunday penalty rates were reduced to 150% (hospitality) and 175% (retail), reducing weekend pay for 700,000+ workers.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Fair Work Commission (Iain Ross)',interest:'Independent commission decision',relevance:'While formally independent, the decision aligned with longstanding employer lobby campaign'},
    {member:'Restaurant & Catering Industry Association',interest:'Led campaign for penalty rate reduction for over a decade',relevance:'Industry association funded extensive research and lobbying for the outcome achieved'}
  ],
  linked_donations:[
    {donor:'Restaurant & Catering Industry Association',amount:'$52K',years_before_policy:2,industry:'financial_regulation'},
    {donor:'Australian Chamber of Commerce & Industry',amount:'$98K',years_before_policy:2,industry:'financial_regulation'},
    {donor:'National Retail Association',amount:'$35K',years_before_policy:2,industry:'financial_regulation'}
  ],
  donations_context:'Employer associations representing hospitality, retail, and chamber of commerce donated $185K combined in years preceding penalty rate decision. These organizations had campaigned for over a decade for penalty rate reduction.',
  comparison_country:'France',
  comparison_approach:'France maintains mandatory Sunday premium of 100% for most retail workers; recent reforms allowing Sunday trading required maintaining premiums to compensate workers.',
  comparison_outcome:'Australia reduced Sunday premiums while France maintained them; Australian low-wage workers lost $1.2B/year in aggregate income to employers.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Timeline: 2005-2017 (Restaurant & Catering Industry Association campaigns for penalty rate reduction) → 2017 (Fair Work Commission rules to reduce penalty rates after decade-long employer campaign) → associations who donated significantly had advocated for this outcome. The FWC decision was formally independent but followed a decade-long employer lobby campaign. Employer associations who donated $185K combined to the Coalition had advocated for this specific outcome. The transfer of $1.2B/year from workers to employers represents significant wealth redistribution via regulatory decision. While not corrupt per se, the process demonstrates employer lobby influence on industrial relations decisions.',confidence_notes:'Fair Work Commission penalty rates decision [2017] FWCFB 1001 (tribunal decision); Fair Work Commission research papers (regulatory analysis); Productivity Commission workplace relations inquiry (government inquiry); AEC donation records for employer associations (political finance); Comparison with French Code du travail Sunday provisions (international labor law)',flag_explanations:[{label:'Decade-long employer campaign preceding decision',detail:'Fair Work Commission decision following industry campaign does not per se prove corruption but shows outcome aligned with employer lobby priorities'},{label:'$1.2B annual transfer to employers',detail:'Penalty rate reduction transferring $1.2B annually to employers does not prove corruption but demonstrates significant regulatory outcome serving employer interests'}]}},

// 289. Cashless Debit Card Expansion (2017)
{ext:'au-pol-364', date:'2017-03-01', title:'Cashless Debit Card Expansion (Ceduna, East Kimberley, Goldfields)', category:'subsidy', impact_score:5, confidence_score:0.80,
  primary_beneficiaries:['Indue Ltd (expanded contract) — contract expanded to additional sites','Mining communities (reduced substance abuse impact) — substance abuse reduction sought by mining companies','Government narrative on welfare reform — program framed as welfare reform innovation'],
  disadvantaged_groups:['Additional welfare recipients losing financial autonomy — expanded card application to new sites','Indigenous communities disproportionately affected — three new trial sites were predominantly Indigenous','Privacy rights of cardholders — continued expansion of government spending tracking'],
  revenue_impact:'$36M expansion; ongoing costs $10,000+ per participant; no compelling evidence of reduced social harm. Cost per participant per year continued to far exceed standard welfare delivery.',
  what_changed:'Before March 2017, cashless debit card trial was operating in three initial sites (Ceduna, East Kimberley, Goldfields). Government announced March 2017 expansion to additional sites with Indue Ltd continuing as sole provider. After March 2017, cashless debit card was expanded beyond initial trial sites with additional government commitment and contract expansion.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Alan Tudge (Human Services Minister)',interest:'Expanded trials before evaluation of initial sites',relevance:'Expansion decisions preceded evidence of effectiveness from initial trials'},
    {member:'Indue Ltd',interest:'LNP-linked card provider receiving expanded contract',relevance:'Sole-source contract to politically connected company continued to expand without competitive procurement'}
  ],
  linked_donations:[
    {donor:'Indue Ltd (via associated entities)',amount:'$18K',years_before_policy:1,industry:'financial_regulation'}
  ],
  donations_context:'Indue continued to expand contract despite minimal donations. Pattern suggests sole-source contracting to politically connected entity rather than donation-driven corruption.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK abandoned its Universal Credit prepaid card proposal after pilot showed no benefits and high stigma among participants.',
  comparison_outcome:'UK abandoned comparable scheme after evidence showed no effectiveness; Australia expanded despite similarly inconclusive evidence from initial trials.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2015-2016 (initial trials operate with inconclusive results) → 2017 (expansion announced before evaluation complete) → 2017-2020 (expanded program continues with ongoing contracts to Indue). Expansion of a program with inconclusive evidence, delivered by a politically connected company, in communities disproportionately affecting Indigenous Australians. The pattern of expansion before evaluation is concerning and suggests contractor interests took priority over evidence-based policy.',confidence_notes:'Senate Community Affairs inquiry into cashless debit card (parliamentary investigation); Orima Research evaluation reports (program evaluation); Indue Ltd corporate history (corporate records); Comparison with UK Universal Credit prepaid card pilot and decision to discontinue (international comparison)',flag_explanations:[{label:'Expansion before evaluation',detail:'Expanding program before completion of trials does not prove corruption but demonstrates cart-before-horse policy process suggesting predetermined outcome'},{label:'Sole-source contract continuation',detail:'Continuing sole-source contract to Indue without competitive procurement does not prove corruption but suggests political preference for connected contractor'}]}},

// 290. Gonski 2.0 (2017)
{ext:'au-pol-365', date:'2017-06-23', title:'Gonski 2.0 School Funding Reform ($23.5B Over 10 Years)', category:'education', impact_score:7, confidence_score:0.82,
  primary_beneficiaries:['Disadvantaged public schools — increased funding based on student need','Catholic education sector (transition funding) — system maintained relative funding levels through transition period','Regional schools — increased support for regional education','Indigenous schools — increased funding for Indigenous education'],
  disadvantaged_groups:['Over-funded private schools facing phased reduction — some schools faced reduction from historical over-funding','States bearing increased share of school funding — states required to fund greater proportion','Schools losing special deals from Gonski 1.0 — individual school deals were replaced with formula'],
  revenue_impact:'$23.5B over 10 years in needs-based funding; phased reduction of historical over-funding for some schools. Average increase of $2.35B annually compared to baseline.',
  what_changed:'Before June 2017, Australian school funding operated under Gonski 1.0 (Labor) framework with mix of needs-based funding and special arrangements negotiated with individual schools. Coalition government released Gonski 2.0 in June 2017 proposing replacement with revised needs-based formula using new weighted funding approaches. After Gonski 2.0 legislation, funding operated under new formula replacing Labor\'s earlier structure with greater emphasis on baseline weighted approach rather than individual school deals.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Simon Birmingham (Education Minister)',interest:'Designed Gonski 2.0 to replace Labor\'s Gonski 1.0 special deals',relevance:'Some Catholic system schools received transition funding to soften impact of needs-based reform'},
    {member:'Catholic Education Commission',interest:'Lobbied for system-weighted average approach preserving Catholic school funding',relevance:'Catholic sector\'s block funding approach maintained some schools above needs-based levels'}
  ],
  linked_donations:[
    {donor:'Independent Schools Council',amount:'$52K',years_before_policy:1,industry:'education'}
  ],
  donations_context:'Independent Schools Council donation of $52K preceded Gonski 2.0 announcement. However, outcome was genuinely needs-based despite some transition provisions.',
  comparison_country:'Finland',
  comparison_approach:'Finland funds all schools equally through needs-based formula; no government funding for private schools; highest per-pupil funding for most disadvantaged students.',
  comparison_outcome:'Gonski 2.0 moved Australia closer to needs-based funding but continued funding private schools at levels above many comparable countries.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Gonski 2.0 was genuinely needs-based reform, though Catholic sector lobbying secured transition provisions. The policy represents progress toward equity despite continued private school influence. This is standard education lobbying rather than corruption.',confidence_notes:'Australian Education Amendment Act 2017 (legislation); My School funding data and comparative analysis (education data); Gonski 2.0 detailed allocation analysis (education policy); Comparison with Finnish education funding data from Ministry of Education (international comparison)',flag_explanations:[{label:'Catholic sector lobbying',detail:'Catholic sector obtaining transition funding does not prove corruption but demonstrates standard advocacy by education sectors'}]}},

// 291. Perth Metronet (2017)
{ext:'au-pol-366', date:'2017-11-01', title:'Perth Metronet Rail Project ($5.6B Federal/State)', category:'infrastructure', impact_score:6, confidence_score:0.80,
  primary_beneficiaries:['Perth commuters (new rail lines) — 72km of new rail infrastructure expanding network','Construction companies (Downer, CPB) — construction contracts estimated at $3-4B','Property developers along new rail corridors — property values increase near new stations'],
  disadvantaged_groups:['Bus users on disrupted routes during construction — temporary disruption from construction activities','Taxpayers if cost overruns occur — infrastructure projects historically experience cost overruns','Regional WA receiving less transport investment — concentrate in Perth reduce resources for regional areas'],
  revenue_impact:'$5.6B total cost (federal $3.2B, state $2.4B); largest WA public transport investment in decades. Approximately $30,000 per Perth household in investment.',
  what_changed:'Before November 2017, Perth had no confirmed plan for the Metronet rail expansion project, though proposals existed. Western Australia Labor government (Mark McGowan) committed to Metronet as election promise. After election victory, government confirmed Metronet project November 2017 with federal and state funding commitments totaling $5.6B. Projects included new rail lines to Thornlie, Yanchep, Spadestown, and extensions to existing lines.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'WA Labor government (Mark McGowan)',interest:'Key election commitment for Perth seats',relevance:'Project selection influenced by electoral considerations alongside transport merit'}
  ],
  linked_donations:[
    {donor:'Downer EDI',amount:'$55K',years_before_policy:2,industry:'infrastructure'},
    {donor:'Property Council of Australia WA',amount:'$45K',years_before_policy:2,industry:'property'}
  ],
  donations_context:'Downer and Property Council donated $100K combined in years preceding Metronet commitment. Downer benefited from construction contract while Property Council benefited from increased property values along new rail corridors.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK Crossrail provided similar inner-city rail expansion in London at £18.8B, integrating additional regional connectivity.',
  comparison_outcome:'Both projects expanded urban rail; Metronet is more modest in scale but proportional to Perth\'s size. Both represent significant public transport investment.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Positive public transport investment. Standard construction industry involvement in infrastructure projects. No specific corruption indicators. Election commitments to major infrastructure are normal feature of democratic competition.',confidence_notes:'Perth Metronet project documentation and announcements (government records); Infrastructure Australia assessment (independent infrastructure analysis); Comparison with Crossrail data from Transport for London (international project comparison)',flag_explanations:[]}},

// 292. Section 501 Visa Cancellation (2017)
{ext:'au-pol-367', date:'2017-07-01', title:'Section 501 Visa Cancellation Expansion', category:'immigration', impact_score:6, confidence_score:0.82,
  primary_beneficiaries:['Political parties demonstrating border security credentials — deportations provided visible enforcement narrative','Immigration enforcement bureaucracy — expanded authority and resources'],
  disadvantaged_groups:['Long-term residents deported to countries they barely know — many arrived as infants or young children','New Zealand citizens (largest affected group) — 2,000+ NZ citizens deported since 2014','Families separated by deportation — children separated from Australian-born siblings','Pacific Island communities receiving deportees — communities received deportees with no integration support'],
  revenue_impact:'Administrative costs ~$200M/year; 5,000+ visa cancellations since expansion; $75M in detention costs for section 501 cases. Operational cost approximately $30,000-50,000 per deportation.',
  what_changed:'Before July 2017, section 501 of Migration Act allowed visa cancellation for character grounds including criminal convictions. Government expanded application of section 501 with Minister Peter Dutton personally deciding or overseeing cancellations. After July 2017 expansion, visa cancellation authority was expanded with lower threshold for decisions and greater ministerial discretion over individual cases.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Peter Dutton (Immigration Minister)',interest:'Personally made or oversaw character-based visa cancellation decisions',relevance:'Ministerial discretion in individual cases creates accountability concerns and inconsistent decision-making'},
    {member:'NZ-Australia relationship',interest:'Largest affected group is long-term NZ residents',relevance:'Section 501 deportations severely damaged NZ-Australia diplomatic relationship'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'Canada',
  comparison_approach:'Canada allows deportation of non-citizens for serious crime but provides more robust appeal rights and considers length of residence and community ties.',
  comparison_outcome:'Australia\'s character test is broader and provides less consideration of community ties; 501 deportees include people who arrived as infants with no alternative country identification.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Immigration enforcement policy rather than corruption. Concerns about proportionality and fairness are legitimate human rights and policy issues but do not constitute corruption.',confidence_notes:'Migration Act section 501 statistics (legislative and administrative records); ABF annual reports and deportation data (administrative agency records); NZ government submissions on section 501 impact (diplomatic records); Comparison with Canadian IRPA inadmissibility provisions (international immigration law)',flag_explanations:[]}},

// 293. Murray-Darling Buybacks Capped (2017)
{ext:'au-pol-368', date:'2017-06-16', title:'Murray-Darling Basin Plan Water Buybacks Capped at 1,500GL', category:'agriculture', impact_score:7, confidence_score:0.82,
  primary_beneficiaries:['Upstream irrigators retaining water entitlements — direct benefit from capping buybacks that would have reduced their allocations','Cotton industry — continued access to irrigation water at reduced cost','Rice growers — upstream allocation preserved through cap on buybacks','National Party electorates — upstream irrigation-dependent regions maintained water access'],
  disadvantaged_groups:['Murray River environmental flows — capped buybacks meant less water for environmental restoration','South Australian communities dependent on River Murray — downstream water flows reduced','Downstream irrigators — allocation reduced as upstream farmers retain entitlements'],
  revenue_impact:'Cap on buybacks meant remaining water recovery ($1.5B+) must come from expensive infrastructure "efficiency" projects rather than cheaper buybacks. Infrastructure approach costs 3-5x more per megalitre recovered.',
  what_changed:'Before June 2017, the Murray-Darling Basin Plan included a 2,750 gigalitre water recovery target, with buybacks (paying farmers to reduce allocations) as the primary cost-effective mechanism. Deputy PM Barnaby Joyce, representing upstream irrigation electorate of New England, pushed to cap buybacks at 1,500GL. After cap implemented, remaining water recovery (1,250GL) had to come from expensive infrastructure "efficiency" projects rather than cheaper buybacks, significantly increasing recovery costs.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Barnaby Joyce (Deputy PM/Agriculture Minister)',interest:'Represented upstream irrigation electorate of New England',relevance:'Capping buybacks directly benefited his constituents at expense of environmental flows'},
    {member:'David Littleproud (later Agriculture Minister)',interest:'QLD irrigator electorate',relevance:'National Party consistently prioritised upstream irrigation over environmental science'},
    {member:'Cotton Australia',interest:'Major irrigation lobby opposing water buybacks',relevance:'Cotton industry donated significantly while successfully limiting water recovery'}
  ],
  linked_donations:[
    {donor:'Cotton Australia',amount:'$62K',years_before_policy:1,industry:'agriculture'},
    {donor:'National Irrigators Council',amount:'$42K',years_before_policy:1,industry:'agriculture'},
    {donor:'NSW Irrigators Council',amount:'$28K',years_before_policy:2,industry:'agriculture'}
  ],
  donations_context:'Cotton industry and irrigation councils donated $132K combined in years preceding buyback cap. These organizations represent upstream irrigation interests that directly benefited from policy limiting water recovery through buybacks.',
  comparison_country:'United States',
  comparison_approach:'Colorado River negotiations involved all basin states sharing water cuts proportionally, with both agriculture and urban users contributing to recovery.',
  comparison_outcome:'Australia capped the most cost-effective water recovery method (buybacks) to protect upstream irrigators, making remaining recovery 3-5x more expensive through infrastructure projects of dubious environmental benefit.',
  analysis_json:{corruption_signal_strength:'moderate',corruption_signal_reasoning:'Timeline: 2010-2017 (Wentworth Group and environmental advocates recommend buybacks as primary recovery method) → 2015-2017 (Cotton Australia and irrigation councils donate $132K while campaigning against buybacks) → June 2017 (Barnaby Joyce, representing upstream irrigation electorate, implements cap on buybacks). Capping buybacks at 1,500GL was a National Party policy that directly served cotton and rice industry donors at the expense of environmental science. Wentworth Group estimated this decision will cost taxpayers $1.5B+ in more expensive infrastructure projects while delivering less water to the environment. This represents a clear case of agricultural industry donors achieving regulatory capture where their preferred policy (reducing buyback funding) was implemented despite conflicting with scientific recommendations.',confidence_notes:'Murray-Darling Basin Plan amendments (government policy); Wentworth Group analysis (environmental policy analysis); MDBA water recovery data and costings (water agency data); ANAO water infrastructure audits (government audit office reports); AEC donation records for cotton and irrigation groups (political finance); Four Corners water theft investigations (investigative journalism)',flag_explanations:[{label:'Industry donations preceding policy',detail:'$132K in donations from cotton and irrigation groups before buyback cap does not per se prove corruption but shows temporal correlation between industry donations and policy benefiting those industries'},{label:'Policy conflict with environmental science',detail:'Capping buybacks despite environmental recommendations does not prove corruption but demonstrates how industry preferences can override scientific advice'}]}},

// 294. Foreign Ownership Register (2017)
{ext:'au-pol-369', date:'2017-06-01', title:'Foreign Ownership Register for Agricultural Land and Water', category:'agriculture', impact_score:4, confidence_score:0.82,
  primary_beneficiaries:['Transparency advocates — enabling data collection on foreign land ownership','National security analysts — providing data for sovereignty assessment','Policy makers gaining data — informing policy decisions on foreign investment limits'],
  disadvantaged_groups:['Foreign investors facing additional reporting — administrative burden of reporting requirements','Administrative costs passed to market — registration costs incrementally increased transaction costs'],
  revenue_impact:'Register establishment cost ~$10M; identified 14.1% of agricultural land foreign-owned (2020 data). Minimal direct fiscal impact but enables informed policy.',
  what_changed:'Before June 2017, Australia had no comprehensive register of foreign ownership of agricultural land and water rights. Government established Foreign Ownership Register June 2017 requiring reporting of foreign acquisitions of agricultural land and water. After June 2017, Foreign Ownership Register began collecting data on foreign ownership with initial disclosure of existing foreign holdings, providing first comprehensive picture of foreign investment in Australian agricultural assets.',
  corporate_advantage:false,
  conflict_of_interest_flags:[],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'Canada',
  comparison_approach:'Canadian provinces maintain more detailed foreign ownership registers with acquisition restrictions varying by province, some provinces restricting foreign agricultural land ownership.',
  comparison_outcome:'Both countries improved transparency; Canada has more restrictive provincial frameworks that include acquisition restrictions, not just ownership registers.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Transparency measure with no corruption indicators. Positive governance reform that increased public knowledge of foreign ownership patterns.',confidence_notes:'ATO Register of Foreign Ownership of Agricultural Land data and reports (government register); FIRB annual reports (foreign investment regulator); Comparison with Canadian provincial foreign ownership frameworks (international comparison)',flag_explanations:[]}},

// 295. Interactive Gambling Amendment (2017)
{ext:'au-pol-370', date:'2017-09-13', title:'Interactive Gambling Amendment Act 2017', category:'gambling', impact_score:5, confidence_score:0.82,
  primary_beneficiaries:['Licensed Australian operators (Sportsbet, Ladbrokes) — blocked competition from unlicensed offshore operators','State gambling regulators — maintained regulatory framework and revenue','Problem gambling services — industry funding for harm minimization services'],
  disadvantaged_groups:['Unlicensed offshore operators (blocked) — barred from Australian market','Poker players (in-play betting tightened) — restricted access to in-play betting products','Gamblers losing access to some products — unavailable products previously accessible from offshore'],
  revenue_impact:'Blocked access to unlicensed offshore operators; protected estimated $5B/year in licensed operator revenue. Represented protection of incumbent market share.',
  what_changed:'Before September 2017, online gambling regulation allowed some unlicensed offshore operators to service Australian customers with products (particularly in-play betting) not available from licensed operators. Interactive Gambling Amendment Act 2017 passed September 2017 tightened restrictions on unlicensed operators and in-play betting. After September 2017, unlicensed offshore operators faced increased enforcement action while in-play betting products became more restricted.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Licensed gambling operators',interest:'Lobbied for blocking unlicensed competition',relevance:'Policy reduced competition while maintaining licensed operators\' market dominance'}
  ],
  linked_donations:[
    {donor:'Tabcorp',amount:'$82K',years_before_policy:2,industry:'gambling'},
    {donor:'Sportsbet/Flutter',amount:'$35K',years_before_policy:1,industry:'gambling'}
  ],
  donations_context:'Tabcorp and Sportsbet/Flutter donated $117K combined in years preceding gambling amendment. These licensed operators benefited from regulation reducing competition.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK Gambling Act 2005 created comprehensive regulatory framework with strong consumer protections and problem gambling requirements across all operators.',
  comparison_outcome:'Australia\'s gambling regulation remains fragmented across states; UK has more comprehensive national framework with stronger harm reduction focus.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Regulation served consumer protection goals but also protected licensed operator revenues. This represents standard regulatory capture dynamics where existing operators use regulation to limit competition.',confidence_notes:'Interactive Gambling Amendment Act 2017 (legislation); ACMA enforcement data (regulatory agency records); Licensed operator lobbying submissions (lobbying records); Comparison with UK Gambling Commission regulatory framework (international regulatory comparison)',flag_explanations:[{label:'Protection of licensed operators',detail:'Blocking offshore competition does not per se prove corruption but demonstrates how regulation can serve incumbent protection rather than consumer interests'}]}},

// 296. Gambling Advertising Restrictions (2017)
{ext:'au-pol-371', date:'2017-03-30', title:'Gambling Advertising Restrictions Enhanced', category:'gambling', impact_score:5, confidence_score:0.82,
  primary_beneficiaries:['Children and vulnerable people (reduced exposure) — reduced gambling advertising during sensitive periods','Problem gambling services — increased funding from gambling industry contributions','Free-to-air TV viewers during sport — removed gambling advertisements during live sport broadcast'],
  disadvantaged_groups:['Gambling companies\' advertising revenue — reduced advertising spending opportunities','Sports broadcasters losing gambling ad revenue — lost gambling advertising revenue stream','Gambling affiliate marketing businesses — reduced marketing opportunities'],
  revenue_impact:'Restricted gambling ads during live sport before 8:30pm; industry estimated $200M/year in advertising spending affected. Significant but manageable revenue reduction for gambling industry.',
  what_changed:'Before March 2017, gambling operators could advertise extensively during live sports broadcasts, including daytime sports events with child viewers. Gambling Advertising Restrictions implemented March 2017 prohibited gambling advertisements during live sport broadcasts before 8:30pm. After March 2017, gambling advertising was restricted during prime family viewing times, with enforcement from 2017 onwards.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Mitch Fifield (Communications Minister)',interest:'Implemented restrictions after strong public pressure',relevance:'Restrictions were weaker than recommended by parliamentary inquiry; gambling industry influence moderated the outcome'}
  ],
  linked_donations:[
    {donor:'Sportsbet/Flutter',amount:'$32K',years_before_policy:1,industry:'gambling'},
    {donor:'Tabcorp',amount:'$78K',years_before_policy:1,industry:'gambling'},
    {donor:'Free TV Australia',amount:'$25K',years_before_policy:2,industry:'media'}
  ],
  donations_context:'Gambling operators and Free TV Australia donated $135K combined in years preceding restrictions announcement. Restrictions represented compromise between gambling industry resistance and public advocacy.',
  comparison_country:'Italy',
  comparison_approach:'Italy banned all gambling advertising in 2019 (Dignity Decree) — complete prohibition across all media during specified hours.',
  comparison_outcome:'Australia implemented partial restrictions; Italy implemented total ban. Australian children still exposed to significant gambling advertising outside restricted hours.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Restrictions were weaker than recommended by parliamentary inquiry, reflecting gambling industry lobbying, but represented genuine progress on harm reduction. Compromise outcome rather than corruption.',confidence_notes:'Broadcasting Services Act amendments (legislation); ACMA gambling advertising monitoring reports (regulatory agency data); Parliamentary committee inquiry recommendations (parliamentary investigation); Comparison with Italian Decreto Dignità gambling advertising provisions (international gambling regulation)',flag_explanations:[{label:'Weaker than recommended restrictions',detail:'Implementing restrictions weaker than recommended does not per se prove corruption but demonstrates industry influence in moderating harm reduction measures'}]}},

// 297. 457 Visa Abolished (2017)
{ext:'au-pol-372', date:'2017-04-18', title:'457 Visa Abolished - Replaced with Temporary Skill Shortage (TSS) 482', category:'immigration', impact_score:6, confidence_score:0.83,
  primary_beneficiaries:['Australian workers (tighter labour market testing) — required stricter labor market testing before visa approval','Immigration enforcement agencies — expanded authority over skilled migration','Political narrative on protecting Australian jobs — political benefit from appearing to limit skilled migration'],
  disadvantaged_groups:['Employers relying on skilled migration — reduced access to migrant workers','Existing 457 holders facing transition uncertainty — need to transition to new visa class','Skilled migrants from non-English speaking backgrounds — language requirements tightened'],
  revenue_impact:'Reduced temporary skilled migration by ~25% initially; tighter occupation lists excluded many previously eligible roles. Estimated $1-2B reduction in skilled migration contribution to economy.',
  what_changed:'Before April 2017, Australia operated the 457 visa (Skilled Sponsored visa) allowing employers to sponsor skilled workers from overseas if no Australian workers could fill roles. Immigration Minister Peter Dutton announced abolition of 457 visa April 2017, replacing it with Temporary Skill Shortage (TSS) 482 visa. After April 2017, the 457 visa ceased and TSS 482 replaced it, with tighter occupation lists and higher salary thresholds, reducing skilled migration.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Peter Dutton (Immigration Minister)',interest:'Announced abolition of "457s" for political impact',relevance:'Largely rebranding exercise; TSS 482 visa contained many of the same provisions with tighter criteria'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'Canada',
  comparison_approach:'Canada uses Express Entry points-based system selecting permanent skilled migrants based on labor market needs, offering clear pathway to permanent residence.',
  comparison_outcome:'Canada\'s permanent migration pathway attracts more skilled workers; Australia\'s temporary visa focus creates exploitation risks and uncertainty for migrants.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Immigration policy change with mixed economic impacts. Largely a rebranding exercise; TSS 482 shared many features with abolished 457 visa. No corruption indicators.',confidence_notes:'Migration Act amendments implementing 457 abolition and TSS 482 introduction (legislation); DHA visa statistics and comparative data (immigration authority data); Comparison with IRCC Express Entry data (Canadian immigration comparison)',flag_explanations:[]}},

// 305. Banking Royal Commission (2018)
{ext:'au-pol-373', date:'2018-02-12', title:'Royal Commission into Financial Services Misconduct', category:'financial_regulation', impact_score:10, confidence_score:0.92,
  primary_beneficiaries:['Consumers who had been exploited by banks and financial advisors — exposed misconduct, enabled remediation','Regulatory reform advocates — Royal Commission validated concerns about regulatory failures','ASIC and APRA (ultimately received more resources) — increased funding and authority following RC findings'],
  disadvantaged_groups:['Major banks facing remediation costs — forced to compensate consumers for unlawful conduct','Financial advisors under increased compliance — elevated regulatory scrutiny and compliance costs','AMP shareholders (company devastated by revelations) — share price collapsed following RC revelations'],
  revenue_impact:'$10.2B in remediation and compensation paid by financial institutions; $20B+ in bank share value lost; regulatory costs increased $500M+. Largest direct corporate financial impact of any regulatory action in Australian history.',
  what_changed:'Before February 2018, financial services industry operated with minimal direct government accountability despite concerns about consumer protection. Pressure built for Royal Commission into financial services misconduct through 2016-2017. Prime Minister Malcolm Turnbull established Royal Commission February 2018, which conducted public hearings revealing systematic misconduct across the banking and financial advisory sector. After Royal Commission final report released February 2019, financial institutions paid $10.2B in compensation and remediation for: fees charged on closed accounts, fees charged to deceased account holders, lending fraud, superannuation fund self-dealing, and misconduct deliberately hidden from regulators.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Scott Morrison (Treasurer)',interest:'Opposed Royal Commission for 2 years before relenting',relevance:'Coalition voted against RC 26 times while banks donated $7M+ to both parties; Morrison said "If it was up to me I wouldn\'t be holding it"'},
    {member:'CBA, Westpac, NAB, ANZ',interest:'All four major banks opposed Royal Commission',relevance:'Banks donated $7M+ to both parties over the decade; Coalition delayed and attempted to limit scope'},
    {member:'Josh Frydenberg (later Treasurer)',interest:'Managed government response to RC recommendations',relevance:'Government accepted 75 of 76 recommendations but implementation has been slow and incomplete'}
  ],
  linked_donations:[
    {donor:'CBA',amount:'$620K',years_before_policy:5,industry:'financial_regulation'},
    {donor:'Westpac',amount:'$485K',years_before_policy:5,industry:'financial_regulation'},
    {donor:'NAB',amount:'$445K',years_before_policy:5,industry:'financial_regulation'},
    {donor:'ANZ',amount:'$420K',years_before_policy:5,industry:'financial_regulation'},
    {donor:'AMP',amount:'$280K',years_before_policy:5,industry:'financial_regulation'}
  ],
  donations_context:'CBA, Westpac, NAB, ANZ, and AMP donated $2.25 billion combined over preceding decade to both major parties. All four major banks actively opposed Royal Commission establishment, despite later RC findings of systematic misconduct. This represents clearest documented case of political donations buying regulatory protection.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK Parliamentary Commission on Banking Standards (2013) led to criminal sanctions for reckless banking and structural separation requirements for retail and investment operations.',
  comparison_outcome:'UK imposed criminal liability for reckless bankers; Australia\'s RC found worse misconduct but criminal prosecutions have been limited. UK reformed banking structure; Australia maintained incumbent structure.',
  analysis_json:{corruption_signal_strength:'strong',corruption_signal_reasoning:'Timeline: 2008-2018 (financial institutions commit systematic misconduct: fees for no service, charging deceased customers, lending fraud, superannuation looting) → 2008-2018 (major banks donate $7M+ to both Coalition and Labor while misconduct occurs) → 2016-2017 (Coalition votes against Royal Commission 26 times while banks continue donating) → February 2018 (Prime Minister Turnbull finally establishes RC after political pressure) → 2019 (RC final report found worse misconduct than anticipated). The Banking Royal Commission revealed systematic misconduct across Australia\'s financial sector: fees for no service ($1B+), charging dead people for financial advice, living expenses fraud in lending, and superannuation fund self-dealing. The major banks donated $7M+ to both parties over the preceding decade. The Coalition voted against establishing the RC 26 times. This represents the clearest documented case of political donations buying regulatory protection: banks paid millions in donations, received delayed and weakened regulation, and only faced accountability when the political cost of blocking the RC exceeded the donation-driven incentive to protect the banks. Prime Minister Morrison stated "If it was up to me I wouldn\'t be holding it," revealing that bank donor influence nearly prevented the RC entirely.',confidence_notes:'Royal Commission into Misconduct in Banking, Superannuation and Financial Services Final Report (Hayne) (official inquiry report); Bank remediation reports and compensation announcements (corporate financial data); AEC donation records for major banks (political finance); Parliamentary voting records on RC establishment motions (parliamentary records); Comparison with UK Parliamentary Commission on Banking Standards report (international comparison)',flag_explanations:[{label:'Bank donations preceding misconduct',detail:'$7M+ in donations by banks before and during misconduct does not per se prove quid pro quo but demonstrates that major donors received regulatory protection despite systematic consumer misconduct'},{label:'Coalition voting against RC 26 times',detail:'Coalition opposition to RC establishment does not per se prove corruption but shows clear alignment between bank donor interests (opposing oversight) and Coalition voting position (opposing RC)'},{label:'$10.2B compensation after RC',detail:'Unprecedented $10.2B compensation payment does not prove prior corruption but demonstrates that RC was necessary to force accountability that donors\' regulatory influence had prevented'}]}},

// 306. My Health Record Opt-Out Period (2018)
{ext:'au-pol-374', date:'2018-07-16', title:'My Health Record Opt-Out Period (2.5M Opt Out)', category:'healthcare', impact_score:4, confidence_score:0.82,
  primary_beneficiaries:['Remaining 90% of Australians with digital health records — enabled health IT ecosystem','Healthcare providers accessing records — clinicians gain access to patient information','Digital health research — enabled longitudinal health data analysis'],
  disadvantaged_groups:['Those who missed opt-out period — involuntarily enrolled if they didn\'t act within deadline','Privacy advocates — privacy concerns not fully addressed','Patients with sensitive health information — sensitive information stored centrally'],
  revenue_impact:'Opt-out period cost $50M to administer; 2.5 million Australians opted out (10%). Achieved 90% participation enabling health IT system viability.',
  what_changed:'Before July 2018, My Health Record operated with automatic enrollment with opt-out available. Government announced My Health Record opt-out period July 2018 providing final deadline for Australians to opt out of the system. After July 2018 opt-out period closed, My Health Record continued with 90% of Australians enrolled, with opt-out no longer available (though subsequent concerns led to resumed opt-out periods).',
  corporate_advantage:false,
  conflict_of_interest_flags:[],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'Denmark',
  comparison_approach:'Denmark\'s Sundhed.dk provides universal digital health records with strong privacy controls and patient access logs showing who accessed each record.',
  comparison_outcome:'Both countries achieved high participation; Denmark\'s system has stronger privacy controls and is more widely used by clinicians.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Privacy-respecting implementation of opt-out period. Reasonable public engagement process with opt-out opportunity. Standard health information policy iteration.',confidence_notes:'Australian Digital Health Agency opt-out statistics (regulatory agency data); Opt-out communication and campaign data (government records); Comparison with Danish Sundhed.dk participation data (international health IT)',flag_explanations:[]}},

// 307. HECS Threshold Reduced (2018)
{ext:'au-pol-375', date:'2018-07-01', title:'HECS-HELP Repayment Threshold Reduced to $45,881', category:'education', impact_score:6, confidence_score:0.85,
  primary_beneficiaries:['Government revenue ($600M/year in additional repayments) — earlier repayment generation increased budget revenue','Higher-income graduates paying faster — those earning above threshold begin repayments immediately'],
  disadvantaged_groups:['Low-income graduates starting repayment at lower earnings — repayment burden shifted to lower-income graduates','Women (lower average earnings trigger earlier repayment) — gender wage gap meant more women affected by lower threshold','Part-time workers and carers — lower earnings but still subject to repayment threshold'],
  revenue_impact:'Threshold reduced from $55,874 to $45,881 (later $51,550); raised ~$600M/year in additional HECS repayments. Approximately $3,000-5,000 additional annual repayment burden for affected graduates.',
  what_changed:'Before July 2018, HECS-HELP repayment began when graduates earned above $55,874 annually. Education Minister Simon Birmingham announced HECS threshold reduction July 2018 reducing repayment threshold to $45,881. After July 2018, graduates earning above $45,881 became subject to HECS-HELP repayment, generating additional $600M annually in student loan repayments.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Simon Birmingham (Education Minister)',interest:'Implemented as part of higher education savings measures',relevance:'Lower threshold disproportionately affected women and low-income graduates'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK student loan repayment threshold £27,295 (~$52,000 AUD) with loans written off after 30 years, protecting lower-income graduates.',
  comparison_outcome:'Australia\'s lower threshold means graduates start repaying at lower income; UK is more generous with threshold and includes time-based write-off of remaining debt.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Budget savings measure with equity concerns but no corruption indicators. Standard budget measure to raise government revenue.',confidence_notes:'Budget papers 2018-19 (government fiscal documentation); ATO HELP debt statistics (tax administration data); Graduate income data from ABS (demographic data); Comparison with UK Student Loans Company data (international comparison)',flag_explanations:[]}},

// 308. Encryption Act (2018)
{ext:'au-pol-376', date:'2018-12-06', title:'Assistance and Access (Encryption) Act Passed', category:'infrastructure', impact_score:7, confidence_score:0.82,
  primary_beneficiaries:['Law enforcement agencies — expanded powers to compel technology companies to provide access to encrypted communications','Intelligence services — expanded surveillance capabilities','National security bureaucracy — expanded authority and budget'],
  disadvantaged_groups:['Technology companies forced to create vulnerabilities — required to build government backdoors','All Australians whose encryption is weakened — reduced privacy and data security for all citizens','Australian tech industry reputation — international concerns about Australia\'s encryption weakening','Cybersecurity professionals — undermined encryption security standards they maintain'],
  revenue_impact:'No direct fiscal cost but estimated $600M-1B impact on Australian tech industry competitiveness from erosion of encryption reputation.',
  what_changed:'Before December 2018, Australian technology companies used industry-standard encryption protecting user communications from unauthorized access. Home Affairs Minister Peter Dutton introduced Assistance and Access (Encryption) Act December 2018 requiring technology companies to provide government backdoor access to encrypted communications. After December 2018 legislation passed, Australian technology companies and international companies operating in Australia were required to provide government access to encrypted communications, effectively weakening encryption security.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Peter Dutton (Home Affairs Minister)',interest:'Pushed rushed legislation through parliament',relevance:'Bill passed in final sitting day of 2018 with Labor capitulating despite unresolved concerns'},
    {member:'Five Eyes intelligence alliance',interest:'Australia was first to pass encryption-weakening legislation',relevance:'Bill served Five Eyes intelligence objectives potentially at expense of Australian tech sector'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'European Union',
  comparison_approach:'EU has resisted comparable encryption-weakening legislation, maintaining end-to-end encryption protections despite law enforcement pressure.',
  comparison_outcome:'Australia weakened encryption protections; EU maintained them. Australian tech companies reported customer concerns about data security and potential market impact.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'National security overreach rather than corruption. The rushed passage without adequate technical review was poor process but served legitimate intelligence objectives. No financial corruption indicators but significant civil liberties and tech sector concerns.',confidence_notes:'Telecommunications and Other Legislation Amendment (Assistance and Access) Act 2018 (legislation); Intelligence and Security Legislation Amendment (INSLM) review of encryption capability notices (regulatory review); Tech industry submissions and concerns (industry submissions); Comparison with EU Council encryption debate positions (international policy comparison)',flag_explanations:[{label:'Rushed passage without technical review',detail:'Fast-tracking legislation without adequate technical review does not per se prove corruption but demonstrates poor parliamentary process potentially prioritizing government convenience over technical soundness'}]}},

// 309. 5G Spectrum Auction (2018)
{ext:'au-pol-377', date:'2018-12-10', title:'5G Spectrum Auction 3.6GHz Band ($853M)', category:'infrastructure', impact_score:6, confidence_score:0.82,
  primary_beneficiaries:['Telstra (won largest allocation) — gained largest spectrum allocation','Optus — spectrum access enabling 5G deployment','TPG/Vodafone — spectrum access to compete in 5G market','5G equipment suppliers (Nokia, Ericsson after Huawei ban) — benefited from Huawei exclusion'],
  disadvantaged_groups:['Regional users (5G focused on metro areas) — rural broadband continued to receive lower investment','Huawei (banned from 5G) — excluded from 5G equipment supply market','Fixed wireless users facing NBN uncertainty — uncertainty about long-term broadband technology strategy'],
  revenue_impact:'$853M raised from spectrum auction; Huawei ban increased 5G rollout costs by estimated $500M+ through use of higher-cost Western equipment.',
  what_changed:'Before December 2018, Huawei was permitted to participate in Australian 5G infrastructure development. Government banned Huawei from 5G network participation December 2018 on national security grounds, simultaneously conducting spectrum auction for 3.6GHz band. After December 2018, Huawei was excluded from Australian 5G deployment, with spectrum auction raising $853M from Nokia, Ericsson, and other Western vendors.',
  corporate_advantage:true,
  conflict_of_interest_flags:[
    {member:'Turnbull government',interest:'Banned Huawei from 5G on national security grounds',relevance:'Ban was appropriate on security grounds but also benefited rival vendors Nokia and Ericsson who donated to both parties'}
  ],
  linked_donations:[
    {donor:'Telstra',amount:'$198K',years_before_policy:1,industry:'infrastructure'},
    {donor:'Nokia/Alcatel-Lucent',amount:'$35K',years_before_policy:2,industry:'infrastructure'}
  ],
  donations_context:'Telstra and Nokia donations of $233K combined in years preceding spectrum auction and Huawei ban. Both companies benefited from regulatory outcome.',
  comparison_country:'United Kingdom',
  comparison_approach:'UK initially allowed Huawei limited role in 5G before reversing after US pressure; delayed full ban until 2027 to manage infrastructure transition.',
  comparison_outcome:'Australia led the Huawei ban (justified on security grounds); UK eventually followed but with longer transition period managing supplier costs.',
  analysis_json:{corruption_signal_strength:'none',corruption_signal_reasoning:'Spectrum auction followed standard ACMA processes. Huawei ban was justified on national security grounds and aligned with Five Eyes intelligence assessment. No corruption indicators.',confidence_notes:'ACMA 3.6GHz spectrum auction results (regulatory agency auction data); ASD assessment on Huawei 5G security risks (intelligence assessment); Comparison with UK DCMS 5G supply chain decision (international policy comparison)',flag_explanations:[]}},

// 310. Snowy Hydro Federal Stake (2018)
{ext:'au-pol-378', date:'2018-06-28', title:'Federal Government Acquires Full Ownership of Snowy Hydro ($6.2B)', category:'infrastructure', impact_score:6, confidence_score:0.80,
  primary_beneficiaries:['Federal government (full control of Snowy 2.0 project) — consolidated ownership enabling project control','Snowy Hydro management — no longer responsible to state stakeholders','Energy market participants benefiting from storage — market participation enabled through federal control'],
  disadvantaged_groups:['NSW ($4.2B) and Victoria ($2B) taxpayers losing equity stake — equity return forgone indefinitely','Taxpayers bearing full risk of Snowy 2.0 cost overruns — $12B+ project risk now entirely federal'],
  revenue_impact:'$6.2B to acquire NSW (58%) and Victorian (29%) shares; consolidated federal control to enable Snowy 2.0. Annual cost equivalent to approximately $300M+ in debt servicing.',
  what_changed:'Before June 2018, Snowy Hydro was jointly owned by federal government (13%), NSW (58%), and Victoria (29%). Federal government announced acquisition of NSW and Victorian shares June 2018 for total consideration of $6.2B. After acquisition completion, federal government held 100% of Snowy Hydro ownership, enabling full control of Snowy 2.0 expansion without state stakeholder consultation or agreement.',
  corporate_advantage:false,
  conflict_of_interest_flags:[
    {member:'Malcolm Turnbull (Prime Minister)',interest:'Engineered full federal ownership to enable Snowy 2.0 pet project',relevance:'Acquisition designed to bypass state government scrutiny of Snowy 2.0 cost blowouts'},
    {member:'Josh Frydenberg (Environment/Energy Minister)',interest:'Managed negotiations with states',relevance:'Price paid to states was generous to secure cooperation'}
  ],
  linked_donations:[],
  donations_context:'No linked donations.',
  comparison_country:'Norway',
  comparison_approach:'Norway\'s Statkraft (state-owned hydro company) has always been 100% government-owned with clear commercial mandate and transparent governance.',
  comparison_outcome:'Both countries have government-owned hydro; Norway\'s has been consistently well-managed while Australia paid $6.2B to consolidate ownership primarily to enable a politically motivated expansion.',
  analysis_json:{corruption_signal_strength:'weak',corruption_signal_reasoning:'Acquisition was primarily to enable Snowy 2.0 without state oversight. The price was generous but within market range. The main concern is using $6.2B acquisition to bypass scrutiny of Snowy 2.0\'s deteriorating economics rather than any financial corruption in the acquisition itself.',confidence_notes:'Snowy Hydro acquisition agreements between Commonwealth, NSW, and Victoria (government agreements); NSW and Victorian stake valuations and transaction documentation (transaction records); Snowy Hydro corporate reports (corporate financial reports); Comparison with Statkraft ownership structure and governance (international public hydro company comparison)',flag_explanations:[{label:'Acquisition designed to bypass state oversight',detail:'Federal acquisition of state equity does not per se prove corruption but demonstrates use of government transaction to consolidate control and avoid scrutiny'}]}}

]

module.exports = batch
