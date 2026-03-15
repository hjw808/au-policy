import { createServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { formatCurrency, getCategoryLabel } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

async function getMemberData(id) {
  const supabase = createServerClient()

  const [memberRes, interestsRes, votesRes, donationsRes] = await Promise.all([
    supabase.from('members').select('*').eq('id', id).single(),
    supabase.from('member_interests').select('*').eq('member_id', id),
    supabase
      .from('votes')
      .select('vote, policies:policy_id (id, title, date, category, flag_score, status)')
      .eq('member_id', id)
      .limit(100),
    null, // filled below after we know the party
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

export default async function MemberPage({ params }) {
  const data = await getMemberData(params.id)
  if (!data) return notFound()

  const { member, interests, votes, partyDonations } = data

  // Group interests by type
  const interestsByType = {}
  for (const i of interests) {
    const type = i.interest_type || 'other'
    if (!interestsByType[type]) interestsByType[type] = []
    interestsByType[type].push(i)
  }

  const flaggedVotes = votes.filter(v => v.policies?.status === 'complete' || v.policies?.status === 'flagged')

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/mp" className="hover:text-gray-300">MPs</Link>
        <span>/</span>
        <span className="text-gray-300">{member.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">{member.name}</h1>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <span className="text-sm px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800">
            {member.party}
          </span>
          {member.electorate && (
            <span className="text-sm text-gray-400">{member.electorate}</span>
          )}
          {member.role && (
            <span className="text-sm text-purple-400">{member.role}</span>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Declared Interests */}
        <section>
          <h2 className="text-xl font-bold text-gray-200 mb-4">Declared Interests</h2>
          {interests.length === 0 ? (
            <p className="text-gray-500 text-sm">No declared interests on record.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(interestsByType).map(([type, items]) => (
                <div key={type} className="bg-[#111827] rounded-xl p-5 border border-white/5">
                  <h3 className="text-sm font-semibold text-purple-400 mb-3 capitalize">{type}</h3>
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-300">
                        {item.company_name && (
                          <span className="text-gray-200 font-medium">{item.company_name} — </span>
                        )}
                        {item.description?.slice(0, 200)}
                        {item.industry && item.industry !== 'other' && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500">
                            {item.industry}
                          </span>
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
            <h2 className="text-xl font-bold text-gray-200 mb-4">Votes on Flagged Policies</h2>
            <div className="space-y-2">
              {flaggedVotes.map((v, i) => (
                <Link key={i} href={`/policy/${v.policies?.id}`}>
                  <div className="bg-[#111827] border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-all flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-200">{v.policies?.title?.slice(0, 100)}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {v.policies?.date} &middot; {getCategoryLabel(v.policies?.category)}
                      </p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      v.vote === 'yes' ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'
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
            <h2 className="text-xl font-bold text-gray-200 mb-4">
              Top Donations to {member.party}
            </h2>
            <div className="bg-[#111827] rounded-xl p-5 border border-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-left">
                      <th className="pb-2 pr-4">Donor</th>
                      <th className="pb-2 pr-4">Industry</th>
                      <th className="pb-2 pr-4">Amount</th>
                      <th className="pb-2">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partyDonations.map((d, i) => (
                      <tr key={i} className="border-t border-white/5">
                        <td className="py-2 pr-4 text-gray-300">{d.donor_name}</td>
                        <td className="py-2 pr-4 text-gray-400">{d.donor_industry}</td>
                        <td className="py-2 pr-4 text-green-300">{formatCurrency(d.amount_aud)}</td>
                        <td className="py-2 text-gray-500">{d.financial_year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
