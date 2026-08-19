
// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Program from './components/pages/programs/Program'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Hero />
      <Program /> */}

    </>
  )
}


export default App
