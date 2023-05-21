import React from "react";
import { Link } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import { useSearchParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import AdvertListItem from "./AdvertListItem";
import "../styles/AdvertList.css";
function Advert() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError, isFetching } = useFetchAdvertsQuery();
  let params = searchParams.get("filter");

  const filteredAdverts = (params) => {
    advert = data
      .filter((advert) => advert.category == params)
      .map((advert) => {
        return <AdvertListItem key={advert.id} advert={advert} />;
      });
  };
  let advert;
  if (isFetching) {
    advert = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    advert = <div>Hata Var</div>;
  } else {
    if (params) {
      filteredAdverts(params);
    } else {
      advert = data.map((advert) => {
        return <AdvertListItem key={advert.id} advert={advert} />;
      });
    }
  }

  return (
    <div className="root">
      <div className="div-input-create">
        <div className="input-div">
          <input type="text" placeholder="Ara" />
        </div>
        <div className="create-advert">
          <Link to="/create-advert">
            <button>Ilan Olustur </button>
          </Link>
          <Link to="/my-adverts">
            <button>Ilanlarim</button>
          </Link>
        </div>
      </div>

      <div className="general-div">
        <div className="filter-div">
          <div>
            <h4>KATEGORILER</h4>
          </div>
          <div>
            <button
              className="btn-advert"
              onClick={() => setSearchParams({ filter: "" })}
            >
              Tum Ilanlari
            </button>
          </div>
          <div>
            <button
              className="btn-advert"
              onClick={() => setSearchParams({ filter: "work" })}
            >
              Is Ilanlari
            </button>
          </div>
          <div>
            <button
              className="btn-advert"
              onClick={() => setSearchParams({ filter: "help" })}
            >
              Yardim Isteyenler
            </button>
          </div>
          <div>
            <button
              className="btn-advert"
              onClick={() => setSearchParams({ filter: "home" })}
            >
              Esya,Ev
            </button>
          </div>
        </div>
        <div className="advert-div">
          <div className="border-advert">{advert}</div>
        </div>
      </div>
    </div>
  );
}

export default Advert;
