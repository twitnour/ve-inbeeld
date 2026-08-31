/**
 * Central route path definitions.
 * Keep every internal <Link>/navigate() call referencing these constants
 * instead of hardcoded strings, so the URL structure only has one source
 * of truth.
 */
export const paths = {
  home: '/',
  vveTrainingen: {
    index: '/vve-trainingen',
    ukPukEditie2: '/vve-trainingen/uk-puk-editie-2',
    nascholingUkPukEditie2: '/vve-trainingen/nascholing-uk-puk-editie-2',
    herscholing: '/vve-trainingen/herscholing',
  },
  beeldcoachingOpMaat: '/beeldcoaching-op-maat',
  workshops: '/workshops',
  overMij: '/over-mij',
  contact: '/contact',
  offerteAanvragen: '/offerte-aanvragen',
  /** Development-only visual language reference. Never link this from public navigation. */
  designSystem: '/design-system',
} as const
