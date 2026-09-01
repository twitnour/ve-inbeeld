import styles from './TopicsGrid.module.css'

interface TopicsGridProps {
  topics: string[]
}

/**
 * A numbered curriculum/topics overview — a reference list rather than
 * a card grid, so it reads as scannable program content. Column count
 * is fixed at two; with few items it simply reads as a short 2x2-style
 * block, with many it becomes a compact overview.
 */
export function TopicsGrid({ topics }: TopicsGridProps) {
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
