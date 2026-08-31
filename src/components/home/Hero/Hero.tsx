import { Button } from '../../Button/Button'
import { ImagePlaceholder } from '../../ImagePlaceholder/ImagePlaceholder'
import { Section } from '../../Section/Section'
import styles from './Hero.module.css'

/**
 * The homepage's single <h1>. Sits directly under the header on the
 * page's own background so it reads as one continuous opening, not a
 * boxed-in banner.
 */
export function Hero() {
  return (
    <Section tone="default" width="wide" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <span className="eyebrow">Training • Coaching • Workshops</span>
          <h1>Groeien in de praktijk van het jonge kind</h1>
          <p className={styles.lead}>
            VE in Beeld verzorgt praktijkgerichte training, coaching en workshops voor
            professionals in de kinderopvang en voorschoolse educatie — met een directe
            vertaalslag naar de dagelijkse praktijk op de groep.
          </p>
          <div className={styles.actions}>
            <Button href="#aanbod" variant="primary">
              Bekijk het aanbod
            </Button>
            <Button href="#marsha" variant="secondary">
              Maak kennis met Marsha
            </Button>
          </div>
        </div>

        <div className={styles.imageWrap}>
          {/*
            Placeholder for a future portrait of Marsha. Once
            photography is available, pass `src` here — no other
            changes needed.
          */}
          <ImagePlaceholder
            aspect="portrait"
            alt="Portret van Marsha Lispet, oprichter van VE in Beeld (foto volgt)"
          />
        </div>
      </div>
    </Section>
  )
}
