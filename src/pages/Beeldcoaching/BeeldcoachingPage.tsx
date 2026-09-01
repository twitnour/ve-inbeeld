import { PageHero } from '../../components/content/PageHero/PageHero'
import { SplitContentSection } from '../../components/content/SplitContentSection/SplitContentSection'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { ProcessSteps } from '../../components/content/ProcessSteps/ProcessSteps'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { Section } from '../../components/Section/Section'
import { PositiveSection } from '../../components/beeldcoaching/PositiveSection'
import { VideoVisual } from '../../components/beeldcoaching/VideoVisual'
import { paths } from '../../routes/paths'

const steps = [
  {
    title: 'Kijken',
    description: 'Korte dagelijkse praktijksituaties worden in beeld gebracht.',
  },
  {
    title: 'Terugzien',
    description: 'Samen bekijken we wat zichtbaar wordt in het contact en handelen.',
  },
  {
    title: 'Reflecteren',
    description: 'We onderzoeken wat al goed gaat en waar ontwikkelkansen liggen.',
  },
  {
    title: 'Toepassen',
    description: 'Inzichten worden vertaald naar concrete aandachtspunten in de praktijk.',
  },
]

export function BeeldcoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Beeldcoaching op maat"
        title="Groeien door te kijken naar wat er al is"
        lead="Video Interactie Begeleiding (VIB) helpt pedagogisch professionals inzicht te krijgen in hun eigen communicatie, interacties en pedagogisch handelen — op een positieve en ontwikkelingsgerichte manier."
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Meer over de werkwijze', href: '#werkwijze' }}
        breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'Beeldcoaching op maat' }]}
      />

      <SplitContentSection
        tone="surface"
        visual={
          <VideoVisual alt="Beeldfragment tijdens een coachingsmoment (volgt binnenkort)" />
        }
      >
        <h2>Wat is Video Interactie Begeleiding?</h2>
        <p>
          VIB is een krachtige en positieve methodiek waarmee pedagogisch professionals
          inzicht krijgen in hun eigen communicatie, interacties en pedagogisch
          handelen.
        </p>
        <p>Met korte videofragmenten kijken we samen naar alledaagse situaties op de groep.</p>
        <p>
          Het terugzien van deze beelden helpt om bewust te worden van wat goed gaat,
          welke kwaliteiten zichtbaar zijn en waar kansen liggen voor verdere
          ontwikkeling.
        </p>
        <p>
          Juist omdat je jezelf in de praktijk ziet handelen, ontstaan vaak waardevolle
          inzichten die direct toepasbaar zijn.
        </p>
      </SplitContentSection>

      <PositiveSection />

      <Section tone="surface" id="werkwijze">
        <SectionIntro heading="Hoe het werkt">
          In vier stappen van beeld naar inzicht.
        </SectionIntro>
        <ProcessSteps steps={steps} />
      </Section>

      <Section tone="default" width="narrow">
        <h2>Beelden maken zichtbaar wat woorden soms missen</h2>
        <p>
          Video geeft de ruimte om details in interactie en communicatie te zien die in
          het moment zelf makkelijk voorbijgaan. Zo ontstaat een helder en concreet
          beeld van wat er al gebeurt.
        </p>
      </Section>

      <CTASection
        heading="Benieuwd wat beeldcoaching voor jou of je team kan betekenen?"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
      >
        Of je nu pedagogisch professional, pedagogisch coach of verantwoordelijk bent
        binnen een kinderopvangorganisatie: ik denk graag met je mee over de
        mogelijkheden.
      </CTASection>
    </>
  )
}
