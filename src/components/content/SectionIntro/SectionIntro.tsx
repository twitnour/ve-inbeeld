import type { ReactNode } from 'react'
import styles from './SectionIntro.module.css'

interface SectionIntroProps {
  heading: string
  children?: ReactNode
  className?: string
}

/**
 * Consistent section opener: a heading with an optional short lead
 * paragraph underneath. Used to introduce a section before its grid,
 * list or body copy.
 */
export function SectionIntro({ heading, children, className }: SectionIntroProps) {
  const classNames = [styles.intro, className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      <h2>{heading}</h2>
      {children && <p className={styles.lead}>{children}</p>}
    </div>
  )
}
