import React from "react";
import { Link } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import { useSearchParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import AdvertListItem from "./AdvertListItem";
import "../styles/Advert.css";
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
    <section className="root">
      <h3>Ilanlar</h3>
      <div className="search-div">
        <div className="input-div">
          <input type="text" placeholder="Ara" />
        </div>
        <div className="search-buttons-div">
          <Link to="/create-advert">Ilan Olustur</Link>
          <Link to="/my-adverts">Ilanlarim</Link>
        </div>
      </div>

      <div className="adverts-div">
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
        <div className="advert-list-div">
          <div className="advert-list-inner-div">{advert}</div>
        </div>
      </div>
    </section>
  );
}

export default Advert;
