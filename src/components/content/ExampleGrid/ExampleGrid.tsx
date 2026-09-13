import type { CSSProperties, ComponentType } from 'react'
import { Card } from '../../Card/Card'
import styles from './ExampleGrid.module.css'

export interface ExampleGridItem {
  icon: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  label: string
}

interface ExampleGridProps {
  items: ExampleGridItem[]
  /** Desktop column count (narrower widths still collapse to 2, then 1). Defaults to 4. */
  columns?: number
}

/**
 * A modest, scannable grid of compact icon + label cards — for a short
 * overview list (development areas, workshop examples, etc.), not
 * another offer/service grid. Deliberately no description text.
 */
export function ExampleGrid({ items, columns = 4 }: ExampleGridProps) {
  return (
    <div className={styles.grid} style={{ '--example-grid-columns': columns } as CSSProperties}>
      {items.map(({ icon: Icon, label }) => (
        <Card key={label} className={styles.card}>
          <Icon size={20} aria-hidden="true" className={styles.icon} />
          <span className={styles.label}>{label}</span>
        </Card>
      ))}
    </div>
  )
}
