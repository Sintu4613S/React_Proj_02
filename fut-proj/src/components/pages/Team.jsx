import React from 'react'
import { teamData } from '../../assets/assets'
import Title from './Title'

const Team = () => {
  return (
    <div className='flex items-center gap-5 flex-col px-4 sm:px-12 lg:px-24 xl:px-40 py-15 text-gray-700 dark:text-white'>

      <Title title='Meet with team' desc="A passionate team of digital experts dedicated to your brand's success ." />

      <div className='  w-full max-w-5xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>

        {teamData.map((info, index) => (
          <div key={index} className='flex gap-5 py-5 items-center justify-center hover:scale-105 duration-500 transition-all cursor-pointer  bg-gray-100 rounded-xl'>
            <img src={info.image} className='w-12 h-12 rounded-full  ' alt="img" />
            <div>
              <h3 className='font-bold text-xl '>{info.name}</h3>
              <p className='text-gray-500'>{info.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Team
