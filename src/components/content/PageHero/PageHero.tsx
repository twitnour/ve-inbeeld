import type { ReactNode } from 'react'
import { Button } from '../../Button/Button'
import { Section } from '../../Section/Section'
import { Breadcrumbs, type BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs'
import styles from './PageHero.module.css'

interface PageHeroAction {
  label: string
  to: string
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

/**
 * Shared hero for content pages (as opposed to the homepage's own,
 * larger two-column Hero). Single column, no photo placeholder — just
 * an optional breadcrumb trail, an eyebrow, the page's one <h1>, a
 * short lead and up to two CTAs, with a quiet ring accent in the
 * background.
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
            {primaryAction && (
              <Button to={primaryAction.to} variant="primary">
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button to={secondaryAction.to} variant="secondary">
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  )
}
