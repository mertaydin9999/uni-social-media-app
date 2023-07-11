import React, { useState } from "react";
import "../styles/Events.css";
import { useFetchEventsQuery } from "../store";

import { Skeleton } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import EventListItem from "./EventListItem";

function Events() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError, isFetching } = useFetchEventsQuery();
  let params = searchParams.get("filter");
  let event;

  const filteredEvents = (params) => {
    event = data.data
      .filter((event) => event.category == params)
      .map((event) => {
        return <EventListItem key={event.id} event={event} />;
      });
  };

  if (isFetching) {
    event = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    event = <div>Hata var</div>;
  } else {
    if (params) {
      filteredEvents(params);
    } else {
      event = data.data.map((event) => {
        return <EventListItem key={event.id} event={event} />;
      });
    }
  }

  return (
    <div className="event-root">
      <div className="event-categories">
        <button onClick={() => setSearchParams({ filter: "" })}>
          <p>Tüm Etkinlikler</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "concert" })}>
          <p>Konserler</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "school" })}>
          <p>Okul</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "meeting" })}>
          <p>Tanışma</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "clup" })}>
          <p>Kulüp</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "opening" })}>
          <p>Açılış</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "help" })}>
          <p>Yardım</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "challenge" })}>
          <p>Yarişma</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "party" })}>
          <p>Parti</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "game" })}>
          <p>Oyun</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "travel" })}>
          <p>Gezi</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "tournament" })}>
          <p>Turnuva</p>
        </button>
      </div>
      <div className="events">
        <h3 className="event-header-title">Etkinlikler</h3>
        <div className="event-events-list">{event}</div>
      </div>
    </div>
  );
}

export default Events;
