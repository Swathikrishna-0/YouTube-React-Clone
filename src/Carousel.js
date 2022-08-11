import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
  <img style={{width:"100%",height:"40vh"}}  src="https://www.designhill.com/design-blog/wp-content/uploads/2015/01/Location.jpg" onDragStart={handleDragStart} role="presentation" alt="Youtube advertisement"/>,
  <img style={{width:"100%",height:"40vh"}}  src="https://cdn.vox-cdn.com/thumbor/ynSLiNIZT9H2-gy7_8q8kXAmeB4=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63304028/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg" onDragStart={handleDragStart} role="presentation" alt="Youtube advertisement"/>,
  <img style={{width:"100%",height:"40vh"}} src="https://c4.wallpaperflare.com/wallpaper/436/25/315/transformers-bumblebee-poster-4k-wallpaper-preview.jpg" onDragStart={handleDragStart} role="presentation" alt="Youtube advertisement"/>,
  ];

  return (
    <AliceCarousel mouseTracking items={items} autoPlay="true" />
  )
}

export default Carousel