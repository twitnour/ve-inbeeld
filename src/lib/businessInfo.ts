/**
 * Public business-info values (contact email, phone, LinkedIn, KvK)
 * shown in TopBar, Footer, the Contact page and both forms' error
 * messages. Centralized here — same reasoning as src/routes/paths.ts —
 * so every consuming component reads this object instead of
 * duplicating the same literal string across files.
 *
 * Values live in .env at the project root — see that file for what to
 * edit. This is a static build with no server-side rendering:
 * changing .env only takes effect after `npm run build` + redeploy,
 * it isn't read live the way the PHP backend's config.php is.
 */

/**
 * Digits-only tel: href, derived from the human-readable phone number
 * rather than stored separately, so the displayed number and its link
 * target can never drift out of sync.
 */
function toTelHref(phoneNumber: string): string {
  const trimmed = phoneNumber.trim()
  const sign = trimmed.startsWith('+') ? '+' : ''
  return `tel:${sign}${trimmed.replace(/\D/g, '')}`
}

export const businessInfo = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL,
  /** Human-readable phone number, exactly as it should be displayed. */
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER,
  phoneHref: toTelHref(import.meta.env.VITE_PHONE_NUMBER),
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL,
  kvkNumber: import.meta.env.VITE_KVK_NUMBER,
} as const
