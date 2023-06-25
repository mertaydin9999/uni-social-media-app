import React from "react";

function EditorAnno({ announcement }) {
  return (
    <div>
      <p>{announcement.title}</p>
      <p>{announcement.description}</p>
      <div>
        {announcement.images.map((image, index) => {
          <img src={image} alt="" />;
        })}
      </div>
      <div>
        <button>Duzenle</button>
        <button>Sil</button>
        <button>Detaylar</button>
      </div>
    </div>
  );
}

export default EditorAnno;
