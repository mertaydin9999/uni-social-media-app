import React from "react";

function EditorEventDetails({ event }) {
  // Etkinlik detaylarını gösteren bileşen
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      {/* Düzenlemeyi sağlayan form */}
      <form>
        {/* Form alanları */}
        <input type="text" value={event.title} />
        <textarea value={event.description}></textarea>
        {/* Düzenlemeyi kaydetmek için düğme */}
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default EditorEventDetails;
