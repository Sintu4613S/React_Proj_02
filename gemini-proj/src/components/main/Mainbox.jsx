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
          <div className='flex gap-1 cursor-pointer'>
            <img src={assets.gallery_icon} className='w-5' alt="" />
            <img src={assets.mic_icon} className='w-5' alt="" />
            <img src={assets.send_icon} className='w-5' alt="" />
          </div>
        </div>
        <p className='text-center text-sm' style={{ marginBottom: '10px' }}>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>


      </div>
    </div>
  )
}

export default Mainbox
