import React from "react";

function Concert({ konser }) {
  return (
    <div className="event">
      <img src={konser.imageUrl} alt="" />
      <div>
        <h4>{konser.title}</h4>
        <p>{konser.eventDesc}</p>
        <p>{konser.date}</p>
      </div>
    </div>
  );
}

export default Concert;
