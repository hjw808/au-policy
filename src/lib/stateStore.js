import supabase from '../db/client.js'
import logger from './logger.js'

/**
 * Get a state value by key. Returns null if not found.
 */
export async function getState(key) {
  const { data, error } = await supabase
    .from('system_state')
    .select('value')
    .eq('key', key)
    .single()

  if (error && error.code !== 'PGRST116') {
    // PGRST116 = no rows found (expected on first run)
    logger.warn(`[STATE] Error reading ${key}: ${error.message}`)
  }

  return data?.value ?? null
}

/**
 * Set a state value (upserts).
 */
export async function setState(key, value) {
  const { error } = await supabase
    .from('system_state')
    .upsert(
      { key, value, updated_at: new Date().toISOString() },
      { onConflict: 'key' }
    )

  if (error) {
    logger.error(`[STATE] Error writing ${key}: ${error.message}`)
  }
}
