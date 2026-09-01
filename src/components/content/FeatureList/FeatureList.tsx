import type { ComponentType, ReactNode } from 'react'
import { Check } from 'lucide-react'
import styles from './FeatureList.module.css'

export interface FeatureListItem {
  icon?: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  text: ReactNode
}

interface FeatureListProps {
  items: FeatureListItem[]
  className?: string
}

/**
 * A short list of focus points or requirements — icon (or a default
 * checkmark) plus a line of text. Lighter than ExampleGrid: no card,
 * no border, just a clean scannable list for things like "3 focus
 * points" or "wat ik nodig heb van jou".
 */
export function FeatureList({ items, className }: FeatureListProps) {
  const classNames = [styles.list, className].filter(Boolean).join(' ')

  return (
    <ul className={classNames}>
      {items.map((item, index) => {
        const Icon = item.icon ?? Check
        return (
          <li className={styles.item} key={index}>
            <Icon size={18} aria-hidden="true" className={styles.icon} />
            <span>{item.text}</span>
          </li>
        )
      })}
    </ul>
  )
}
