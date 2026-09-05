import { GraduationCap, Heart, Target, Users } from 'lucide-react'
import { Section } from '../../Section/Section'
import styles from './QualitiesSection.module.css'

const qualities = [
  {
    icon: GraduationCap,
    title: 'VE in beeld',
    description: 'Voorschoolse educatie (VE) kan een belangrijke basis vormen voor de ontwikkeling van het jonge kind. Met methodieken zoals Uk & Puk krijgen professionals handvatten om spelenderwijs de ontwikkeling van het jonge kind te stimuleren, te begeleiden en te laten groeien.',
  },
  {
    icon: Target,
    title: 'Professionals in beeld',
    description: 'Iedere professional verdient het om gezien en gehoord te worden. Bij Ve in Beeld staan hun ontwikkeling, talenten en ervaringen centraal',
  },
  {
    icon: Users,
    title: 'Ieder kind in beeld',
    description: 'Ook ieder kind verdient aandacht en ruimte om zichzelf te laten zien. Samen bouwen we aan een sterke toekomst voor het jonge kind.',
  },
  {
    icon: Heart,
    title: 'Een beeld voor ogen',
    description: 'Ve in Beeld staat voor vooruitkijken, ontwikkelen en samen werken aan het beeld dat we voor de toekomst voor de jonge generatie voor ogen hebben.',
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
