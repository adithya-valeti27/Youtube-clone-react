import React from "react";
import "./Sidebar.css";
// import home from '../../assets/home.png'
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import explore from "../../assets/explore.png";
import subscriprion from "../../assets/subscriprion.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
// import anirudh from "../../assets/Anirudh.jpeg";
// import rahman from "../../assets/rahman.jpg";
// import weeknd from "../../assets/weeknd.png";
// import natgeo from "../../assets/Natgeo.png";
// import discovery from "../../assets/Discovery.png";
import home from "../../assets/Home.png";
import shorts from "../../assets/Shorts-icon.png";
import Subscriptions from "../../assets/subscriptions-icon.png";
import your_channel from "../../assets/channel-icon.png";
import history from "../../assets/history.png";
import playlists from "../../assets/playlist_icon.png";
import your_videos from "../../assets/your-video-icon.png";
import watch_later from "../../assets/watch-later.png";
import liked_videos from "../../assets/like-videos.jpg";
import anirudh from "../../assets/Anirudh.jpeg";
import rahman from "../../assets/rahman.jpg";
import weeknd from "../../assets/weeknd.png";
import natgeo from "../../assets/Natgeo.png";
import discovery from "../../assets/Discovery.png";
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  height="24"
  viewBox="0 0 24 24"
  width="24"
  focusable="false"
  aria-hidden="true"
  style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
>
  <path
    clip-rule="evenodd"
    d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z"
    fill-rule="evenodd"
  ></path>
</svg>;

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        {/* <div onClick={()=>{setCategory(0)}} className={`side-link ${category===0?"active":""}`}><img src={home} alt="" /><p>Home</p></div>
            <div onClick={()=>{setCategory(20)}} className={`side-link ${category===20?"active":""}`}><img src={game_icon} alt="" /><p>Gaming</p></div>
            <div onClick={()=>{setCategory(2)}} className={`side-link ${category===2?"active":""}`}><img src={automobiles} alt="" /><p>Automobiles</p></div>
            <div onClick={()=>{setCategory(17)}} className={`side-link ${category===17?"active":""}`}><img src={sports} alt="" /><p>Sports</p></div>
            <div onClick={()=>{setCategory(24)}} className={`side-link ${category===24?"active":""}`}><img src={entertainment} alt="" /><p>Entertainment</p></div>
            <div onClick={()=>{setCategory(28)}} className={`side-link ${category===28?"active":""}`}><img src={tech} alt="" /><p>Technology</p></div>
            <div onClick={()=>{setCategory(10)}} className={`side-link ${category===10?"active":""}`}><img src={music} alt="" /><p>Music</p></div>
            <div onClick={()=>{setCategory(22)}} className={`side-link ${category===22?"active":""}`}><img src={blogs} alt="" /><p>Blogs</p></div>
            <div onClick={()=>{setCategory(25)}} className={`side-link ${category===25?"active":""}`}><img src={news} alt="" /><p>News</p></div>
            <hr/> */}

        <div className="home shortcut-links ">
          <img src={home} style={{ width: "28px" }} alt="" />
          {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="10"
                viewBox="0 0 24 24"
                width="10"
                focusable="false"
                aria-hidden="true"
                style={{ pointerEvents: 'none', display: 'inherit', width: '18%', height: '18%' }}
            >
                <path
                    clipRule="evenodd"
                    d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z"
                    fillRule="evenodd"
                />
            </svg> */}
          {/* <img src="http://www.w3.org/2000/svg" alt="" /> */}
          <object data="http://www.w3.org/2000/svg" type=""></object>
          <p>Home</p>
        </div>
        <div className="shorts shortcut-links">
          <img src={shorts} style={{ width: "28px" }} alt="" />
          <p>Shorts</p>
        </div>
        <div className="subscription shortcut-links">
          <img src={Subscriptions} style={{ width: "28px" }} alt="" />
          <p>Subscriptions</p>
        </div>
        <hr />
        <h3>You</h3>
        <div className="history shortcut-links">
          <img src={history} style={{ width: "28px" }} alt="" />
          <p>History</p>
        </div>
        <div className="playlits shortcut-links">
          <img src={playlists} style={{ width: "28px" }} alt="" />
          <p>Playlists</p>
        </div>
        <div className="your_videos shortcut-links">
          <img src={your_videos} style={{ width: "28px" }} alt="" />
          <p>Your videos</p>
        </div>
        <div className="watch-later shortcut-links">
          <img src={watch_later} style={{ width: "28px" }} alt="" />
          <p>Watch Later</p>
        </div>
        <div className="liked-videos shortcut-links">
          <img src={liked_videos} style={{ width: "28px" }} alt="" />
          <p>Liked videos</p>
        </div>
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className={`side-link`}>
          <img src={discovery} alt="" />
          <p>Discovery</p>
        </div>
        <div className={`side-link`}>
          <img src={natgeo} alt="" />
          <p>NatGeo</p>
        </div>
        <div className={`side-link`}>
          <img src={rahman} alt="" />
          <p>A.R.Rahman</p>
        </div>
        <div className={`side-link`}>
          <img src={anirudh} alt="" />
          <p>Anirudh</p>
        </div>
        <div className={`side-link`}>
          <img src={weeknd} alt="" />
          <p>The Weeknd</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
