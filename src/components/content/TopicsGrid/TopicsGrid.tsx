import type { CSSProperties } from 'react'
import styles from './TopicsGrid.module.css'

interface TopicsGridProps {
  topics: string[]
  /**
   * Reading order across the two columns. 'row' (default) reads
   * left-to-right then top-to-bottom. 'column' fills the first column
   * top-to-bottom before continuing into the second (e.g. 1-6 left,
   * 7-12 right for a 12-item list) — only the visual order changes,
   * the underlying <ol> keeps its natural 1..n source order.
   */
  fillDirection?: 'row' | 'column'
}

/**
 * A numbered curriculum/topics overview — a reference list rather than
 * a card grid, so it reads as scannable program content. Column count
 * is fixed at two; with few items it simply reads as a short 2x2-style
 * block, with many it becomes a compact overview.
 */
export function TopicsGrid({ topics, fillDirection = 'row' }: TopicsGridProps) {
  const columnMajor = fillDirection === 'column'
  const classNames = [styles.grid, columnMajor && styles.columnMajor].filter(Boolean).join(' ')
  const style = columnMajor
    ? ({ '--topic-rows': Math.ceil(topics.length / 2) } as CSSProperties)
    : undefined

  return (
    <ol className={classNames} style={style}>
      {topics.map((topic, index) => (
        <li className={styles.item} key={topic}>
          <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
          <span>{topic}</span>
        </li>
      ))}
    </ol>
  )
}
