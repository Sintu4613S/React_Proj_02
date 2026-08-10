import React from 'react'
import Title from './Title'
import assets from '../../assets/assets'

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digtal solutions that connect, engage..',
      icon: assets.work_mobile_app
    },
    {
      title: 'Fitness app promotion',
      description: 'We help you to create marketing strategy that drives results.',
      icon: assets.work_fitness_app
    },
    {
      title: 'Dashboard Management',
      description: 'We provide the sources of the our work Completion',
      icon: assets.work_dashboard_management
    },
  ]
  return (
    <div className='flex items-center gap-5 flex-col px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white'>
      <Title title='Our Latest Work' desc='From Strategy to execution, We credit digital solutions that move your business forward.' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
          workData.map((data, index) => (
            <div key={index} className=' py-5 hover:scale-102 duration-500 transition-all cursor-pointer'>
              <img src={data.icon} className='w-full rounded-xl' alt=" icon" />

              <div className='py-8 font-semibold'>
                <h3>{data.title}</h3>
                <p className='py-3'>{data.description}</p>
              </div>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default OurWork
