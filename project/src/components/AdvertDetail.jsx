import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import "../styles/AdvertDetail.css";
import EmailIcon from "@mui/icons-material/Email";
function AdvertDetail() {
  const { id } = useParams();
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
          <div>
            <div className="general-div" key={advertDetail.id}>
              <div className="left-root">
                <Link to="/advert">Ilanlar'a git</Link>
                <Link to="/my-adverts">Ilanlarim</Link>
                <Link to="/create-advert">Ilan Olustur</Link>
              </div>
              <div className="right-root">
                <div>
                  <h3 className="advert-detail-header">Ilan Detaylari</h3>
                </div>
                <div className="top-side">
                  <div className="left-div">
                    <div className="photos-div">
                      <div className="left-photo-div">
                        <div className="big-image-div">
                          <img src={advertDetail.imageUrl} alt="" />
                        </div>
                        <div className="small-images-div">
                          <img
                            className="small-image"
                            src={advertDetail.imageUrl}
                            alt=""
                          />
                          <img
                            className="small-image"
                            src={advertDetail.imageUrl}
                            alt=""
                          />
                          <img
                            className="small-image"
                            src={advertDetail.imageUrl}
                            alt=""
                          />
                          <img
                            className="small-image"
                            src={advertDetail.imageUrl}
                            alt=""
                          />
                          <img
                            className="small-image"
                            src={advertDetail.imageUrl}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-div">
                    <div className="left-title-div">{advertDetail.title}</div>
                    <div>
                      <label className="price-label">Fiyat</label>
                      <span className="price">{advertDetail.price}</span>
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
                      <button>
                        Mesaj At
                        <EmailIcon sx={{ paddingLeft: 1, fontSize: 30 }} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bottom-div">
                  <div className="bottom-advert-desc">
                    <div>
                      <h4 className="details">Detayli Aciklama</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sequi amet deleniti exercitationem. Ipsum, possimus
                      officiis animi sed nihil, nostrum quia inventore facilis
                      iste molestiae, tenetur in amet officia error eos.
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed ullam voluptas rerum. Delectus veritatis soluta ad
                      maxime dolore omnis quas dolorem nemo pariatur! Atque
                      consectetur tempora neque esse porro quidem!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-similar-advert">
              <img src={advertDetail.imageUrl} alt="" />
              <img src={advertDetail.imageUrl} alt="" />
              <img src={advertDetail.imageUrl} alt="" />
              <img src={advertDetail.imageUrl} alt="" />
            </div>
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
