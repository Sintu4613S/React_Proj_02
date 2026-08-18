import React from 'react'
import './Program.css'
import { assets } from '../../../assets/assets'

const Program = () => {
  return (
    <div className='containers-fluid'>
      <div className='title '>
        <p className='text-2xl'>Our Program</p>
        <h2 className='text-4xl font-bold'>What we offer</h2>
      </div>
      <div className='programs'>
        <div className="program">
          <img src={assets.program1} alt="" />
          <div className='caption'>
            <img src={assets.programIcon1} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={assets.program2} alt="" />
          <div className='caption'>
            <img src={assets.programIcon2} alt="" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={assets.program3} alt="" />
          <div className='caption'>
            <img src={assets.programIcon3} alt="" />
            <p>Post Graduation</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Program
