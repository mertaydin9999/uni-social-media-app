import React from "react";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-left">
        <h3 className="title">Size Nasil Yardimci Olabilirz?</h3>
        <p>
          CampusConnect'e ilginiz icin tesekkur ederiz.En yakin zamanda sizinle
          iletisime gececegiz.
        </p>
      </div>
      <div className="contact-right">
        <form action="" className="contact-form">
          <label> E-mail:</label>
          <input type="email" name="" id="" placeholder="E-mailinizi yaziniz" />
          <label> Mesajiniz:</label>
          <textarea
            name=""
            id=""
            cols="60"
            rows="3"
            placeholder="Mesajinizi yaziniz"
          ></textarea>
          <button>Gonder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
