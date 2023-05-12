import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useFetchAnnouncementsQuery } from "../store";

function AnnouncementDetail() {
  const { id } = useParams();
  const { data, isError, isFetching } = useFetchAnnouncementsQuery();
  let announcement;
  if (isFetching) {
    announcement = <div>yukleniyor</div>;
  } else if (isError) {
    announcement = <div>Hata Var</div>;
  } else {
    announcement = data
      ?.filter((announcement) => announcement.id == id)
      .map((announcement) => {
        return (
          <div key={announcement.id}>
            {announcement.title}
            <p>{announcement.advertDesc}</p>
            <p>{announcement.date}</p>
          </div>
        );
      });
  }

  // let announcementDetail = announcement[id - 1];

  return (
    <div>
      <div>
        {announcement}
        <div>
          <Link to="/">
            <button>Anasayfaya Don</button>
          </Link>
          <Link to="/announcements">
            <button>Duyurulara'a Don</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementDetail;
