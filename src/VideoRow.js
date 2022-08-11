import React from 'react';
import './VideoRow.css';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import {IoMdClose} from 'react-icons/io';
import "./movieitem.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
  videoUrl
}) {
  return (
    <div className="VideoRow">
      <Popup modal trigger={<img src={image} alt="" />}
        className="popup-content">
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
              <ReactPlayer width="450px" height="250px" url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
     
      <div className="VideoRow__text">
        <h3>{title}</h3>
        <p className="VideoRow__headline">
          {channel} • <span className="VideoRow__subs"><span className="VideoRow__subsNo">{subs}</span> Subscribers</span> • {views} views • {timestamp}</p>
        <p className="VideoRow__description">{description}</p>
      </div>
    </div>
  )
}

export default VideoRow