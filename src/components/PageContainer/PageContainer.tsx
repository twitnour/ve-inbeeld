import type { ReactNode } from 'react'
import styles from './PageContainer.module.css'

export type ContainerWidth = 'narrow' | 'normal' | 'wide'

interface PageContainerProps {
  /**
   * narrow  — long-form article/text content (~42rem)
   * normal  — default page content (~60rem)
   * wide    — section shells, card grids, wide layouts (~78rem)
   */
  width?: ContainerWidth
  /** Set false when an outer element (e.g. Section) already adds block padding. */
  padded?: boolean
  className?: string
  children: ReactNode
}

/**
 * Constrains content to a shared reading width and applies consistent
 * inline padding. Wrap the content of a route's page component with
 * this, or use it via the Section component for full-width bands.
 */
export function PageContainer({
  width = 'normal',
  padded = true,
  className,
  children,
}: PageContainerProps) {
  const classNames = [
    styles.container,
    styles[width],
    padded && styles.padded,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classNames}>{children}</div>
}
