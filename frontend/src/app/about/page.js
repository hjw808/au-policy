import Link from 'next/link'

export const metadata = {
  title: 'About & Methodology — PolicyWatch',
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-[1.5px] text-gray-400 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="max-w-[640px] mx-auto">
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">About This Project</h1>

      <Section title="What is this?">
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          PolicyWatch is a free, non-commercial public interest project that cross-references Australian
          parliamentary decisions with political donation records, MP declared interests, and corporate
          tax data. The goal is to make it easy for any Australian to see potential connections between
          money flowing into politics and the policy decisions that follow.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          This project is not affiliated with any political party, lobby group, or media organisation.
          It uses only publicly available government data.
        </p>
      </Section>

      <Section title="Data Sources">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-900">Parliamentary Debates (Hansard)</p>
            <p className="text-xs text-gray-400">Source: OpenAustralia API · Coverage: 2006-present</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Hansard transcripts are the official record of everything said in Parliament.
              We scan these for policy-relevant keywords and extract debates about tax,
              resources, subsidies, and other significant decisions.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Political Donations</p>
            <p className="text-xs text-gray-400">Source: AEC Transparency Register · Coverage: 2015-present</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              The Australian Electoral Commission publishes annual donation disclosures.
              We classify each donor by industry to enable cross-referencing with policy decisions.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Corporate Tax Records</p>
            <p className="text-xs text-gray-400">Source: ATO via data.gov.au · Coverage: 2013-present</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              The ATO publishes tax paid by companies earning over $100M. We use this to
              identify industries where companies pay very low effective tax rates.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">MP Declared Interests</p>
            <p className="text-xs text-gray-400">Source: APH Register of Interests · Coverage: current + recent parliaments</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Members of Parliament must declare their financial interests (shares, property,
              board positions). We cross-reference these with how they voted.
            </p>
          </div>
        </div>
      </Section>

      <Section title="How the Analysis Works">
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <div>
            <p className="font-medium text-gray-900 mb-1">Step 1: Automated Flagging</p>
            <p>
              A rules engine scans every policy debate and scores it against four criteria:
              donation correlation, conflict of interest, tax avoidance enablement,
              and resource capture.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-1">Step 2: AI Analysis</p>
            <p>
              Policies scoring above the threshold are analysed by Claude (an AI), which produces
              structured findings: who benefited, who was disadvantaged, revenue impact,
              signal strength, and an international comparison.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-1">Step 3: Self-Verification</p>
            <p>
              Every analysis is self-checked before publication. The AI can only reference entities
              that actually appear in the evidence data. Impact scores must be consistent with
              signal strength. Confidence notes acknowledge gaps.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Limitations">
        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
          <li>Correlation is not causation. A donation followed by a favourable policy does not prove corruption.</li>
          <li>Donation data has a disclosure threshold. Small donations may not appear.</li>
          <li>Industry classification is automated using keyword matching and may sometimes be inaccurate.</li>
          <li>The AI analysis reflects patterns in the data but is not a legal judgement.</li>
          <li>Corporate tax data only covers companies earning over $100M.</li>
          <li>Voting records are only available from 2006 onwards in structured format.</li>
        </ul>
      </Section>

      <Section title="Corrections">
        <p className="text-sm text-gray-600 leading-relaxed" id="corrections">
          Found an error? We take accuracy seriously. All corrections are logged publicly with
          before/after details. Please contact us via the GitHub repository with any corrections.
        </p>
      </Section>

      <Section title="Open Source">
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          The complete source code for this project — including the ingestion pipeline, rules engine,
          analysis prompts, and this website — is available on GitHub. We welcome contributions,
          bug reports, and suggestions.
        </p>
        <p className="text-xs text-gray-400">
          This project runs entirely on free-tier services (Supabase, Vercel) and a personal
          Claude subscription. No taxpayer money, no corporate funding, no ads.
        </p>
      </Section>
    </div>
  )
}
