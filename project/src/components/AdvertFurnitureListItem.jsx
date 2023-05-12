import React from "react";

function AdvertFurnitureListItem({ furnitureAdvert }) {
  return (
    <div className="advert-list-item">
      <img className="list-image" src={furnitureAdvert.imageUrl} alt="" />
      <p className="list-desc">{furnitureAdvert.advertDesc}</p>
      <p className="list-address">{furnitureAdvert.address}</p>
      <p className="list-price">{furnitureAdvert.price}</p>
      <button>Detay
          
         </button>
    </div>
  );
}

export default AdvertFurnitureListItem;
