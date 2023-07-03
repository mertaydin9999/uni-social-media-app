import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeInfos.css";
function HomeNews({ news }) {
  const date = new Date(news.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);

  return (
    <Link className="links-home-info" to={`/news/detail/${news.id}`}>
      <span className="links-home-date-span">{formattedDate}</span>
      <span className="links-home-date-title">{news.title}</span>
    </Link>
  );
}

export default HomeNews;
