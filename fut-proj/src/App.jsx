
import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { useState, useRef, useEffect } from 'react'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light');
  const dotRef = useRef(null)

  const outlineRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 8}px,${mouse.current.y - 8}px,0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 4}px,${position.current.y - 4}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer />
      <div ref={dotRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-999'
        style={{ transition: 'transform 0.1s ease-out' }}></div>

      <div ref={outlineRef} className='fixed top-0 left-0 h-4 w-4 rounded-full bg-primary pointer-events-none z-999'></div>
    </div>
  )
}

export default App
