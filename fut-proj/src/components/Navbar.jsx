import React, { Children, useState } from 'react'
import { NavLink } from 'react-router-dom'
import assets from '../assets/assets'
import ThemeButton from './ThemeButton'



const Navbar = ({ theme, setTheme }) => {
  const [sidebaropen, setSidebaropen] = useState(false)
  return (
    <div className='sticky top-0 z-20 '>
      <div className='flex justify-between py-2 items-center px-4
      sm:px-12 lg:px-24 xl-px-40  backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70  '>
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="img" className='w-32 sm:w-40' />

        <div className={`flex gap-4 text-gray-700 dark:text-white sm:text-sm ${!sidebaropen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20  sm:items-center transition-all`}>
          <img src={assets.close_icon} className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer' onClick={() => setSidebaropen(false)} alt="" />
          <Menu to={'/'} title={'Home'} />
          <Menu to={'/service'} title={'Service'} />
          <Menu to={'/our-work'} title={'Our Work'} />
          <Menu to={'/contact-us'} title={'Contact Us'} />

        </div>

        <div className='flex items-center gap-2 sm:gap-4' >
          {/* <ThemeButton theme={theme} setTheme={setTheme} /> */}
          <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebaropen(true)} className='w-8 sm:hidden' />

          <NavLink className='text-sm max-sm:hidden  bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all flex items-center gap-2' to={'/contact-us'} >Connect
            <img src={assets.arrow_icon} width={14} alt=" arrow-img" />
          </NavLink>
        </div>

      </div>
    </div>
  )
}

const Menu = ({ to, title, children }) => {
  return (
    <NavLink onClick={() => setSidebaropen(false)} className={({ isActive }) =>
      `transition-all duration-300 ease-in-out transform  rounded-xl ${isActive ? 'text-[tomato] scale-110' : ''}`
    } to={to}>{title}{children}</NavLink>

  )
}
export default Navbar
