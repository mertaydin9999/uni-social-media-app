import React from "react";
import "../styles/SignupForm.css";
function SignupForm() {
  return (
    <form className="page">
      <div className="cover">
        <h1>Kayit Ekrani</h1>
        <div className="inputDiv">
          <label>Adiniz:</label>
          <input type="text" placeholder="ad" />
        </div>
        <div className="inputDiv">
          <label>Soyadiniz:</label>
          <input type="text" placeholder="soyad" />
        </div>
        <div className="inputDiv">
          <label>E-mail:</label>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className="inputDiv">
          <label>Sifre:</label>
          <input type="password" placeholder="sifre" />
        </div>
        <div className="inputDiv">
          <label>Sifre (Tekrar):</label>
          <input type="password" placeholder="sifre" />
        </div>
        <div className="signup-btn ">
          <button className="kayitOl-btn">Kayit Ol</button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
