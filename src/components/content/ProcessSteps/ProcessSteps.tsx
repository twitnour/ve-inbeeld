import styles from './ProcessSteps.module.css'

export interface ProcessStep {
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

/**
 * A numbered process flow (e.g. "Kijken → Terugzien → Reflecteren →
 * Toepassen") — each step is a plain block with a numbered badge, not
 * a card, so it reads as one continuous process rather than a grid of
 * separate offerings.
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className={styles.list}>
      {steps.map((step, index) => (
        <li className={styles.step} key={step.title}>
          <span className={styles.badge} aria-hidden="true">
            {index + 1}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </li>
      ))}
    </ol>
  )
}
