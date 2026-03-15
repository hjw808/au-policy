import axios from 'axios'
import axiosRetry from 'axios-retry'
import logger from './logger.js'

const client = axios.create({
  timeout: 30000,
  headers: {
    'User-Agent': 'AU-Policy-Tracker/1.0 (non-commercial public interest research)',
  },
})

axiosRetry(client, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1500,
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      (error.response && error.response.status >= 500)
  },
  onRetry: (retryCount, error, requestConfig) => {
    logger.warn(`[HTTP] Retry ${retryCount}/3 for ${requestConfig.url}: ${error.message}`)
  },
})

/**
 * Rate-limited sleep — call between API requests
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default client
