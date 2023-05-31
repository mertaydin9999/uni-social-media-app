import React from "react";
import { Link } from "react-router-dom";
import "../styles/AnnouncementListItem.css";
function AnnouncementLisItem({ announcement }) {
  return (
    <div className="announcement">
      <h4>{announcement.title}</h4>
      <p>{announcement.advertDesc}</p>

      <p>{announcement.date}</p>
      <Link
        className="to-announce"
        to={`/announcements/detail/${announcement.id}`}
      >
        Haber detayina git
      </Link>
    </div>
  );
}

export default AnnouncementLisItem;
