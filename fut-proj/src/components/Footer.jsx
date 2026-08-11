import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 sm:mt-10 px-4 sm:px-10 lg:px-24 xl:px-40 py-4'>
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div>
          <img src={assets.logo} className='w-32 sm:w-44 mb-4' alt="" />
          <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>
        </div>
        <div>
          <h3 className='font-bold text-xl py-2'>Subscribe to our newsteller</h3>
          <p>The latest news,articles,resource sent your inbox weekly</p>
        </div>
      </div>

      <hr className='my-5 border border-gray-500 ' />

      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div>
          <p className='max-w-md'>Copyright2026 &copy;. All right are reserved.</p>
        </div>
        <div className='flex gap-4'>
          <img className='max-w-md' src={assets.facebook_icon} />
          <img className='max-w-md' src={assets.twitter_icon} />
          <img className='max-w-md' src={assets.instagram_icon} />
          <img className='max-w-md' src={assets.linkedin_icon} />
        </div>
      </div>
    </div>
  )
}

export default Footer
