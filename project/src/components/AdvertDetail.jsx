import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import "../styles/AdvertDetail.css";
import EmailIcon from "@mui/icons-material/Email";
import { useGetLoginQuery } from "../store";
import { useFetchUsersQuery } from "../store";
import { useFormik } from "formik";
function AdvertDetail() {
  const { id } = useParams();
  const { data: loginData } = useGetLoginQuery();
  const { data: users } = useFetchUsersQuery();
  const [profileData, setProfileData] = useState(null);
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState("");
  const [advertOwner, setAdvertOwner] = useState(null);
  const { data: adverts, isError, isFetching } = useFetchAdvertsQuery();
  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && users && adverts) {
      const lastLogin = loginData[loginData.length - 1];
      const foundProfileData = users.find(
        (user) => user.email === lastLogin.email
      );
      const foundAdvertOwner = users.find(
        (user) => user.email === lastLogin.email
      );
      setProfileData(foundProfileData);
    }
  }, [loginData, users, adverts]);
  console.log(profileData);

  const handleSmallImageClick = (image) => {
    setSelectedImage(image);
  };

  let advertDetail;
  if (isFetching) {
    advertDetail = <div>yukleniyor</div>;
  } else if (isError) {
    advertDetail = <div>Hata Var</div>;
  } else {
    advertDetail = adverts
      ?.filter((advertDetail) => advertDetail.id == id)
      .map((advertDetail) => {
        const { values, handleChange, handleSubmit } = useFormik({
          initialValues: {
            senderEmail: "", // İlan sahibinin emailini buraya ekleyin
            receiverEmail: advertDetail.email, // İlan sahibinin emailini buraya ekleyin
            message: "İlgileniyorum!", // Gönderilecek mesajı burada belirtin
          },
          onSubmit: async (values) => {
            // Mesaj gönderme işlemlerini burada gerçekleştirin
            console.log(values);
            // ...
          },
        });
        console.log(advertDetail);
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
                    <div className="advert-detail-send-mesage-div">
                      <Link
                        className="advert-detail-send-message-link"
                        to={`/my-messages/${advertDetail.id}`}
                      >
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
