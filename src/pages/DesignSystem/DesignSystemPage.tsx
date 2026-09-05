import {
  ArrowRight,
  Camera,
  ChevronDown,
  FileText,
  GraduationCap,
  Link2,
  Mail,
  Menu,
  Phone,
  Users,
  X,
} from 'lucide-react'
import { Section } from '../../components/Section/Section'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { Button } from '../../components/Button/Button'
import { Card, OfferCard } from '../../components/Card/Card'
import styles from './DesignSystemPage.module.css'

const colorTokens = [
  { name: '--color-background', hex: '#f9f1ee', label: 'Background' },
  { name: '--color-primary', hex: '#c7857d', label: 'Primary accent' },
  { name: '--color-secondary', hex: '#c2a38f', label: 'Secondary' },
  { name: '--color-soft-pink', hex: '#e7beb7', label: 'Soft pink' },
  { name: '--color-sand', hex: '#dcc5b4', label: 'Sand' },
  { name: '--color-text', hex: '#191a14', label: 'Text' },
]

const derivedTokens = [
  { name: '--color-primary-strong', label: 'Primary, text-safe' },
  { name: '--color-surface', label: 'Surface (white)' },
  { name: '--color-border', label: 'Border' },
  { name: '--color-text-muted', label: 'Muted text' },
]

const spacingTokens = [
  ['--space-2xs', '0.25rem'],
  ['--space-xs', '0.5rem'],
  ['--space-sm', '0.75rem'],
  ['--space-md', '1rem'],
  ['--space-lg', '1.5rem'],
  ['--space-xl', '2.5rem'],
  ['--space-2xl', '4rem'],
  ['--space-3xl', '6rem'],
]

const iconSamples = [
  { icon: Phone, label: 'Phone' },
  { icon: Mail, label: 'Mail' },
  { icon: Link2, label: 'Link2 (LinkedIn placeholder)' },
  { icon: Menu, label: 'Menu' },
  { icon: X, label: 'X' },
  { icon: ChevronDown, label: 'ChevronDown' },
  { icon: FileText, label: 'FileText' },
  { icon: GraduationCap, label: 'GraduationCap' },
  { icon: Users, label: 'Users' },
  { icon: Camera, label: 'Camera' },
]

/**
 * Development-only visual language reference. Not linked from the
 * public navigation — visit directly at /design-system.
 */
