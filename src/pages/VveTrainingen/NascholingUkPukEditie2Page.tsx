import { PageHero } from '../../components/content/PageHero/PageHero'
import { EditorialSection } from '../../components/content/EditorialSection/EditorialSection'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { InfoHighlights } from '../../components/content/InfoHighlights/InfoHighlights'
import { TopicsGrid } from '../../components/content/TopicsGrid/TopicsGrid'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { Section } from '../../components/Section/Section'
import { paths } from '../../routes/paths'

const onderwerpen = ['Nieuwe thema’s', 'De 4 D’s', 'Nieuwe formulieren', 'Inhoudelijke veranderingen']

export function NascholingUkPukEditie2Page() {
  return (
    <>
      <PageHero
        eyebrow="VVE trainingen"
        title="Nascholing Uk & Puk editie 2"
        lead="Op zoek naar een inspirerende en praktijkgerichte nascholing voor Uk & Puk editie 2? Tijdens twee interactieve dagdelen verdiep je kennis en vaardigheden, zodat je de vernieuwde werkwijze met vertrouwen toepast in de dagelijkse praktijk."
        primaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
        secondaryAction={{ label: 'Neem contact op', to: paths.contact }}
        breadcrumbs={[
          { label: 'Home', to: paths.home },
          { label: 'VVE trainingen', to: paths.vveTrainingen.index },
          { label: 'Nascholing Uk & Puk editie 2' },
        ]}
      />

      <EditorialSection heading="Verdiepen, uitwisselen en direct toepassen" tone="surface">
        <p>
          Deze nascholing bestaat uit twee interactieve dagdelen van 2,5 uur, waarin het
          verdiepen van kennis en vaardigheden centraal staat.
        </p>
        <p>
          Er is volop ruimte voor interactie en het uitwisselen van ervaringen, zodat de
          vertaalslag van theorie naar de dagelijkse praktijk steeds dichtbij blijft.
        </p>
        <p>
          Na afloop neem je nieuwe inzichten en praktische handvatten mee om direct met
          de vernieuwde werkwijze van Uk &amp; Puk editie 2 aan de slag te gaan.
        </p>
      </EditorialSection>

      <Section tone="blush">
        <SectionIntro heading="In het kort" />
        <InfoHighlights
          items={[
            { value: '2', label: 'bijeenkomsten' },
            { value: '2,5 uur', label: 'per bijeenkomst' },
            { value: 'Interactief', label: 'en praktijkgericht' },
          ]}
        />
      </Section>

      <Section tone="surface">
        <SectionIntro heading="Onderwerpen">
          Tijdens de nascholing maak je kennis met de belangrijkste vernieuwingen binnen
          Uk &amp; Puk editie 2.
        </SectionIntro>
        <TopicsGrid topics={onderwerpen} />
      </Section>

      <Section tone="default" width="narrow">
        <h2>Ruimte voor uitwisseling en toepassing</h2>
        <p>
          De nascholing biedt volop ruimte om ervaringen met elkaar te delen en de
          theorie samen te vertalen naar de praktijk op de groep. Na afloop ga je naar
          huis met concrete inzichten en handvatten om meteen met de vernieuwde
          werkwijze van Uk &amp; Puk editie 2 te werken.
        </p>
      </Section>

      <CTASection
        heading="Aan de slag met Uk & Puk editie 2?"
        primaryAction={{ label: 'Vraag een vrijblijvende offerte aan', to: paths.offerteAanvragen }}
        secondaryAction={{ label: 'Neem contact op', to: paths.contact }}
      >
        Wil je deze nascholing voor jouw team of organisatie inzetten? Vraag
        vrijblijvend een offerte aan of neem contact op.
      </CTASection>
    </>
  )
}
