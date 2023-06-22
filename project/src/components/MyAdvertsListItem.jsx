import React from "react";
import { Link } from "react-router-dom";
import "../styles/MyAdvertsListItem.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function MyAdvertsListItem({ myAdverts }) {
  return (
    <Link
      className="myadvert-main-root "
      to={`/advert/detail/${myAdverts.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      
      <div className="advert-list-item">
        <div className="list-advert-img-div">
          {myAdverts.imgUrl && (
            <img
              className="advert-list-img"
              src={myAdverts.imgUrl[0]}
              alt="Advert"
            />
          )}
        </div>

        <div className="list-advert-other-div">
          <span className="list-title-span">{myAdverts.title}</span>
          <span className="advert-list-price">{myAdverts.price} TL</span>
          <span className="list-advert-description-span">
            {myAdverts.advertDesc}
          </span>
        </div>
        <div className="update-and-delete">
          <Link to="/edit-my-advert" className="update-link">
            Duzenle
            <EditIcon sx={{ fontSize: 20 }} />
          </Link>
          <Link to="edit-my-advert" className="delete-my-advert-button">
            Sil
            <DeleteIcon sx={{ fontSize: 20 }} />
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default MyAdvertsListItem;
