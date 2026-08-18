
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/pages/about/About'
import Program from './components/pages/programs/Program'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Program />
      <About />
    </>
  )
}


export default App
