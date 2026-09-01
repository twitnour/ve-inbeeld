import { Section } from '../Section/Section'
import { Breadcrumbs, type BreadcrumbItem } from '../content/Breadcrumbs/Breadcrumbs'
import { ImagePlaceholder } from '../ImagePlaceholder/ImagePlaceholder'
import styles from './PersonalHero.module.css'

interface PersonalHeroProps {
  breadcrumbs: BreadcrumbItem[]
}

/**
 * A more personal, photo-led hero than the shared PageHero used by the
 * service pages — the portrait gets equal or greater visual weight
 * than the text, since this page is an introduction to a person, not
 * an offering. No CTAs here on purpose: the page builds toward one
 * calm CTA at the end instead of repeating it.
 */
export function PersonalHero({ breadcrumbs }: PersonalHeroProps) {
  return (
    <Section tone="default" width="wide" className={styles.hero}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={styles.grid}>
        <div className={styles.content}>
          <span className="eyebrow">Over mij</span>
          <h1>Hi, ik ben Marsha</h1>
          <p className={styles.lead}>
            Eigenaar van VE in Beeld, trainer, coach en workshopbegeleider. Ik
            ondersteun en inspireer professionals die werken met jonge kinderen, en zet
            hen in hun kracht om samen te kijken naar wat kinderen nodig hebben.
          </p>
        </div>
        <div className={styles.imageWrap}>
          {/* Prominent placeholder for Marsha's professional portrait — pass `src` once available. */}
          <ImagePlaceholder
            aspect="portrait"
            alt="Portret van Marsha Lispet, eigenaar van VE in Beeld (foto volgt)"
          />
        </div>
      </div>
    </Section>
  )
}
