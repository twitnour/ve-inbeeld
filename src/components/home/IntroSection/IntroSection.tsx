import { Section } from '../../Section/Section'
import styles from './IntroSection.module.css'

/**
 * The homepage's positioning statement: theory translated into everyday
 * practice. Editorial two-column layout (heading beside body copy)
 * rather than a card.
 */
export function IntroSection() {
  return (
    <Section tone="surface">
      <div className={styles.grid}>
        <div className={styles.headingCol}>
          <h2>Van theorie naar dagelijkse praktijk</h2>
        </div>
        <div className={styles.bodyCol}>
          <p>
            Vanuit mijn ervaring als pedagogisch coach in de kinderopvang leg ik de
            verbinding tussen theorie en de dagelijkse praktijk op de groep.
          </p>
          <p>
            Tijdens trainingen en workshops draait het niet alleen om kennisoverdracht,
            maar vooral om hoe professionals die kennis direct kunnen toepassen. Op een interactieve 
            en enthousiaste manier neem ik teams mee en zorg ik voor een training die aansluit bij de 
            praktijk, inspireert en direct toepasbaar is.
          </p>
          <p>
            Mijn aanpak is betrokken, positief en gericht op 
            ontwikkeling, zodat professionals met vertrouwen en plezier aan de slag gaan met voorschoolse educatie.
          </p>
        </div>
      </div>
    </Section>
  )
}
