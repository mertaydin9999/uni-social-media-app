import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeInfos.css";
function HomeEvents({ event }) {
  const date = new Date(event.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);
  return (
    <Link className="links-home-info" to={`/events/detail/${event.id}`}>
      <span className="links-home-date-span">{formattedDate}</span>
      <span className="links-home-date-title">{event.title}</span>
    </Link>
  );
}

export default HomeEvents;
