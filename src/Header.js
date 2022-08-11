import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';
import  { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MenuBar from './MenuBar';
import AppsBar from './AppsBar';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

function Header() {
  const [inputSearch,setInputSearch]= useState('');



  return (
    <div className="header">

      {/* left side of the sticky navbar hamburger icon and youtube logo */}
      <div className="header__left__xl">
        <div id="navbar">
            <MenuIcon className="icon__icon" style={{color: "black"}} />
          <Link to="/">
            <img className="header__logo icon__icon" src="/youtubelogo.png" alt=""/>
          </Link>
        </div>
        
      </div>

      <div className="header__left__sm">
        <MenuIcon className="icon__icon " />

        <Link to="/">
          <img className="header__logo icon__icon youtube__icon__small" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt=""/>
        </Link>
      </div>



      
      {/* Middle of the sticky navbar with input field and search button 
      
      
      */}
      <div className="middle__container">
        <div className="header__input">
          <input 
          onChange={(e) => setInputSearch(e.target.value)} 
          value={inputSearch}  
          placeholder="Search" 
          type="text" />

          <Link to={`/search/${inputSearch}`} className="header__input__button icon__icon">
            <SearchIcon />
          </Link>
        </div>
        

        <div className="microphone__icon">
          <KeyboardVoiceIcon className="header__icon icon__icon microphone__icon__big" style={{display:'none'}}/>
        </div>
        
      </div>
      
      {/* Right side of the sticky navbar with icons and avatar */}
      <div className="header__right">

        {/* Sidebar for small screens */}

        <div className="header__input__sm">
          <input 
          onChange={(e) => setInputSearch(e.target.value)} 
          value={inputSearch}  
          placeholder="Search" 
          type="text" className='header__input__small'/>

          <Link to={`/search/${inputSearch}`} className="header__input__button__sm icon__icon">
            <SearchIcon />
          </Link>
          
        </div>

        <VideoCallIcon className="header__icon icon__icon new__small__icons" style={{display:'none'}}/>
       
        <PopupState variant="popover"     popupId="demo-popup-popover">
          {(popupState) => (
          <div>
             <AppsIcon className="header__icon icon__icon new__small__icons" variant="contained" {...bindTrigger(popupState)} style={{display:'none'}} />
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <AppsBar/>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>

        <NotificationsIcon className="header__icon icon__icon new__small__icons" style={{display:'none'}}/>
       
        <PopupState variant="popover"     popupId="demo-popup-popover">
          {(popupState) => (
          <div>
              <Avatar className="header__icon__avatar icon__icon" src="/profileavatar.png" fontSize="small" variant="contained" {...bindTrigger(popupState)} />
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <MenuBar/>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>
      </div>
      
    </div>
  )
}

export default Header