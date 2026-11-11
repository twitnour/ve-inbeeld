import { Link } from 'react-router-dom'
import { Eye, Target, Lightbulb, Sprout, User, Users, Briefcase, MessageCircle, Camera } from 'lucide-react'
import { PageHero } from '../../components/content/PageHero/PageHero'
import { EditorialSection } from '../../components/content/EditorialSection/EditorialSection'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { FeatureList } from '../../components/content/FeatureList/FeatureList'
import { CoachingFormsGrid } from '../../components/pedagogischCoach/CoachingFormsGrid'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { Section } from '../../components/Section/Section'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'
import styles from './PedagogischCoachPage.module.css'

const coachingOpMaat = [
  { icon: Eye, text: 'Kijk ik naar jouw kwaliteiten en mogelijkheden.' },
  { icon: Target, text: 'Sluit ik aan bij jouw persoonlijke coachingsvraag.' },
  {
    icon: Lightbulb,
    text: 'Denk ik met je mee en stel ik vragen die je helpen om nieuwe inzichten te krijgen.',
  },
  { icon: Sprout, text: 'Stimuleer ik je om met vertrouwen en plezier te blijven groeien.' },
]

const coachingForms = [
  {
    icon: User,
    title: 'Individuele coaching',
    description:
      'Tijdens individuele coaching is er ruimte voor jouw persoonlijke ontwikkeling. We staan stil bij vragen die je tegenkomt in je werk, onderzoeken waar je tegenaan loopt en kijken naar wat jou kan helpen om verder te groeien.',
  },
  {
    icon: Users,
    title: 'Groepscoaching',
    description:
      'Bij groepscoaching leren pedagogisch professionals samen van en met elkaar. Door ervaringen te delen, met elkaar in gesprek te gaan en verschillende perspectieven te ontdekken, ontstaan nieuwe inzichten en praktische ideeën voor de dagelijkse praktijk.',
  },
  {
    icon: Briefcase,
    title: 'Coaching on the job',
    description:
      'Bij coaching on the job vindt de coaching plaats op de werkvloer. Ik kijk mee in de dagelijkse praktijk en sluit aan bij situaties die zich voordoen. Door samen te reflecteren op het pedagogisch handelen, ontdekken we wat goed gaat en waar mogelijkheden liggen om verder te ontwikkelen.',
  },
  {
    icon: MessageCircle,
    title: 'Coachingsgesprekken',
    description:
      'Tijdens coachingsgesprekken is er ruimte om stil te staan bij jouw ervaringen, vragen en ontwikkeldoelen. Door middel van gesprekken, reflectie en gerichte vragen help ik je om inzicht te krijgen in je eigen handelen en mogelijke vervolgstappen.',
  },
  {
    icon: Camera,
    title: 'Beeldcoaching',
    description: (
      <>
        Beeldcoaching maakt het mogelijk om met een andere blik naar je eigen
        pedagogisch handelen te kijken. Door middel van beeldfragmenten onderzoeken we
        samen wat er gebeurt in de interactie tussen jou en de kinderen. We kijken naar
        wat goed gaat, welke kwaliteiten zichtbaar zijn en waar kansen liggen om de
        interactie verder te versterken. Beeldcoaching helpt je om bewuster te kijken
        naar je eigen handelen en nieuwe mogelijkheden te ontdekken. Ben je nieuwsgierig
        naar beeldcoaching? Bekijk mijn{' '}
        <Link to={paths.beeldcoachingOpMaat}>Beeldcoaching op maat</Link>.
      </>
    ),
  },
]

