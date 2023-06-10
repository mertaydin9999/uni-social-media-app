import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
function EditMyProfile() {
  return (
    <div className="profile-root">
      <div className="profile-left">
        <div className="profile-pic-div">
          <img
            className="profile-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz86WkB3GhlJaFAfYpRAogTerlrxHMWivNWQ&usqp=CAU"
          />
        </div>

        <div className="photo-buttons">
          <Link to="/edit-my-profile" className="btn-edit-photo">
            Profili Duzenle
          </Link>
          <Link to="/profile" className="btn-edit-photo">
            Profili Gor
          </Link>
        </div>
      </div>
      <div className="profile-right">
        <div className="profile-title">
          <h3>Profili Duzenle</h3>
        </div>
        <hr />
        <div className="inputs">
          <form className="inputs-form" action="">
            <div className="basic-info">
              <label>Temel Bilgiler</label>
              <input type="text" placeholder="Ad ve Soyad" />
              <textarea
                cols="30"
                rows="3"
                placeholder="Hakkimda (istege bagli)"
              ></textarea>
            </div>

            <div className="contact-infos">
              <label>Iletisim Bilgileri</label>

              <input type="text" placeholder="536 123 3212" />
              <input type="email" name="" id="" placeholder="E-posta adresi" />
            </div>
            <div className="buttons-div">
              <button>Vazgec</button>
              <button>Degisiklikleri Kaydet</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditMyProfile;
