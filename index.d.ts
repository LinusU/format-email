/**
 * Format an email according to RFC5322
 *
 * @param {string} from From email address
 * @param {string} to To email address
 * @param {string} subject Subject of the email
 * @param {string} body Plain text body of the email
 */
declare function formatEmail (from: string, to: string, subject: string, body: string): string
export = formatEmail
