import React from "react";

function EditorNewsDetails({ news }) {
  // Haber detaylarını gösteren bileşen
  return (
    <div>
      <h3>{news.title}</h3>
      <p>{news.content}</p>
      {/* Düzenlemeyi sağlayan form */}
      <form>
        {/* Form alanları */}
        <input type="text" value={news.title} />
        <textarea value={news.content}></textarea>
        {/* Düzenlemeyi kaydetmek için düğme */}
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default EditorNewsDetails;
