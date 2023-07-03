import React from "react";
import { Link } from "react-router-dom";
function NewsListItem({ news }) {
  const date = new Date(news.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);
  return (
    <div className="announcement">
      <h4>{news.title}</h4>
      <p>{news.description}</p>
      <div className="date-and-link">
        <p>{formattedDate}</p>
        <Link className="to-announce" to={`/news/detail/${news.id}`}>
          Haber detayina git
        </Link>
      </div>
    </div>
  );
}

export default NewsListItem;
