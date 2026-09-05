import { BookOpen, Camera, Palette, RefreshCw } from 'lucide-react'
import { Section } from '../../Section/Section'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import { paths } from '../../../routes/paths'
import styles from './ServicesSection.module.css'

const services = [
  {
    icon: <BookOpen size={22} />,
    title: 'VE-training Uk & Puk',
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
    icon: <Camera size={22} />,
    title: 'Beeldcoaching op maat',
    description:
      'Reflecteer op je eigen handelen en interactievaardigheden met Video Interactie Begeleiding, en ontdek wat al goed gaat en waar groeikansen liggen.',
    to: paths.beeldcoachingOpMaat,
    linkLabel: 'Meer over beeldcoaching',
  },
  {
    icon: <Palette size={22} />,
    title: 'Workshops',
    description:
      'Enthousiaste en interactieve workshops voor professionals en creatieve workshops voor kinderen.',
    to: paths.workshops,
    linkLabel: 'Bekijk de workshops',
  },
]

/**
 * The homepage's "Aanbod" — four offerings as a gently staggered
 * editorial grid (desktop only) rather than a uniform SaaS-style
 * feature grid.
 */
export function ServicesSection() {
  return (
    <Section tone="blush" width="wide" id="aanbod">
      <div className={styles.header}>
        <h2>Aanbod</h2>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
