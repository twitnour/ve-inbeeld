# VE in Beeld

Website project foundation for VE in Beeld (Dutch training, workshop and
beeldcoaching brand by Marsha Lispet).

This is the technical foundation only: routing, structural components and
the global styling system. Page design and content still need to be built.

## Tech stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/)
- CSS Modules + a global CSS variables system
- [Lucide React](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

Other scripts:

```bash
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project structure

```
src/
  assets/         static assets (e.g. the temporary logo)
  components/     reusable structural components (Header, TopBar,
                  Navigation, Footer, PageContainer, forms/…)
  layouts/        route layout shells (MainLayout)
  lib/            form validation, submission and option-list helpers
  hooks/          shared hooks (usePageMeta, useFormState, …)
  pages/          one folder per route
  routes/         route path constants and the router configuration
  styles/         global CSS variables and base styles
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

## Styling system

Global design tokens (brand colors, typography, spacing, breakpoints)
live in `src/styles/variables.css` as CSS custom properties. Base element
styles, buttons, links and focus states live in `src/styles/global.css`.
Component-level styling uses CSS Modules (`Component.module.css`) next to
each component.

Headings use **Cormorant Garamond**, body text uses **DM Sans** (loaded via
Google Fonts in `index.html`).
