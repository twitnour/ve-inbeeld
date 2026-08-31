import { Award, Clock, ClipboardCheck, Users } from 'lucide-react'
import { PageHero } from '../../components/content/PageHero/PageHero'
import { SectionIntro } from '../../components/content/SectionIntro/SectionIntro'
import { CTASection } from '../../components/content/CTASection/CTASection'
import {
  PracticalInfoGrid,
  type PracticalInfoBlock,
} from '../../components/content/PracticalInfoGrid/PracticalInfoGrid'
import { Section } from '../../components/Section/Section'
import { WhatIsSection } from '../../components/ukPukEditie2/WhatIsSection'
import { DevelopmentAreasGrid } from '../../components/ukPukEditie2/DevelopmentAreasGrid'
import { PracticeSection } from '../../components/ukPukEditie2/PracticeSection'
import { ProgramSection } from '../../components/ukPukEditie2/ProgramSection'
import { paths } from '../../routes/paths'

const practicalInfoBlocks: PracticalInfoBlock[] = [
  {
    icon: Clock,
    title: 'Studiebelasting',
    items: [
      'De studiebelasting, inclusief de groepsconsultaties, is voor het gehele traject tussen de 80 en 110 uur.',
      'De trainingsuren, inclusief coaching op de werkvloer, zijn minimaal 3,5 uur per bijeenkomst.',
      'De zelfstudie, inclusief lees-, werk- en praktijkopdrachten, is ongeveer 2,5 uur per bijeenkomst.',
    ],
  },
  {
    icon: Users,
    title: 'Voor wie?',
    items: ['De training is voor pedagogische professionals met niveau 3 of 4.'],
  },
  {
    icon: ClipboardCheck,
    title: 'Beoordeling',
    items: [
      'Er wordt 100% aanwezigheid verwacht.',
      'De trainer beoordeelt je portfolio en de uitvoering van de praktijkopdrachten.',
    ],
  },
  {
    icon: Award,
    title: 'Het resultaat',
    items: [
      'Je bent in het bezit van het certificaat VE Uk & Puk editie 2, uitgegeven door de CED.',
      'Je bent bekwaam in de uitvoering van het VE-programma Uk & Puk editie 2.',
      'Je hebt zicht op doorgaande ontwikkelingslijnen.',
      'Je kunt opbrengst- en ontwikkelingsgericht werken.',
    ],
  },
]

export function UkPukEditie2Page() {
  return (
    <>
      <PageHero
        eyebrow="VVE trainingen"
        title="Uk & Puk editie 2"
        lead="VE in Beeld biedt het complete Uk & Puk-programma voor professionals die werken met baby's, dreumesen en peuters van 0 tot 4 jaar — speels en doelgericht, voor gebruik binnen de peuteropvang, kinderopvang en kindcentra."
        primaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
        secondaryAction={{ label: 'Neem contact op', to: paths.contact }}
      />

      <WhatIsSection />
      <DevelopmentAreasGrid />
      <PracticeSection />
      <ProgramSection />

      <Section tone="blush">
        <SectionIntro heading="Praktische informatie" />
        <PracticalInfoGrid blocks={practicalInfoBlocks} />
      </Section>

      <CTASection
        heading="Klaar om aan de slag te gaan met Uk & Puk editie 2?"
        primaryAction={{ label: 'Vraag een vrijblijvende offerte aan', to: paths.offerteAanvragen }}
        secondaryAction={{ label: 'Neem contact op', to: paths.contact }}
      >
        Wil je Uk &amp; Puk editie 2 binnen jouw organisatie inzetten? Vraag vrijblijvend
        een offerte aan of neem contact op — ik denk graag met je mee.
      </CTASection>
    </>
  )
}
