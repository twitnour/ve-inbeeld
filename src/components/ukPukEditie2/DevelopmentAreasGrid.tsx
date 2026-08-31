import { Calculator, Compass, Heart, MessageCircle, PersonStanding, Palette, Tablet } from 'lucide-react'
import { Section } from '../Section/Section'
import { SectionIntro } from '../content/SectionIntro/SectionIntro'
import { Card } from '../Card/Card'
import styles from './DevelopmentAreasGrid.module.css'

const areas = [
  { icon: Heart, label: 'Sociaal-emotionele ontwikkeling' },
  { icon: MessageCircle, label: 'Spraak- en taalontwikkeling' },
  { icon: Calculator, label: 'Rekenontwikkeling' },
  { icon: PersonStanding, label: 'Motorische ontwikkeling' },
  { icon: Compass, label: 'Oriëntatie op jezelf en de wereld' },
  { icon: Palette, label: 'Kunstzinnige oriëntatie' },
  { icon: Tablet, label: 'Digitale geletterdheid' },
]

/**
 * "De 7 ontwikkelingsgebieden" — a modest, scannable grid. Compact
 * icon + label cards, deliberately without extra description text so
 * this reads as a clear overview rather than another offer grid.
 */
export function DevelopmentAreasGrid() {
  return (
    <Section tone="blush">
      <SectionIntro heading="De 7 ontwikkelingsgebieden">
        Met het ontwikkelingsaanbod van Uk &amp; Puk worden zeven ontwikkelingsgebieden
        gestimuleerd.
      </SectionIntro>
      <div className={styles.grid}>
        {areas.map(({ icon: Icon, label }) => (
          <Card key={label} className={styles.card}>
            <Icon size={20} aria-hidden="true" className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </Card>
        ))}
      </div>
    </Section>
  )
}
