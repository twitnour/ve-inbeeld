import { Eye, Heart, MessageCircle } from 'lucide-react'
import { Section } from '../Section/Section'
import { PullQuote } from '../content/PullQuote/PullQuote'
import { FeatureList } from '../content/FeatureList/FeatureList'
import styles from './PositiveSection.module.css'

const focusPoints = [
  { icon: Heart, text: 'Effectieve interacties met kinderen versterken' },
  { icon: Eye, text: 'Pedagogische sensitiviteit vergroten' },
  { icon: MessageCircle, text: 'Bewust inzetten van communicatie' },
]

/**
 * The page's key reassurance: VIB is not an assessment tool. A centred
 * pull-quote statement, three focus points, and a short closing line —
 * visually distinct from the surrounding sections but still calm.
 */
export function PositiveSection() {
  return (
    <Section tone="blush" width="normal">
      <div className={styles.statementWrap}>
        <PullQuote>
          VIB is geen beoordelingsinstrument, maar een middel om te reflecteren, te
          leren en te groeien.
        </PullQuote>
      </div>
      <FeatureList items={focusPoints} className={styles.features} />
      <p className={styles.closing}>
        Zo draagt VIB bij aan de professionele ontwikkeling van medewerkers én aan de
        kwaliteit van de opvang.
      </p>
    </Section>
  )
}
