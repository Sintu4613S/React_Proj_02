import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import WorkPage from './components/WorkPage.jsx'

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
        path: '/services',
        element: <Services /> // Fixed typo here
      },
      {
        path: '/our-work',
        element: <WorkPage /> // Fixed typo here
      },
      {
        path: '/contact-us',
        element: <Contact /> // Fixed typo here
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
