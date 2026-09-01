import { Section } from '../Section/Section'
import { SectionIntro } from '../content/SectionIntro/SectionIntro'
import { InfoHighlights } from '../content/InfoHighlights/InfoHighlights'
import styles from './PracticeSection.module.css'

const structure = [
  { value: '6 weken', label: 'per thema' },
  { value: '6', label: 'kernactiviteiten' },
  { value: '6', label: 'keuzeactiviteiten' },
  { value: '2', label: 'activiteiten per week' },
]

/**
 * "Uk & Puk in de praktijk" — an editorial section with a compact
 * structure overview in the middle, so the rich source content stays
 * scannable instead of becoming a wall of text.
 */
export function PracticeSection() {
  return (
    <Section tone="default">
      <SectionIntro heading="Uk & Puk in de praktijk" />
      <div className={styles.body}>
        <p>
          Spel is essentieel voor de ontwikkeling van jonge kinderen en vormt het
          uitgangspunt van Uk &amp; Puk. Activiteiten stimuleren de zeven
          ontwikkelingsgebieden en sluiten steeds aan bij het ontwikkelingsniveau van
          baby&apos;s, dreumesen en peuters.
        </p>
        <p>
          De handpop Puk vormt daarbij een belangrijke schakel tussen de kinderen en de
          pedagogisch professional: Puk zorgt voor herkenning en betrokkenheid en
          betrekt kinderen op een speelse manier bij de activiteiten.
        </p>
      </div>

      <InfoHighlights heading="Hoe is een thema opgebouwd?" items={structure} />

      <div className={styles.body}>
        <p>
          Activiteiten worden zowel in kleine als in grote groepen aangeboden en sluiten
          aan bij de SLO-doelen. De thema&apos;s zelf sluiten aan bij de belevingswereld
          van jonge kinderen, zodat leren betekenisvol en speels blijft.
        </p>
      </div>
    </Section>
  )
}
