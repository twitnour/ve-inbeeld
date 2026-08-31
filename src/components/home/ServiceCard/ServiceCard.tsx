import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card } from '../../Card/Card'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  to: string
  linkLabel: string
  className?: string
}

/**
 * One "Aanbod" offering. The card's link is a stretched link (the
 * visible "Ontdek de training →" text is the one real, accessible
 * link; its ::after expands to cover the whole card) so the entire
 * card is clickable without nesting interactive elements.
 */
export function ServiceCard({
  icon,
  title,
  description,
  to,
  linkLabel,
  className,
}: ServiceCardProps) {
  const classNames = [styles.card, className].filter(Boolean).join(' ')

  return (
    <Card interactive className={classNames}>
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={to} className={styles.link}>
        {linkLabel}
        <ArrowRight size={16} aria-hidden="true" className={styles.arrow} />
      </Link>
    </Card>
  )
}
