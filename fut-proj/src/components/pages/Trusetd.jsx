import React from 'react'
import { company_logos } from '../../assets/assets'


const Trusetd = () => {
  return (
    <div className='flex items-center flex-col px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dar:white/80'>
      <h3 className=' font-semibold'>Trusted by Leading companies</h3>
      <div className='flex items-center gap-5 justify-center flex-wrap m-4 '>
        {
          company_logos.map((logo, index) => (
            //console.log("Logo m kya h", logo)
            < img key={index} src={logo} alt="comp_logo" className='max-h-5 sm:max-h-6 dark:drop-shaow-xl' />

          ))
        }
      </div>

    </div>
  )
}

export default Trusetd
