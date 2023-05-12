import React from "react";
import "../styles/AboutUs.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function AboutUs() {
  const aboutUniUrl =
    "https://www.anadolu.edu.tr/uploads/anadolu/galeri/photos/55310c6fa85c0.JPG";
  const aboutUs = `Biz CampusConnect olarak, ogrencilerin ulke genelinde bağlantı
  kurmasını, iletişim kurmasını,paylaşmasını ve aradiklari
  bilgilere daha hizli ve tek bir platform uzerinden ulasmalari
  için tasarlandık. Platformumuz ogrencilerin gerektiginde is bulabilecegi, yardim isteyebilecegi,kendi universitesinde bulunan ogrencilerle etkinlikler olusturabilecegi bir cok durumda ev sahipligi saglama amaciyla kurulmustur.Buradaki bilgileriniz asla ucuncu kisilerle paylasilmayacak olup platformu sabote etmeye calisan her kisi cezasini cekmekle yukumludur.`;
  const whoWeAre = `Biz tipki sizler gibi bu ulkede yasayan ve universite egitimi alan, kampuslerde bulunan , ogrenci hayatinin ne denli zorluklari oldugunun bilincinde olan universite ogrencileriyiz.Cekilen sikintilari ve boyle olsa guzel olurdu denen bir cok durumu tek bir platformda toplayarak gununuzun yalnizca 10 dakikasini ayirarak istediginiz veya ihtiyac duyduklarinizi bulabileceginiz bir platform kurma hevesiyle olusmus bir topluluguz.`;
  return (
    <>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <div>
              <h1>Hakkimizda</h1>
              {aboutUs}
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              src={aboutUniUrl}
              className="about-us-image rounded  "
              alt=""
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <div className="who-we-are">
              <h2>Biz Kimiz</h2>
              {whoWeAre}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutUs;
