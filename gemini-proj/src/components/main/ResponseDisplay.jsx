import React from 'react'
import './Response.css'
import ReactMarkdown from 'react-markdown'
import { assets } from '../../assests/assest'

const ResponseDisplay = ({ loading, result }) => {
  if (loading) {
    return (
      <div className='response-loading flex flex-col '>
        <p className='text-2xl'>Thinking...</p>
        <img src={assets.gemini_icon} className='w-15 p-5' alt="" />
        <div className='loader'>
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    )
  }
  return (

    <div className='output-box md:text-3xl'>
      <ReactMarkdown>{result}</ReactMarkdown>
    </div>



  )
}

export default ResponseDisplay
