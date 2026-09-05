import { Link } from 'react-router-dom'
import { paths } from '../../routes/paths'
import { Navigation } from '../Navigation/Navigation'
import { MobileNav } from '../MobileNav/MobileNav'
import { useIsScrolled } from '../../hooks/useIsScrolled'
import logo from '../../assets/logo-alt2.webp'
import styles from './Header.module.css'

/**
 * Site header: a compact logo treatment plus the desktop Navigation
 * (hides itself below the md breakpoint) and MobileNav (hamburger +
 * panel, shows itself below the md breakpoint). Sticks to the top of
 * the viewport on scroll and switches to a shorter, logo-free state
 * once the page has scrolled past a small threshold — see
 * useIsScrolled.
 */
export function Header() {
  const isScrolled = useIsScrolled()

  return (
    <header className={styles.header} data-scrolled={isScrolled}>
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
