import React from "react";

function EditorAnnoDetails({ announcement }) {
  // Duyuru detaylarını gösteren bileşen
  return (
    <div>
      <h3>{announcement.title}</h3>
      <p>{announcement.content}</p>
      {/* Düzenlemeyi sağlayan form */}
      <form>
        {/* Form alanları */}
        <input type="text" value={announcement.title} />
        <textarea value={announcement.advertDesc}></textarea>
        {/* Düzenlemeyi kaydetmek için düğme */}
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default EditorAnnoDetails;
