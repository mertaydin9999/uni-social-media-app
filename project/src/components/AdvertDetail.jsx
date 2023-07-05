import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import "../styles/AdvertDetail.css";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

function AdvertDetail() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState("");

  const handleSmallImageClick = (image) => {
    setSelectedImage(image);
  };

  const { data, isError, isFetching } = useFetchAdvertsQuery();
  let advertDetail;
  if (isFetching) {
    advertDetail = <div>yukleniyor</div>;
  } else if (isError) {
    advertDetail = <div>Hata Var</div>;
  } else {
    advertDetail = data
      ?.filter((advertDetail) => advertDetail.id == id)
      .map((advertDetail) => {
        return (
          <div key={advertDetail.id}>
            <div className="general-div">
              <div className="left-root">
                <Link to="/advert">Ilanlar'a git</Link>
                <Link to="/my-adverts">Ilanlarim</Link>
                <Link to="/create-advert">Ilan Olustur</Link>
              </div>
              <div className="right-root">
                <div className="advert-detail-title-div">
                  {advertDetail.title}
                </div>
                <div className="top-side">
                  <div className="left-div">
                    <div className="photos-div">
                      <div className="left-photo-div">
                        <div className="big-image-div">
                          <img
                            className="advert-detail-big-img"
                            src={selectedImage || advertDetail.images[0]}
                            alt=""
                          />
                        </div>
                        <div className="small-images-div">
                          {advertDetail.images.map((image, index) => (
                            <img
                              key={index}
                              className={`small-image ${
                                selectedImage === image ? "active" : ""
                              }`}
                              src={image}
                              alt=""
                              onClick={() => handleSmallImageClick(image)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-div">
                    <div>
                      <label>Fiyat</label>
                      <span className="price">
                        {advertDetail.price} {"  TL"}
                      </span>
                    </div>
                    <div>
                      <label className="customer-label">Ilan Sahibi</label>
                      <span className="price">Mert Aydin</span>
                    </div>
                    <div>
                      <label className="address-label">Adres</label>
                      <span className="address">{advertDetail.address}</span>
                    </div>
                    <div>
                      <Link to={`/my-messages/${advertDetail.id}`}>
                        Mesaj At
                        <EmailIcon sx={{ paddingLeft: 1, fontSize: 30 }} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bottom-div">
                  <div className="bottom-advert-desc">
                    <div>
                      <h4 className="details">Detayli Aciklama</h4>
                    </div>
                    <p>{advertDetail.description}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bottom-similar-advert">
              <img src={advertDetail.imageUrl} alt="" />
              <img src={advertDetail.imageUrl} alt="" />
              <img src={advertDetail.imageUrl} alt="" />
              <img src={advertDetail.imageUrl} alt="" />
            </div> */}
          </div>
        );
      });
  }

  return <div>{advertDetail}</div>;
}

export default AdvertDetail;
// <div key={advertDetail.id}>
//   {advertDetail.address}
//   <p>{advertDetail.advertDesc}</p>
//   <p>{advertDetail.category}</p>
//   <p>{advertDetail.price}</p>
// </div>
