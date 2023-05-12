import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/EditMyAdvert.css";
function EditMyAdvert() {
  const lists = [
    {
      imageUrl: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbhoPzhSGlHth9jG-UnNQm3TKFFmGVvrXg&usqp=CAU",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbhoPzhSGlHth9jG-UnNQm3TKFFmGVvrXg&usqp=CAU",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbhoPzhSGlHth9jG-UnNQm3TKFFmGVvrXg&usqp=CAU",
      ],

      advertDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos culpa accusantium itaque molestiae corporis magni ",
      address: "Merkez Celaliye",
      price: "70TL",
    },
  ];
  return (
    <div className="general-div">
      <div>
        <div>
          {lists.map((list, index) => {
            return (
              <div key={index}>
                <div className="images-div">
                  <img src={list.imageUrl[0]} alt="" />
                  <img src={list.imageUrl[1]} alt="" />
                  <img src={list.imageUrl[2]} alt="" />
                </div>
                <div className="upload-file">
                  Fotograf Yukleyin
                  <input type="file" />
                </div>
                <div className="description">
                  <textarea
                    name=""
                    id=""
                    rows="2"
                    placeholder="Aciklama Ekleyin"
                  ></textarea>
                </div>
                <div className="address">
                  <textarea
                    name=""
                    id=""
                    rows="2"
                    placeholder="Adresinizi Ekleyin"
                  ></textarea>
                </div>
                <div className="price">
                  <input type="number" placeholder="Fiyat Girin" />
                </div>
                <div className="buttons">
                  <button>Vazgec X</button>
                  <button>
                    Degisiklikleri Kaydet
                    <EditIcon />
                  </button>
                  <button>
                    <DeleteIcon />
                    Ilani Sil
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EditMyAdvert;
