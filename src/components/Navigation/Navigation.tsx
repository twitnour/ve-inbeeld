import { useId, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { paths } from '../../routes/paths'
import { Button } from '../Button/Button'
import { navItems, type NavItem } from './navItems'
import styles from './Navigation.module.css'

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.linkActive}` : styles.link

/**
 * One dropdown-bearing nav item (e.g. "VVE trainingen", "Coaching").
 * Its own component so each item owns independent open/close state and
 * a unique submenu id — sharing a single piece of state across every
 * dropdown would open/close them in lockstep and duplicate the id in
 * the DOM the moment there's more than one.
 *
 * When `item.to` is set the label is a real link (so it still
 * navigates to that item's own page, e.g. "VVE trainingen"'s
 * overview); when it's omitted (e.g. "Coaching", which has no
 * destination of its own) the label renders as plain text and only
 * the disclosure button/hover opens the submenu.
 */
function DropdownNavItem({ item }: { item: NavItem & { children: NonNullable<NavItem['children']> } }) {
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
    <li
      ref={itemRef}
      className={styles.item}
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={closeDropdown}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.dropdownTrigger}>
        {item.to ? (
          <NavLink to={item.to} className={linkClassName}>
            {item.label}
          </NavLink>
        ) : (
          <span className={styles.link}>{item.label}</span>
        )}
        <button
          type="button"
          className={styles.disclosure}
          aria-expanded={dropdownOpen}
          aria-controls={submenuId}
          aria-label={`Submenu ${item.label} ${dropdownOpen ? 'sluiten' : 'tonen'}`}
          // Always opens rather than toggling: the mouse has to pass
          // over the parent <li> to reach this button, which fires
          // onMouseEnter and sets dropdownOpen true *before* the
          // click's own handler runs — a toggle here would then
          // immediately flip it back to false, so a mouse user
          // hovering then clicking would see it close instead of
          // stay open. Closing is already covered by mouseleave,
          // Escape and blur.
          onClick={() => setDropdownOpen(true)}
        >
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={dropdownOpen ? styles.chevronOpen : undefined}
          />
        </button>
      </span>

      <ul id={submenuId} className={styles.dropdown} data-open={dropdownOpen}>
        {item.children.map((child) => (
          <li key={child.to}>
            <NavLink
              to={child.to}
              className={({ isActive }) =>
                isActive ? `${styles.dropdownLink} ${styles.linkActive}` : styles.dropdownLink
              }
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
 * Primary desktop navigation. Hidden below the md breakpoint in favor
 * of MobileNav.
 */
export function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Hoofdnavigatie">
      <ul className={styles.list}>
        {navItems.map((item) =>
          item.children ? (
            <DropdownNavItem key={item.to ?? item.label} item={{ ...item, children: item.children }} />
          ) : (
            <li key={item.to} className={styles.item}>
              <NavLink to={item.to as string} end={item.to === paths.home} className={linkClassName}>
                {item.label}
              </NavLink>
            </li>
          ),
        )}
      </ul>

      <Button to={paths.offerteAanvragen} variant="primary" size="sm" className={styles.cta}>
        Offerte aanvragen
      </Button>
    </nav>
  )
}
