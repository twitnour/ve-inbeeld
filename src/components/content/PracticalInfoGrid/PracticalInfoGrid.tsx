import type { ComponentType } from 'react'
import { Card } from '../../Card/Card'
import styles from './PracticalInfoGrid.module.css'

export interface PracticalInfoBlock {
  icon: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  title: string
  items: string[]
}

interface PracticalInfoGridProps {
  blocks: PracticalInfoBlock[]
}

/**
 * A 2x2 (responsive) grid of scannable info cards — icon, title and a
 * short bullet list. Used for practical/logistics information such as
 * study load, target audience, assessment and outcomes.
 */
export function PracticalInfoGrid({ blocks }: PracticalInfoGridProps) {
  return (
    <div className={styles.grid}>
      {blocks.map(({ icon: Icon, title, items }) => (
        <Card key={title} className={styles.card}>
          <Icon size={22} aria-hidden="true" className={styles.icon} />
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}
