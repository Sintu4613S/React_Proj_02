import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import './Mainbox.css'
//import Card from './cards/Card'
import { assets } from '../../assests/assest'
import { runChat } from '../../config/gemini'
//import ResponseDisplay from './ResponseDisplay'
import { useMyContext } from '../../context/MyContext'

const ResponseDisplay = lazy(() => import('./ResponseDisplay'))
const Card = lazy(() => import('./cards/Card'))

const Mainbox = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false)
  const { recentSearch, setRecentSearch, activeIndex, setActiveIndex } = useMyContext()
  //console.log('object', setRecentSearch)
  const displayResults = recentSearch.length === 0


  const handleSearch = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setRecentSearch(prev => [...prev, prompt])
    setLoading(true);
    setResult('');


    try {
      // Call the helper function from your config file
      const responseText = await runChat(prompt);
      setResult(responseText);
    } catch (error) {
      setResult('An error occurred while fetching the answer. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {displayResults ? (

        <div className='main-container'>
          <div className='greet'>
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today ?</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Card />
          </Suspense>
        </div>
      ) : (
        <div className='result'>
          <Suspense fallback={<div className='flex text-2xl justify-center items-center'>ResponseDisplay Loading...</div>}>
            <ResponseDisplay loading={loading} result={result} />
          </Suspense>
        </div>
      )
      }

      {/* Bottom Part or Search part */}
      <div className='bottom-container'>
        <div className='search-box'>
          <input
            type="text"
            placeholder='Enter prompt here'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch(e);
              if (e.key === 'Enter') setPrompt('')
            }}

          />
          <div className='flex gap-5 cursor-pointer'>
            <img src={assets.gallery_icon} className='w-6' alt="" />
            <img src={assets.mic_icon} className='w-6' alt="" />
            <button
              type="submit"
              disabled={loading}
              onClick={handleSearch}
              style={{
                cursor: loading ? 'not-allowed' : 'pointer',
                borderRadius: '8px',
                background: 'transparent', // Removes default button background
                border: 'none',
                opacity: loading ? 0.5 : 1,
                transition: 'opacity 0.2s'
              }}
            >
              {loading ? (
                <span
                  style={{ fontSize: '14px', color: '#666' }}>Lo...</span>) :
                (
                  <img
                    src={assets.send_icon}
                    className='w-6' alt="" />
                )}
            </button>
          </div>
        </div>
        <p className='text-center text-xl' style={{ marginBottom: '10px' }}>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>


      </div>
    </>
  )
}

export default Mainbox
