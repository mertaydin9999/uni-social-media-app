import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import "../styles/AdvertDetail.css";
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
          <div className="general-div" key={advertDetail.id}>
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
                <div className="left-title-desc-div">{advertDetail.title}</div>
                <div>Ilanlara Don</div>
                <div className="right-price-div">{advertDetail.price}</div>
                <div className="right-owner-div">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  deleniti, minima optio asperiores accusamus ea voluptatum
                </div>
                <div className="right-loc-div">{advertDetail.address}</div>
              </div>
            </div>
            <div>
              <div className="bottom-advert-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                amet deleniti exercitationem. Ipsum, possimus officiis animi sed
                nihil, nostrum quia inventore facilis iste molestiae, tenetur in
                amet officia error eos.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                ullam voluptas rerum. Delectus veritatis soluta ad maxime dolore
                omnis quas dolorem nemo pariatur! Atque consectetur tempora
                neque esse porro quidem!
              </div>
              <div className="bottom-similar-advert">
                <img src={advertDetail.imageUrl} alt="" />
                <img src={advertDetail.imageUrl} alt="" />
                <img src={advertDetail.imageUrl} alt="" />
                <img src={advertDetail.imageUrl} alt="" />
              </div>
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
