import { CalendarDays, MapPin, Users } from 'lucide-react'
import { Section } from '../Section/Section'
import { SectionIntro } from '../content/SectionIntro/SectionIntro'
import { TrainingTopicsGrid } from './TrainingTopicsGrid'
import styles from './ProgramSection.module.css'

const infoRow = [
  { icon: CalendarDays, label: 'Startdatum van de training: in overleg' },
  { icon: Users, label: 'Maximaal 15 deelnemers per groep' },
  { icon: MapPin, label: 'Trainingslocatie: in company, bij u op locatie' },
]

/**
 * "Het programma van de training" — the training's structure, the
 * 12-topic curriculum (via TrainingTopicsGrid) and a compact row of
 * practical participation details.
 */
export function ProgramSection() {
  return (
    <Section tone="surface">
      <SectionIntro heading="Het programma van de training">
        De training bestaat uit 12 bijeenkomsten en 1 certificeringsbijeenkomst. Elke
        bijeenkomst duurt 3,5 uur. Naast de training voert de pedagogisch coach de
        groepsconsultaties uit, en houden deelnemers een portfolio, kwaliteitsfoto en
        persoonlijk ontwikkelplan bij.
      </SectionIntro>

      <TrainingTopicsGrid />

      <div className={styles.infoRow}>
        {infoRow.map(({ icon: Icon, label }) => (
          <div className={styles.infoItem} key={label}>
            <Icon size={18} aria-hidden="true" className={styles.infoIcon} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
