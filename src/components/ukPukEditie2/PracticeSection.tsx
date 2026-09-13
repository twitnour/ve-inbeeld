import { SplitContentSection } from '../content/SplitContentSection/SplitContentSection'
import { SectionIntro } from '../content/SectionIntro/SectionIntro'
import { InfoHighlights } from '../content/InfoHighlights/InfoHighlights'
import { WhiteBgImage } from '../WhiteBgImage/WhiteBgImage'
import groeienEnBloeienImage from '../../assets/UkPuk/UkPuk_Groeien en bloeien_CED_officieel.png'
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
 * scannable instead of becoming a wall of text. Paired with an
 * illustration on the right (via SplitContentSection), stacked below
 * the text on mobile.
 */
export function PracticeSection() {
  return (
    <SplitContentSection
      tone="default"
      visual={
        <WhiteBgImage
          src={groeienEnBloeienImage}
          alt="Puk geeft een jong plantje water, met een bijtje en zijn knuffelkonijn erbij"
        />
      }
    >
      <SectionIntro heading="Uk & Puk in de praktijk" />
      <div className={styles.body}>
        <p>
          Spel is essentieel voor de ontwikkeling van jonge kinderen en vormt het
          uitgangspunt van Uk &amp; Puk. Activiteiten stimuleren de zeven
          ontwikkelingsgebieden en sluiten steeds aan bij het ontwikkelingsniveau van
          baby’s, dreumesen en peuters.
        </p>
        <p>
          Activiteiten worden zowel in kleine als in grote groepen aangeboden en sluiten
          aan bij de SLO-doelen. De thema’s sluiten aan bij de belevingswereld van jonge
          kinderen, waardoor zij op een betekenisvolle en speelse manier kunnen leren en
          ontdekken.
        </p>
      </div>

      <InfoHighlights heading="Hoe is een thema opgebouwd?" items={structure} />

      <div className={styles.body}>
        <p>
          Activiteiten worden zowel in kleine als in grote groepen aangeboden en sluiten
          aan bij de SLO-doelen. De thema’s zelf sluiten aan bij de belevingswereld
          van jonge kinderen, zodat leren betekenisvol en speels blijft.
        </p>
      </div>
    </SplitContentSection>
  )
}
