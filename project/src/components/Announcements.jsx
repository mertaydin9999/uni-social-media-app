import React from "react";
import "../styles/Announcements.css";
import { useFetchAnnouncementsQuery } from "../store/apis/announcementsApi";
import { useSearchParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import AnnouncementLisItem from "./AnnouncementLisItem";
function Announcements() {
  const { data, isError, isFetching } = useFetchAnnouncementsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  let params = searchParams.get("filter");
  const filteredAnnounces = (params) => {
    announcement = data.data
      .filter((announcement) => announcement.category == params)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((announcement) => {
        return (
          <AnnouncementLisItem
            key={announcement.id}
            announcement={announcement}
          />
        );
      });
  };
  let announcement;
  if (isFetching) {
    announcement = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    announcement = <div>Hata Var</div>;
  } else {
    if (params) {
      filteredAnnounces(params);
    } else {
      announcement = data.data.map((announcement) => {
        return (
          <AnnouncementLisItem
            key={announcement.id}
            announcement={announcement}
          />
        );
      });
    }
  }
  return (
    <div className="root">
      <header className="announcement-header">
        <h3>Duyurular</h3>
      </header>
      <div className="contents">
        <div className="filter-div">
          <div>
            <button
              className="category-btn-advert"
              onClick={() => setSearchParams({ filter: "" })}
            >
              Tüm Duyurular
            </button>
          </div>
          <div>
            <button
              className="category-btn-advert"
              onClick={() => setSearchParams({ filter: "school" })}
            >
              Okul
            </button>
          </div>
          <div>
            <button
              className="category-btn-advert"
              onClick={() => setSearchParams({ filter: "clup" })}
            >
              Kulüp
            </button>
          </div>
        </div>
        <div className="announcements-div">{announcement}</div>
      </div>
    </div>
  );
}

export default Announcements;
