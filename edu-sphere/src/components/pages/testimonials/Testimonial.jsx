import React from 'react'
import './Testimonial.css'
import { assets } from '../../../assets/assets'

const Testimonial = () => {
  return (
    <>
      <div className="title">
        <p>Testimonial</p>
        <h1> What Student Says</h1>

      </div>
      <div className='testi'>
        <img src={assets.backIcon} className='back-btn' alt="" />
        <img src={assets.nextIcon} className='next-btn' alt="" />
        <div className="slider">
          <ul>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={assets.user1} alt="" />
                  <div>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>

            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={assets.user1} alt="" />
                  <div>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Testimonial
