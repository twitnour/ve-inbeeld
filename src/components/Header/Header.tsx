import { Link } from 'react-router-dom'
import { paths } from '../../routes/paths'
import { Navigation } from '../Navigation/Navigation'
import { MobileNav } from '../MobileNav/MobileNav'
import logo from '../../assets/logo.jpeg'
import styles from './Header.module.css'

/**
 * Site header: a compact logo treatment plus the desktop Navigation
 * (hides itself below the md breakpoint) and MobileNav (hamburger +
 * panel, shows itself below the md breakpoint).
 */
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to={paths.home} className={styles.logoLink} aria-label="VE in Beeld - home">
          <img src={logo} alt="VE in Beeld" className={styles.logo} />
        </Link>
        <Navigation />
        <MobileNav />
      </div>
    </header>
  )
}
