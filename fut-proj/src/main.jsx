import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Testimonial from './components/Testimonial.jsx'

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
        path: '/testimonial',
        element: <Testimonial /> // Fixed typo here
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
