/**
 * Validates that all required environment variables are present.
 * Exits with code 1 and a clear message if any are missing.
 */
export function validateEnv(requiredVars) {
  const missing = requiredVars.filter(v => !process.env[v])
  if (missing.length > 0) {
    console.error('\n❌ Missing required environment variables:')
    missing.forEach(v => console.error(`   - ${v}`))
    console.error('\nCopy .env.example to .env and fill in the values.')
    console.error('See CLAUDE.md for setup instructions.\n')
    process.exit(1)
  }
}
