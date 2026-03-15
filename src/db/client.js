import { createClient } from '@supabase/supabase-js'

let _supabase = null

/**
 * Lazy-initialized Supabase client.
 * This prevents the client from throwing during import
 * before env validation runs.
 */
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY,
      {
        auth: { persistSession: false },
        db: { schema: 'public' },
      }
    )
  }
  return _supabase
}

// Export as a proxy that looks like the supabase client
// but defers initialization until first use
export default new Proxy({}, {
  get(_, prop) {
    return getSupabase()[prop]
  }
})
