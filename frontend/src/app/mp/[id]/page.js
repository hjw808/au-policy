import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { formatCurrency, getCategoryLabel, formatDateFull } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

async function getMemberData(id) {
  const supabase = createServerClient()

  const [memberRes, interestsRes, votesRes] = await Promise.all([
    supabase.from('members').select('*').eq('id', id).single(),
    supabase.from('member_interests').select('*').eq('member_id', id),
    supabase
      .from('votes')
      .select('vote, policies:policy_id (id, title, date, category, flag_score, status)')
      .eq('member_id', id)
      .limit(100),
  ])

  const member = memberRes.data
  if (!member) return null

  const { data: partyDonations } = await supabase
    .from('donations')
    .select('donor_name, donor_industry, amount_aud, financial_year')
    .eq('recipient_party', member.party)
    .order('amount_aud', { ascending: false })
    .limit(20)

  return {
    member,
    interests: interestsRes.data || [],
    votes: votesRes.data || [],
    partyDonations: partyDonations || [],
  }
}

const partyColor = {
  Labor:     'text-red-600',
  Liberal:   'text-blue-600',
  Nationals: 'text-amber-600',
  Greens:    'text-emerald-600',
}

export default async function MemberPage({ params }) {
  const data = await getMemberData(params.id)
  if (!data) return notFound()

  const { member, interests, votes, partyDonations } = data

  const interestsByType = {}
  for (const i of interests) {
    const type = i.interest_type || 'other'
    if (!interestsByType[type]) interestsByType[type] = []
    interestsByType[type].push(i)
  }

  const flaggedVotes = votes.filter(v => v.policies?.status === 'complete' || v.policies?.status === 'flagged')

  return (
    <div className="max-w-[720px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link href="/mp" className="hover:text-gray-600">MPs</Link>
        <span>/</span>
        <span className="text-gray-500">{member.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">{member.name}</h1>
        <div className="flex items-center gap-3 mt-2 flex-wrap text-sm">
          <span className={`font-medium ${partyColor[member.party] || 'text-gray-600'}`}>
            {member.party}
          </span>
          {member.electorate && (
            <span className="text-gray-400">{member.electorate}</span>
          )}
          {member.role && (
            <span className="text-violet-500">{member.role}</span>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {/* Declared Interests */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-[1.5px] text-gray-400 mb-4 pb-2 border-b border-gray-200">
            Declared Interests
          </h2>
          {interests.length === 0 ? (
            <p className="text-sm text-gray-400">No declared interests on record.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(interestsByType).map(([type, items]) => (
                <div key={type}>
                  <h3 className="text-xs font-semibold text-gray-500 capitalize mb-2">{type}</h3>
                  <ul className="space-y-1">
                    {items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        {item.company_name && (
                          <span className="font-medium text-gray-900">{item.company_name} — </span>
                        )}
                        {item.description?.slice(0, 200)}
                        {item.industry && item.industry !== 'other' && (
                          <span className="text-xs text-gray-400 ml-1.5">[{item.industry}]</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Votes on Flagged Policies */}
        {flaggedVotes.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[1.5px] text-gray-400 mb-4 pb-2 border-b border-gray-200">
              Votes on Flagged Policies
            </h2>
            <div>
              {flaggedVotes.map((v, i) => (
                <Link key={i} href={`/policy/${v.policies?.id}`}>
                  <div className="py-3 border-b border-gray-100 flex items-center justify-between gap-4 hover:bg-gray-50/50 -mx-2 px-2 rounded transition-colors">
                    <div>
                      <p className="text-sm text-gray-900">{v.policies?.title?.slice(0, 80)}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {formatDateFull(v.policies?.date)} · {getCategoryLabel(v.policies?.category)}
                      </p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      v.vote === 'yes' ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'
                    }`}>
                      {v.vote}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Party Donations */}
        {partyDonations.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[1.5px] text-gray-400 mb-4 pb-2 border-b border-gray-200">
              Top Donations to {member.party}
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 text-left border-b border-gray-200">
                  <th className="pb-2 pr-4 font-medium">Donor</th>
                  <th className="pb-2 pr-4 font-medium">Industry</th>
                  <th className="pb-2 pr-4 font-medium">Amount</th>
                  <th className="pb-2 font-medium">Year</th>
                </tr>
              </thead>
              <tbody>
                {partyDonations.map((d, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-700">{d.donor_name}</td>
                    <td className="py-2 pr-4 text-gray-500">{d.donor_industry}</td>
                    <td className="py-2 pr-4 font-mono text-gray-700">{formatCurrency(d.amount_aud)}</td>
                    <td className="py-2 text-gray-400">{d.financial_year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  )
}
