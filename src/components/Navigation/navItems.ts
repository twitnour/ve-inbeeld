import { paths } from '../../routes/paths'

export interface NavChild {
  label: string
  to: string
}

export interface NavItem {
  label: string
  to: string
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
  { label: 'Beeldcoaching op maat', to: paths.beeldcoachingOpMaat },
  { label: 'Workshops', to: paths.workshops },
  { label: 'Over mij', to: paths.overMij },
  { label: 'Contact', to: paths.contact },
]
