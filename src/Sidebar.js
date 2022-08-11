import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Sidebar() {


  return (
    <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={LibraryMusicIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={SlideshowIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
            <SidebarRow Icon={KeyboardArrowDownIcon} title="Show More"/>
            <hr/>
        </div>
    
  )
}

export default Sidebar