import { PageHero } from '../../components/content/PageHero/PageHero'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { paths } from '../../routes/paths'

/**
 * Publication-safe placeholder: the source material for this offer
 * isn't written yet, so this page intentionally states that plainly
 * rather than inventing a programme, duration or target audience.
 */
export function HerscholingPage() {
  return (
    <>
      <PageHero
        eyebrow="VVE trainingen"
        title="Herscholing"
        lead="Meer informatie over het herscholingsaanbod van VE in Beeld volgt binnenkort."
        breadcrumbs={[
          { label: 'Home', to: paths.home },
          { label: 'VVE trainingen', to: paths.vveTrainingen.index },
          { label: 'Herscholing' },
        ]}
      />

      <CTASection
        heading="Binnenkort meer informatie"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
      >
        De inhoud en praktische informatie van het herscholingsaanbod worden momenteel
        verder uitgewerkt. Wil je alvast weten wat de mogelijkheden zijn voor jouw
        organisatie? Neem gerust contact op.
      </CTASection>
    </>
  )
}
