import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchAdvertsQuery } from "../store";
import { useSearchParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import AdvertListItem from "./AdvertListItem";
import "../styles/Advert.css";
function Advert() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError, isFetching } = useFetchAdvertsQuery();
  const [searchQuery, setSearchQuery] = useState("");
  let params = searchParams.get("filter");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Arama sorgusunu güncelleme
  };

  const filteredAdverts = (params) => {
    return data
      .filter((advert) => advert.category === params)
      .map((advert) => <AdvertListItem key={advert.id} advert={advert} />);
  };
  let advert;
  if (isFetching) {
    advert = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    advert = <div>Hata Var</div>;
  } else {
    if (params) {
      advert = filteredAdverts(params);
    } else {
      advert = data
        .filter((advert) =>
          advert.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((advert) => {
          return <AdvertListItem key={advert.id} advert={advert} />;
        });
    }
  }

  return (
    <section className="root">
      <h3>Ilanlar</h3>
      <div className="search-div">
        <div className="input-div">
          <input
            className="advert-searchbar"
            type="search"
            placeholder="Aradiginizi yazin"
            value={searchQuery}
            onChange={handleSearch}
          />
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
              className="advert-category-button"
              onClick={() => setSearchParams({ filter: "" })}
            >
              Tum Ilanlari
            </button>
          </div>
          <div>
            <button
              className="advert-category-button"
              onClick={() => setSearchParams({ filter: "house" })}
            >
              Ev
            </button>
          </div>
          <div>
            <button
              className="advert-category-button"
              onClick={() => setSearchParams({ filter: "clothes" })}
            >
              Giyim
            </button>
          </div>
          <div>
            <button
              className="advert-category-button"
              onClick={() => setSearchParams({ filter: "housestaff" })}
            >
              Esya,Ev
            </button>
          </div>
          <div>
            <button
              className="advert-category-button"
              onClick={() => setSearchParams({ filter: "others" })}
            >
              Diger
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
