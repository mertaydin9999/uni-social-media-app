import React from "react";
import "../styles/EventListItem.css";
import { Link } from "react-router-dom";
function EventListItem({ event }) {
  const date = new Date(event.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);
  return (
    <Link className="events-link" to={`/events/detail/${event.id}`}>
      <div className="event-title-area">
        <h4 className="list-title">{event.title} </h4>
      </div>
      <div className="event-description">
        <p>{event.description}</p>
      </div>
      <div className="event-list-item-image-div">
        <img className="list-image" src={event.images} alt="" />
      </div>
      <div className="event-list-item-university">
        <span className="events-date">{formattedDate}</span>

        {event.university}
      </div>
    </Link>
  );
}

export default EventListItem;
