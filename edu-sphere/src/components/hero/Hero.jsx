import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='hero containers-fluid'>
      <div className='hero-text'>
        <h1 className='max-[650px]:max-w-100 text-3xl md:text-5xl lg:text-[60px] font-bold mx-auto'>We Ensure better education for a better world</h1>

        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more
          <img src={assets.darkArrow} className='w-5' alt="" />
        </button>
      </div>

    </div>
  )
}

export default Hero
