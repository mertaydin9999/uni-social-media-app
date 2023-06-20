import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdvertListItem.css";
function AdvertListItem({ advert }) {
  return (
    <Link
      className="product"
      to={`/advert/detail/${advert.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="advert-list-item">
        <div className="list-advert-img-div">
          {advert.imgUrl && (
            <img
              className="advert-list-img"
              src={advert.imgUrl[0]}
              alt="Advert"
            />
          )}
        </div>

        <div className="list-advert-other-div">
          <span className="list-title-span">{advert.title}</span>
          <span className="advert-list-price">{advert.price} TL</span>
          <span className="list-advert-description-span">
            {advert.advertDesc}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default AdvertListItem;
