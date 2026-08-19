import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Hero from './components/hero/Hero.jsx'
import Program from './components/pages/programs/Program.jsx'
import ContactUs from './components/pages/contactUs/ContactUs.jsx'
import Testimonial from './components/pages/testimonials/Testimonial.jsx'
import Campus from './components/pages/campus/Campus.jsx'
import About from './components/pages/about/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: '/program',
        element: <Program />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/campus',
        element: <Campus />
      },
      {
        path: '/testimonial',
        element: <Testimonial />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
