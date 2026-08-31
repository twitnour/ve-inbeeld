import { Link } from 'react-router-dom'
import { paths } from '../../routes/paths'
import { Navigation } from '../Navigation/Navigation'
import logo from '../../assets/logo.jpeg'
import styles from './Header.module.css'

/**
 * Structural site header: logo + primary navigation.
 * The logo shown here is a temporary placeholder wiring — final header
 * styling and layout are designed later.
 */
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to={paths.home} className={styles.logoLink} aria-label="VE in Beeld - home">
          <img src={logo} alt="VE in Beeld" className={styles.logo} />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
