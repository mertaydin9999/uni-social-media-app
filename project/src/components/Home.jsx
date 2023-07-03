import React from "react";
import "../styles/Home.css";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link } from "react-router-dom";
import MyJumbotron from "./MyJumbotron";
import HomeAnnouncement from "./HomeAnnouncement";
import HomeEvents from "./HomeEvents";
import HomeNews from "./HomeNews";
import Skeleton from "@mui/material/Skeleton";

import { useFetchAnnouncementsQuery } from "../store";
import { useFetchNewsQuery } from "../store";
import { useFetchEventsQuery } from "../store";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
function Home() {
  const {
    data: eventsData,
    isError: eventsError,
    isFetching: eventsFetching,
  } = useFetchEventsQuery();
  const {
    data: announceData,
    isError: announceError,
    isFetching: announceFetching,
  } = useFetchAnnouncementsQuery();
  const {
    data: newsData,
    isError: newsError,
    isFetching: newsFetching,
  } = useFetchNewsQuery();
  let event;
  if (eventsFetching) {
    event = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (eventsError) {
    event = <div>Hata Var</div>;
  } else {
    event = eventsData.map((event) => {
      return <HomeEvents key={event.id} event={event} />;
    });
  }
  let announcement;
  if (announceFetching) {
    announcement = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (announceError) {
    announcement = <div>Hata Var</div>;
  } else {
    announcement = announceData.map((announcement) => {
      return (
        <HomeAnnouncement key={announcement.id} announcement={announcement} />
      );
    });
  }
  let news;
  if (newsFetching) {
    news = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (newsError) {
    news = <div>Hata Var</div>;
  } else {
    news = newsData.map((news) => {
      return <HomeNews key={news.id} news={news} />;
    });
  }

  return (
    <div>
      <MyJumbotron />
      <div className="infos-div">
        <div className="info info-student">
          <ConnectWithoutContactIcon sx={{ fontSize: 50 }} />
          <span className="infos">Ogrenciler</span>
          <p>
            Kendi okulundaki ogrencilerle ders yardimi, esya satisi, tanisma,
            etkinlik gibi ihtiyac duydugun bir cok ihtiyaci CampusConnect' te
            bulabilirsin.
          </p>
        </div>
        <div className="info info-home">
          <ConnectWithoutContactIcon sx={{ fontSize: 50 }} />
          <span className="infos">Ev Sahipleri</span>
          <p>
            Sehrindeki ogrencilerin kiralik daire, esya, sicak yemek gibi
            ihtiyaclarini CampusConnect ile ulasabilir ve para kazanabilirsin.
          </p>
        </div>
        <div className="info info-company">
          <ConnectWithoutContactIcon sx={{ fontSize: 50 }} />
          <span className="infos">Isletmeler</span>
          <p>
            Sehrinizdeki ogrenciler icin indirimleri, konserleri, kampanyalari
            CampusConnect ile kolaylikla duyurabilirsin.
          </p>
        </div>
      </div>
      <p className="title-links">Ne Yapmak Istersin ?</p>
      <div className="options">
        <Link to="advert" className="links">
          <FormatListNumberedIcon sx={{ fontSize: 50 }} />
          <p className="links-text"> Ilanlar</p>
        </Link>
        <Link to="/events" className="links">
          <GroupAddIcon sx={{ fontSize: 50 }} />
          <p className="links-text">Etkinlikler</p>
        </Link>
        <Link to="/announcements" className="links">
          <CampaignIcon sx={{ fontSize: 50 }} />
          <p className="links-text">Duyurular</p>
        </Link>
        <Link to="solidatiry" className="links">
          <HandshakeIcon sx={{ fontSize: 50 }} />
          <p className="links-text">Sosyal</p>
        </Link>
      </div>
      <div className="last-news-announce-events">
        <div className="title-div">
          <h4 className="title">Etkinlikler</h4>

          <div className="news-div inner-div">{event}</div>
        </div>
        <div className=" title-div">
          <h4 className="title">Duyurular</h4>

          <div className="announce-div inner-div">{announcement}</div>
        </div>
        <div className="title-div">
          <h4 className="title">Haberler</h4>

          <div className="events-div inner-div">{news}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
