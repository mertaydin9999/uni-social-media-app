import React from "react";
import "../styles/EventListItem.css";
import { Link } from "react-router-dom";
function EventListItem({ event }) {
  return (
    <Link className="events-link" to={`/events/detail/${event.id}`}>
      <div className="event-list-item">
        <img className="list-image" src={event.imageUrl} alt="" />
        <div>
          <h4 className="list-title">{event.title} </h4>
          <p>{event.eventDesc}</p>
          <span className="events-date">{event.date}</span>
        </div>
      </div>
    </Link>
  );
}

export default EventListItem;
