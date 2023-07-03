import React from "react";
import { Link } from "react-router-dom";
import "../styles/MyAdvertsListItem.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRemoveAdvertMutation } from "../store/apis/advertsApi";

function MyAdvertsListItem({ myAdverts }) {
  const [deleteAdvert] = useRemoveAdvertMutation();
  const handleDelete = async () => {
    try {
      await deleteAdvert(myAdverts);

      // Gerekirse silme işleminden sonra ek işlemler veya güncellemeler yapın
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Link
      className="myadvert-main-root "
      to={`/advert/detail/${myAdverts.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="advert-list-item">
        <div className="list-advert-img-div">
          {myAdverts.images && (
            <img
              className="advert-list-img"
              src={myAdverts.images[0]}
              alt="Advert"
            />
          )}
        </div>

        <div className="list-advert-other-div">
          <span className="list-title-span">{myAdverts.title}</span>
          <span className="advert-list-price">{myAdverts.price} TL</span>
          <span className="list-advert-description-span">
            {myAdverts.description}
          </span>
        </div>
        <div className="update-and-delete">
          <Link
            to={`/edit-my-advert/detail/${myAdverts.id}`}
            className="update-link"
          >
            Duzenle
            <EditIcon sx={{ fontSize: 20 }} />
          </Link>
          <Link
            to="/my-adverts"
            className="delete-my-advert-button"
            onClick={handleDelete}
          >
            Sil
            <DeleteIcon sx={{ fontSize: 20 }} />
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default MyAdvertsListItem;
