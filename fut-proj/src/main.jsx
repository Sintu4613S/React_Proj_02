import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Service from './components/pages/Service.jsx'
import OurWork from './components/pages/OurWork.jsx'
import ContactForm from './components/pages/contactForm.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home /> // Fixed typo here
      },
      {
        path: '/service',
        element: <Service /> // Fixed typo here
      },
      {
        path: '/our-work',
        element: <OurWork /> // Fixed typo here
      },
      {
        path: '/contact-us',
        element: <ContactForm /> // Fixed typo here
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
