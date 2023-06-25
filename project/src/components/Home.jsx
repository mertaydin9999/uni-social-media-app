import React from "react";

import "../styles/Home.css";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CampaignIcon from "@mui/icons-material/Campaign";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link } from "react-router-dom";
import MyJumbotron from "./MyJumbotron";

import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
function Home() {
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
          <h4 className="title">Duyurular</h4>

          <div className="news-div inner-div">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            consequuntur vero aliquid nisi dolores, et hic dolor similique
            officiis error sed iste a earum ipsa beatae laudantium, nam quaerat
            atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium adipisci nesciunt repellendus, odit optio dignissimos
            voluptatum inventore veniam quo expedita eum eaque soluta quos enim,
            quidem quasi harum rerum temporibus?
          </div>
        </div>
        <div className=" title-div">
          <h4 className="title">Etkinlikler</h4>

          <div className="announce-div inner-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vel
            qui velit quasi alias quos ex, repudiandae doloremque aspernatur
            adipisci perferendis eveniet impedit cupiditate consequuntur iste
            obcaecati? Quae, aut a! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum soluta magnam illo nihil nulla veniam
            dolores voluptates ea, ad et facere quibusdam aperiam excepturi
            provident quisquam corporis, accusantium voluptate obcaecati?
          </div>
        </div>
        <div className="title-div">
          <h4 className="title">Haberler</h4>

          <div className="events-div inner-div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            aperiam esse, vel error enim id porro in. Dignissimos, explicabo
            numquam. Fugit quasi repellat aut ad accusamus quam, cupiditate in
            aliquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Iusto et consectetur ut nam hic. Eveniet dignissimos perspiciatis
            ratione nulla, aliquam, aspernatur deleniti reiciendis ut molestias
            laboriosam, consequuntur vitae mollitia impedit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
