import React from 'react';
import "./Videocard.css";
import { Avatar } from '@material-ui/core';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import {IoMdClose} from 'react-icons/io';
import "./movieitem.css";

function Videocard({image,title,channel,views,timestamp,channelImage,videoUrl}) {
  return (
    <div className="video__card">
      <Popup
        modal
        trigger={
          <img className="videocard__thumbnail" src={image} alt=""/>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer width="450px" height="250px"   style={{padding:"10px"}} url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
      <div className="video__info" >
        <Avatar className="video__avatar" alt={channel} src={channelImage}/>
        <div className="video__card__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default Videocard