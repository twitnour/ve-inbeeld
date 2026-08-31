import type { ReactNode } from 'react'
import styles from './PageContainer.module.css'

interface PageContainerProps {
  children: ReactNode
}

/**
 * Constrains page content to the shared reading width and applies
 * consistent block/inline spacing. Wrap the content of every route's
 * page component with this.
 */
export function PageContainer({ children }: PageContainerProps) {
  return <div className={styles.container}>{children}</div>
}
