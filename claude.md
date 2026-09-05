BRAND DIRECTION

VE in Beeld is a warm, professional educational and coaching brand.

Visual keywords:
- warm
- soft
- elegant
- approachable
- personal
- calm
- professional
- pedagogical
- organic
- modern editorial

Avoid:
- childish visual language
- bright primary colors
- tech/SaaS aesthetics
- excessive gradients
- heavy shadows
- overly playful blobs
- generic corporate stock layouts

The logo is the main visual reference.
It combines:
- elegant serif typography
- handwritten script
- soft blush and beige tones
- botanical line art
- organic watercolor-like shapes
- thin circular lines

The website should complement the logo, not compete with it.

---

## VISUAL DESIGN SYSTEM (finalized)

The reusable visual language, components and conventions below were
established while building the design system. Follow these when
implementing real pages — don't reinvent tokens or components inline.

Review the current state anytime at **`/design-system`** (dev-only route,
not linked from public navigation).

### Design tokens (`src/styles/variables.css`)

- Brand colors are fixed: `--color-background` (#f9f1ee, the dominant
  ground), `--color-primary` (#c7857d), `--color-secondary` (#c2a38f),
  `--color-soft-pink` (#e7beb7), `--color-sand` (#dcc5b4), `--color-text`
  (#191a14). Do not add new brand colors.
- `--color-primary-strong` is a derived, accessible-contrast shade of
  primary (`color-mix(in srgb, var(--color-primary) 60%, var(--color-text) 40%)`).
  Raw `--color-primary` on the background only reaches ~2.7:1 contrast —
  fine for a large solid fill, not for text, links, thin borders or a
  focus ring. **Use `--color-primary-strong` for anything that must read
  as text (links, hover/active nav states, focus rings, the "Lees meer"
  text button). Use raw `--color-primary` for solid fills and decoration
  (primary button background, decorative shapes, borders on `--color-sand`/
  `--color-soft-pink`).**
- Three container widths: `--content-max-width-narrow` (42rem, long-form
  text), `--content-max-width` (60rem, default page content),
  `--content-max-width-wide` (78rem, section shells / card grids).
- `--space-section-block` — shared vertical rhythm for full-width
  sections (`clamp(3rem, 6vw, 6rem)`).
- `--z-header` / `--z-dropdown` / `--z-mobile-nav` — the stacking scale;
  use these instead of ad hoc `z-index` values.
- Reduced motion is handled globally in `global.css` (`prefers-reduced-motion: reduce`
  collapses all transitions/animations) — new motion doesn't need its own
  reduced-motion override unless it does something more than a transition.

### Reusable components (`src/components`)

- **Button** (`Button/Button.tsx`) — the only place button styling lives.
  Variants: `primary` (solid fill, dark text — not white, see contrast
  note above), `secondary` (outlined/quiet), `text` (inline "Lees meer →"
  style, pass an icon via the `icon` prop). Renders a `<button>`, an
  internal `<Link>` (pass `to`) or an external `<a>` (pass `href`) from
  the same component — never hand-roll another button style.
- **PageContainer** (`PageContainer/PageContainer.tsx`) — wraps content
  to one of the three container widths via the `width` prop
  (`narrow` | `normal` | `wide`, default `normal`). Pass `padded={false}`
  when an outer element (e.g. Section) already handles block spacing.
- **Section** (`Section/Section.tsx`) — a full-width band with one of
  four tones via the `tone` prop: `default` (background), `blush`,
  `sand`, `surface` (white). Wraps a PageContainer internally (pass
  `width` through). **Vary tone deliberately — never alternate tone on
  every consecutive section.** Background stays dominantly `default`/
  `surface`; `blush`/`sand` are occasional accents.
- **Card** / **OfferCard** (`Card/Card.tsx`) — soft surface, thin border,
  `--radius-lg`, `--shadow-soft` (never a heavy shadow). Add the
  `interactive` prop only when the whole card acts as one link/action
  (adds a gentle hover lift). OfferCard is the icon + title + description
  shape for a future single offering; pass extra content (e.g. a text
  Button) as children.
- **Header** / **TopBar** / **Navigation** / **MobileNav** / **Footer** —
  the finalized site chrome. Navigation and MobileNav both read from
  `Navigation/navItems.ts`, the single source of truth for the nav
  structure — add new top-level pages or dropdown children there, not in
  either component directly.

### Navigation behavior

- Desktop "VVE trainingen" is a real link (still navigates to the
  overview page) plus a separate disclosure button for its dropdown, so
  it works on hover, click and keyboard/touch. The dropdown itself opens
  on hover, on click, and stays keyboard-operable (Tab to the chevron
  button, Enter/Space toggles, Escape closes and refocuses the chevron).
  The dropdown only lists the three trainings (Uk & Puk editie 2,
  Nascholing, Herscholing) — there's no separate "overzicht" entry
  pointing at the index page, since the "VVE trainingen" label itself
  already links there.
- Mobile navigation is a dedicated component, not a shrunk desktop nav:
  a hamburger toggle (icon/label swap between "Menu openen"/"Menu
  sluiten") opens a full-screen panel with its own accordion for "VVE
  trainingen" (tap-only, no hover logic). Body scroll is locked while
  open (`document.body.classList` toggles the global `.no-scroll` class),
  Escape closes it, and the panel uses the `inert` attribute when closed
  so its links leave the tab order.
- Both nav breakpoints hinge on 768px: Navigation hides at
  `max-width: 768px`, MobileNav shows at `max-width: 768px` (so exactly
  one is always visible, no gap at the boundary).

### Known deviations / follow-ups

- **No `Linkedin` icon in the installed `lucide-react` (1.x drops brand/
  social icons).** TopBar, Footer and the design-system icon grid use
  `Link2` paired with a visible "LinkedIn" text label as a placeholder —
  swap in a proper brand mark (SVG asset) when one is available.
- TopBar contact links are intentionally compact per the brief and don't
  hit the 44px tap-target minimum on their own (icon + small text,
  low-frequency links, not primary navigation). Primary navigation and
  the mobile menu do meet 44px.
- The Typography specimen section on `/design-system` renders real `h1`–
  `h6` elements to show their actual styles, which means a second `<h1>`
  exists on that page (inside its own `<section>`). This is a deliberate
  style-guide pattern, not a hierarchy bug, and doesn't apply to any real
  page.
- Homepage and all other routed pages are still placeholders — this
  phase only established tokens, chrome and reusable building blocks.

---

## Contact & Offerte email delivery (backend architecture)

The Contact and Offerte-aanvragen forms send real email through a small
**PHP + PHPMailer + SMTP** backend at `backend/`, deployed as
`/api/contact.php`. Full details (SMTP config, Composer setup, local
dev, production deployment, security) live in `backend/README.md` —
this section is only the decision record for future phases:

- **Not a serverless function.** No Vercel/Netlify/Cloudflare Functions
  — the site is meant to be deployable to conventional/ordinary shared
  hosting, so form delivery is a plain PHP script over SMTP instead.
- **Not under `public/`.** `backend/` is its own top-level Composer
  project, kept out of Vite's `public/`→`dist/` copy pipeline on
  purpose (see `backend/README.md`, "Why this isn't under the
  frontend's `public/`") — `npm run build` still produces a plain
  static `dist/` with no PHP or `vendor/` in it; the backend is
  deployed as a separate step.
  Frontend's `src/lib/formSubmission.ts` POSTs JSON to
  `/api/contact.php` with a `type: "contact" | "quote"` discriminator;
  `vite.config.ts`'s dev-only proxy forwards that to a local `php -S`
  server so `npm run dev` keeps working without changes to frontend
  source between dev and production.
- **No secrets in the frontend or in git.** SMTP credentials are read
  server-side only (real environment variables first, a git-ignored
  `backend/config.php` as fallback — see `backend/config.example.php`).
- Server-side validation (`backend/src/Validator.php`) is independent
  of and doesn't trust the frontend's own validation
  (`src/lib/formValidation.ts`) — the two are kept in sync by hand, not
  by a shared schema. If the Onderwerp/quote-type option lists change
  in `src/lib/contactSubjectOptions.ts` or `src/lib/quoteRequestTypes.ts`,
  update the matching arrays in `Validator.php` too.