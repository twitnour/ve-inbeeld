import type { ReactNode } from 'react'
import styles from './PullQuote.module.css'

interface PullQuoteProps {
  children: ReactNode
  /** md (default) for an inline editorial statement, lg for a standalone highlight moment. */
  size?: 'md' | 'lg'
  className?: string
}

/**
 * A centred, serif editorial pull-quote. Carries no spacing of its own
 * (just centering and sizing) — wrap it in your own element to control
 * the surrounding margin, so this never has to fight another
 * stylesheet's margin over cascade order.
 */
export function PullQuote({ children, size = 'md', className }: PullQuoteProps) {
  const classNames = [styles.quote, styles[size], className].filter(Boolean).join(' ')

  return <blockquote className={classNames}>{children}</blockquote>
}
