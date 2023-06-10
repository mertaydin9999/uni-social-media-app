import React from "react";
import { useFetchAdvertsQuery } from "../store";
import { useSearchParams } from "react-router-dom";
import MyAdvertsListItem from "./MyAdvertsListItem";
import Skeleton from "@mui/material/Skeleton";
import "../styles/MyAdverts.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
function MyAdverts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError, isFetching } = useFetchAdvertsQuery();
  let params = searchParams.get("filter");

  const filteredAdverts = (params) => {
    myAdverts = data
      .filter((myAdverts) => myAdverts.category == params)
      .map((myAdverts) => {
        return <MyAdvertsListItem key={myAdverts.id} myAdverts={myAdverts} />;
      });
  };
  let myAdverts;
  if (isFetching) {
    myAdverts = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    myAdverts = <div>Hata Var</div>;
  } else {
    if (params) {
      filteredAdverts(params);
    } else {
      myAdverts = data.map((myAdverts) => {
        return <MyAdvertsListItem key={myAdverts.id} myAdverts={myAdverts} />;
      });
    }
  }
  return (
    <div className="my-advert-root">
      <div className="profile-left">
        <div className="profile-pic-div">
          <img
            className="profile-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz86WkB3GhlJaFAfYpRAogTerlrxHMWivNWQ&usqp=CAU"
          />
        </div>

        <div className="photo-buttons">
          <Link to="/profile">Profile Git</Link>
          <Link to="/create-advert">Ilan Olustur</Link>
          <Link to="/advert">Ilanlar</Link>
        </div>
      </div>
      <div className="profile-right">
        <div className="advert-list-div">
          <div className="advert-list-inner-div">{myAdverts}</div>
        </div>
      </div>
    </div>
  );
}

export default MyAdverts;
