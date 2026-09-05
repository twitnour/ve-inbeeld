import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  /** Adds a gentle hover lift — use when the whole card acts as a link/action. */
  interactive?: boolean
  className?: string
  children: ReactNode
}

/**
 * General-purpose editorial card: soft surface, thin border, moderate
 * radius, no heavy shadow. Use for future offerings, info blocks, etc.
 */
export function Card({ interactive, className, children }: CardProps) {
  const classNames = [styles.card, interactive && styles.interactive, className]
    .filter(Boolean)
    .join(' ')
  return <div className={classNames}>{children}</div>
}

interface OfferCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  children?: ReactNode
}

/**
 * Card variant for a single offering (a training, a workshop, a
 * service). Icon + title + description, with room for extra content
 * (e.g. a Button) via children. Not populated with real content yet.
 */
export function OfferCard({ icon, title, description, className, children }: OfferCardProps) {
  const classNames = [styles.card, styles.offerCard, className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {icon && <div className={styles.offerIcon}>{icon}</div>}
      <h3 className={styles.offerTitle}>{title}</h3>
      <p className={styles.offerDescription}>{description}</p>
      {children}
    </div>
  )
}
