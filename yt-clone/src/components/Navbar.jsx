import React from 'react'
import { assets } from '../assets/assest'

const Navbar = () => {
  return (
    <nav className='p-2! shadow-lg  flex items-center justify-between  md:px-6! z-10 bg-red-300 ' >
      <div className="flex gap-4 items-center">
        <img src={assets.menu} className=' w-8 h-8 cursor-pointer bg-transparent hidden md:block' alt="" />
        <img src={assets.logo} className='w-25 py-1! sm:w-40!' alt="" />
      </div>
      <div className="w-35 sm:w-80 mx-5! bg-gray-100  flex flex-1 border rounded-4xl items-center justify-between px-2!  ">
        <input className='w-[90%] py-1! sm:py-2! text-xl bg-transparent outline-none' type="text" placeholder='Search here...' />
        <img src={assets.search} className='w-5 mr-1! md:w-8 sm:mr-4! cursor-pointer' alt="" />
      </div>
      <div className="flex gap-4 cursor-pointer items-center">
        <img src={assets.upload} className='w-12 rounded-full  hidden md:block ' alt="" />
        <img src={assets.more} className='w-12 rounded-full hidden md:block' alt="" />
        <img src={assets.notification} className='w-12 rounded-full hidden md:block' alt="" />
        <img src={assets.jack} className='w-8 py-1! rounded-full sm:w-12' alt="" />
      </div>
    </nav>
  )
}

export default Navbar
