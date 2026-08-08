
import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
    </div>
  )
}

export default App
