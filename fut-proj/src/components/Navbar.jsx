import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
import assets from '../assets/assets'



const Navbar = ({ theme, setTheme }) => {
  return (
    <div>
      <div className='flex justify-between py-2 items-center px-4
      sm:px-12 lg:px-24 xl-px-40  sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70  '>
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="img" className='w-32 sm:w-40' />

        <div className='flex gap-5 text-gray-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20  sm:items-center transition-all'>

          <Menu to={'/'} title={'Home'} />
          <Menu to={'/services'} title={'Services'} />
          <Menu to={'/our-work'} title={'Our Work'} />
          <Menu to={'/contact-us'} title={'Contact Us'} />

        </div>

        <div className='text-sm max-sm:hidden  bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all' >
          <NavLink className='flex items-center gap-2' to={'/contact-us'} >Connect
            <img src={assets.arrow_icon} width={14} alt=" arrow-img" />
          </NavLink>
        </div>

      </div>
    </div>
  )
}

const Menu = ({ to, title, children }) => {
  return (
    <NavLink className={({ isActive }) =>
      `transition-all duration-300 ease-in-out transform hover:bg-amber-300 rounded-xl ${isActive ? 'text-[tomato] scale-110' : ''}`
    } to={to}>{title}{children}</NavLink>

  )
}
export default Navbar
