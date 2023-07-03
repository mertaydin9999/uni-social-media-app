import React from "react";
import "../styles/EventListItem.css";
import { Link } from "react-router-dom";
import { useRemoveEventMutation } from "../store/apis/eventsApi";
function MyEventListItem({ myEvents }) {
  const [deleteEvent] = useRemoveEventMutation();
  const handleDelete = async () => {
    try {
      await deleteEvent(myEvents);

      // Gerekirse silme işleminden sonra ek işlemler veya güncellemeler yapın
    } catch (error) {
      console.error(error);
    }
  };
  const date = new Date(myEvents.date);
  const options = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("tr-TR", options);
  return (
    <Link className="events-link" to={`/events/detail/${myEvents.id}`}>
      <div className="event-title-area">
        <h4 className="list-title">{myEvents.title} </h4>
      </div>
      <div className="event-description">
        <p>{myEvents.description}</p>
      </div>
      <div className="event-list-item-image-div">
        <img className="list-image" src={myEvents.images} alt="" />
      </div>
      <div className="event-list-item-university">
        <span className="events-date">{formattedDate}</span>

        {myEvents.university}
      </div>
      <Link
        to="/my-events"
        className="my-events-list-item-delete"
        onClick={handleDelete}
      >
        Sil
      </Link>
    </Link>
  );
}

export default MyEventListItem;
