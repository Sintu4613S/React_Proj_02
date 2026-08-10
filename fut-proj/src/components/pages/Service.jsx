import React from 'react'
import assets from '../../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Service = () => {
  const serviceData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerul digital solutions that connect ,enagage..',
      icon: assets.ads_icon
    },
    {
      title: 'Content Marketing',
      description: 'We help uyou execute your plan and deliver results.',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      description: 'We help you create a marketing strategy that drives resuls.',
      icon: assets.content_icon
    },
    {
      title: 'Social Media',
      description: 'We help you build a strong social media presence and engage with your audiences. ',
      icon: assets.social_icon
    }
  ]
  return (
    <div className='relative flex flex-col items-center gap-7 px-4 sm:px-10 lg:px-20 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <img src={assets.bgImage2} className='absolute  -top-35  -z-1' alt="" />
      <Title title='How can we help ?' desc='From strategy to education, We craft digital solutions that move your business forward' />


      <div className='flex flex-col md:grid grid-cols-2'>
        {serviceData.map((service, index) => (
          //console.log(' m kyah', service)
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Service
