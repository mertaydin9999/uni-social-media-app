import React from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
function Profile() {
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
          <Link to="/edit-my-profile">Fotografi Duzenle</Link>
          <Link to="/profile">Profili Gor</Link>
        </div>
      </div>
      <div className="profile-right"></div>
    </div>
  );
}

export default Profile;
