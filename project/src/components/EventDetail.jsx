import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/AnnouncementDetail.css";
import { useFetchEventsQuery } from "../store";

function EventDetail() {
  const { id } = useParams();
  const { data, isError, isFetching } = useFetchEventsQuery();
  let event;
  if (isFetching) {
    event = <div>yukleniyor</div>;
  } else if (isError) {
    event = <div>Hata Var</div>;
  } else {
    event = data
      ?.filter((event) => event.id == id)
      .map((event) => {
        return (
          <div className="announce-detail-div" key={event.id}>
            <h3>{event.title}</h3>
            <div className="announce-date">
              <p>{event.date}</p>
            </div>
            <div>
              <p className="announce-detail-desc">
                {event.eventDesc}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                debitis repudiandae blanditiis tenetur laborum. Corrupti modi
                dolore itaque illum nobis accusamus? Magnam officiis tenetur id
                veritatis numquam iusto quam repellat.lorem Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nesciunt vel doloremque
                quam architecto vero error illo ut, earum nemo suscipit hic
                eveniet blanditiis perferendis quasi eaque similique nobis
                repudiandae praesentium.
              </p>
            </div>
            <div className="announce-detail-img-div">
              <img src={event.imageUrl} alt="" />
            </div>
          </div>
        );
      });
  }

  // let announcementDetail = announcement[id - 1];

  return (
    <div className="announce-detail-root">
      <div className="announce-detail-left">
        <Link to="/">Anasayfaya Don</Link>
        <Link to="/announcements">Duyurulara'a Don</Link>
      </div>
      <div className="right-announce-list">{event}</div>
    </div>
  );
}

export default EventDetail;
