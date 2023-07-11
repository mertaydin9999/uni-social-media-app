import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/AnnouncementDetail.css";
import { useFetchNewsQuery } from "../store";
function NewsDetail() {
  const { id } = useParams();
  const { data, isError, isFetching } = useFetchNewsQuery();
  let news;
  if (isFetching) {
    news = <div>yukleniyor</div>;
  } else if (isError) {
    news = <div>Hata Var</div>;
  } else {
    news = data
      ?.data.filter((news) => news.id == id)
      .map((news) => {
        const date = new Date(news.date);
        const options = {
          month: "long",
          day: "numeric",
        };
        const formattedDate = date.toLocaleString("tr-TR", options);
        return (
          <div className="announce-detail-div" key={news.id}>
            <h3 className="detail-title">{news.title}</h3>
            <div className="announce-date">
              <p>{formattedDate}</p>
            </div>
            <div>
              <p className="announce-detail-desc">{news.description}</p>
            </div>
            <div className="announce-detail-img-div">
              <img src={news.images} alt="" />
            </div>
          </div>
        );
      });
  }
  return (
    <div className="announce-detail-root">
      <div className="announce-detail-left">
        <Link to="/">Anasayfaya Don</Link>
        <Link to="/news">Haberler'e Don</Link>
      </div>
      <div className="right-announce-list">{news}</div>
    </div>
  );
}

export default NewsDetail;
