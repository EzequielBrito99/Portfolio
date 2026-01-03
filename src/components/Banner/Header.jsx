import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import WebhookIcon from '@mui/icons-material/Webhook';
import './Header.scss';

const Header = () => {
  const [bar, setBar] = useState(false);

  const handleStatusBar = () => {
    if (window.screen.width < 640) {
      setBar(!bar);
    }
  }

  return (
    <div className="lightColor fixed-top">
      <div className='header-wrapper'>
        <div className='logo'>
          <span className='green'>
            <WebhookIcon />
          </span>
          <h1>Portfolio</h1>
        </div>
        <div>
          <div onClick={handleStatusBar} className={'bars ' + (bar ? 'bar-open' : '')}>
            {
              !bar ? <MenuOpenIcon className='bar' /> : <CloseIcon className='bar' />
            }
          </div>
          <div className={'nav ' + (bar ? 'nav-open' : '')}>
            <span onClick={handleStatusBar}><a href="#home">Home</a></span>
            <span onClick={handleStatusBar}><a href="#services">Services</a></span>
            <span onClick={handleStatusBar}><a href="#skills">Skills</a></span>
            <span onClick={handleStatusBar}><a href="#projects">Projects</a></span>
            <span onClick={handleStatusBar}><a href="#footer">Contact</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

