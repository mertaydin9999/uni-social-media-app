import React from "react";
import "../styles/AboutUs.css";
function AboutUs() {
  const aboutUniUrl =
    "https://www.anadolu.edu.tr/uploads/anadolu/galeri/photos/55310c6fa85c0.JPG";
  const aboutUs = `Biz CampusConnect olarak, ogrencilerin ulke genelinde bağlantı
  kurmasını, iletişim kurmasını,paylaşmasını ve aradiklari
  bilgilere daha hizli ve tek bir platform uzerinden ulasmalari
  için tasarlandık. Platformumuz ogrencilerin gerektiginde is bulabilecegi, yardim isteyebilecegi,kendi universitesinde bulunan ogrencilerle etkinlikler olusturabilecegi bir cok durumda ev sahipligi saglama amaciyla kurulmustur.Buradaki bilgileriniz asla ucuncu kisilerle paylasilmayacak olup platformu sabote etmeye calisan her kisi cezasini cekmekle yukumludur.`;
  const whoWeAre = `Biz tipki sizler gibi bu ulkede yasayan ve universite egitimi alan, kampuslerde bulunan , ogrenci hayatinin ne denli zorluklari oldugunun bilincinde olan universite ogrencileriyiz.Cekilen sikintilari ve boyle olsa guzel olurdu denen bir cok durumu tek bir platformda toplayarak gununuzun yalnizca 10 dakikasini ayirarak istediginiz veya ihtiyac duyduklarinizi bulabileceginiz bir platform kurma hevesiyle olusmus bir topluluguz.`;

  return (
    <div className="top-div">
      <div className="about-us-and-image">
        <div className="about-us-div">
          <h2>Hakkimizda</h2>
          <p>{aboutUs}</p>
        </div>
        <div className="about-us-img-div">
          <img src={aboutUniUrl} className="about-us-image rounded" alt="" />
        </div>
      </div>
      <div className="who-we-are">
        <h2>Biz Kimiz</h2>
        <p>
        {whoWeAre}
        </p>
        
      </div>
    </div>
  );
}

export default AboutUs;
