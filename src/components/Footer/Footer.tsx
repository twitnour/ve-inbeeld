import { Link } from 'react-router-dom'
import { paths } from '../../routes/paths'
import logo from '../../assets/logo.jpeg'
import styles from './Footer.module.css'

/**
 * Structural site footer: logo, secondary links and copyright.
 * The logo shown here is a temporary placeholder wiring — final footer
 * styling and content are designed later.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to={paths.home} className={styles.logoLink} aria-label="VE in Beeld - home">
          <img src={logo} alt="VE in Beeld" className={styles.logo} />
        </Link>

        <nav className={styles.links} aria-label="Footer">
          <Link to={paths.contact}>Contact</Link>
          <Link to={paths.offerteAanvragen}>Offerte aanvragen</Link>
          <Link to={paths.overMij}>Over mij</Link>
        </nav>

        <p className={styles.copyright}>
          &copy; {year} VE in Beeld. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  )
}
