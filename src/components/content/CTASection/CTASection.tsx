import type { ReactNode } from 'react'
import { Section, type SectionTone } from '../../Section/Section'
import { Button, type ButtonVariant } from '../../Button/Button'
import styles from './CTASection.module.css'

interface CTASectionAction {
  label: string
  /** A route to navigate to. Provide exactly one of `to`/`href`. */
  to?: string
  /** An in-page or cross-page anchor, e.g. "/#aanbod". */
  href?: string
}

interface CTASectionProps {
  heading: string
  children: ReactNode
  primaryAction: CTASectionAction
  secondaryAction?: CTASectionAction
  tone?: SectionTone
}

function ActionButton({ action, variant }: { action: CTASectionAction; variant: ButtonVariant }) {
  if (action.href) {
    return (
      <Button href={action.href} variant={variant}>
        {action.label}
      </Button>
    )
  }

  // Every caller provides `to` or `href` — `to` is guaranteed here.
  return (
    <Button to={action.to as string} variant={variant}>
      {action.label}
    </Button>
  )
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
          <ActionButton action={primaryAction} variant="primary" />
          {secondaryAction && <ActionButton action={secondaryAction} variant="secondary" />}
        </div>
      </div>
    </Section>
  )
}
