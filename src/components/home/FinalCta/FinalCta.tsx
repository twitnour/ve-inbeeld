import { Section } from '../../Section/Section'
import { Button } from '../../Button/Button'
import { paths } from '../../../routes/paths'
import styles from './FinalCta.module.css'

/**
 * The homepage's closing call to action — calm and centered, the one
 * deliberate exception to the page's left-aligned editorial rhythm, to
 * signal this is the closing moment before the footer.
 */
export function FinalCta() {
  return (
    <Section tone="sand" width="narrow">
      <div className={styles.center}>
        <h2>Samen werken aan groei en ontwikkeling?</h2>
        <p>
          Wil je met jouw team of organisatie aan de slag met een training, nascholing,
          coaching of workshop? Ik denk graag met je mee over wat het beste aansluit
          bij jullie vraag.
        </p>
        <div className={styles.actions}>
          <Button to={paths.offerteAanvragen} variant="primary">
            Vraag een offerte aan
          </Button>
          <Button to={paths.contact} variant="secondary">
            Neem contact op
          </Button>
        </div>
      </div>
    </Section>
  )
}
