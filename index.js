const base64 = require('base64-js')
const encodeUtf8 = require('encode-utf8')
const isASCII = require('is-ascii')

/**
 * Base64 encode the body of an email
 *
 * @param {string} body Plain text body of the email
 */
function base64EncodeBody (body) {
  return base64.fromByteArray(new Uint8Array(encodeUtf8(body))).match(/.{1,76}/g).join('\r\n') + '\r\n'
}

/**
 * Format an email according to RFC5322
 *
 * @param {string} from From email address
 * @param {string} to To email address
 * @param {string} subject Subject of the email
 * @param {string} body Plain text body of the email
 */
module.exports = function formatEmail (from, to, subject, body) {
  let headers = []
  let encodedBody

  if (isASCII(body)) {
    headers.push('Content-Type: text/plain; charset="us-ascii"')
    headers.push('MIME-Version: 1.0')
    headers.push('Content-Transfer-Encoding: 7bit')
    encodedBody = body.split('\n').join('\r\n')
  } else {
    headers.push('Content-Type: text/plain; charset="utf-8"')
    headers.push('MIME-Version: 1.0')
    headers.push('Content-Transfer-Encoding: base64')
    encodedBody = base64EncodeBody(body)
  }

  headers.push(`From: ${from}`)
  headers.push(`To: ${to}`)
  headers.push(`Subject: ${subject}`)

  return [...headers, '', encodedBody].join('\r\n')
}
