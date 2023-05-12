import React from "react";
import "../styles/Announcements.css";
import { useFetchAnnouncementsQuery } from "../store/apis/announcementsApi";

import Skeleton from "@mui/material/Skeleton";
import AnnouncementLisItem from "./AnnouncementLisItem";
function Announcements() {
  const { data, isError, isFetching } = useFetchAnnouncementsQuery();

  let announcement;
  if (isFetching) {
    announcement = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    announcement = <div>Hata Var</div>;
  } else {
    announcement = data.map((announcement) => {
      return (
        <AnnouncementLisItem
          key={announcement.id}
          announcement={announcement}
        />
      );
    });
  }
  return (
    <div>
      <h3>Duyurular</h3>
      <div>
        <div>
          <div className="announcements-div">{announcement}</div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
