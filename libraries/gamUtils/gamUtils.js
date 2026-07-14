export { DEFAULT_DFP_PARAMS as DEFAULT_GAM_PARAMS, DFP_ENDPOINT as GAM_ENDPOINT, gdprParams } from '../dfpUtils/dfpUtils.js';

/**
 * Serialize an object into a query string for GAM's `cust_params`.
 *
 * Mirrors the core `formatQS` in src/utils.js, except that array values are joined with a comma
 * instead of being expanded into PHP-style `key[]=v` pairs.
 *
 * @param {Object} data key/value pairs to serialize
 * @returns {string} query string, e.g. `bidders_enabled=ix,rubicon&hb_pb=1.50`
 */
export function formatQS(data) {
  return Object.keys(data)
    .map(key => Array.isArray(data[key])
      ? `${key}=${data[key].join(',')}`
      : `${key}=${data[key]}`)
    .join('&');
}
