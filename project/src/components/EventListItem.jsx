import React from "react";

function EventListItem({ event }) {
  return (
    <div className="event">
      <img src={event.imageUrl} alt="" />
      <div>
        <h4>{event.title}</h4>
        <p>{event.eventDesc}</p>
        <p>{event.date}</p>
      </div>
    </div>
  );
}

export default EventListItem;
