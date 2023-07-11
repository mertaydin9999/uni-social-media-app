import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLoginQuery } from "../store";
import { useFetchUsersQuery } from "../store";
import { useEffect } from "react";
import "../styles/Profile.css";
const calculatedAge = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const currentDate = new Date();
  let age = currentDate.getFullYear() - year;
  return age;
};
function Profile() {
  const { data: loginData } = useGetLoginQuery();
  const { data: users } = useFetchUsersQuery();
  const [profileData, setProfileData] = useState(null);
  // loginData, API'den dönen tüm verileri içerir
  // Son eklenen veriye erişmek için:
  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && users) {
      const lastLogin = loginData.data[loginData.length - 1];
      const foundProfileData = users.data.find(
        (user) => user.email === lastLogin.email
      );
      setProfileData(foundProfileData);
    }
  }, [loginData, users]);

  console.log(profileData);
  return (
    <div className="profile-root">
      <div className="profile-main-div">
        <div className="middle-side-profile">
          <div className="left-side-profile-div">
            <img
              className="middle-side-profile-img"
              src={profileData?.profilePicture}
            />
            <Link className="go-to-edit-profile" to="/edit-my-profile">
              Profili Duzenle
            </Link>
          </div>

          <div className="right-side-profile-div">
            <div className="profile-customer-name-div">
              <p className="profile-customer-name">
                {profileData?.name + " " + profileData?.surname}
              </p>
            </div>
            <p className="profile-p">
              {profileData?.university ? profileData?.university : ""}
            </p>
            <p className="profile-p">{profileData?.address}</p>
            <p className="profile-p">{calculatedAge(profileData?.birthdate)}</p>
            <p className="profile-p">
              {profileData?.job ? profileData.job : ""}
            </p>
          </div>
        </div>

        <div className="middle-profile-advert-area">
          <div className="proflle-advert-titles">
            <Link to="/my-adverts" className="profile-advert-button">
              Ilanlarim
            </Link>
            <Link to="/my-events" className="profile-advert-button">
              Etkinliklerim
            </Link>
            <Link to="/my-messages" className="profile-advert-button">
              Mesajlarim
            </Link>

            <Link to="/my-posts" className="profile-advert-button">
              Gonderilerim
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
