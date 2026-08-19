import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [sidebar, setSidebarOpen] = useState(false)
  return (
    <nav className='containers-fluid  dark-nav flex items-center justify-between' >
      <img src={assets.logo} className='w-40' alt="" />
      <div className=' hidden md:flex items-center items-list '>
        <Link to='/'>Home  </Link>
        <Link to='/program'>Program  </Link>
        <Link to='/about-us'>AboutUs  </Link>
        <Link to='/campus'>Campus  </Link>
        <Link to='/testimonial'>Testimonials  </Link>
        <button className='btn'>
          <Link to='/contact-us'>ContactUs  </Link>
        </button>
      </div>

      {/* <nav className='containers-fluid  dark-nav' >
        <img src={assets.logo} className='w-40' alt="" /> */}
      {sidebar && (<div className='mobile-sidebar flex flex-col items-center gap-6 '>
        <Link to='/'>Home  </Link>
        <Link to='/program'>Program  </Link>
        <Link to='/about-us'>AboutUs  </Link>
        <Link to='/campus'>Campus  </Link>
        <Link to='/testimonial'>Testimonials  </Link>
        <button className='btn'>
          <Link to='/contact-us'>ContactUs  </Link>
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
