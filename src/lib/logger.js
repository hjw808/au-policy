const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 }

const currentLevel = LOG_LEVELS[process.env.LOG_LEVEL || 'info'] ?? 1

function timestamp() {
  return new Date().toISOString().slice(0, 19).replace('T', ' ')
}

function format(level, ...args) {
  return `${timestamp()} [${level.toUpperCase().padEnd(5)}] ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}`
}

const logger = {
  debug: (...args) => { if (currentLevel <= 0) console.log(format('debug', ...args)) },
  info:  (...args) => { if (currentLevel <= 1) console.log(format('info', ...args)) },
  warn:  (...args) => { if (currentLevel <= 2) console.warn(format('warn', ...args)) },
  error: (...args) => { if (currentLevel <= 3) console.error(format('error', ...args)) },
}

export default logger
