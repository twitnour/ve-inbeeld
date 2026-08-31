import { Outlet } from 'react-router-dom'
import { TopBar } from '../components/TopBar/TopBar'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

/**
 * Shared page shell: TopBar + Header at the top, Footer at the bottom,
 * with the routed page rendered in between.
 */
export function MainLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
