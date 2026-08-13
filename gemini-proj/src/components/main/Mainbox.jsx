import React from 'react'
import './Mainbox.css'
import Card from './cards/Card'
import { assets } from '../../assests/assest'

const Mainbox = () => {
  return (
    <div className='main-container'>
      <div className='greet'>
        <p><span>Hello, Dev.</span></p>
        <p>How can I help you today ?</p>
      </div>
      <Card />
      {/* Bottom Part or Search part */}
      <div className='bottom-container'>
        <div className='search-box'>
          <input type="text" placeholder='Enter prompt here' />
          <div className='flex gap-1'>
            <img src={assets.gallery_icon} className='w-5' alt="" />
            <img src={assets.gallery_icon2} className='w-5' alt="" />
          </div>
        </div>
        <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere accusantium ipsam nisi ullam odio nihil fugiat quas. Reiciendis, vero!</p>


      </div>
    </div>
  )
}

export default Mainbox
