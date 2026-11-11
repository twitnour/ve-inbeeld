import { paths } from '../../routes/paths'

export interface NavChild {
  label: string
  to: string
}

export interface NavItem {
  label: string
  /** Omit for a dropdown-only parent with no destination page of its own (e.g. "Coaching"). */
  to?: string
  children?: NavChild[]
}

/** Shared primary nav structure, used by both the desktop and mobile navigation. */
export const navItems: NavItem[] = [
  { label: 'Home', to: paths.home },
  {
    label: 'VVE trainingen',
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
  {
    label: 'Coaching',
    children: [
      { label: 'Beeldcoaching op maat', to: paths.beeldcoachingOpMaat },
      { label: 'Pedagogische coach', to: paths.pedagogischCoach },
    ],
  },
  { label: 'Workshops', to: paths.workshops },
  { label: 'Over mij', to: paths.overMij },
  { label: 'Contact', to: paths.contact },
]
