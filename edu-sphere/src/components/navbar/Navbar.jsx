import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container-fluid ' >
      <img src={assets.logo} className='w-40' alt="" />
      <div className='items-list'>
        <a href="">Home</a>
        <a href="">Program</a>
        <a href="">AboutUs</a>
        <a href="">Campus</a>
        <a href="">Testimonials</a>
        <button className='btn'>
          <a href=''>ContactUs</a>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
