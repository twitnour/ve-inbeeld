import type { ReactNode } from 'react'
import styles from './FormSection.module.css'

interface FormSectionProps {
  heading: string
  children: ReactNode
}

/**
 * Groups related fields under a heading (e.g. "Jouw gegevens") using a
 * real <fieldset>/<legend> pair, so the grouping is announced to
 * assistive tech, not just shown visually.
 */
export function FormSection({ heading, children }: FormSectionProps) {
  return (
    <fieldset className={styles.section}>
      <legend className={styles.legend}>{heading}</legend>
      <div className={styles.stack}>{children}</div>
    </fieldset>
  )
}

/**
 * Places two related fields side by side on desktop (e.g. Voornaam /
 * Achternaam), stacking on mobile. Use directly inside FormSection or
 * a form.
 */
export function FormRow({ children }: { children: ReactNode }) {
  return <div className={styles.row}>{children}</div>
}
