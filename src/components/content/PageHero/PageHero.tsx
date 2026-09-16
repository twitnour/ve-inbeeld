import type { ReactNode } from 'react'
import { Button, type ButtonVariant } from '../../Button/Button'
import { Section } from '../../Section/Section'
import { Breadcrumbs, type BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs'
import styles from './PageHero.module.css'

interface PageHeroAction {
  label: string
  /** A route to navigate to. Provide exactly one of `to`/`href`. */
  to?: string
  /** An in-page anchor to scroll to, e.g. for a "scroll to this section" CTA. */
  href?: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  /**
   * A single paragraph, or an array of strings for multiple paragraphs
   * (each rendered as its own <p> — don't pass a multi-line template
   * literal here, blank lines collapse to nothing in HTML and every
   * paragraph runs together as one).
   */
  lead: ReactNode | string[]
  primaryAction?: PageHeroAction
  secondaryAction?: PageHeroAction
  /** Optional Home / … / Current-page trail, e.g. for the VVE training pages. */
  breadcrumbs?: BreadcrumbItem[]
  /**
   * Optional illustration/photo shown beside the text at desktop widths
   * (stacked below the text on mobile). Omit for the default single-column
   * hero used by most content pages.
   */
  visual?: ReactNode
}

function ActionButton({ action, variant }: { action: PageHeroAction; variant: ButtonVariant }) {
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
 * Shared hero for content pages (as opposed to the homepage's own,
 * larger two-column Hero). Single column, no photo placeholder — just
 * an optional breadcrumb trail, an eyebrow, the page's one <h1>, a
 * short lead and up to two CTAs. An action may point at a route (`to`)
 * or, for a "scroll to this page's own section" CTA, an in-page anchor
 * (`href`).
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  primaryAction,
  secondaryAction,
  breadcrumbs,
  visual,
}: PageHeroProps) {
  const content = (
    <div className={styles.content}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {Array.isArray(lead) ? (
        lead.map((paragraph, index) => (
          <p key={index} className={styles.lead}>
            {paragraph}
          </p>
        ))
      ) : (
        <p className={styles.lead}>{lead}</p>
      )}
      {(primaryAction || secondaryAction) && (
        <div className={styles.actions}>
          {primaryAction && <ActionButton action={primaryAction} variant="primary" />}
          {secondaryAction && <ActionButton action={secondaryAction} variant="secondary" />}
        </div>
      )}
    </div>
  )

  return (
    <Section tone="default" width="normal">
      {visual ? (
        <div className={styles.grid}>
          {content}
          <div className={styles.visual}>{visual}</div>
        </div>
      ) : (
        content
      )}
    </Section>
  )
}
