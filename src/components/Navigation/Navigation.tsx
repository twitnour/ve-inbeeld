import { useId, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, FileText } from 'lucide-react'
import { paths } from '../../routes/paths'
import { Button } from '../Button/Button'
import { navItems } from './navItems'
import styles from './Navigation.module.css'

/**
 * Primary desktop navigation. Hidden below the md breakpoint in favor
 * of MobileNav. The "VVE trainingen" item stays a real link (so it
 * still navigates to the overview page) with a separate disclosure
 * button for its dropdown, so the submenu is reachable by pointer
 * hover, click, and keyboard/touch alike.
 */
export function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const itemRef = useRef<HTMLLIElement>(null)
  const submenuId = useId()

  const closeDropdown = () => setDropdownOpen(false)

  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!itemRef.current?.contains(event.relatedTarget as Node | null)) {
      closeDropdown()
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape' && dropdownOpen) {
      closeDropdown()
      itemRef.current?.querySelector<HTMLButtonElement>(`.${styles.disclosure}`)?.focus()
    }
  }

  return (
    <nav className={styles.nav} aria-label="Hoofdnavigatie">
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
                >
                  {item.label}
                </NavLink>
              </li>
            )
          }

          return (
            <li
              key={item.to}
              ref={itemRef}
              className={styles.item}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={closeDropdown}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            >
              <span className={styles.dropdownTrigger}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                  }
                >
                  {item.label}
                </NavLink>
                <button
                  type="button"
                  className={styles.disclosure}
                  aria-expanded={dropdownOpen}
                  aria-controls={submenuId}
                  aria-label={`Submenu ${item.label} ${dropdownOpen ? 'sluiten' : 'tonen'}`}
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={dropdownOpen ? styles.chevronOpen : undefined}
                  />
                </button>
              </span>

              <ul id={submenuId} className={styles.dropdown} data-open={dropdownOpen}>
                <li>
                  <NavLink
                    to={paths.vveTrainingen.index}
                    end
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.dropdownLink} ${styles.linkActive}`
                        : styles.dropdownLink
                    }
                  >
                    <FileText size={16} aria-hidden="true" />
                    VVE trainingen overzicht
                  </NavLink>
                </li>
                {item.children.map((child) => (
                  <li key={child.to}>
                    <NavLink
                      to={child.to}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.dropdownLink} ${styles.linkActive}`
                          : styles.dropdownLink
                      }
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

      <Button to={paths.offerteAanvragen} variant="primary" size="sm" className={styles.cta}>
        Offerte aanvragen
      </Button>
    </nav>
  )
}
