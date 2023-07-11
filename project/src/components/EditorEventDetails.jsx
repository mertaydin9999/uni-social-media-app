import React from "react";
import "../styles/EditorDetails.css";
function EditorEventDetails({ event }) {
  // Etkinlik detaylarını gösteren bileşen
  return (
    <div className="editor-form-details">
      <h3 style={{ textAlign: "center" }}>Düzenleme Sayfası</h3>
      <div>
        <label>Başlık:</label>
        <p>{event.title}</p>
      </div>
      <div>
        <label>Açıklama:</label>
        <p>{event.description}</p>
      </div>
      <div>
        <label>Üniversite:</label>
        {event.university}
      </div>
      <label>Fotoğraflar:</label>

      <div className="editor-form-image-div">
        <img src={event.images} alt="" />
      </div>
      
    </div>
  );
}

export default EditorEventDetails;
