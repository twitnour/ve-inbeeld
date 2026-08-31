import type { ReactNode } from 'react'
import { Section, type SectionTone } from '../../Section/Section'
import { Button } from '../../Button/Button'
import styles from './CTASection.module.css'

interface CTASectionAction {
  label: string
  to: string
}

interface CTASectionProps {
  heading: string
  children: ReactNode
  primaryAction: CTASectionAction
  secondaryAction?: CTASectionAction
  tone?: SectionTone
}

/**
 * Shared closing call-to-action for content pages — calm and centered,
 * matching the homepage's own final CTA so every page ends on the same
 * note. Defaults to the "sand" tone the homepage uses for its closing
 * section.
 */
export function CTASection({
  heading,
  children,
  primaryAction,
  secondaryAction,
  tone = 'sand',
}: CTASectionProps) {
  return (
    <Section tone={tone} width="narrow">
      <div className={styles.center}>
        <h2>{heading}</h2>
        <p>{children}</p>
        <div className={styles.actions}>
          <Button to={primaryAction.to} variant="primary">
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button to={secondaryAction.to} variant="secondary">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
