import React, { useState } from 'react'
import Title from './Title'
import assets from '../../assets/assets'
import toast from 'react-hot-toast';

const ContactForm = () => {
  const onsubmit = async (e) => {
    e.preventDefault();
    const apikey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_URL


    const formData = new FormData(e.target);

    formData.append("access_key", apikey);
    try {
      const response = await fetch(`${url}submit`, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        e.target.reset();
      } else {
        toast.error(data.message);
      } v

    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='flex items-center gap-5 flex-col px-4 sm:px-12 lg:px-24 xl:px-40 py-15 text-gray-700 dark:text-white'>

      <Title title='Reach out to us' desc="Ready to grow your brand ? Let's connect and build something exceptional together ." />

      <form onSubmit={onsubmit} className='grid sm:grid-cols-2 sm:gap-5 max-w-2xl w-full '>
        <div>

          <label className='mb-2 text-sm font-medium' htmlFor="name">Your Name</label>

          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              id='name'
              name="name"
              placeholder='Enter your name'
              className=' w-full p-2 outline-none text-sm '
            />

          </div>
        </div>

        <div>

          <label className='mb-2 text-sm font-medium' htmlFor="name">Email</label>

          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              id='email'
              name="email"
              placeholder='Enter your email'
              required
              className=' w-full p-2 outline-none text-sm '
            />

          </div>
        </div>


        <div className='sm:col-span-2'>

          <label className='mb-2 text-sm font-medium' htmlFor="name">Message</label>

          <textarea
            type="text"
            placeholder='Enter your message'
            rows={5}
            name="message"
            className=' w-full p-2 outline-none text-sm rounded-lg border border-gray-300 dark:border-gray-600'
          />
        </div>
        <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103  transition-all'>
          Submit <img src={assets.arrow_icon} className='w-4' alt="" />
        </button>

      </form>
    </div>

  )
}

export default ContactForm
