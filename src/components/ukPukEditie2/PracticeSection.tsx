import { Section } from '../Section/Section'
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
 * scannable instead of becoming a wall of text. An illustration sits
 * next to the opening heading/paragraphs only (stacked below on
 * mobile) — the structure overview below it stays full width,
 * unaffected by the image.
 */
export function PracticeSection() {
  return (
    <Section tone="default">
      <div className={styles.intro}>
        <div>
          <SectionIntro heading="Uk & Puk in de praktijk" />
          <div className={styles.body}>
            <p>
              Spel is essentieel voor de ontwikkeling van jonge kinderen en vormt het
              uitgangspunt van Uk &amp; Puk. Activiteiten stimuleren de zeven
              ontwikkelingsgebieden en sluiten steeds aan bij het ontwikkelingsniveau van
              baby’s, dreumesen en peuters.
            </p>
            <p>
              Activiteiten worden zowel in kleine als in grote groepen aangeboden en
              sluiten aan bij de SLO-doelen. De thema’s sluiten aan bij de
              belevingswereld van jonge kinderen, waardoor zij op een betekenisvolle en
              speelse manier kunnen leren en ontdekken.
            </p>
          </div>
        </div>
        <div className={styles.visual}>
          <WhiteBgImage
            src={groeienEnBloeienImage}
            alt="Puk geeft een jong plantje water, met een bijtje en zijn knuffelkonijn erbij"
          />
        </div>
      </div>

      <InfoHighlights heading="Hoe is een thema opgebouwd?" items={structure} />

      <div className={styles.body}>
        <p>
          Activiteiten worden zowel in kleine als in grote groepen aangeboden en sluiten
          aan bij de SLO-doelen. De thema’s zelf sluiten aan bij de belevingswereld
          van jonge kinderen, zodat leren betekenisvol en speels blijft.
        </p>
      </div>
    </Section>
  )
}
