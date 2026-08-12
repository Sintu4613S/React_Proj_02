import React from 'react'
import Hero from './pages/Hero'
import Trusetd from './pages/Trusetd'
import Service from './pages/Service'
import OurWork from './pages/OurWork'
import Team from './pages/Team'

import { Toaster } from 'react-hot-toast'
import ContactForm from './pages/ContactForm'

const Home = () => {
  return (
    <>
      <Toaster />
      <Hero />
      <Trusetd />
      <Service />
      <OurWork />
      <Team />
      <ContactForm />
    </>
  )
}

export default Home
