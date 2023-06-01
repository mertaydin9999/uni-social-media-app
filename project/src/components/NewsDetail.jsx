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
      ?.filter((news) => news.id == id)
      .map((news) => {
        return (
          <div className="announce-detail-div" key={news.id}>
            <h3>{news.title}</h3>
            <div className="announce-date">
              <p>{news.date}</p>
            </div>
            <div>
              <p className="announce-detail-desc">
                {news.description}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                debitis repudiandae blanditiis tenetur laborum. Corrupti modi
                dolore itaque illum nobis accusamus? Magnam officiis tenetur id
                veritatis numquam iusto quam repellat.lorem Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nesciunt vel doloremque
                quam architecto vero error illo ut, earum nemo suscipit hic
                eveniet blanditiis perferendis quasi eaque similique nobis
                repudiandae praesentium.
              </p>
            </div>
            <div className="announce-detail-img-div">
              <img src={news.imageUrl} alt="" />
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
