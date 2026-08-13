import React, { useState } from 'react'
import { assets } from '../../assests/assest'
import './Sidebar.css'


const Sidebar = () => {

  const [sidebaropen, setSideBarOpen] = useState(false)

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setSideBarOpen(!sidebaropen)} className='menu' src={assets.menu_icon} alt="" />
        <div className='new-chat'>
          <img src={assets.plus_icon} alt="" />
          {sidebaropen && <p style={{ animation: 'fadeIn 2s  forwards' }}>New Chat</p>}
        </div>
        {
          sidebaropen ? (
            <div className="recent">
              <p className='recent-title'>Recent</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                {sidebaropen && <p style={{ animation: 'fadeIn 2s  forwards' }}>What is react...</p>}
              </div>
            </div>

          ) :
            null
        }


      </div>
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

    </div>
  )
}

export default Sidebar