export function DesignSystemPage() {
  return (
    <>
      <Section tone="surface">
        <span className={styles.devTag}>Development preview — niet in de publieke navigatie</span>
        <span className="eyebrow">Design system</span>
        <h1>VE in Beeld — visuele taal</h1>
        <p>
          Referentiepagina om het visuele systeem te beoordelen vóór de homepage wordt
          gebouwd: kleuren, typografie, knoppen, kaarten, secties en iconen. Header,
          topbar en footer zijn hierboven en hieronder al zichtbaar via de gedeelde
          layout.
        </p>
      </Section>

      <Section tone="default">
        <h2>Kleuren</h2>
        <p>Merkkleuren, plus enkele afgeleide functionele tinten voor tekst en oppervlakken.</p>
        <div className={styles.swatchGrid}>
          {colorTokens.map((token) => (
            <div className={styles.swatch} key={token.name}>
              <div className={styles.swatchColor} style={{ backgroundColor: token.hex }} />
              <div className={styles.swatchLabel}>
                <strong>{token.label}</strong>
                <code>{token.name}</code>
                <code>{token.hex}</code>
              </div>
            </div>
          ))}
        </div>
        <h3 className={styles.subheading}>Afgeleide tokens</h3>
        <div className={styles.swatchGrid}>
          {derivedTokens.map((token) => (
            <div className={styles.swatch} key={token.name}>
              <div
                className={styles.swatchColor}
                style={{ backgroundColor: `var(${token.name})`, border: '1px solid var(--color-border)' }}
              />
              <div className={styles.swatchLabel}>
                <strong>{token.label}</strong>
                <code>{token.name}</code>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="default">
        <h2>Typografie</h2>
        <p className={styles.subheading}>
          Cormorant Garamond voor belangrijke koppen, DM Sans voor lopende tekst,
          navigatie en UI.
        </p>
        <h1>Heading 1 — elegant en redactioneel</h1>
        <h2>Heading 2 — sectietitel</h2>
        <h3>Heading 3 — subsectie</h3>
        <h4>Heading 4 — kaarttitel</h4>
        <h5>Heading 5 — kleine kop</h5>
        <h6>Heading 6 — label</h6>
        <p>
          Lopende tekst in DM Sans, goed leesbaar met een prettige regellengte. Dit
          is een voorbeeldparagraaf om te controleren of de zichtlijnen, regelafstand
          en kleurcontrasten prettig aanvoelen — warm, rustig en professioneel, zonder
          overdreven decoratie.{' '}
          <a href="#">Dit is een inline link</a> binnen een paragraaf.
        </p>
        <p className={styles.mutedText}>
          Gedempte tekst (--color-text-muted) voor bijschriften en secundaire informatie.
        </p>
        <small>Kleine tekst voor metadata, bijvoorbeeld een datum of labels.</small>
      </Section>

      <Section tone="surface">
        <h2>Knoppen &amp; links</h2>
        <div className={styles.row}>
          <Button variant="primary">Offerte aanvragen</Button>
          <Button variant="secondary">Meer informatie</Button>
          <Button variant="text" icon={<ArrowRight size={16} />}>
            Lees meer
          </Button>
        </div>
        <h3 className={styles.subheading}>Formaten</h3>
        <div className={styles.row}>
          <Button variant="primary" size="sm">
            Klein
          </Button>
          <Button variant="primary" size="md">
            Normaal
          </Button>
        </div>
        <h3 className={styles.subheading}>Status</h3>
        <div className={styles.row}>
          <Button variant="primary" disabled>
            Uitgeschakeld
          </Button>
          <Button variant="secondary" disabled>
            Uitgeschakeld
          </Button>
        </div>
      </Section>

      <Section tone="surface">
        <h2>Kaarten</h2>
        <div className={styles.cardGrid}>
          <Card>
            <h3 className={styles.subheading}>Algemene kaart</h3>
            <p>
              Zachte ondergrond, dunne rand en een gematigde radius — geschikt voor
              toekomstige informatieblokken.
            </p>
          </Card>
          <OfferCard
            icon={<GraduationCap size={22} aria-hidden="true" />}
            title="Voorbeeld aanbod"
            description="Placeholder-beschrijving voor een toekomstige training, workshop of coachtraject."
          >
            <Button variant="text" icon={<ArrowRight size={16} />}>
              Lees meer
            </Button>
          </OfferCard>
          <Card interactive>
            <h3 className={styles.subheading}>Interactieve kaart</h3>
            <p>Voorbeeld van de zachte hover-lift voor een kaart die als geheel klikbaar is.</p>
          </Card>
        </div>
      </Section>

      <Section tone="default">
        <h2>Sectie-achtergronden</h2>
        <p>
          Vier toegestane tinten voor volledige-breedte secties. Gebruik ze doelbewust,
          niet mechanisch afgewisseld.
        </p>
        <div className={styles.toneGrid}>
          <div className={`${styles.toneSwatch} ${styles.toneDefault}`}>default</div>
          <div className={`${styles.toneSwatch} ${styles.toneBlush}`}>blush</div>
          <div className={`${styles.toneSwatch} ${styles.toneSand}`}>sand</div>
          <div className={`${styles.toneSwatch} ${styles.toneSurface}`}>surface</div>
        </div>
      </Section>

      <Section tone="sand">
        <h2>Iconen</h2>
        <p>Lucide React, gebruikt in topbar, navigatie en footer.</p>
        <div className={styles.iconGrid}>
          {iconSamples.map(({ icon: Icon, label }) => (
            <div className={styles.iconSample} key={label}>
              <Icon size={22} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <h2>Ruimte-schaal</h2>
        <div className={styles.spacingList}>
          {spacingTokens.map(([name, value]) => (
            <div className={styles.spacingRow} key={name}>
              <code>{name}</code>
              <div className={styles.spacingBar} style={{ width: `var(${name})` }} />
              <span>{value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface" width="wide">
        <h2>Containerbreedtes</h2>
        <div className={styles.containerDemo}>
          <PageContainer width="narrow" padded={false}>
            <div className={styles.containerBox}>narrow — artikeltekst</div>
          </PageContainer>
          <PageContainer width="normal" padded={false}>
            <div className={styles.containerBox}>normal — standaard pagina-inhoud</div>
          </PageContainer>
          <PageContainer width="wide" padded={false}>
            <div className={styles.containerBox}>wide — sectie-shells, kaartgrids</div>
          </PageContainer>
        </div>
      </Section>

      <Section tone="surface">
        <h2>Decoratieve accenten</h2>
        <p>
          Subtiele, CSS-only accenten geïnspireerd op de fijne lijnen en zachte
          waterverfvormen van het logo — spaarzaam te gebruiken, nooit als hoofdelement.
        </p>
        <div className={styles.decorDemo}>
          <span className="decor decor-ring" aria-hidden="true" />
          <span className="decor decor-bloom" aria-hidden="true" />
          <div className={styles.decorLineDemo}>
            <span className="decor-line" aria-hidden="true" />
            <span>fijne lijn</span>
          </div>
          <div className={styles.decorBrushDemo}>
            <span className="decor-brushstroke" aria-hidden="true" />
          </div>
        </div>
      </Section>

      <Section tone="blush">
        <h2>Header &amp; footer</h2>
        <p>
          De topbar, header (met logo en navigatie) en footer zijn onderdeel van de
          gedeelde layout en dus al zichtbaar bovenaan en onderaan deze pagina —
          inclusief het uitklapbare &ldquo;VVE trainingen&rdquo;-menu en, op smalle
          schermen, het mobiele menu.
        </p>
      </Section>
    </>
  )
}
