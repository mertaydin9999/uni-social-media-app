import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeInfos.css";
function HomeAnnouncement({ announcement }) {
  const date = new Date(announcement.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);

  return (
    <Link
      className="links-home-info"
      to={`/announcements/detail/${announcement.id}`}
    >
      <span className="links-home-date-span">{formattedDate}</span>

      <span className="links-home-date-title">{announcement.title}</span>
    </Link>
  );
}

export default HomeAnnouncement;
