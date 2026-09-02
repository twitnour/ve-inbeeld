# VE in Beeld

Website for VE in Beeld (Dutch training, workshop and beeldcoaching brand
by Marsha Lispet): a static Vite/React/TypeScript frontend with a small
PHP/SMTP backend for the Contact and Offerte-aanvragen forms.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/)
- CSS Modules + a global CSS variables system
- [Lucide React](https://lucide.dev/) for icons
- PHP + [PHPMailer](https://github.com/PHPMailer/PHPMailer) (SMTP) for form email delivery — see `backend/`

## Getting started (frontend)

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default. The Contact and
Offerte forms need the PHP backend running too — see
**[`backend/README.md`](./backend/README.md)** for the second terminal
command and full local full-stack setup.

Other scripts:

```bash
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Business info (contact email, phone, LinkedIn, KvK)

The public business-info values shown across the site (TopBar, Footer,
Contact page, form error messages) live in one place: **`.env`** at the
project root, read through `src/lib/businessInfo.ts`. Edit `.env`
directly to update the contact email, phone number, LinkedIn URL or KvK
number — `.env` is committed to git on purpose (none of these are
secret; they're all publicly shown on the live site regardless).

**This is a static build with no server-side rendering** — changing
`.env` only takes effect after `npm run build` and redeploying `dist/`,
not instantly, unlike the PHP backend's `config.php`. If you change the
contact email, also update `CONTACT_TO_EMAIL`/`CONTACT_FROM_EMAIL` in
`backend/config.php` by hand — the two systems aren't linked.

## Project structure

```
src/
  assets/         static assets (logo variants)
  components/     reusable structural + content components (Header,
                  TopBar, Navigation, Footer, PageContainer, forms/…)
  layouts/        route layout shells (MainLayout)
  lib/            form validation, submission and option-list helpers
  hooks/          shared hooks (usePageMeta, useFormState, …)
  pages/          one folder per route
  routes/         route path constants and the router configuration
  styles/         global CSS variables and base styles
public/           static files served as-is: robots.txt, sitemap.xml,
                  .htaccess (SPA routing fallback + /api passthrough)
backend/          PHP + PHPMailer mail backend for the Contact and
                  Offerte forms — see backend/README.md
```

## Contact & Offerte forms (email delivery)

The Contact and Offerte-aanvragen forms send email through a small PHP
backend over SMTP (`backend/`) — not a platform-specific serverless
function, so the site stays deployable to conventional/shared hosting.
`npm run build` still produces a plain static `dist/`; the backend is a
separate deployment step.

Full setup (Composer/PHPMailer, local dev with both servers running,
SMTP configuration, production deployment, security notes) is in
**[`backend/README.md`](./backend/README.md)**.

## Production deployment

```bash
# Frontend
npm install
npm run build       # → dist/

# Backend
cd backend
composer install    # → backend/vendor/
```

Upload to your web host:

1. Everything in `dist/` → your site's document root (this includes
   `index.html`, hashed `assets/`, `robots.txt`, `sitemap.xml` and
   `.htaccess` — the last one makes React Router's client-side routes
   work when opened directly, and explicitly leaves `/api/*` alone).
2. `backend/api/`, `backend/src/`, `backend/vendor/` and a real
   `backend/config.php` (copied from `backend/config.example.php` and
   filled in with production SMTP values — **never commit this file**)
   → merged into that same document root, so `api/contact.php` ends up
   reachable at `/api/contact.php`.

Full details — including a more secure layout that keeps
`vendor/`/`src/`/`config.php` outside the public web root, PHP version
and extension requirements, and every SMTP config key — are in
**[`backend/README.md`](./backend/README.md)**.

## SEO

Each page sets its own title, meta description, canonical link and
basic Open Graph tags at runtime (`src/hooks/usePageMeta.ts`);
`index.html` carries static site-wide defaults for crawlers that don't
run JavaScript. `public/robots.txt` and `public/sitemap.xml` reference
the production domain (`https://veinbeeld.nl`) and list only real
public routes — the `/design-system` route is excluded from production
builds entirely (see `src/routes/router.tsx`), not just left out of the
sitemap.

## Styling system

Global design tokens (brand colors, typography, spacing, breakpoints)
live in `src/styles/variables.css` as CSS custom properties. Base element
styles, buttons, links and focus states live in `src/styles/global.css`.
Component-level styling uses CSS Modules (`Component.module.css`) next to
each component.

Headings use **Cormorant Garamond**, body text uses **DM Sans** (loaded via
Google Fonts in `index.html`).
