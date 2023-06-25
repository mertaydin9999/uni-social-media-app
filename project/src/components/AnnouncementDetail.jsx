import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/AnnouncementDetail.css";
import { useFetchAnnouncementsQuery } from "../store";

function AnnouncementDetail() {
  const { id } = useParams();
  const { data, isError, isFetching } = useFetchAnnouncementsQuery();
  let announcement;
  if (isFetching) {
    announcement = <div>yukleniyor</div>;
  } else if (isError) {
    announcement = <div>Hata Var</div>;
  } else {
    announcement = data
      ?.filter((announcement) => announcement.id == id)
      .map((announcement) => {
        return (
          <div className="announce-detail-div" key={announcement.id}>
            <h3>{announcement.title}</h3>
            <div className="announce-date">
              <p>{announcement.date}</p>
            </div>
            <div>
              <p className="announce-detail-desc">{announcement.advertDesc}</p>
            </div>
            <div className="announce-detail-img-div">
              <img src={announcement.imageUrl} alt="" />
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
        <Link to="/announcements">Duyurulara'a Don</Link>
      </div>
      <div className="right-announce-list">{announcement}</div>
    </div>
  );
}

export default AnnouncementDetail;
