import React from 'react'
import "./MenuBar.css";
import { Avatar } from '@material-ui/core';
import PortraitIcon from '@material-ui/icons/Portrait';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import TranslateIcon from '@mui/icons-material/Translate';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';

function MenuBar() {
  return (
    <div className="menubar__container">
      <div className="menubar__profile_container">
        <Avatar className="header__icon__avatar icon__icon" src="/profileavatar.png" fontSize="small"/>
        <div className="menubar__profile_container__id">
          <p>Scarlett Johnson</p>
          <p className="menubar__profile_container__para__link">Manage your Google Account</p>
        </div>
      </div>

      <hr/>

      <div className="menubar__items__with__icons">
        <PortraitIcon className="menubar__icons"/>
        <p>Your Channel</p>
      </div>

      <div className="menubar__items__with__icons">
        <SettingsApplicationsIcon className="menubar__icons"/>
        <p>Youtube Studio</p>
      </div>

      <div className="menubar__items__with__icons">
        <SwitchAccountIcon className="menubar__icons"/>
        <p>Switch account</p>
      </div>

      <div className="menubar__items__with__icons">
        <LogoutIcon className="menubar__icons"/>
        <p>Sign out</p>
      </div>

      <hr/>

      <div className="menubar__items__with__icons">
        <CurrencyExchangeIcon className="menubar__icons"/>
        <p>Purchases and memberships</p>
      </div>

      <div className="menubar__items__with__icons">
        <AdminPanelSettingsIcon className="menubar__icons"/>
        <p>Your data in Youtube</p>
      </div>

      <hr/>

      <div className="menubar__items__with__icons">
        <Brightness3Icon className="menubar__icons"/>
        <p>Appearance:Dark</p>
      </div>

      <div className="menubar__items__with__icons">
        <TranslateIcon className="menubar__icons"/>
        <p>Languages: British English</p>
      </div>

      <div className="menubar__items__with__icons">
        <PrivacyTipIcon className="menubar__icons"/>
        <p>Restricted Mode: Off</p>
      </div>

      <div className="menubar__items__with__icons">
        <LanguageIcon className="menubar__icons"/>
        <p>Location:India</p>
      </div>

      <div className="menubar__items__with__icons">
        <KeyboardIcon className="menubar__icons"/>
        <p>Keyboard shortcuts</p>
      </div>

      <hr/>

      <div className="menubar__items__with__icons">
        <SettingsIcon className="menubar__icons"/>
        <p>Settings</p>
      </div>

      <hr/>

      <div className="menubar__items__with__icons">
        <HelpIcon className="menubar__icons"/>
        <p>Help</p>
      </div>

      <div className="menubar__items__with__icons">
        <FeedbackIcon className="menubar__icons"/>
        <p>Send Feedback</p>
      </div>

    </div>
  )
}

export default MenuBar