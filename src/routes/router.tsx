import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/Home/HomePage'
import { VveTrainingenPage } from '../pages/VveTrainingen/VveTrainingenPage'
import { UkPukEditie2Page } from '../pages/VveTrainingen/UkPukEditie2Page'
import { NascholingUkPukEditie2Page } from '../pages/VveTrainingen/NascholingUkPukEditie2Page'
import { HerscholingPage } from '../pages/VveTrainingen/HerscholingPage'
import { BeeldcoachingPage } from '../pages/Beeldcoaching/BeeldcoachingPage'
import { WorkshopsPage } from '../pages/Workshops/WorkshopsPage'
import { OverMijPage } from '../pages/OverMij/OverMijPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { OfferteAanvragenPage } from '../pages/OfferteAanvragen/OfferteAanvragenPage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { paths } from './paths'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: paths.home, element: <HomePage /> },
      { path: paths.vveTrainingen.index, element: <VveTrainingenPage /> },
      { path: paths.vveTrainingen.ukPukEditie2, element: <UkPukEditie2Page /> },
      {
        path: paths.vveTrainingen.nascholingUkPukEditie2,
        element: <NascholingUkPukEditie2Page />,
      },
      { path: paths.vveTrainingen.herscholing, element: <HerscholingPage /> },
      { path: paths.beeldcoachingOpMaat, element: <BeeldcoachingPage /> },
      { path: paths.workshops, element: <WorkshopsPage /> },
      { path: paths.overMij, element: <OverMijPage /> },
      { path: paths.contact, element: <ContactPage /> },
      { path: paths.offerteAanvragen, element: <OfferteAanvragenPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
