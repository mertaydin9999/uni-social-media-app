import React from "react";
import { Link } from "react-router-dom";
import "../styles/AnnouncementListItem.css";
function AnnouncementLisItem({ announcement }) {
  const date = new Date(announcement.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);

  return (
    <div className="announcement">
      <h4>{announcement.title}</h4>
      <p>{announcement.description}</p>

      <div className="date-and-link">
        <p>{formattedDate}</p>
        <Link
          className="to-announce"
          to={`/announcements/detail/${announcement.id}`}
        >
          Haber detayina git
        </Link>
      </div>
    </div>
  );
}

export default AnnouncementLisItem;
