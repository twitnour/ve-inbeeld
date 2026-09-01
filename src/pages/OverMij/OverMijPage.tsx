import { BadgeCheck, Camera, GraduationCap, Heart, Presentation, Smile, Sprout, Target, Users } from 'lucide-react'
import { PersonalHero } from '../../components/overMij/PersonalHero'
import { EditorialSection } from '../../components/content/EditorialSection/EditorialSection'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { FeatureList } from '../../components/content/FeatureList/FeatureList'
import { ExampleGrid } from '../../components/content/ExampleGrid/ExampleGrid'
import { PullQuote } from '../../components/content/PullQuote/PullQuote'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { Section } from '../../components/Section/Section'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'
import styles from './OverMijPage.module.css'

const achtergrond = [
  { icon: GraduationCap, text: 'Opgeleid als pedagoog' },
  { icon: BadgeCheck, text: 'Gecertificeerd GGZ-agoog' },
  { icon: Users, text: 'Pedagogisch coach binnen de kinderopvang' },
  { icon: Presentation, text: 'Uk & Puk Train-de-Trainer' },
  { icon: Camera, text: 'Video Interactie Begeleiding (VIB)' },
]

const waarden = [
  { icon: Heart, label: 'Betrokken' },
  { icon: Target, label: 'Praktijkgericht' },
  { icon: Smile, label: 'Positief' },
  { icon: Sprout, label: 'Ontwikkelingsgericht' },
]

export function OverMijPage() {
  usePageMeta({
    title: 'Over Marsha | VE in Beeld',
    description:
      'Maak kennis met Marsha Lispet, pedagoog, pedagogisch coach en eigenaar van VE in Beeld. Praktijkgerichte training, coaching en workshops voor professionals in de kinderopvang.',
  })

  return (
    <>
      <PersonalHero breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'Over mij' }]} />

      <EditorialSection heading="Een hart voor pedagogiek" tone="surface">
        <p>
          Ik ben opgeleid als pedagoog en gecertificeerd GGZ-agoog. Na mijn studie
          begon ik in de medische sector.
        </p>
        <p>
          Al snel ontdekte ik dat mijn hart ergens anders lag, en maakte ik de overstap
          naar de kinderopvang.
        </p>
        <p>
          Daar groeide mijn passie voor het werken met jonge kinderen — en mijn
          enthousiasme voor pedagogiek — steeds verder.
        </p>
      </EditorialSection>

      <Section tone="blush" width="narrow">
        <h2>Van kinderopvang naar trainer en coach</h2>
        <p>
          In mijn werk merkte ik dat ik niet alleen zelf met kinderen wilde werken,
          maar vooral ook anderen wilde inspireren en in hun kracht wilde zetten.
        </p>
        <div className={styles.journeyQuote}>
          <PullQuote>
            Hoe creëren we samen een rijke speelleeromgeving waarin ieder kind de
            ruimte krijgt om te groeien, bloeien en ontdekken?
          </PullQuote>
        </div>
        <p>Momenteel ben ik werkzaam als pedagogisch coach binnen de kinderopvang.</p>
      </Section>

      <EditorialSection heading="Praktisch, persoonlijk en dichtbij de werkvloer" tone="surface">
        <p>
          Ik geloof in het versterken van wat professionals al goed doen, in plaats van
          vertellen wat er beter moet.
        </p>
        <p>
          Door theorie te verbinden met de praktijk van alledag, sluit een training of
          coachtraject aan bij wat er al gebeurt op de groep.
        </p>
        <p>
          Mijn begeleiding is praktisch en persoonlijk: dichtbij de werkvloer, met
          ruimte voor de vragen en situaties die er al zijn.
        </p>
      </EditorialSection>

      <Section tone="default">
        <SectionIntro heading="Achtergrond &amp; expertise">
          Mijn professionele achtergrond in het kort.
        </SectionIntro>
        <FeatureList items={achtergrond} />
      </Section>

      <Section tone="blush" width="narrow">
        <PullQuote size="lg">Hier kan ik morgen meteen mee aan de slag!</PullQuote>
        <p className={styles.philosophyText}>
          Dat is precies wat ik professionals na een training wil laten voelen — niet
          alleen nieuwe kennis en inzichten, maar vooral concrete ideeën en het
          vertrouwen om er direct mee aan de slag te gaan.
        </p>
      </Section>

      <Section tone="surface">
        <SectionIntro heading="Waar ik voor sta" />
        <ExampleGrid items={waarden} />
      </Section>

      <CTASection
        heading="Zullen we kennismaken?"
        primaryAction={{ label: 'Neem contact op', to: paths.contact }}
        secondaryAction={{ label: 'Bekijk het aanbod', href: '/#aanbod' }}
      >
        Heb je een vraag over een training, coachtraject of workshop? Ik maak graag
        kennis en denk met je mee.
      </CTASection>
    </>
  )
}
