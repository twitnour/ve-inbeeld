import { PageHero } from '../../components/content/PageHero/PageHero'
import { Section } from '../../components/Section/Section'
import { usePageMeta } from '../../hooks/usePageMeta'
import { businessInfo } from '../../lib/businessInfo'
import { paths } from '../../routes/paths'

/**
 * Simple, static privacy statement — linked from the footer. Content
 * provided directly by the site owner; the "[e-mailadres]" placeholder
 * in the source text is filled in from businessInfo.contactEmail so it
 * stays in sync with the address used everywhere else on the site.
 */
export function PrivacyverklaringPage() {
  usePageMeta({
    title: 'Privacyverklaring | VE in Beeld',
    description:
      'Hoe VE in Beeld omgaat met de persoonsgegevens die je via de contact- en offerteformulieren deelt.',
  })

  return (
    <>
      <PageHero
        eyebrow="Privacyverklaring"
        title="Privacyverklaring"
        lead="Hoe VE in Beeld omgaat met de persoonsgegevens die je via de website deelt."
        breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'Privacyverklaring' }]}
      />

      <Section tone="default" width="narrow">
        <p>
          VE in Beeld verwerkt persoonsgegevens die je zelf aan ons verstrekt via het
          contact- of offerteformulier, zoals je naam, e-mailadres, telefoonnummer,
          organisatie en de inhoud van je bericht. We gebruiken deze gegevens
          uitsluitend om contact met je op te nemen en je vraag of offerteaanvraag te
          behandelen.
        </p>
        <p>
          De gegevens worden niet gebruikt voor marketingdoeleinden en niet verkocht
          aan derden. Voor het technisch verwerken van berichten maken we gebruik van
          onze hosting- en e-mailproviders. We bewaren persoonsgegevens niet langer dan
          nodig is voor het doel waarvoor ze zijn verstrekt.
        </p>
        <p>
          Je hebt het recht om je persoonsgegevens in te zien, te laten corrigeren of
          verwijderen en kunt bezwaar maken tegen de verwerking. Neem hiervoor contact
          op via{' '}
          <a href={`mailto:${businessInfo.contactEmail}`}>{businessInfo.contactEmail}</a>.
        </p>
        <p>
          VE in Beeld gebruikt geen tracking- of advertentiecookies. Eventuele
          technisch noodzakelijke cookies worden alleen gebruikt voor het functioneren
          van de website.
        </p>
      </Section>
    </>
  )
}
