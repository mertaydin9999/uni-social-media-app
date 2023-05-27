import React from "react";
import "../styles/Footer.css";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import RedditIcon from "@mui/icons-material/Reddit";
function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <Link className="brand" to="/">
          CampusConnect
        </Link>
        <Link to="about-us">Hakkimizda</Link>
        <Link to="contact">Iletisim</Link>
      </div>

      <div className="footer-div">
        <h5 className="">Sosyal</h5>
        <Link to="/events">
          <p>Etkinlikler</p>
        </Link>

        <Link to="/advert">
          <p>Ilanlar</p>
        </Link>
        <Link to="/solidatiry">
          <p>Yardimlasma</p>
        </Link>
        <Link to="/announcements">
          <p>Duyurular</p>
        </Link>
      </div>
      <div className="footer-div ">
        <h5>Bizi Takip Edin!</h5>
        <div className="social">
          <Link>
            <InstagramIcon sx={{ fontSize: 50 }} />
          </Link>
          <Link>
            <TwitterIcon sx={{ fontSize: 50 }} />
          </Link>
          <Link>
            <RedditIcon sx={{ fontSize: 50 }} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
