import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../styles/Home.css";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CampaignIcon from "@mui/icons-material/Campaign";

import GroupAddIcon from "@mui/icons-material/GroupAdd";

import { useState } from "react";
import { Link } from "react-router-dom";
import MyJumbotron from "./MyJumbotron";
import AdvertImage from "../assets/homepage/advert-img.jpeg";
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
        <Link className="links">
          <FormatListNumberedIcon sx={{ fontSize: 50 }} />
          <p className="links-text"> Ilanlar</p>
        </Link>
        <Link className="links">
          <GroupAddIcon sx={{ fontSize: 50 }} />
          <p className="links-text">Etkinlikler</p>
        </Link>
        <Link className="links">
          <CampaignIcon sx={{ fontSize: 50 }} />
          <p className="links-text">Duyurular</p>
        </Link>
        <Link className="links">
          <HandshakeIcon sx={{ fontSize: 50 }} />
          <p className="links-text">Yardim</p>
        </Link>
      </div>
      <div className="last-news-announce-events">
        <div className="title-div">
          <h4 className="title">Duyurular</h4>

          <div className="news-div inner-div">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            consequuntur vero aliquid nisi dolores, et hic dolor similique
            officiis error sed iste a earum ipsa beatae laudantium, nam quaerat
            atque.
          </div>
        </div>
        <div className=" title-div">
          <h4 className="title">Etkinlikler</h4>

          <div className="announce-div inner-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vel
            qui velit quasi alias quos ex, repudiandae doloremque aspernatur
            adipisci perferendis eveniet impedit cupiditate consequuntur iste
            obcaecati? Quae, aut a!
          </div>
        </div>
        <div className="title-div">
          <h4 className="title">Haberler</h4>

          <div className="events-div inner-div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            aperiam esse, vel error enim id porro in. Dignissimos, explicabo
            numquam. Fugit quasi repellat aut ad accusamus quam, cupiditate in
            aliquam.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
{
  /* <Box className="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={3} md={4}>
            <div className="home-card">
              <FormatListNumberedIcon
                sx={{
                  fontSize: 30,
                }}
              />
              <Link to="/advert">ILANLAR</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={4}>
            <div className="home-card">
              <HandshakeIcon
                sx={{
                  fontSize: 30,
                }}
              />
              <Link to="/solidatiry"> YARDIMLASMA</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={4}>
            <div className="home-card">
              <CampaignIcon
                sx={{
                  fontSize: 30,
                }}
              />
              <Link to="/announcements"> DUYURULAR</Link>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} lg={3} md={4}>
            <div className="home-card">
              <GroupAddIcon
                sx={{
                  fontSize: 30,
                }}
              />
              <Link to="/events"> Etkinlik</Link>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <div className="basliklar">
              <div className="baslik-div">
                <h4>Haberler</h4>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  molestiae dolores quidem tenetur eveniet. Amet reprehenderit
                  est quasi dolore beatae, ducimus officia quae alias neque,
                  quia porro corporis deserunt nihil.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <div className="basliklar">
              <div className="baslik-div">
                <h4>Duyurular</h4>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  molestiae dolores quidem tenetur eveniet. Amet reprehenderit
                  est quasi dolore beatae, ducimus officia quae alias neque,
                  quia porro corporis deserunt nihil.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <div className="basliklar">
              <div className="baslik-div">
                <h4>Etkinlikler</h4>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  molestiae dolores quidem tenetur eveniet. Amet reprehenderit
                  est quasi dolore beatae, ducimus officia quae alias neque,
                  quia porro corporis deserunt nihil.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box> */
}
