import type { ReactNode } from 'react'
import { Section, type SectionTone } from '../../Section/Section'
import styles from './EditorialSection.module.css'

interface EditorialSectionProps {
  heading: string
  tone?: SectionTone
  children: ReactNode
}

/**
 * Editorial two-column section: a heading beside body copy, rather
 * than a card. Shared by the homepage's positioning statement and the
 * VVE training pages' "what is this?" sections.
 */
export function EditorialSection({ heading, tone = 'surface', children }: EditorialSectionProps) {
  return (
    <Section tone={tone}>
      <div className={styles.grid}>
        <div className={styles.headingCol}>
          <h2>{heading}</h2>
        </div>
        <div className={styles.bodyCol}>{children}</div>
      </div>
    </Section>
  )
}
