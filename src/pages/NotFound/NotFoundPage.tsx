import { PageHero } from '../../components/content/PageHero/PageHero'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'

/**
 * Branded 404: same visual language as any other content page (via
 * PageHero), states plainly that the page doesn't exist, and offers a
 * way back — no gimmicks. Note this can only ever be a client-side
 * "soft" 404 (the server still answers 200 for the unmatched URL,
 * since routing is handled entirely by React Router on a static
 * build) — see the .htaccess fallback in public/ and backend/README.md.
 */
export function NotFoundPage() {
  usePageMeta({
    title: 'Pagina niet gevonden | VE in Beeld',
    robots: 'noindex, nofollow',
  })

  return (
    <PageHero
      eyebrow="404"
      title="Deze pagina bestaat niet"
      lead="De pagina die je zoekt is niet gevonden. Mogelijk is de link verouderd of is het adres niet juist getypt."
      primaryAction={{ label: 'Terug naar de homepage', to: paths.home }}
      secondaryAction={{ label: 'Neem contact op', to: paths.contact }}
    />
  )
}
