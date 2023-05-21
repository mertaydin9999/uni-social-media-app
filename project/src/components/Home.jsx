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

function Home() {
  return (
    <div>
      <MyJumbotron />
      <div className="options">
        <Link className="links">Ilanlar</Link>
        <Link className="links"></Link>
        <Link className="links"></Link>
        <Link className="links"></Link>

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
