import styles from './TrainingTopicsGrid.module.css'

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

/**
 * The 12-topic curriculum overview for the training's meetings.
 * Presented as a plain numbered list — a reference grid, not another
 * card grid, so it reads as scannable curriculum content.
 */
export function TrainingTopicsGrid() {
  return (
    <ol className={styles.grid}>
      {topics.map((topic, index) => (
        <li className={styles.item} key={topic}>
          <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
          <span>{topic}</span>
        </li>
      ))}
    </ol>
  )
}
