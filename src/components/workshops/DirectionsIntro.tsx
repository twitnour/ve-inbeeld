import { Palette, Presentation } from 'lucide-react'
import styles from './DirectionsIntro.module.css'

const directions = [
  {
    icon: Presentation,
    title: 'Workshops voor volwassenen',
    teaser: 'Enthousiaste, professionele uitvoering van jullie eigen workshop.',
  },
  {
    icon: Palette,
    title: 'Creatieve workshops voor kinderen',
    teaser: 'Plezier, creativiteit en ruimte voor eigen ideeën.',
  },
]

/**
 * A quick visual orientation for the page's two workshop types, ahead
 * of their own detailed sections below — plain content blocks, not
 * pricing-style cards.
 */
export function DirectionsIntro() {
  return (
    <div className={styles.grid}>
      {directions.map(({ icon: Icon, title, teaser }) => (
        <div className={styles.block} key={title}>
          <Icon size={24} aria-hidden="true" className={styles.icon} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.teaser}>{teaser}</p>
        </div>
      ))}
    </div>
  )
}
