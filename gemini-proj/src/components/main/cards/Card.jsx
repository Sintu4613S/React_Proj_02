import React from 'react'
import './Card.css'
import { assets } from '../../../assests/assest'

const Card = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' style={{ padding: '20px' }}>

      <Singlecard title='heloo' imageSrc={assets.bulb_icon} />
      <Singlecard title='heloo' imageSrc={assets.code_icon} />
      <Singlecard title='heloo' imageSrc={assets.compass_icon} />
      <Singlecard title='heloo' imageSrc={assets.message_icon} />

    </div>
  )
}

export default Card
const Singlecard = ({ title, imageSrc }) => {
  return (
    <div className='card relative'>
      <p className='text-xl'>{title}</p>
      <img src={imageSrc} className='w-8 absolute bottom-3 right-3 rounded-full bg-white' alt="" />
    </div>
  )

}