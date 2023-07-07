import React, { useState, useEffect } from "react";
import { useFetchAdvertsQuery, useFetchUsersQuery } from "../store";
import { useSearchParams } from "react-router-dom";
import MyAdvertsListItem from "./MyAdvertsListItem";
import Skeleton from "@mui/material/Skeleton";
import "../styles/MyAdverts.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useGetLoginQuery } from "../store";
function MyAdverts() {
  const { data, isError, isFetching } = useFetchAdvertsQuery();
  const { data: loginData } = useGetLoginQuery();
  const { data: users } = useFetchUsersQuery();
  const [profileData, setProfileData] = useState(null);
  let myAdverts;
  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && users) {
      const lastLogin = loginData[loginData.length - 1];
      const foundProfileData = users.find(
        (user) => user.email === lastLogin.email
      );
      setProfileData(foundProfileData);
    }
  }, [loginData, users]);

  if (isFetching) {
    myAdverts = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    myAdverts = <div>Hata Var</div>;
  } else {
    myAdverts = data
      .filter((advert) => advert.email == profileData?.email)
      .map((advert) => (
        <MyAdvertsListItem key={advert.id} myAdverts={advert} />
      ));
    console.log(myAdverts);
  }
  return (
    <div className="my-advert-root">
      <div className="profile-left-my-adverts">
        <div className="solidatiry-profile-root my-adverts-profile">
          <img
            className="advert-create-image"
            src={profileData?.profilePicture || ""}
          />
          <div className="left-profile-infos">
            <label htmlFor="">
              {profileData?.name + " " + profileData?.surname}
            </label>
            <br />
            <label htmlFor="">Yalova</label>
            <br />
            <label htmlFor="">{profileData?.university}</label> <br />
            <label htmlFor="">23</label>
          </div>

          <div className="create-advert-links-div event-links-my-events">
            <Link to="/adverts" className="">
              Ilanlar
            </Link>
            <Link to="/profile" className="">
              Profili Gor
            </Link>
            <Link to="/create-advert" className="">
              Ilan Olustur
            </Link>
          </div>
        </div>
      </div>
      <div className="profile-right">
        <div className="my-adverts-banner">ILANLARIM</div>
        <div className="advert-list-div">
          <div className="advert-list-inner-div">{myAdverts}</div>
        </div>
      </div>
    </div>
  );
}

export default MyAdverts;
