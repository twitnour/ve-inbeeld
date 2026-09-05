import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { paths } from '../../routes/paths'
import { Button } from '../Button/Button'
import { navItems } from '../Navigation/navItems'
import styles from './MobileNav.module.css'

/**
 * Mobile navigation: a hamburger toggle in the header and a full
 * navigation panel with its own accordion for "VVE trainingen" —
 * this is a separate, purpose-built menu rather than a shrunk desktop
 * nav, so it has no hover-based logic at all.
 */
export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const panelId = useId()
  const submenuId = useId()

  // Close on Escape, and stop the page from scrolling behind the panel.
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('no-scroll')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setSubmenuOpen(false)
  }

  return (
    <div className={styles.mobileNav}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={menuOpen}
        aria-controls={panelId}
        aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      <div
        id={panelId}
        className={styles.panel}
        data-open={menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Mobiele navigatie" className={styles.panelInner}>
          <ul className={styles.list}>
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.to} className={styles.item}>
                    <NavLink
                      to={item.to}
                      end={item.to === paths.home}
                      className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              }

              return (
                <li key={item.to} className={styles.item}>
                  <div className={styles.accordionHeader}>
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className={styles.accordionToggle}
                      aria-expanded={submenuOpen}
                      aria-controls={submenuId}
                      aria-label={`Submenu ${item.label} ${submenuOpen ? 'sluiten' : 'tonen'}`}
                      onClick={() => setSubmenuOpen((open) => !open)}
                    >
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={submenuOpen ? styles.chevronOpen : undefined}
                      />
                    </button>
                  </div>

                  <ul id={submenuId} className={styles.sublist} data-open={submenuOpen}>
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            isActive
                              ? `${styles.sublink} ${styles.linkActive}`
                              : styles.sublink
                          }
                          onClick={closeMenu}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>

          <Button
            to={paths.offerteAanvragen}
            variant="primary"
            className={styles.cta}
            onClick={closeMenu}
          >
            Offerte aanvragen
          </Button>
        </nav>
      </div>
    </div>
  )
}
