import React from "react";
import "../styles/EditorDetails.css";

function EditorAnnoDetails({ announcement }) {
  return (
    <div className="editor-form-details">
      <h3 style={{ textAlign: "center" }}>Duzenleme Sayfasi</h3>
      <div>
        <label>Baslik:</label>
        <p>{announcement.title}</p>
      </div>
      <div>
        <label>Aciklama:</label>
        <p>{announcement.description}</p>
      </div>
      <div>
        <label>Universite:</label>
        Yalova
      </div>
      <label>Fotograflar:</label>

      <div className="editor-form-image-div">
        <img src={announcement.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default EditorAnnoDetails;
