import React, { useState, useEffect } from "react";
import { useFetchAdvertsQuery } from "../store";
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
  const [profileData, setProfileData] = useState(null);
  let myAdverts;
  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData) {
      const foundProfileData = loginData[loginData.length - 1];
      setProfileData(foundProfileData);
    }
  }, [loginData]);

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
        <div className="profile-pic-my-advert-div">
          <img
            className="profile-pic-my-adverts"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz86WkB3GhlJaFAfYpRAogTerlrxHMWivNWQ&usqp=CAU"
          />
        </div>

        <div className="photo-buttons">
          <Link to="/profile">Profile Git</Link>
          <Link to="/create-advert">Ilan Olustur</Link>
          <Link to="/advert">Ilanlar</Link>
        </div>
      </div>
      <div className="profile-right">
        <div className="advert-list-div">
          <div className="advert-list-inner-div">{myAdverts}</div>
        </div>
      </div>
    </div>
  );
}

export default MyAdverts;
