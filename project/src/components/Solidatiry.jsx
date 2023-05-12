import React from "react";
import "../styles/Solidatiry.css";
function Solidatiry() {
  return (
    <div className="main-box">
      <div className="left-box">
        <p>Yardimlasma</p>
        <p>Itiraf</p>
        <p>Geyik Muhabbet</p>
      </div>
      <div className="mid-box">
        <div>Yardim Postlari</div>
        <div className="create-post">
          <form action="">
            <textarea
              id=""
              cols="30"
              rows="3"
              placeholder="Mesajiniz giriniz"
            ></textarea>
            <button>Paylas</button>
          </form>
        </div>
        <div className="posts">
          <div className="post">
            <div className="profile-pic">
              <img src="" alt="" />
            </div>
            <div className="post-div">
              <p className="post-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                maiores itaque doloremque ratione voluptates obcaecati quam
                autem dolorem reprehenderit! Ipsa a possimus illum odio
                assumenda esse molestias praesentium incidunt consequatur?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-box"></div>
    </div>
  );
}

export default Solidatiry;
