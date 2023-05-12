import React from "react";
import "../styles/Footer.css";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={6}>
            <div className="logo-div">
              <AdbIcon
                sx={{
                  display: { xs: "flex", md: "flex" },
                  fontSize: 30,
                  mr: 1,
                  color: "black",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                style={{ flex: 5 }}
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: ".1rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Link to="/">CampusConnect</Link>
              </Typography>
            </div>
            <div className="about-us">
              <h2>Biz Kimiz</h2>
              <p>
                Biz CampusConnect olarak, ogrencilerin ulke genelinde bağlantı
                kurmasını, iletişim kurmasını,paylaşmasını ve aradiklari
                bilgilere daha hizli ve tek bir platform uzerinden ulasmalari
                için tasarlandık.
              </p>
              <p>
                <Link to="/contact">BIZE ULASIN</Link>
              </p>
              <div>
                <a className="social-icons" href="">
                  <TwitterIcon style={{ fontSize: "3em" }} />
                </a>
                <a className="social-icons" href="">
                  <InstagramIcon style={{ fontSize: "3em" }} />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <div className="sosyal-footer">
              <h2>Sosyal</h2>
              <Link to="/events">
                <p>
                  <a href="">ETKINLIKLER</a>
                </p>
              </Link>
              <Link>
                <p>
                  <a href="">KONSERLER</a>
                </p>
              </Link>
              <Link to="/advert">
                <p>
                  <a href="">ILANLAR</a>
                </p>
              </Link>
              <Link to="/solidatiry">
                <p>
                  <a href="">YARDIMLASMA</a>
                </p>
              </Link>
              <Link to="/announcements">
                <p>
                  <a href="">DUYURULAR</a>
                </p>
              </Link>
              <Link>
                <p>
                  <a href="">ITIRAFLAR</a>
                </p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <div className="sosyal-footer">
              <h2>Universitem</h2>
              <p>
                <a href="">OKUL</a>
              </p>
              <p>
                <a href="">KAMPUS</a>
              </p>
              <p>
                <a href="">DUYURULAR</a>
              </p>
              <p>
                <a href="">YARDIMLASMA</a>
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
