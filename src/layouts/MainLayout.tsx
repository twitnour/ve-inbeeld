import { Outlet, ScrollRestoration } from 'react-router-dom'
import { TopBar } from '../components/TopBar/TopBar'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

/**
 * Shared page shell: TopBar + Header at the top, Footer at the bottom,
 * with the routed page rendered in between. ScrollRestoration resets
 * scroll to the top on a new navigation (and restores position on
 * back/forward) — without it the browser keeps whatever scroll
 * position the previous page was at, so e.g. a footer/CTA link to
 * Contact would land already scrolled halfway down the new page.
 */
export function MainLayout() {
  return (
    <>
      <ScrollRestoration />
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
