import { ArrowRight } from 'lucide-react'
import { Section } from '../../Section/Section'
import { Button } from '../../Button/Button'
import { ImagePlaceholder } from '../../ImagePlaceholder/ImagePlaceholder'
import { paths } from '../../../routes/paths'
import styles from './AboutPreview.module.css'

/**
 * Personal introduction to Marsha. Image-left / text-right, the mirror
 * of the hero's layout, for a bit of intentional editorial variety.
 */
export function AboutPreview() {
  return (
    <Section tone="surface" id="marsha">
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          {/* Placeholder for a future portrait of Marsha — pass `src` once available. */}
          <ImagePlaceholder aspect="square" alt="Portret van Marsha Lispet (foto volgt)" />
        </div>

        <div className={styles.content}>
          <h2>Hi, ik ben Marsha</h2>
          <p>
            Met trots ben ik eigenaar van VE in Beeld. Vanuit mijn eigen bedrijf bied
            ik training, coaching en workshops aan voor professionals in de
            kinderopvang.
          </p>
          <p>
            Mijn jarenlange ervaring binnen de kinderopvang is uitgegroeid tot een
            missie: professionals inspireren, versterken en voorzien van praktische
            handvatten voor hun dagelijks werk.
          </p>
          <p>
            Ik geloof dat ieder kind de ruimte verdient om zich optimaal te
            ontwikkelen. Door professionals in hun kracht te zetten, dragen we samen
            bij aan een omgeving waarin kinderen met plezier groeien, ontdekken en
            leren.
          </p>
          <Button to={paths.overMij} variant="text" icon={<ArrowRight size={16} />}>
            Meer over Marsha
          </Button>
        </div>
      </div>
    </Section>
  )
}
