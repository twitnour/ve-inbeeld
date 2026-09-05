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
  lead: ReactNode
  primaryAction?: PageHeroAction
  secondaryAction?: PageHeroAction
  /** Optional Home / … / Current-page trail, e.g. for the VVE training pages. */
  breadcrumbs?: BreadcrumbItem[]
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
 * short lead and up to two CTAs, with a quiet ring accent in the
 * background. An action may point at a route (`to`) or, for a
 * "scroll to this page's own section" CTA, an in-page anchor (`href`).
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  primaryAction,
  secondaryAction,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <Section tone="default" width="normal" className={styles.hero}>
      <span className="decor decor-ring" aria-hidden="true" />
      <div className={styles.content}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        {(primaryAction || secondaryAction) && (
          <div className={styles.actions}>
            {primaryAction && <ActionButton action={primaryAction} variant="primary" />}
            {secondaryAction && <ActionButton action={secondaryAction} variant="secondary" />}
          </div>
        )}
      </div>
    </Section>
  )
}
