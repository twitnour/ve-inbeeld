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
 * Joins the email's two halves at runtime rather than reading a single
 * VITE_CONTACT_EMAIL variable — Vite inlines every import.meta.env.VITE_*
 * reference as a literal string constant at build time, so a single
 * variable holding the full address would ship the complete,
 * bot-greppable "user@domain" string in the built JS regardless of any
 * processing wrapped around it afterward. Splitting the address across
 * two variables that individually don't match an email pattern, and
 * only combining them via a real function call at runtime, means no
 * contiguous email string exists anywhere in the static output for a
 * plain-text scraper to find — while still rendering, and working as a
 * mailto: link, exactly like a normal address for real visitors. This
 * doesn't stop a bot that executes JavaScript and reads the final page
 * (nothing client-side can), only the much larger population of bots
 * that just fetch and pattern-match static files.
 */
function joinEmail(user: string, domain: string): string {
  return `${user}@${domain}`
}

function toTelHref(phoneNumber: string): string {
  const trimmed = phoneNumber.trim()
  const sign = trimmed.startsWith('+') ? '+' : ''
  return `tel:${sign}${trimmed.replace(/\D/g, '')}`
}

export const businessInfo = {
  contactEmail: joinEmail(
    import.meta.env.VITE_CONTACT_EMAIL_USER,
    import.meta.env.VITE_CONTACT_EMAIL_DOMAIN,
  ),
  /** Human-readable phone number, exactly as it should be displayed. */
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER,
  phoneHref: toTelHref(import.meta.env.VITE_PHONE_NUMBER),
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL,
  kvkNumber: import.meta.env.VITE_KVK_NUMBER,
} as const
