import { Hero } from '../../components/home/Hero/Hero'
import { IntroSection } from '../../components/home/IntroSection/IntroSection'
import { ServicesSection } from '../../components/home/ServicesSection/ServicesSection'
import { AboutPreview } from '../../components/home/AboutPreview/AboutPreview'
import { QualitiesSection } from '../../components/home/QualitiesSection/QualitiesSection'
import { FinalCta } from '../../components/home/FinalCta/FinalCta'
import { Reveal } from '../../components/Reveal/Reveal'

/**
 * The homepage. Hero renders immediately (no reveal) since it's above
 * the fold; every section below gently fades/lifts into view once as
 * the visitor scrolls to it (see Reveal).
 */
export function HomePage() {
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
