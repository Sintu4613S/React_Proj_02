import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='d-flex gap-3 bg-dark'>
      <Link >Home</Link>
      <Link >Services</Link>
      <Link>Testimonials</Link>
      {/* <NavLink to='/' /> */}

    </div>
  )
}

export default Navbar
