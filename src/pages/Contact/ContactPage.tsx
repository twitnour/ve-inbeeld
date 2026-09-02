import { PageHero } from '../../components/content/PageHero/PageHero'
import { SplitContentSection } from '../../components/content/SplitContentSection/SplitContentSection'
import { Section } from '../../components/Section/Section'
import { ImagePlaceholder } from '../../components/ImagePlaceholder/ImagePlaceholder'
import { ContactDetails } from '../../components/contact/ContactDetails'
import { ContactForm } from '../../components/contact/ContactForm'
import { usePageMeta } from '../../hooks/usePageMeta'
import { paths } from '../../routes/paths'
import { businessInfo } from '../../lib/businessInfo'
import styles from './ContactPage.module.css'

export function ContactPage() {
  usePageMeta({
    title: 'Contact | VE in Beeld',
    description:
      'Neem contact op met Marsha Lispet van VE in Beeld voor training, coaching of workshops voor professionals in de kinderopvang.',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Laten we kennismaken"
        lead="Ben je benieuwd naar wat we voor elkaar kunnen betekenen? Neem gerust contact op. Ik denk graag mee over de mogelijkheden."
        breadcrumbs={[{ label: 'Home', to: paths.home }, { label: 'Contact' }]}
      />

      <SplitContentSection
        tone="surface"
        visual={<ImagePlaceholder aspect="portrait" alt="Portret van Marsha Lispet (foto volgt)" />}
      >
        <h2>Marsha Lispet</h2>
        <p className={styles.role}>VE in Beeld</p>
        <ContactDetails />
        <dl className={styles.business}>
          <dt>KvK</dt>
          <dd>{businessInfo.kvkNumber}</dd>
        </dl>
      </SplitContentSection>

      <Section tone="default">
        <h2>Stuur me een bericht</h2>
        <ContactForm />
      </Section>
    </>
  )
}
