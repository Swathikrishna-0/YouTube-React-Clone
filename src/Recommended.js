import React from 'react';
import './Recommended.css';
import Videocard from './Videocard';
import Carousel from './Carousel';

function Recommended() {

  return (
    <div className="videos">
      <Carousel/>
      <h2>Recommended videos</h2>
      <div className="recommended__videos">
        <Videocard  
        image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-cover-thumbnail-design-template-321b9431d485d4b404d2b26f92d35e11_screen.jpg?ts=1603983416" title="Find us on Youtube Lorem Ipsum is not simply random text" 
        channel="Youtube 101" 
        views="23k" 
        timestamp="5 days ago" 
        channelImage="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/avatar-logo-maker-for-a-twitch-channel-1458e-768x768.png"
        videoUrl="https://www.youtube.com/watch?v=k397HRbTtWI&t=1s"
        />

        <Videocard  
        image="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000" 
        title="Contrary to popular belief, Lorem Ipsum is not simply random text" 
        channel="Clever Programmer" 
        views="92k" 
        timestamp="3 hours ago" 
        channelImage="https://media.idownloadblog.com/wp-content/uploads/2022/03/Apple-peek-performance-iPhone-event-wallpaper.png"
        videoUrl="https://www.youtube.com/watch?v=AsBU3IUTHZw"
        />

        <Videocard  
        image="https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg" 
        title="Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum "
        channel="Nature Videos 343" 
        views="123k" 
        timestamp="2 years ago" 
        channelImage="https://www.itl.cat/pngfile/big/322-3226179_beautiful-water-wallpaper-beautiful-water-wallpaper-hd.jpg"
        videoUrl="https://www.youtube.com/watch?v=NCDEGP6VjYY"
        />

        <Videocard  
        image="https://wallpaperaccess.com/full/1622640.jpg" 
        title="The standard chunk of Lorem Ipsum used since the 1500s" 
        channel="Adobe Illustrator" 
        views="12M" 
        timestamp="5 years ago" 
        channelImage="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/illustrator-tutorials-featured-image-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=hT_nvWreIhg"
        />

        <Videocard  
        image="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/illustrator-tutorials-featured-image-1.jpg" 
        title="The undoubtable source. Lorem Ipsum comes from sections" 
        channel="Undoubtable source" 
        views="10k" 
        timestamp="9 days ago" 
        channelImage="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2018/09/illustrator_tutorials_10.jpg"
        videoUrl="https://www.youtube.com/watch?v=k8Y6ZTjmCXs"
        />

        <Videocard  
        image="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2018/09/illustrator_tutorials_10.jpg" 
        title="It is a long established fact that a reader will be distracted" 
        channel="Established fact" 
        views="20M" 
        timestamp="10 years ago" 
        channelImage="https://creativebonito.com/wp-content/uploads/2018/09/free-adobe-illustrator-tutorials-2018-cover2-1000x560.png"
        videoUrl="https://www.youtube.com/watch?v=NCDEGP6VjYY"
        />

        <Videocard  
        image="https://creativebonito.com/wp-content/uploads/2018/09/free-adobe-illustrator-tutorials-2018-cover2-1000x560.png" 
        title="Many desktop publishing packages and web page editors now use Lorem Ipsum" 
        channel="Desktop publishing" 
        views="1.3k" 
        timestamp="1 day ago" 
        channelImage="https://www.vectorgraphit.com/wp-content/uploads/2017/07/final-watercolor_mermaid-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=9FKnTxSC16E"
        />

        <Videocard  
        image="https://www.vectorgraphit.com/wp-content/uploads/2017/07/final-watercolor_mermaid-1.jpg" 
        title="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
        channel="Lorem Ipsum" 
        views="24k" 
        timestamp="1 year ago" 
        channelImage="https://cdn.dribbble.com/users/1037734/screenshots/14785253/media/e95714ad5e053252103318893b064626.png?compress=1&resize=400x300&vertical=top"
        videoUrl="https://www.youtube.com/watch?v=Zi88i4CpHe4"
        />

        <Videocard 
        image="https://cdn.dribbble.com/users/1037734/screenshots/14785253/media/e95714ad5e053252103318893b064626.png?compress=1&resize=400x300&vertical=top" 
        title="There are many variations of passages of Lorem Ipsum available" 
        channel="Variations of passages" 
        views="10" 
        timestamp="5 days ago" 
        channelImage="https://i.pinimg.com/originals/05/45/05/054505589c8e6aa985c67be6686e9340.jpg"
        videoUrl="https://www.youtube.com/watch?v=X0tOpBuYasI"
        />

        <Videocard  
        image="https://i.pinimg.com/originals/05/45/05/054505589c8e6aa985c67be6686e9340.jpg" 
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" 
        channel="Consectetur" 
        views="19k" 
        timestamp="10 days ago" 
        channelImage="https://miro.medium.com/max/1400/0*1vMaa20ELLUEU0G1.jpg"
        videoUrl="https://www.youtube.com/watch?v=bi2OPrRwSTk"
        />

        <Videocard  
        image="https://miro.medium.com/max/1400/0*1vMaa20ELLUEU0G1.jpg" 
        title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" 
        channel="Sed ut perspiciatis" 
        views="98k" 
        timestamp="2 days ago" 
        channelImage="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/509b77ee-f692-4821-bd15-804e289b9f30/illustrator-artworks-showcase-23.jpg"
        videoUrl="https://www.youtube.com/watch?v=tZ_ZsBHuL9A"
        />

        <Videocard  
        image="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/509b77ee-f692-4821-bd15-804e289b9f30/illustrator-artworks-showcase-23.jpg" 
        title="But I must explain to you how all this mistaken idea of denouncing pleasure" 
        channel="Denouncing" 
        views="2k" 
        timestamp="5 years ago" 
        channelImage="https://harshanidesign.com/wp-content/uploads/2017/05/illustrator-image-1200x1200.jpg"
        videoUrl="https://www.youtube.com/watch?v=IQfmn745Zr8"
        />

        <Videocard  
        image="https://harshanidesign.com/wp-content/uploads/2017/05/illustrator-image-1200x1200.jpg" 
        title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium" 
        channel="Blanditiis praesentium" 
        views="123k" 
        timestamp="3 weeks ago" 
        channelImage="https://img.freepik.com/premium-vector/cool-monkey-logo-design-vector-illustrator_93835-258.jpg?w=2000"
        videoUrl="https://www.youtube.com/watch?v=NMVGsGiV8Ro"
        />

        <Videocard  
        image="https://img.freepik.com/premium-vector/cool-monkey-logo-design-vector-illustrator_93835-258.jpg?w=2000" 
        title="similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga" 
        channel="Similique sunt" 
        views="423k" 
        timestamp="3 years ago" 
        channelImage="https://speckyboy.com/wp-content/uploads/2019/05/adobe-illustrator-character-design-tutorial-01.jpg"
        videoUrl="https://www.youtube.com/watch?v=e86xyGaP6Ow"
        />

        <Videocard  
        image="https://speckyboy.com/wp-content/uploads/2019/05/adobe-illustrator-character-design-tutorial-01.jpg" 
        title="Find us on Youtube" 
        channel="Youtube 101" 
        views="23k" 
        timestamp="5 days ago" 
        channelImage="https://cdn.dribbble.com/users/1097364/screenshots/14075157/dribbbleshot-lilo_4x.gif?compress=1&resize=400x300"
        videoUrl="https://www.youtube.com/watch?v=IQfmn745Zr8"
        />

        <Videocard  
        image="https://cdn.dribbble.com/users/1097364/screenshots/14075157/dribbbleshot-lilo_4x.gif?compress=1&resize=400x300" 
        title="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled" 
        channel="Righteous indignation" 
        views="432k" 
        timestamp="5 days ago" 
        channelImage="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/avatar-logo-maker-for-a-twitch-channel-1458e-768x768.png"
        videoUrl="https://www.youtube.com/watch?v=AsBU3IUTHZw"
        />
      </div>
      
    </div>
  )
}

export default Recommended