import React from "react";
import "../styles/EditorDetails.css";
function EditorEventDetails({ event }) {
  // Etkinlik detaylarını gösteren bileşen
  return (
    <div className="editor-form-details">
      <h3 style={{ textAlign: "center" }}>Duzenleme Sayfasi</h3>
      <div>
        <label>Baslik:</label>
        <p>{event.title}</p>
      </div>
      <div>
        <label>Aciklama:</label>
        <p>{event.description}</p>
      </div>
      <div>
        <label>Universite:</label>
        Yalova Universitesi
      </div>
      <label>Fotograflar:</label>

      <div className="editor-form-image-div">
        <img src={event.imageUrl} alt="" />
      </div>
      
    </div>
  );
}

export default EditorEventDetails;
