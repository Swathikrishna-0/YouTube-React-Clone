import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="search__page">
      <div className="search__page__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow 
      image="https://i.pinimg.com/736x/d3/05/19/d30519c5d8434df57f4275f7aae12405.jpg"
      channel="On the other hand"
      verified 
      subs="660k"
      noOfVideos={382} 
      description="You can find awesome programming videos here.And try them and practice them to get efficient in react js as a beginner"
      />

      <hr/>

      <VideoRow 
        views="123k"
        subs="129k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="2 weeks ago"
        channel="Nature Videos 343" 
        title="Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum "
        image="https://www.itl.cat/pngfile/big/322-3226179_beautiful-water-wallpaper-beautiful-water-wallpaper-hd.jpg"
        videoUrl="https://www.youtube.com/watch?v=lAXsWFkKsK4"
      />

      <VideoRow 
        views="4.9k"
        subs="12k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="10 weeks ago"
        channel="Adobe Illustrator" 
        title="The standard chunk of Lorem Ipsum used since the 1500s"
        image="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/illustrator-tutorials-featured-image-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=k397HRbTtWI&t=1s"
      />

      <VideoRow 
        views="1M"
        subs="987k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="2 months ago"
        channel="Undoubtable source" 
        title="The undoubtable source. Lorem Ipsum comes from sections"
        image="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2018/09/illustrator_tutorials_10.jpg"
        videoUrl="https://www.youtube.com/watch?v=hT_nvWreIhg"
      />

      <VideoRow 
        views="20M"
        subs="992k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="10 years ago"
        channel="Established fact" 
        title="It is a long established fact that a reader will be distracted"
        image="https://creativebonito.com/wp-content/uploads/2018/09/free-adobe-illustrator-tutorials-2018-cover2-1000x560.png"
        videoUrl="https://www.youtube.com/watch?v=k8Y6ZTjmCXs"
      />

      <VideoRow 
        views="659k"
        subs="2k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="5 years ago"
        channel="Denouncing" 
        title="But I must explain to you how all this mistaken idea of denouncing pleasure"
        image="https://harshanidesign.com/wp-content/uploads/2017/05/illustrator-image-1200x1200.jpg"
        videoUrl="https://www.youtube.com/watch?v=NCDEGP6VjYY"
      />

      <VideoRow 
        views="123k"
        subs="13.6k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="3 weeks ago"
        channel="Blanditiis praesentium" 
        title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        image="https://img.freepik.com/premium-vector/cool-monkey-logo-design-vector-illustrator_93835-258.jpg?w=2000"
        videoUrl="https://www.youtube.com/watch?v=9FKnTxSC16E"
      />
        
      <VideoRow 
        views="423k"
        subs="659k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="3 years ago"
        channel="Similique sunt" 
        title="similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
        image="https://speckyboy.com/wp-content/uploads/2019/05/adobe-illustrator-character-design-tutorial-01.jpg"
        videoUrl="https://www.youtube.com/watch?v=Zi88i4CpHe4"
      />
      
      <VideoRow 
        views="23k"
        subs="65k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="5 days ago"
        channel="Find us on Youtube" 
        title="Lets build a Youtube Clone using React js "
        image="https://cdn.dribbble.com/users/1097364/screenshots/14075157/dribbbleshot-lilo_4x.gif?compress=1&resize=400x300"
        videoUrl="https://www.youtube.com/watch?v=X0tOpBuYasI"
      />

      <VideoRow 
        views="1.6k"
        subs="432k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="5 days ago"
        channel="Righteous indignation" 
        title="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled"
        image="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/avatar-logo-maker-for-a-twitch-channel-1458e-768x768.png"
        videoUrl="https://www.youtube.com/watch?v=bi2OPrRwSTk"
        />
      
      <VideoRow 
        views="92k"
        subs="659k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="3 hours ago"
        channel="Adobe Illustrator" 
        title="Contrary to popular belief, Lorem Ipsum is not simply random text"
        image="https://www.itl.cat/pngfile/big/322-3226179_beautiful-water-wallpaper-beautiful-water-wallpaper-hd.jpg"
        videoUrl="https://www.youtube.com/watch?v=tZ_ZsBHuL9A"
      /> 

      <VideoRow 
        views="12M"
        subs="65k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="5 years ago"
        channel="Adobe Illustrator" 
        title="The standard chunk of Lorem Ipsum used since the 1500s"
        image="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/illustrator-tutorials-featured-image-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=IQfmn745Zr8"
      />

      <VideoRow 
        views="5.6k"
        subs="10k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="59 seconds ago"
        channel="Undoubtable source" 
        title="The undoubtable source. Lorem Ipsum comes from sections"
        image="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2018/09/illustrator_tutorials_10.jpg"
        videoUrl="https://www.youtube.com/watch?v=NMVGsGiV8Ro"
      />

      <VideoRow 
        views="20M"
        subs="1M"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="10 years ago"
        channel="Clever Programmer" 
        title="Established fact "
        image="https://creativebonito.com/wp-content/uploads/2018/09/free-adobe-illustrator-tutorials-2018-cover2-1000x560.png"
        videoUrl="https://www.youtube.com/watch?v=e86xyGaP6Ow"
      />
      
      <VideoRow 
        views="1.3k"
        subs="9k"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        timestamp="1 day ago"
        channel="Desktop publishing" 
        title="Many desktop publishing packages and web page editors now use Lorem Ipsum"
        image="https://www.vectorgraphit.com/wp-content/uploads/2017/07/final-watercolor_mermaid-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=IQfmn745Zr8"
        />
    </div>
  )
}

export default SearchPage