import { NavLink } from 'react-router-dom'
import { paths } from '../../routes/paths'
import styles from './Navigation.module.css'

interface NavItem {
  label: string
  to: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', to: paths.home },
  {
    label: 'VVE Trainingen',
    to: paths.vveTrainingen.index,
    children: [
      { label: 'Uk & Puk editie 2', to: paths.vveTrainingen.ukPukEditie2 },
      {
        label: 'Nascholing Uk & Puk editie 2',
        to: paths.vveTrainingen.nascholingUkPukEditie2,
      },
      { label: 'Herscholing', to: paths.vveTrainingen.herscholing },
    ],
  },
  { label: 'Beeldcoaching op maat', to: paths.beeldcoachingOpMaat },
  { label: 'Workshops', to: paths.workshops },
  { label: 'Over mij', to: paths.overMij },
  { label: 'Contact', to: paths.contact },
]

/**
 * Primary site navigation. Structural only for this phase: a flat list
 * with the VVE Trainingen sub-pages nested underneath it. Interaction
 * design (dropdown behavior, mobile menu, active-state styling) is left
 * for the page-design phase.
 */
export function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Hoofdnavigatie">
      <ul className={styles.list}>
        {navItems.map((item) => (
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
            {item.children && (
              <ul className={styles.subList}>
                {item.children.map((child) => (
                  <li key={child.to} className={styles.subItem}>
                    <NavLink
                      to={child.to}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.subLink} ${styles.linkActive}`
                          : styles.subLink
                      }
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
