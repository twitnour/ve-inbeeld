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
                  Navigation, Footer, PageContainer)
  layouts/        route layout shells (MainLayout)
  pages/          one folder per route, placeholder content for now
  routes/         route path constants and the router configuration
  styles/         global CSS variables and base styles
```

## Styling system

Global design tokens (brand colors, typography, spacing, breakpoints)
live in `src/styles/variables.css` as CSS custom properties. Base element
styles, buttons, links and focus states live in `src/styles/global.css`.
Component-level styling uses CSS Modules (`Component.module.css`) next to
each component.

Headings use **Cormorant Garamond**, body text uses **DM Sans** (loaded via
Google Fonts in `index.html`).
