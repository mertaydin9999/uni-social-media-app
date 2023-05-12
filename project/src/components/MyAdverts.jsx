import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
function MyAdvert() {
  const lists = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbhoPzhSGlHth9jG-UnNQm3TKFFmGVvrXg&usqp=CAU",
      advertDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos culpa accusantium itaque molestiae corporis magni ",
      address: "Merkez Celaliye",
      price: "70TL",
    },
  ];
  return (
    <div>
      <div className="advert-div">
        <div className="border-advert">
          {lists.map((list, index) => {
            return (
              <>
                <div className="advert-list-item" key={index}>
                  <img className="list-image" src={list.imageUrl} alt="" />
                  <p className="list-desc">{list.advertDesc}</p>
                  <p className="list-address">{list.address}</p>
                  <p className="list-price">{list.price}</p>
                  <span>
                    <Link to="/edit-my-advert"></Link>
                    <button>
                      Duzenle <EditIcon />
                    </button>
                  </span>
                  <span>
                    <button>
                      {" "}
                      <DeleteIcon /> Sil
                    </button>
                  </span>
                </div>
              </>
            );
          })}
        </div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default MyAdvert;
