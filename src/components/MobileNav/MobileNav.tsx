import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { paths } from '../../routes/paths'
import { Button } from '../Button/Button'
import { navItems, type NavItem } from '../Navigation/navItems'
import styles from './MobileNav.module.css'

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.linkActive}` : styles.link

/**
 * One accordion item (e.g. "VVE trainingen", "Coaching"). Its own
 * component so each item owns independent open/close state and a
 * unique submenu id — sharing a single piece of state/id across every
 * accordion would open/close them in lockstep and duplicate the id in
 * the DOM the moment there's more than one.
 *
 * When `item.to` is set the label is a real link (so it still
 * navigates to that item's own page); when it's omitted (e.g.
 * "Coaching", which has no destination of its own) the label renders
 * as plain text and only the toggle button opens the submenu.
 */
function AccordionNavItem({
  item,
  onNavigate,
}: {
  item: NavItem & { children: NonNullable<NavItem['children']> }
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)
  const submenuId = useId()

  return (
    <li className={styles.item}>
      <div className={styles.accordionHeader}>
        {item.to ? (
          <NavLink to={item.to} end className={linkClassName} onClick={onNavigate}>
            {item.label}
          </NavLink>
        ) : (
          <span className={styles.link}>{item.label}</span>
        )}
        <button
          type="button"
          className={styles.accordionToggle}
          aria-expanded={open}
          aria-controls={submenuId}
          aria-label={`Submenu ${item.label} ${open ? 'sluiten' : 'tonen'}`}
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronDown size={20} aria-hidden="true" className={open ? styles.chevronOpen : undefined} />
        </button>
      </div>

      <ul id={submenuId} className={styles.sublist} data-open={open}>
        {item.children.map((child) => (
          <li key={child.to}>
            <NavLink
              to={child.to}
              className={({ isActive }) =>
                isActive ? `${styles.sublink} ${styles.linkActive}` : styles.sublink
              }
              onClick={onNavigate}
            >
              {child.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

/**
 * Mobile navigation: a hamburger toggle in the header and a full
 * navigation panel with its own accordions (for "VVE trainingen" and
 * "Coaching") — this is a separate, purpose-built menu rather than a
 * shrunk desktop nav, so it has no hover-based logic at all.
 */
export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()

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

  const closeMenu = () => setMenuOpen(false)

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
            {navItems.map((item) =>
              item.children ? (
                <AccordionNavItem
                  key={item.to ?? item.label}
                  item={{ ...item, children: item.children }}
                  onNavigate={closeMenu}
                />
              ) : (
                <li key={item.to} className={styles.item}>
                  <NavLink
                    to={item.to as string}
                    end={item.to === paths.home}
                    className={linkClassName}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
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
