import { createServerClient } from '@/lib/supabase'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function getMembers() {
  const supabase = createServerClient()

  const { data, count } = await supabase
    .from('members')
    .select('id, name, party, electorate, role', { count: 'exact' })
    .order('name')
    .limit(500)

  return { members: data || [], total: count || 0 }
}

const partyColor = {
  Labor:     'text-red-600',
  Liberal:   'text-blue-600',
  Nationals: 'text-amber-600',
  Greens:    'text-emerald-600',
}

export default async function MPsPage() {
  const { members, total } = await getMembers()

  const byParty = {}
  for (const m of members) {
    const party = m.party || 'Other'
    if (!byParty[party]) byParty[party] = []
    byParty[party].push(m)
  }

  const sortedParties = Object.entries(byParty).sort((a, b) => b[1].length - a[1].length)

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-1">Members of Parliament</h1>
      <p className="text-sm text-gray-400 mb-8">{total} members tracked across all parties.</p>

      {members.length === 0 ? (
        <p className="text-sm text-gray-400">No members ingested yet. Run the ingestion pipeline first.</p>
      ) : (
        <div className="space-y-10">
          {sortedParties.map(([party, partyMembers]) => (
            <div key={party}>
              <div className="flex items-center gap-3 mb-3 pb-2 border-b border-gray-200">
                <h2 className={`text-lg font-semibold ${partyColor[party] || 'text-gray-600'}`}>{party}</h2>
                <span className="font-mono text-xs text-gray-400">{partyMembers.length}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
                {partyMembers.map(m => (
                  <Link key={m.id} href={`/mp/${m.id}`}>
                    <div className="py-2 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors">
                      <p className="text-sm font-medium text-gray-900">{m.name}</p>
                      <p className="text-xs text-gray-400">
                        {m.electorate}
                        {m.role && <span className="text-violet-500 ml-1.5">{m.role}</span>}
                      </p>
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
