import React from 'react'
import './Response.css'
import ReactMarkdown from 'react-markdown'

const ResponseDisplay = ({ loading, result }) => {
  if (loading) {
    return (
      <div className='response-loading'>
        <p className='text-2xl'>Thinking...</p>
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
