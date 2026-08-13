import React from 'react'
import { assets } from '../../assests/assest'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center' style={{ padding: '20px' }}>
      <div>
        <p className='font-semibold text-2xl'>Gemini</p></div>

      {/* <div className='flex gap-10'>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div> */}

      <img src={assets.user_icon} className='w-15 h-15 rounded-full' alt="" />
    </div>
  )
}

export default Navbar
