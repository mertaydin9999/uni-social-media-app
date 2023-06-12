import React from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
function Profile() {
  return (
    <div className="profile-root">
      <div className="profile-main-div">
        <div className="middle-side-profile">
          <div className="left-side-profile-div">
            <img
              className="middle-side-profile-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz86WkB3GhlJaFAfYpRAogTerlrxHMWivNWQ&usqp=CAU"
            />
            <Link className="go-to-edit-profile" to="/edit-my-profile">
              Profili Duzenle
            </Link>
          </div>

          <div className="right-side-profile-div">
            <div className="profile-customer-name-div">
              <p className="profile-customer-name">Mert Aydin</p>
            </div>
            <p className="profile-p">Yalova Universitesi</p>
            <p className="profile-p">Istanbul</p>
            <p className="profile-p">23</p>
            <p className="profile-p">Ogrenci</p>
          </div>
        </div>
        <hr />
        <div className="profile-events-join">
          <h6 className="event-i-will-go-title">Katilacagim Etkinlikler</h6>
          <div className="profile-events-div">
            <Link className="profile-events">
              <span>23.03.2023</span>
              <span>ColorFest Yalova</span>
              <span>Ciftlikkoy</span>
              <button className="cancel-profile-span">Iptal Et</button>
            </Link>
            <Link className="profile-events">
              <span>23.03.2023</span>
              <span>ColorFest Yalova</span>
              <span>Ciftlikkoy</span>
              <button className="cancel-profile-span">Iptal Et</button>
            </Link>
            <Link className="profile-events">
              <span>23.03.2023</span>
              <span>ColorFest Yalova</span>
              <span>Ciftlikkoy</span>
              <button className="cancel-profile-span">Iptal Et</button>
            </Link>
            <Link className="profile-events">
              <span>23.03.2023</span>
              <span>ColorFest Yalova</span>
              <span>Ciftlikkoy</span>
              <button className="cancel-profile-span">Iptal Et</button>
            </Link>
          </div>
          <hr />
        </div>

        <div className="middle-profile-advert-area">
          <div className="proflle-advert-titles">
            <button className="profile-advert-button">Ilanlarim</button>
            <button className="profile-advert-button">Haberler</button>
            <button className="profile-advert-button">Ilanlar'a Git</button>
            <button className="profile-advert-button"> Etkinlikler</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
