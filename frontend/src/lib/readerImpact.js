/**
 * Reader Impact — derives "good for you / bad for you" from existing
 * beneficiary and disadvantaged data.
 *
 * "You" = the 99%: workers, renters, parents, taxpayers, patients,
 * consumers, students, retirees, small business owners.
 *
 * This is the single source of truth for the reader-voice lens.
 */

const READER_KEYWORDS = [
  'worker', 'workers', 'employee', 'employees', 'wage',
  'renter', 'renters', 'tenant', 'tenants',
  'taxpayer', 'taxpayers', 'tax payer',
  'consumer', 'consumers', 'household', 'households', 'family', 'families',
  'patient', 'patients', 'medicare', 'bulk billing', 'healthcare user',
  'parent', 'parents', 'carer', 'carers',
  'student', 'students', 'graduate', 'graduates',
  'retiree', 'retirees', 'pensioner', 'pensioners', 'superannuation member',
  'small business', 'small businesses',
  'first home', 'first-home', 'homebuyer',
  'public', 'community', 'communities', 'citizen', 'citizens',
  'low-income', 'low income', 'lower-income',
  'middle-income', 'middle income', 'middle class',
  'everyday australian', 'ordinary australian', 'average australian',
  'indigenous', 'aboriginal', 'torres strait',
  'aged care', 'disability', 'vulnerable',
  'union', 'unions', 'gig worker',
]

const ELITE_KEYWORDS = [
  'mining compan', 'mining industr', 'mining sector', 'mining corporat',
  'bank', 'major bank', 'big four',
  'developer', 'property developer', 'property investor',
  'corporation', 'corporate', 'multinational',
  'fossil fuel', 'oil and gas', 'gas compan', 'gas industr',
  'pharmaceutical', 'pharma compan', 'insurance compan',
  'gambling', 'poker machine', 'casino',
  'media compan', 'media mogul',
  'defence contractor', 'arms',
  'foreign investor',
  'high-net-worth', 'wealthy', 'high income earner',
  'landlord', 'property magnate',
  'lobbyist', 'lobby group',
  'donor', 'political donor',
  'executive', 'ceo pay',
]

function textMatchesKeywords(text, keywords) {
  if (!text) return 0
  const lower = text.toLowerCase()
  return keywords.filter(kw => lower.includes(kw)).length
}

function listMatchesKeywords(items, keywords) {
  if (!items || !Array.isArray(items)) return 0
  return items.reduce((sum, item) => sum + textMatchesKeywords(item, keywords), 0)
}

/**
 * Analyze a policy event to determine reader impact.
 *
 * @param {Object} event - timeline_events row (with analysis_json)
 * @returns {{ verdict: 'positive'|'negative'|'mixed'|'neutral', label: string, emoji: string, summary: string, color: string }}
 */
export function getReaderImpact(event) {
  if (!event) return { verdict: 'neutral', label: 'Not yet analysed', emoji: '', summary: '', color: 'text-gray-400', bgColor: 'bg-gray-100' }

  const beneficiaries = event.primary_beneficiaries || []
  const disadvantaged = event.disadvantaged_groups || []
  const whatChanged = event.what_changed || ''

  // Count how many reader-keywords appear in beneficiary vs disadvantaged lists
  const readerInBeneficiaries = listMatchesKeywords(beneficiaries, READER_KEYWORDS)
  const readerInDisadvantaged = listMatchesKeywords(disadvantaged, READER_KEYWORDS)
  const eliteInBeneficiaries = listMatchesKeywords(beneficiaries, ELITE_KEYWORDS)
  const eliteInDisadvantaged = listMatchesKeywords(disadvantaged, ELITE_KEYWORDS)

  // Also check what_changed for directional cues
  const readerBenefitInText = textMatchesKeywords(whatChanged, ['protect worker', 'protect consumer', 'protect tenant', 'protect renter', 'lower cost', 'reduce cost', 'increase wage', 'wage increase', 'affordable', 'bulk billing', 'free education', 'first home buyer'])
  const readerHarmInText = textMatchesKeywords(whatChanged, ['cut funding', 'reduce funding', 'increase cost', 'higher cost', 'privatise', 'privatize', 'deregulat', 'tax break for compan', 'corporate tax cut', 'weaken protection', 'weaken regulation'])

  const readerPositive = readerInBeneficiaries + eliteInDisadvantaged + readerBenefitInText
  const readerNegative = readerInDisadvantaged + eliteInBeneficiaries + readerHarmInText

  // Build a one-line summary from the data
  let summary = ''

  if (readerPositive > readerNegative) {
    // Positive for readers — pull from beneficiaries
    const readerBenefits = beneficiaries.filter(b =>
      READER_KEYWORDS.some(kw => b.toLowerCase().includes(kw))
    )
    if (readerBenefits.length > 0) {
      // Strip the " — description" format, just get the group name
      const groups = readerBenefits.map(b => b.split(' — ')[0]).slice(0, 2)
      summary = `Good news for ${groups.join(' and ').toLowerCase()}`
    } else {
      summary = 'Generally positive for everyday Australians'
    }
    return {
      verdict: 'positive',
      label: 'Works for you',
      emoji: '',
      summary,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    }
  }

  if (readerNegative > readerPositive) {
    // Negative for readers — pull from disadvantaged
    const readerLosses = disadvantaged.filter(d =>
      READER_KEYWORDS.some(kw => d.toLowerCase().includes(kw))
    )
    if (readerLosses.length > 0) {
      const groups = readerLosses.map(d => d.split(' — ')[0]).slice(0, 2)
      summary = `Costs ${groups.join(' and ').toLowerCase()}`
    } else {
      summary = 'May cost everyday Australians'
    }
    return {
      verdict: 'negative',
      label: 'Costs you',
      emoji: '',
      summary,
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    }
  }

  // Mixed or unclear
  if (readerPositive > 0 && readerNegative > 0) {
    return {
      verdict: 'mixed',
      label: 'Mixed impact',
      emoji: '',
      summary: 'Benefits some, costs others',
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    }
  }

  // Neither positive nor negative reader keywords found — neutral/unclear
  return {
    verdict: 'neutral',
    label: 'Indirect impact',
    emoji: '',
    summary: 'May not directly affect everyday Australians',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
  }
}

/**
 * Get a short "for you" label for list views.
 * Returns just the verdict badge text and color.
 */
export function getReaderBadge(event) {
  const { verdict, label, color } = getReaderImpact(event)
  return { verdict, label, color }
}
