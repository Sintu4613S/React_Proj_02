import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
const Navbar = () => {
  const [sidebar, setSidebarOpen] = useState(false)
  // useEffect(() => {
  //   setSiderbarOpen(true)
  // } [])
  return (
    <nav className='containers-fluid  dark-nav flex items-center justify-between' >
      <img src={assets.logo} className='w-40' alt="" />
      <div className=' hidden md:flex items-center items-list '>
        <a href="">Home</a>
        <a href="">Program</a>
        <a href="">AboutUs</a>
        <a href="">Campus</a>
        <a href="">Testimonials</a>
        <button className='btn'>
          <a href=''>ContactUs</a>
        </button>
        {/* <button className='sm:hidden' onClick={() => setSiderbarOpen(false)} className='btn'>
          Close
        </button> */}
      </div>

      {/* <nav className='containers-fluid  dark-nav' >
        <img src={assets.logo} className='w-40' alt="" /> */}
      {sidebar && (<div className='mobile-sidebar flex flex-col items-center gap-6 '>
        <a href="">Home</a>
        <a href="">Program</a>
        <a href="">AboutUs</a>
        <a href="">Campus</a>
        <a href="">Testimonials</a>
        <button className='btn'>
          <a href=''>ContactUs</a>
        </button>
        <button className='sm:hidden' onClick={() => setSidebarOpen(false)} className='btn md:hidden'>
          Close
        </button>
      </div>
      )}
      <button onClick={() => setSidebarOpen(!sidebar)} className='menu-icon md:hidden block'>
        <img src={assets.menuIcon} className='w-8' alt="" />
      </button>

    </nav>
  )
}

export default Navbar
