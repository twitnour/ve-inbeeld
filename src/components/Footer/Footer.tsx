import { Link } from 'react-router-dom'
import { Mail, Phone, Link2 } from 'lucide-react'
import { paths } from '../../routes/paths'
import { businessInfo } from '../../lib/businessInfo'
import logo from '../../assets/logo-alt2.webp'
import styles from './Footer.module.css'

/**
 * Full site footer: four logical areas (brand, registrations, contact,
 * business info) plus a bottom bar. Collapses from a 4-column grid to
 * 2 columns on tablet and a single stacked column on mobile.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={`${styles.column} ${styles.logoColumn}`}>
          <Link to={paths.home} className={styles.logoLink} aria-label="VE in Beeld - home">
            <img src={logo} alt="VE in Beeld" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Registratie &amp; licenties</h2>
          <ul className={styles.plainList}>
            <li>Uk &amp; Puk trainer</li>
            <li>Beeldcoach</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.plainList}>
            <li>
              <a href={`mailto:${businessInfo.contactEmail}`} className={styles.contactLink}>
                <Mail size={16} aria-hidden="true" />
                <span>{businessInfo.contactEmail}</span>
              </a>
            </li>
            <li>
              <a href={businessInfo.phoneHref} className={styles.contactLink}>
                <Phone size={16} aria-hidden="true" />
                <span>{businessInfo.phoneNumber}</span>
              </a>
            </li>
            <li>
              <a
                href={businessInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.contactLink}
                aria-label="VE in Beeld op LinkedIn (opent in nieuw tabblad)"
              >
                <Link2 size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Bedrijfsgegevens</h2>
          <ul className={styles.plainList}>
            <li>Marsha Lispet</li>
            <li>KvK {businessInfo.kvkNumber}</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {year} VE in Beeld. Alle rechten voorbehouden.
        </p>
        <a href="#" className={styles.privacyLink}>
          Privacyverklaring
        </a>
      </div>
    </footer>
  )
}
