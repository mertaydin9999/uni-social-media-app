import React from "react";
import { Link } from "react-router-dom";
function NewsListItem({ news }) {
  return (
    <div className="announcement">
      <h4>{news.title}</h4>
      <p>{news.description}</p>

      <p>{news.date}</p>
      <Link className="to-announce" to={`/news/detail/${news.id}`}>
        Haber detayina git
      </Link>
    </div>
  );
}

export default NewsListItem;
