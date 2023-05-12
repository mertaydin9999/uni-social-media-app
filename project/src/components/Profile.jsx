import React from "react";
import Grid from "@mui/material/Grid";
import "../styles/Profile.css";
function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className="profile-things">
          <h3> Profili Duzenle</h3>
        </div>

        <img
          className="profile-pic"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz86WkB3GhlJaFAfYpRAogTerlrxHMWivNWQ&usqp=CAU"
        />
        <div className="photo-buttons">
          <button className="btn-edit-photo">Fotografi Duzenle</button>
          <button className="btn-edit-photo">Profili Gor</button>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className="edit-profile">
          <div className="profile-title">
            <h3>Profili Duzenle</h3>
          </div>

          <div className="inputs">
            <form action="">
              <div>
                <label>Temel Bilgiler</label>
              </div>
              <div>
                <input type="text" placeholder="Ad ve Soyad" />
              </div>
              <div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="Hakkimda (istege bagli)"
                ></textarea>
              </div>
              <hr />
              <div>
                <label>Iletisim Bilgileri</label>
                <div>
                  <input type="text" placeholder="536 123 3212" />
                </div>
                <div>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="E-posta adresi"
                  />
                </div>
                <hr />
                <div className="buttons-div">
                  <button>Vazgec</button>
                  <button>Degisiklikleri Kaydet</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Profile;
