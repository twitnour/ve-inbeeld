import { GraduationCap, Heart, Target, Users } from 'lucide-react'
import { Section } from '../../Section/Section'
import styles from './QualitiesSection.module.css'

const qualities = [
  {
    icon: GraduationCap,
    title: 'Gespecialiseerde kennis',
    description: 'Uk & Puk en voorschoolse educatie, inclusief de nascholing voor editie 2.',
  },
  {
    icon: Target,
    title: 'Direct toepasbaar',
    description: 'Geen theorie om de theorie — altijd de vertaalslag naar de dagelijkse praktijk.',
  },
  {
    icon: Users,
    title: 'Ervaring uit de kinderopvang',
    description: 'Kennis van de realiteit op de groep.',
  },
  {
    icon: Heart,
    title: 'Persoonlijk & betrokken',
    description: 'Interactief, positief en met aandacht voor de mensen in de organisatie.',
  },
]

/**
 * Four concrete, credible qualities — plain icon + heading + one-liner,
 * deliberately not wrapped in cards so this doesn't read as a second
 * card grid right after the Aanbod section.
 */
export function QualitiesSection() {
  return (
    <Section tone="default">
      <h2>Waarom VE in Beeld</h2>
      <div className={styles.grid}>
        {qualities.map(({ icon: Icon, title, description }) => (
          <div className={styles.item} key={title}>
            <Icon size={26} aria-hidden="true" className={styles.icon} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
