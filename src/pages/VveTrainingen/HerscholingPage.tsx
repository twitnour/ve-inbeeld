import { PageHero } from '../../components/content/PageHero/PageHero'
import { SplitContentSection } from '../../components/content/SplitContentSection/SplitContentSection'
import { CTASection } from '../../components/content/CTASection/CTASection'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'
import bordImage from '../../assets/UkPuk/UkPuk_bord_CED_officieel.png'

/**
 * "Herscholing" — kept deliberately concise (a hero, one editorial
 * text+image section, and a closing CTA) rather than mirroring every
 * section of the Uk & Puk editie 2 / Nascholing pages: this offer is
 * maatwerk, so there's no curriculum or programme structure to show.
 */
export function HerscholingPage() {
  usePageMeta({
    title: 'Herscholing Uk & Puk | VE in Beeld',
    description:
      'Blijf kennis en vaardigheden rondom Uk & Puk onderhouden en verdiepen met praktijkgerichte herscholing op maat van VE in Beeld.',
  })

  return (
    <>
      <PageHero
        eyebrow="VVE trainingen"
        title="Herscholing"
        lead="Blijven ontwikkelen na de Uk & Puk-certificering."
        breadcrumbs={[
          { label: 'Home', to: paths.home },
          { label: 'VVE trainingen', to: paths.vveTrainingen.index },
          { label: 'Herscholing' },
        ]}
      />

      <SplitContentSection
        visual={
          <img
            src={bordImage}
            alt="Puk staat naast een schoolbord waarop ‘PUK’ geschreven staat, met zijn knuffelkonijn erbij"
          />
        }
      >
        <h2>Blijven leren, verdiepen en ontwikkelen</h2>
        <p>
          Na het behalen van de VVE Uk &amp; Puk-certificering is het belangrijk om de
          opgedane kennis en vaardigheden te blijven onderhouden en verdiepen. Door
          regelmatig nascholing te volgen, blijven professionals op de hoogte van
          actuele ontwikkelingen en versterken zij hun kennis van de werkwijze en
          uitgangspunten van Uk &amp; Puk.
        </p>
        <p>
          Het is wenselijk dat iedere professional jaarlijks een nascholing volgt die
          aansluit bij een thema of ontwikkelvraag die op dat moment in de praktijk
          speelt. Zo is de scholing direct toepasbaar en sluit deze aan bij de
          behoeften van zowel de professional als de organisatie.
        </p>
        <p>
          VE in Beeld biedt hiervoor aanvullende trainingen op maat, afgestemd op
          actuele vraagstukken uit de praktijk. Hiermee ondersteunen we professionals
          bij hun blijvende ontwikkeling en dragen we bij aan het behouden en
          versterken van de kwaliteit van VVE.
        </p>
      </SplitContentSection>

      <CTASection
        heading="Toe aan een frisse blik en nieuwe inspiratie voor de praktijk? Ontdek de mogelijkheden voor een herscholing."
        primaryAction={{ label: 'Vraag een offerte aan', to: paths.offerteAanvragen }}
        secondaryAction={{ label: 'Neem contact op', to: paths.contact }}
      >
        Samen kijken we welke onderwerpen op dit moment relevant zijn binnen jullie
        organisatie en maken we een passend aanbod op maat. Praktisch, herkenbaar en
        direct toepasbaar in de dagelijkse praktijk. Neem vrijblijvend contact op en
        vraag een offerte aan. We denken graag met je mee!
      </CTASection>
    </>
  )
}
