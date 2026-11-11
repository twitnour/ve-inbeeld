import { PageHero } from '../../components/content/PageHero/PageHero'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'

/**
 * Publication-safe placeholder: the source material for this new
 * offer isn't written yet, so this page intentionally states that
 * plainly rather than inventing a programme, duration or target
 * audience. Mirrors the pattern HerscholingPage used before its real
 * content arrived.
 */
export function PedagogischCoachPage() {
  usePageMeta({
    title: 'Pedagogische coach | VE in Beeld',
    description: 'Informatie over pedagogische coaching door VE in Beeld volgt binnenkort.',
  })

  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title="Pedagogische coach"
        lead="Meer informatie over pedagogische coaching door VE in Beeld volgt binnenkort."
        breadcrumbs={[
          { label: 'Home', to: paths.home },
          { label: 'Coaching' },
          { label: 'Pedagogische coach' },
        ]}
      />

      <CTASection
        heading="Binnenkort meer informatie"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
      >
        De inhoud en praktische informatie van dit aanbod worden momenteel verder
        uitgewerkt. Wil je alvast weten wat de mogelijkheden zijn voor jouw organisatie?
        Neem gerust contact op.
      </CTASection>
    </>
  )
}
