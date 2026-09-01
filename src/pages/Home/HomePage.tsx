import { Hero } from '../../components/home/Hero/Hero'
import { IntroSection } from '../../components/home/IntroSection/IntroSection'
import { ServicesSection } from '../../components/home/ServicesSection/ServicesSection'
import { AboutPreview } from '../../components/home/AboutPreview/AboutPreview'
import { QualitiesSection } from '../../components/home/QualitiesSection/QualitiesSection'
import { FinalCta } from '../../components/home/FinalCta/FinalCta'
import { Reveal } from '../../components/Reveal/Reveal'
import { useScrollToHash } from '../../hooks/useScrollToHash'

/**
 * The homepage. Hero renders immediately (no reveal) since it's above
 * the fold; every section below gently fades/lifts into view once as
 * the visitor scrolls to it (see Reveal). useScrollToHash makes
 * cross-page links like "/#aanbod" (e.g. from the Over mij CTA) land
 * on the right section, not just the top of the page.
 */
export function HomePage() {
  useScrollToHash()

  return (
    <>
      <Hero />
      <Reveal>
        <IntroSection />
      </Reveal>
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal>
        <AboutPreview />
      </Reveal>
      <Reveal>
        <QualitiesSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </>
  )
}
