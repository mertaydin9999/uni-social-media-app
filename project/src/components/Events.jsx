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
    event = data
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
      event = data.map((event) => {
        return <EventListItem key={event.id} event={event} />;
      });
    }
  }

  return (
    <div className="event-root">
      <div className="event-categories">
        <h4>Etkinlik turu</h4>
        <button onClick={() => setSearchParams({ filter: "" })}>
          <p>Tum Etkinlikler</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "concert" })}>
          <p>Konserler</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "community" })}>
          <p>Topluluklar</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "university" })}>
          <p>Universite</p>
        </button>
        <button onClick={() => setSearchParams({ filter: "places" })}>
          <p>Mekanlar</p>
        </button>
      </div>

      <div className="events">{event}</div>
    </div>
  );
}

export default Events;
// else {
//   event = data.map((event) => {
//     return <EventListItem key={event.id} event={event} />;
//   });
//   eventConcert = data
//     .filter((event) => event.category == "concert")
//     .map((concert) => {
//       return <EventConcert key={concert.id} concert={concert} />;
//     });
//   eventUniversity = data
//     .filter((event) => event.category == "university")
//     .map((eventUniversity) => {
//       return (
//         <EventUni
//           key={eventUniversity.id}
//           eventUniversity={eventUniversity}
//         />
//       );
//     });
//   eventCommunity = data
//     .filter((event) => event.category == "community")
//     .map((eventCommunity) => {
//       return (
//         <EventCommunity
//           key={eventCommunity.id}
//           eventCommunity={eventCommunity}
//         />
//       );
//     });
// }
