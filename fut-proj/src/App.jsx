
import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
