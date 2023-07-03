import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/AnnouncementDetail.css";
import { useFetchEventsQuery } from "../store";

function EventDetail() {
  const { id } = useParams();
  const { data, isError, isFetching } = useFetchEventsQuery();
  let event;
  if (isFetching) {
    event = <div>yukleniyor</div>;
  } else if (isError) {
    event = <div>Hata Var</div>;
  } else {
    event = data
      ?.filter((event) => event.id == id)
      .map((event) => {
        const date = new Date(event.date);
        const options = {
          month: "long",
          day: "numeric",
        };
        const formattedDate = date.toLocaleString("tr-TR", options);
        return (
          <div className="announce-detail-div" key={event.id}>
            <h3>{event.title}</h3>
            <div className="announce-date">
              <p>{formattedDate}</p>
            </div>
            <div>
              <p className="announce-detail-desc">{event.description}</p>
            </div>
            <div className="announce-detail-img-div">
              <img src={event.images} alt="" />
            </div>
            <div className="announce-detail-university">
              <p>{event.university}</p>
            </div>
          </div>
        );
      });
  }

  // let announcementDetail = announcement[id - 1];

  return (
    <div className="announce-detail-root">
      <div className="announce-detail-left">
        <Link to="/">Anasayfaya Don</Link>
        <Link to="/announcements">Etkinlikler'e Don</Link>
      </div>
      <div className="right-announce-list">{event}</div>
    </div>
  );
}

export default EventDetail;
