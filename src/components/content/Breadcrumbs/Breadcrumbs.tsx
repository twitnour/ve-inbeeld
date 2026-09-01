import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import styles from './Breadcrumbs.module.css'

export interface BreadcrumbItem {
  label: string
  /** Omit on the last item — it renders as the current page instead of a link. */
  to?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Small contextual trail (e.g. Home / VVE trainingen / Nascholing …),
 * used to tie the VVE training pages together. The last item is
 * rendered as plain text with aria-current="page", not a link.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Kruimelpad" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li className={styles.item} key={item.label}>
              {item.to && !isLast ? (
                <Link to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight size={14} aria-hidden="true" className={styles.separator} />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
