import React from "react";
import { Link } from "react-router-dom";
function AdvertListItem({ advert }) {
  return (
    <Link
      to={`/advert/detail/${advert.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="advert-list-item">
        <img className="list-image" src={advert.imageUrl} alt="" />
        <p className="list-desc">{advert.advertDesc}</p>
        <p className="list-address">{advert.address}</p>
        <p className="list-price">{advert.price}</p>
      </div>
    </Link>
  );
}

export default AdvertListItem;
