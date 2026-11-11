import type { ComponentType, ReactNode } from 'react'
import { Card } from '../Card/Card'
import styles from './CoachingFormsGrid.module.css'

export interface CoachingForm {
  icon: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  title: string
  description: ReactNode
}

interface CoachingFormsGridProps {
  forms: CoachingForm[]
}

/**
 * A grid of named coaching offerings — icon, title and a short
 * description. Unlike PracticalInfoGrid (a bullet list of short
 * facts per card), each card here holds one flowing paragraph, so
 * description is a ReactNode rather than a string[] — the
 * "Beeldcoaching" card uses this to embed a real link to that page.
 */
export function CoachingFormsGrid({ forms }: CoachingFormsGridProps) {
  return (
    <div className={styles.grid}>
      {forms.map(({ icon: Icon, title, description }) => (
        <Card key={title} className={styles.card}>
          <Icon size={22} aria-hidden="true" className={styles.icon} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </Card>
      ))}
    </div>
  )
}
