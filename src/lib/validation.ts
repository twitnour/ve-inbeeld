/**
 * Small, dependency-free validation helpers shared by the contact and
 * quote forms. Kept intentionally lenient — these guard against
 * obviously malformed input, not every edge case.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim())
}

// Accepts Dutch and international formats: leading + or digit, then
// digits/spaces/hyphens/parentheses, 6–20 characters — e.g.
// "06 12345678", "+31 6 12345678", "+32 470 12 34 56".
const PHONE_RE = /^[+\d][\d\s()-]{5,19}$/

export function isValidPhone(value: string): boolean {
  return PHONE_RE.test(value.trim())
}

export function isPositiveInteger(value: string): boolean {
  const trimmed = value.trim()
  if (!/^\d+$/.test(trimmed)) return false
  return Number(trimmed) > 0
}
