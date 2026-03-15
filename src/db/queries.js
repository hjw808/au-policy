import supabase from './client.js'
import logger from '../lib/logger.js'

/**
 * Check if the schema tables exist in Supabase.
 */
export async function checkTablesExist() {
  try {
    const { error } = await supabase
      .from('system_state')
      .select('key')
      .limit(1)

    // If no error, table exists
    return !error
  } catch {
    return false
  }
}

/**
 * Upsert a member record.
 */
export async function upsertMember(member) {
  const { error } = await supabase
    .from('members')
    .upsert(member, { onConflict: 'id' })

  if (error) logger.warn(`[DB] Member upsert failed for ${member.id}: ${error.message}`)
}

/**
 * Upsert a policy record. Returns the upserted record.
 */
export async function upsertPolicy(policy) {
  const { data, error } = await supabase
    .from('policies')
    .upsert(policy, { onConflict: 'external_id', ignoreDuplicates: false })
    .select()

  if (error) {
    logger.warn(`[DB] Policy upsert failed for ${policy.external_id}: ${error.message}`)
    return null
  }
  return data?.[0] ?? null
}

/**
 * Upsert a donation record.
 */
export async function upsertDonation(donation) {
  const { error } = await supabase
    .from('donations')
    .upsert(donation, { onConflict: 'external_id', ignoreDuplicates: true })

  if (error) logger.warn(`[DB] Donation upsert failed: ${error.message}`)
}

/**
 * Upsert a company record.
 */
export async function upsertCompany(company) {
  const { error } = await supabase
    .from('companies')
    .upsert(company, { onConflict: 'name,financial_year', ignoreDuplicates: false })

  if (error) logger.warn(`[DB] Company upsert failed for ${company.name}: ${error.message}`)
}

/**
 * Delete existing interests for a member and insert fresh ones.
 */
export async function replaceInterests(memberId, interests) {
  // Delete existing
  await supabase
    .from('member_interests')
    .delete()
    .eq('member_id', memberId)

  // Insert fresh
  if (interests.length > 0) {
    const { error } = await supabase
      .from('member_interests')
      .insert(interests)

    if (error) logger.warn(`[DB] Interests insert failed for ${memberId}: ${error.message}`)
  }
}

/**
 * Get all pending policies for the rules engine.
 */
export async function getPendingPolicies() {
  const { data, error } = await supabase
    .from('policies')
    .select('*')
    .eq('status', 'pending')
    .order('date', { ascending: false })

  if (error) {
    logger.error(`[DB] Failed to fetch pending policies: ${error.message}`)
    return []
  }
  return data || []
}

/**
 * Update a policy's flag score, reasons, and status.
 */
export async function updatePolicyFlags(policyId, flagScore, flagReasons, status) {
  const { error } = await supabase
    .from('policies')
    .update({
      flag_score: flagScore,
      flag_reasons: flagReasons,
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', policyId)

  if (error) logger.warn(`[DB] Flag update failed for ${policyId}: ${error.message}`)
}

/**
 * Get donations matching a specific industry, party, and timeframe.
 */
export async function getDonationsByIndustryAndParty(industry, party, beforeYear) {
  const { data, error } = await supabase
    .from('donations')
    .select('donor_name, donor_industry, recipient_party, amount_aud, financial_year')
    .eq('donor_industry', industry)
    .eq('recipient_party', party)
    .order('amount_aud', { ascending: false })

  if (error) {
    logger.warn(`[DB] Donations query failed: ${error.message}`)
    return []
  }

  // Filter by year window in JS (financial_year is text like '2020-21')
  return (data || []).filter(d => {
    const donorYear = parseInt(d.financial_year?.split('-')[0])
    return donorYear >= beforeYear - 3 && donorYear <= beforeYear
  })
}

/**
 * Get members who voted yes on a policy and have interests in a specific industry.
 */
export async function getConflictedVoters(policyId, industry) {
  // First get yes-voters
  const { data: voters, error: vError } = await supabase
    .from('votes')
    .select('member_id')
    .eq('policy_id', policyId)
    .eq('vote', 'yes')

  if (vError || !voters?.length) return []

  const memberIds = voters.map(v => v.member_id)

  // Then get members with matching interests
  const { data: members, error: mError } = await supabase
    .from('members')
    .select(`
      id, name, party, role,
      member_interests (interest_type, company_name, industry, description)
    `)
    .in('id', memberIds)

  if (mError) {
    logger.warn(`[DB] Conflicted voters query failed: ${mError.message}`)
    return []
  }

  // Filter to those with interests matching the policy industry
  return (members || []).filter(m =>
    m.member_interests?.some(i => i.industry === industry)
  )
}

/**
 * Get companies in an industry with very low tax rates.
 */
export async function getZeroTaxCompanies(industry, yearBefore) {
  const { data, error } = await supabase
    .from('companies')
    .select('name, effective_tax_rate, tax_paid_aud, total_income_aud, financial_year')
    .eq('industry', industry)
    .lt('effective_tax_rate', 0.05)
    .order('total_income_aud', { ascending: false })
    .limit(20)

  if (error) {
    logger.warn(`[DB] Zero-tax query failed: ${error.message}`)
    return []
  }
  return data || []
}

/**
 * Check if any zero-tax companies also appear as donors.
 */
export async function checkZeroTaxDonors(companyNames) {
  if (!companyNames.length) return []

  const { data, error } = await supabase
    .from('donations')
    .select('donor_name')
    .in('donor_name', companyNames)

  if (error) return []
  return data?.map(d => d.donor_name) || []
}

/**
 * Find a member by name (case-insensitive, trimmed).
 */
export async function findMemberByName(name) {
  const { data, error } = await supabase
    .from('members')
    .select('id, name')
    .ilike('name', `%${name.trim()}%`)
    .limit(1)

  if (error) return null
  return data?.[0] ?? null
}

/**
 * Bulk upsert members.
 */
export async function bulkUpsertMembers(members) {
  const { error } = await supabase
    .from('members')
    .upsert(members, { onConflict: 'id' })

  if (error) logger.warn(`[DB] Bulk member upsert failed: ${error.message}`)
}

/**
 * Get a run summary for the end-of-run report.
 */
export async function getRunSummary() {
  const counts = {}

  for (const status of ['pending', 'flagged', 'complete', 'skipped']) {
    const { count } = await supabase
      .from('policies')
      .select('*', { count: 'exact', head: true })
      .eq('status', status)

    counts[`total_${status}`] = count || 0
  }

  // Approximate "ingested this run" — policies from today
  const today = new Date().toISOString().split('T')[0]
  const { count: todayCount } = await supabase
    .from('policies')
    .select('*', { count: 'exact', head: true })
    .gte('ingested_at', today)

  counts.ingested_this_run = todayCount || 0

  return counts
}
