import Link from 'next/link'

export const metadata = {
  title: 'About & Methodology — Australian Policy Accountability',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">About This Project</h1>

      <div className="prose prose-invert max-w-none space-y-8">
        {/* Mission */}
        <section className="bg-[#111827] rounded-xl p-6 border border-white/5">
          <h2 className="text-xl font-bold text-blue-400 mb-3">What is this?</h2>
          <p className="text-gray-300 leading-relaxed">
            This is a free, non-commercial public interest project that cross-references Australian
            parliamentary decisions with political donation records, MP declared interests, and corporate
            tax data. The goal is to make it easy for any Australian to see potential connections between
            money flowing into politics and the policy decisions that follow.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            This project is not affiliated with any political party, lobby group, or media organisation.
            It uses only publicly available government data.
          </p>
        </section>

        {/* Data Sources */}
        <section className="bg-[#111827] rounded-xl p-6 border border-white/5">
          <h2 className="text-xl font-bold text-purple-400 mb-3">Data Sources</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-200">Parliamentary Debates (Hansard)</h3>
              <p className="text-sm text-gray-400">Source: OpenAustralia API &middot; Coverage: 2006-present</p>
              <p className="text-sm text-gray-500 mt-1">
                Hansard transcripts are the official record of everything said in Parliament.
                We scan these for policy-relevant keywords and extract debates about tax,
                resources, subsidies, and other significant decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200">Political Donations</h3>
              <p className="text-sm text-gray-400">Source: AEC Transparency Register &middot; Coverage: 2015-present</p>
              <p className="text-sm text-gray-500 mt-1">
                The Australian Electoral Commission publishes annual donation disclosures.
                We classify each donor by industry to enable cross-referencing with policy decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200">Corporate Tax Records</h3>
              <p className="text-sm text-gray-400">Source: ATO via data.gov.au &middot; Coverage: 2013-present</p>
              <p className="text-sm text-gray-500 mt-1">
                The ATO publishes tax paid by companies earning over $100M. We use this to
                identify industries where companies pay very low effective tax rates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200">MP Declared Interests</h3>
              <p className="text-sm text-gray-400">Source: APH Register of Interests &middot; Coverage: Current + recent parliaments</p>
              <p className="text-sm text-gray-500 mt-1">
                Members of Parliament must declare their financial interests (shares, property,
                board positions). We cross-reference these with how they voted.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#111827] rounded-xl p-6 border border-white/5">
          <h2 className="text-xl font-bold text-green-400 mb-3">How the Analysis Works</h2>
          <div className="space-y-4 text-sm text-gray-400">
            <div>
              <h3 className="font-semibold text-gray-200 text-base">Step 1: Automated Flagging</h3>
              <p className="mt-1">
                A rules engine scans every policy debate and scores it against four criteria:
                donation correlation (did the beneficiary industry donate to the governing party?),
                conflict of interest (did voting MPs have financial interests in the sector?),
                tax avoidance enablement (does the sector contain near-zero-tax companies?),
                and resource capture (are public resources being transferred to private interests?).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 text-base">Step 2: AI Analysis</h3>
              <p className="mt-1">
                Policies scoring above the threshold are analysed by Claude (an AI), which produces
                structured findings including: who benefited, who was disadvantaged, revenue impact,
                corruption signal strength, and an international comparison showing how another
                country handled the same issue differently.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 text-base">Step 3: Self-Verification</h3>
              <p className="mt-1">
                Every analysis is self-checked before publication. The AI can only reference entities
                (donors, MPs, companies) that actually appear in the evidence data. Impact scores
                must be consistent with the signal strength. Confidence notes acknowledge gaps.
              </p>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="bg-[#111827] rounded-xl p-6 border border-white/5">
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Limitations</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0">&#9888;</span> Correlation is not causation. A donation from an industry followed by a favourable policy does not prove corruption.</li>
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0">&#9888;</span> Donation data has a disclosure threshold. Small donations may not appear.</li>
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0">&#9888;</span> Industry classification is automated using keyword matching and may sometimes be inaccurate.</li>
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0">&#9888;</span> The AI analysis reflects patterns in the data but is not a legal judgement.</li>
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0">&#9888;</span> Corporate tax data only covers companies earning over $100M.</li>
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0">&#9888;</span> Voting records are only available from 2006 onwards in structured format.</li>
          </ul>
        </section>

        {/* Open Source */}
        <section className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 rounded-xl p-6 border border-blue-900/30">
          <h2 className="text-xl font-bold text-blue-300 mb-3">Open Source</h2>
          <p className="text-gray-300 leading-relaxed">
            The complete source code for this project — including the ingestion pipeline, rules engine,
            analysis prompts, and this website — is available on GitHub. We welcome contributions,
            bug reports, and suggestions.
          </p>
          <p className="text-gray-400 mt-3 text-sm">
            This project runs entirely on free-tier services (Supabase, Vercel) and a personal
            Claude subscription. No taxpayer money, no corporate funding, no ads.
          </p>
        </section>
      </div>
    </div>
  )
}
