import { CalendarDays, MapPin, Users } from 'lucide-react'
import { SplitContentSection } from '../content/SplitContentSection/SplitContentSection'
import { SectionIntro } from '../content/SectionIntro/SectionIntro'
import { TopicsGrid } from '../content/TopicsGrid/TopicsGrid'
import { ImagePlaceholder } from '../ImagePlaceholder/ImagePlaceholder'
import socialsImage from '../../assets/UkPuk/UkPuk_socials_vierkant_1080x1080_CED_officieel.jpg'
import styles from './ProgramSection.module.css'

const topics = [
  'Introductie Uk & Puk',
  'Plannen van thema’s',
  'Pedagogische kwaliteit',
  'Doelgericht en planmatig werken',
  'Leesplezier en boeken',
  'Spraak- en taalontwikkeling',
  'Sociaal-emotionele ontwikkeling',
  'Spel, spelbegeleiding en speelleeromgeving',
  'Motorische en zintuiglijke ontwikkeling',
  'Rekenontwikkeling',
  'Kunstzinnige ontwikkeling',
  'Samenwerken met ouders en andere partners',
]

const infoRow = [
  { icon: CalendarDays, label: 'Startdatum van de training: in overleg' },
  { icon: Users, label: 'Maximaal 15 deelnemers per groep' },
  { icon: MapPin, label: 'Trainingslocatie: in company, bij u op locatie' },
]

/**
 * "Het programma van de training" — the training's structure, the
 * 12-topic curriculum (via TopicsGrid, read top-to-bottom within each
 * column: 1-6 left, 7-12 right) and a compact row of practical
 * participation details. Paired with a promotional visual on the
 * right (via SplitContentSection), stacked below the text on mobile.
 */
export function ProgramSection() {
  return (
    <SplitContentSection
      tone="surface"
      visual={
        <ImagePlaceholder
          src={socialsImage}
          aspect="square"
          alt="Uk & Puk: Puk vliegt met een vliegtuig door de lucht"
        />
      }
    >
      <SectionIntro heading="Het programma van de training">
        De training bestaat uit 12 bijeenkomsten en 1 certificeringsbijeenkomst. Elke
        bijeenkomst duurt 3,5 uur. Naast de training voert de pedagogisch coach de
        groepsconsultaties uit, en houden deelnemers een portfolio, kwaliteitsfoto en
        persoonlijk ontwikkelplan bij.
      </SectionIntro>

      <TopicsGrid topics={topics} fillDirection="column" />

      <div className={styles.infoRow}>
        {infoRow.map(({ icon: Icon, label }) => (
          <div className={styles.infoItem} key={label}>
            <Icon size={18} aria-hidden="true" className={styles.infoIcon} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </SplitContentSection>
  )
}
