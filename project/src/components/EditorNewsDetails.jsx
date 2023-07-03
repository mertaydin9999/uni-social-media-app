import React from "react";
import "../styles/EditorDetails.css";
function EditorNewsDetails({ news }) {
  // Haber detaylarını gösteren bileşen
  return (
    <div className="editor-form-details">
      <h3 style={{ textAlign: "center" }}>Duzenleme Sayfasi</h3>
      <div>
        <label>{news.title}</label>
      </div>
      <div>
        <p>{news.description}</p>
      </div>
      <div>
        <label>Universite:</label>
        Yalova Universitesi
      </div>
      <label>Fotograflar:</label>

      <div className="editor-form-image-div">
        <img src={news.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default EditorNewsDetails;
