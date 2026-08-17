import React, { useContext, useState } from 'react'
import { assets } from '../../assests/assest'
import './Sidebar.css'
import { useMyContext } from '../../context/MyContext'
import Mainbox from '../main/Mainbox'



const Sidebar = () => {

  const [sidebaropen, setSideBarOpen] = useState(false)

  const { recentSearch, newChat, activeIndex, setActiveIndex } = useMyContext()
  console.log(recentSearch)
  console.log('Active index kya h:', activeIndex)

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setSideBarOpen(!sidebaropen)} className='menu' src={assets.menu_icon} alt="" />

        <div
          onClick={newChat}
          className='new-chat'>
          <img src={assets.plus_icon} alt="" />
          {sidebaropen && <p style={{ animation: 'fadeIn 2s  forwards' }}>New Chat</p>}
        </div>

        {sidebaropen && (
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {recentSearch && recentSearch.map((item, index) => (
              <div style={{ marginBottom: '10px' }} onClick={() => setActiveIndex(index)}
                className={`recent-entry   ${activeIndex === index
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
                key={index}>
                <img src={assets.message_icon} alt="" />
                <p style={{ animation: 'fadeIn 2s  forwards' }}>{item.slice(0, 10)}...</p>
                {/* <button className='close'>X</button> */}
              </div>
            ))}
          </div>
        )}
      </div>


      {/* Bottom div */}

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt='' />
          {sidebaropen && <p style={{ animation: 'fadeIn 2s  forwards' }}>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt='' />
          {sidebaropen && <p style={{ animation: 'fadeIn 2s  forwards' }}>History</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt='' />
          {sidebaropen && <p style={{ animation: 'fadeIn 2s  forwards' }}>Setting</p>}
        </div>

      </div>

    </div >
  )
}

export default Sidebar
