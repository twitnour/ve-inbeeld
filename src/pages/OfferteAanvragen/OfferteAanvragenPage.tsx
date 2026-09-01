import { PageHero } from '../../components/content/PageHero/PageHero'
import { Section } from '../../components/Section/Section'
import { QuoteForm } from '../../components/offerte/QuoteForm'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'

export function OfferteAanvragenPage() {
  usePageMeta({
    title: 'Offerte aanvragen | VE in Beeld',
    description:
      'Vraag vrijblijvend een offerte aan voor een training, nascholing, beeldcoaching of workshop bij VE in Beeld.',
  })

  return (
    <>
      <PageHero
        eyebrow="Offerte aanvragen"
        title="Vrijblijvende offerte aanvragen"
        lead="Vertel kort iets over je training- of coachingvraag. Ik gebruik deze gegevens om met je mee te denken over de mogelijkheden."
        breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'Offerte aanvragen' }]}
      />

      <Section tone="surface">
        <QuoteForm />
      </Section>
    </>
  )
}
