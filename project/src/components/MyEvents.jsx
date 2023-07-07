import React, { useState, useEffect } from "react";
import "../styles/Events.css";
import "../styles/EditMyProfile.css";
import { useFetchEventsQuery } from "../store";
import { useFetchUsersQuery } from "../store";
import { useGetLoginQuery } from "../store";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import MyEventsListItem from "./MyEventsListItem";
const calculatedAge = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const currentDate = new Date();
  let age = currentDate.getFullYear() - year;
  return age;
};

function MyEvents() {
  const { data: usersData, isLoading: isUsersLoading } = useFetchUsersQuery();
  const { data: loginData } = useGetLoginQuery();
  const [profileLoginData, setProfileLoginData] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && usersData) {
      const lastLogin = loginData[loginData.length - 1];
      const foundProfileData = usersData.find(
        (user) => user.email === lastLogin.email
      );
      setProfileLoginData(foundProfileData);

      console.log(foundProfileData);
    }
  }, [loginData, usersData]);

  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError, isFetching } = useFetchEventsQuery();
  let params = searchParams.get("filter");
  let event;

  if (isFetching) {
    event = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    event = <div>Hata var</div>;
  } else {
    event = data
      .filter((event) => event.email == profileLoginData?.email)
      .map((event) => {
        return <MyEventsListItem key={event.id} myEvents={event} />;
      });
  }

  return (
    <div className="root-create-advert">
      <div className="left-div-advert-create">
        <img
          className="advert-create-image"
          src={profileLoginData?.profilePicture || ""}
        />
        <div className="create-event-profile-side-infos">
          <label htmlFor="">
            {profileLoginData?.name + " " + profileLoginData?.surname}
          </label>
          <br />
          <label htmlFor="">{profileLoginData?.address}</label>
          <br />
          <label htmlFor="">{profileLoginData?.university}</label> <br />
          <label htmlFor="">{calculatedAge(profileLoginData?.birthdate)}</label>
        </div>

        <div className="create-advert-links-div event-links-my-events">
          <Link to="/create-event" className="">
            Etkinlik Olustur
          </Link>
          <Link to="/profile" className="">
            Profili Gor
          </Link>
        </div>
      </div>
      <div className="my-events-list-my-events">
        <div className="event-and-header-my-events">
          <h3 className="my-event-title">Etkinliklerim</h3>
          <div className="my-event-list">{event}</div>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;