export function PedagogischCoachPage() {
  usePageMeta({
    title: 'Pedagogische coach | VE in Beeld',
    description:
      'Pedagogische coaching voor professionals in de peuterspeelzaal, kinderopvang en gastouderopvang — individueel, als groep, op de werkvloer of met beeldcoaching.',
  })

  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title="Pedagogische coach"
        lead="Als pedagogisch coach denk ik met je mee, geef ik nieuwe inzichten en help ik je om met vertrouwen en plezier te werken aan de kwaliteit van jouw pedagogisch handelen."
        breadcrumbs={[
          { label: 'Home', to: paths.home },
          { label: 'Coaching' },
          { label: 'Pedagogische coach' },
        ]}
      />

      <EditorialSection heading="Jouw pedagogisch handelen in beeld" tone="surface">
        <p>
          Iedere pedagogisch professional zet zich volledig in om de ontwikkeling van
          de kinderen te stimuleren en de zorg te bieden die aan hem of haar zijn
          toevertrouwd. Soms is het fijn om daarbij iemand naast je te hebben die met je
          meedenkt, je nieuwe inzichten geeft en je helpt om je kwaliteiten verder te
          ontwikkelen.
        </p>
        <p>
          Als pedagogisch coach ondersteun ik pedagogisch professionals binnen de
          peuterspeelzaal, kinderopvang en gastoudergezinnen bij hun professionele
          ontwikkeling. Vanuit mijn ruime werkervaring en kennis vanuit het werken in de
          kinderopvang help ik je graag om met vertrouwen, plezier en bewustzijn te
          werken aan de kwaliteit van jouw pedagogisch handelen.
        </p>
      </EditorialSection>

      <EditorialSection heading="Wat kan ik voor jou betekenen?" tone="blush">
        <p>
          Als pedagogisch coach sluit ik aan bij jouw dagelijkse praktijk. Ik kijk naar
          wat er al goed gaat, waar je tegenaan loopt en welke ontwikkelmogelijkheden er
          zijn. Samen onderzoeken we wat jij nodig hebt om verder te groeien.
        </p>
        <p>
          Mijn coaching is laagdrempelig, positief en toegankelijk. Ik vind het
          belangrijk dat je je op je gemak voelt, jezelf kunt zijn en ruimte ervaart om
          vragen te stellen. Coaching is voor mij geen beoordeling, maar een
          samenwerking waarin we samen leren en ontwikkelen.
        </p>
      </EditorialSection>

      <Section tone="surface">
        <SectionIntro heading="Coaching op maat">
          Ik geloof dat iedere pedagogisch professional kwaliteiten en mogelijkheden
          heeft om zich verder te ontwikkelen. Door aan te sluiten bij wat iemand al kan
          en weet, ontstaat ruimte om nieuwe stappen te zetten.
        </SectionIntro>
        <p>Tijdens mijn coaching:</p>
        <FeatureList items={coachingOpMaat} />
        <p className={styles.spaced}>
          Mijn doel is dat je na een coachingsmoment niet alleen nieuwe inzichten hebt
          opgedaan, maar ook weet hoe je deze kunt toepassen in jouw dagelijkse werk.
        </p>
      </Section>

      <Section tone="blush">
        <SectionIntro heading="Verschillende vormen van coaching">
          Iedere professional en iedere situatie is anders. Daarom bied ik
          verschillende vormen van coaching aan. Samen kijken we welke vorm het beste
          aansluit bij jouw vraag en ontwikkelbehoefte.
        </SectionIntro>
        <CoachingFormsGrid forms={coachingForms} />
      </Section>

      <Section tone="default" width="narrow">
        <h2>Samen kijken naar kinderen met (extra) ondersteuningsbehoeften</h2>
        <p>
          Soms vraagt de ontwikkeling van een kind om extra aandacht, ondersteuning of
          een andere benadering. Ook hierbij denk ik graag met je mee.
        </p>
        <p>
          Vanuit mijn kennis en ervaring help ik je om de ontwikkeling van het kind in
          beeld te brengen en samen te onderzoeken welke ondersteuningsbehoefte het
          kind heeft. We kijken naar wat het kind nodig heeft, welke mogelijkheden er
          binnen de groep zijn en hoe jij als pedagogisch professional hierop kunt
          aansluiten.
        </p>
        <p>
          Hierbij staan de mogelijkheden, kwaliteiten en talenten van het kind centraal.
          Samen onderzoeken we of de benodigde ondersteuning aansluit bij de behoeften
          van het kind, haalbaar is voor jou als pedagogisch professional en passend is
          binnen de groep. Ook kijken we welke expertise nodig is om het kind de juiste
          begeleiding te bieden.
        </p>
        <p>
          Wanneer blijkt dat de benodigde ondersteuning niet passend of haalbaar is
          binnen de huidige groep, denk ik graag met je mee over een passende
          vervolgplek waar het kind zich verder kan ontwikkelen.
        </p>
      </Section>

      <CTASection
        heading="Benieuwd wat pedagogische coaching voor jou kan betekenen?"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
      >
        Ik denk graag met je mee over de mogelijkheden voor jou of je organisatie. Neem
        gerust contact op of vraag vrijblijvend een offerte aan.
      </CTASection>
    </>
  )
}
