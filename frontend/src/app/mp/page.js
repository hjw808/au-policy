import { createServerClient } from '@/lib/supabase'
import Link from 'next/link'

export const revalidate = 3600

async function getMembers() {
  const supabase = createServerClient()

  const { data, count } = await supabase
    .from('members')
    .select('id, name, party, electorate, role', { count: 'exact' })
    .order('name')
    .limit(500)

  return { members: data || [], total: count || 0 }
}

function partyColor(party) {
  const colors = {
    'Labor':     'bg-red-900/30 text-red-300 border-red-800',
    'Liberal':   'bg-blue-900/30 text-blue-300 border-blue-800',
    'Nationals': 'bg-yellow-900/30 text-yellow-300 border-yellow-800',
    'Greens':    'bg-green-900/30 text-green-300 border-green-800',
  }
  return colors[party] || 'bg-gray-900/30 text-gray-300 border-gray-700'
}

export default async function MPsPage() {
  const { members, total } = await getMembers()

  // Group by party
  const byParty = {}
  for (const m of members) {
    const party = m.party || 'Other'
    if (!byParty[party]) byParty[party] = []
    byParty[party].push(m)
  }

  const sortedParties = Object.entries(byParty).sort((a, b) => b[1].length - a[1].length)

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-100 mb-2">Members of Parliament</h1>
      <p className="text-gray-500 mb-8">{total} members tracked across all parties.</p>

      {members.length === 0 ? (
        <div className="bg-[#111827] rounded-xl p-12 text-center border border-white/5">
          <p className="text-gray-400">No members ingested yet. Run the ingestion pipeline first.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {sortedParties.map(([party, partyMembers]) => (
            <div key={party}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-gray-200">{party}</h2>
                <span className="text-sm text-gray-600">{partyMembers.length} members</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {partyMembers.map(m => (
                  <Link key={m.id} href={`/mp/${m.id}`}>
                    <div className="bg-[#111827] border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-all group">
                      <p className="font-medium text-gray-200 group-hover:text-blue-300">{m.name}</p>
                      <p className="text-sm text-gray-500">{m.electorate}</p>
                      {m.role && (
                        <p className="text-xs text-purple-400 mt-1">{m.role}</p>
                      )}
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full border mt-2 ${partyColor(party)}`}>
                        {party}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
