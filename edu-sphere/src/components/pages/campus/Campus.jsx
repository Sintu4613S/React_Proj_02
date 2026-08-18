import React from 'react'
import './Campus.css'
import { assets } from '../../../assets/assets'

const Campus = () => {
  return (
    <>
      <div className='title'>
        <p>Gallerry</p>
        <h1> Campus Photos</h1>
      </div>
      <div className='campus'>
        <div className="gallery">
          <img src={assets.gallery1} alt="" />
          <img src={assets.gallery2} alt="" />
          <img src={assets.gallery3} alt="" />
          <img src={assets.gallery4} alt="" />
        </div>
        <button className='btn dark-btn'> See more here
          <img src={assets.whiteArrow} className='w-6' alt="" />
        </button>
      </div>
    </>

  )
}

export default Campus
