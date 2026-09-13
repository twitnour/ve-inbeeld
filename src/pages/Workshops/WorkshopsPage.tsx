import {
  Clock,
  CupSoda,
  FileText,
  Frame,
  Lightbulb,
  PartyPopper,
  Package,
  Presentation,
  Scissors,
  ShoppingBag,
  Smile,
  Sparkles,
  Users2,
  Brush,
} from 'lucide-react'
import { PageHero } from '../../components/content/PageHero/PageHero'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { FeatureList } from '../../components/content/FeatureList/FeatureList'
import { ExampleGrid } from '../../components/content/ExampleGrid/ExampleGrid'
import { SplitContentSection } from '../../components/content/SplitContentSection/SplitContentSection'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { Section } from '../../components/Section/Section'
import { ImagePlaceholder } from '../../components/ImagePlaceholder/ImagePlaceholder'
import { DirectionsIntro } from '../../components/workshops/DirectionsIntro'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'
import kralenImage from '../../assets/kralen.jpg'
import styles from './WorkshopsPage.module.css'

const requirements = [
  { icon: Presentation, text: 'PowerPoint-presentatie' },
  { icon: FileText, text: 'Inhoudelijk script, draaiboek of achtergrondinformatie' },
  { icon: Users2, text: 'Praktische informatie over de doelgroep' },
  { icon: Clock, text: 'Gewenste duur van de workshop' },
]

const childValues = [
  { icon: Smile, text: 'Plezier staat voorop' },
  { icon: Sparkles, text: 'Ruimte voor creativiteit' },
  { icon: Lightbulb, text: 'Eigen ideeën vormgeven' },
  { icon: Brush, text: 'Het proces is het allerbelangrijkste' },
]

const ideas = [
  { icon: Frame, label: 'Eigen canvasdoek ontwerpen' },
  { icon: ShoppingBag, label: 'Een eigen tas ontwerpen en versieren' },
  { icon: Package, label: 'Een eigen etui maken' },
  { icon: CupSoda, label: 'Een eigen drinkmok ontwerpen en versieren' },
  { icon: Scissors, label: 'Creatieve knutsel- en ontwerpworkshops' },
  { icon: PartyPopper, label: 'Creatieve workshops rondom een thema of evenement' },
]

export function WorkshopsPage() {
  usePageMeta({
    title: 'Workshops | VE in Beeld',
    description:
      'Enthousiaste en interactieve workshops voor professionals en creatieve workshops voor kinderen — verzorgd door VE in Beeld.',
  })

  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title="Workshops die mensen in beweging brengen"
        lead="Op zoek naar een enthousiaste en betrokken workshopbegeleider? Ik ben inzetbaar voor het verzorgen van workshops voor zowel volwassenen als kinderen."
        primaryAction={{ label: 'Bespreek de mogelijkheden', to: paths.contact }}
        secondaryAction={{ label: 'Bekijk de richtingen', href: '#richtingen' }}
        breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'Workshops' }]}
      />

      <Section tone="blush" id="richtingen">
        <SectionIntro heading="Twee richtingen">
          Van inhoudelijke workshops voor teams tot creatieve middagen vol plezier voor
          kinderen.
        </SectionIntro>
        <DirectionsIntro />
      </Section>

      <Section tone="surface">
        <SectionIntro heading="Jullie inhoud, professioneel verzorgd">
          Organisaties kunnen mij inschakelen voor het verzorgen van een bestaande
          workshop binnen hun organisatie. Hebben jullie al een PowerPoint en een
          inhoudelijk script of draaiboek beschikbaar? Dan neem ik graag de uitvoering
          van de workshop van jullie over.
        </SectionIntro>
        <FeatureList items={requirements} />
        <p className={styles.spaced}>
          Ik zorg vervolgens voor een enthousiaste, interactieve en professionele
          uitvoering, waarbij ik de deelnemers actief betrek en zorg voor een prettige
          sfeer.
        </p>
      </Section>

      <SplitContentSection
        tone="blush"
        visualPosition="left"
        visual={
          <ImagePlaceholder
            src={kralenImage}
            aspect="square"
            alt="Een kind rijgt kleurrijke kralen tijdens een creatieve workshop"
          />
        }
      >
        <h2>Creatieve workshops voor kinderen</h2>
        <p>
          Ook voor creatieve workshops voor kinderen ben ik inzetbaar. Hierbij staan
          plezier, creativiteit en het proces centraal. Kinderen krijgen de ruimte om
          hun eigen ideeën vorm te geven en met verschillende materialen en technieken
          aan de slag te gaan.
        </p>
        <FeatureList items={childValues} />
      </SplitContentSection>

      <Section tone="surface">
        <SectionIntro heading="Workshop ideeën">
          Een greep uit de workshops die ik verzorg:
        </SectionIntro>
        <ExampleGrid items={ideas} columns={3} />
      </Section>

      <CTASection
        heading="Een workshop in gedachten?"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
      >
        Hebben jullie een workshop in gedachten, of zijn jullie op zoek naar iemand die
        een bestaande workshop op een enthousiaste manier kan verzorgen? Neem gerust
        contact op. Ik denk graag mee over de mogelijkheden!
      </CTASection>
    </>
  )
}
