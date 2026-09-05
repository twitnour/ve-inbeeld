import type { ReactNode } from 'react'
import { Section, type SectionTone } from '../../Section/Section'
import styles from './SplitContentSection.module.css'

interface SplitContentSectionProps {
  /** An image, ImagePlaceholder, or other visual for the secondary column. */
  visual: ReactNode
  /** Which side the visual sits on at desktop widths. Always stacks below the text on mobile. */
  visualPosition?: 'left' | 'right'
  tone?: SectionTone
  children: ReactNode
}

/**
 * A two-column section pairing text (heading, paragraphs, etc.) with a
 * visual — unlike EditorialSection, which pairs a heading with body
 * text on both sides. On mobile, content always comes before the
 * visual regardless of `visualPosition`, so reading order stays
 * predictable.
 */
export function SplitContentSection({
  visual,
  visualPosition = 'right',
  tone = 'surface',
  children,
}: SplitContentSectionProps) {
  const classNames = [styles.grid, visualPosition === 'left' && styles.reverse]
    .filter(Boolean)
    .join(' ')

  return (
    <Section tone={tone}>
      <div className={classNames}>
        <div className={styles.content}>{children}</div>
        <div className={styles.visual}>{visual}</div>
      </div>
    </Section>
  )
}
