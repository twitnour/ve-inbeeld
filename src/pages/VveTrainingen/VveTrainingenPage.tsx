import { BookOpen, RefreshCw, RotateCcw } from 'lucide-react'
import { PageHero } from '../../components/content/PageHero/PageHero'
import { Section } from '../../components/Section/Section'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { ServiceCard } from '../../components/home/ServiceCard/ServiceCard'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'
import styles from './VveTrainingenPage.module.css'

const trainingen = [
  {
    icon: <BookOpen size={22} />,
    title: 'Uk & Puk editie 2',
    description:
      'Een compleet programma voor peuterspeelzaal, kinderopvang en kindcentra, voor professionals die werken met kinderen van 0 tot 4 jaar.',
    to: paths.vveTrainingen.ukPukEditie2,
    linkLabel: 'Ontdek de training',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Nascholing Uk & Puk editie 2',
    description:
      'Twee interactieve dagdelen van 2,5 uur waarin deelnemers worden meegenomen in de vernieuwde werkwijze van Uk & Puk editie 2.',
    to: paths.vveTrainingen.nascholingUkPukEditie2,
    linkLabel: 'Bekijk de nascholing',
  },
  {
    icon: <RotateCcw size={22} />,
    title: 'Herscholing',
    description: 'Meer informatie over het herscholingsaanbod van VE in Beeld volgt binnenkort.',
    to: paths.vveTrainingen.herscholing,
    linkLabel: 'Meer informatie',
  },
]

/**
 * Overview page for the "VVE trainingen" nav item — lets a visitor land
 * on /vve-trainingen (or the nav dropdown's own "overzicht" link) and
 * choose between the three trainings, rather than hitting a stub. Copy
 * for each card mirrors what its own page and the homepage's Aanbod
 * section already say — nothing new is claimed here.
 */
export function VveTrainingenPage() {
  usePageMeta({
    title: 'VVE trainingen | VE in Beeld',
    description:
      'Uk & Puk editie 2, de bijbehorende nascholing en herscholing: VVE-trainingen van VE in Beeld voor professionals in de kinderopvang en voorschoolse educatie.',
  })

  return (
    <>
      <PageHero
        eyebrow="VVE trainingen"
        title="VVE-trainingen voor de praktijk van het jonge kind"
        lead="Praktijkgerichte trainingen rond Uk & Puk editie 2, van basistraining tot nascholing en herscholing — voor professionals die werken met baby’s, dreumesen en peuters."
        breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'VVE trainingen' }]}
      />

      <Section tone="surface">
        <SectionIntro heading="Kies een training">
          Nog niet zeker welke training bij jouw organisatie past? Neem gerust contact op —
          ik denk graag mee.
        </SectionIntro>
        <div className={styles.grid}>
          {trainingen.map((training) => (
            <ServiceCard key={training.title} {...training} />
          ))}
        </div>
      </Section>

      <CTASection
        heading="Twijfel je nog welke training passend is?"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
      >
        Elke organisatie en elk team is anders. Neem gerust contact op om te bespreken
        wat het beste aansluit, of vraag direct een vrijblijvende offerte aan.
      </CTASection>
    </>
  )
}
