import React from "react";
import { Link } from "react-router-dom";
import "../styles/MyAdvertsListItem.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function MyAdvertsListItem({ myAdverts }) {
  return (
    <Link
      className="link-root"
      to={`/advert/detail/${myAdverts.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="my-advert-list-item">
        <div className="details">
          <img className="list-image" src={myAdverts.imageUrl} alt="" />
          <div className="detail-my-adverts">
            <p className="list-title">{myAdverts.title}</p>
            <p>{myAdverts.advertDesc}</p>
            <div className="price-and-address">
              <div className="label-and-price">
                <label className="price-label">Fiyat:</label>
                <p className="list-price">{myAdverts.price}</p>
              </div>

              <p className="list-address">{myAdverts.address}</p>
              <div className="update-and-delete">
                <Link to="/edit-my-advert" className="update-link">
                  Duzenle <EditIcon sx={{ fontSize: 20 }} />
                </Link>
                <button className="delete-my-advert-button">
                  Sil
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MyAdvertsListItem;
