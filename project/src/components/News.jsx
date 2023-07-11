import React from "react";
import "../styles/Announcements.css";
import { useSearchParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useFetchNewsQuery } from "../store";
import NewsListItem from "./NewsListItem";
function News() {
  const { data, isError, isFetching } = useFetchNewsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  let params = searchParams.get("filter");
  let news;
  const filteredNews = (params) => {
    news = data
      .filter((news) => news.category == params)
      .map((news) => {
        return <NewsListItem key={news.id} news={news} />;
      });
  };
  if (isFetching) {
    news = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    news = <div>Hata Var</div>;
  } else {
    if (params) {
      filteredNews(params);
    } else {
      news = data.map((news) => {
        return <NewsListItem key={news.id} news={news} />;
      });
    }
  }
  return (
    <div className="root">
      <header className="announcement-header">
        <h3>Haberler</h3>
      </header>
      <div className="contents">
        <div className="filter-div">
          <div>
            <button
              className="category-btn-advert "
              onClick={() => setSearchParams({ filter: "" })}
            >
              Tüm Haberler
            </button>
          </div>
          <div>
            <button
              className="category-btn-advert "
              onClick={() => setSearchParams({ filter: "help" })}
            >
              Yardım
            </button>
          </div>
          <div>
            <button
              className="category-btn-advert "
              onClick={() => setSearchParams({ filter: "city" })}
            >
              Şehir
            </button>
          </div>
          <div>
            <button
              className="category-btn-advert "
              onClick={() => setSearchParams({ filter: "transport" })}
            >
              Ulaşim
            </button>
          </div>
          <div>
            <button
              className="category-btn-advert "
              onClick={() => setSearchParams({ filter: "other" })}
            >
              Diğer
            </button>
          </div>
        </div>
        <div className="announcements-div">{news}</div>
      </div>
    </div>
  );
}

export default News;
