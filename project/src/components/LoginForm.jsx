import React from "react";
import "../styles/LoginForm.css";
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div className="cover">
      <h1>Giris Ekrani</h1>
      <div className="inputDiv">
        <label>E-mail</label>
        <input type="text" placeholder="example@hotmail.com" />
      </div>
      <div className="inputDiv">
        <label>Sifre</label>
        <input type="password" placeholder="password" />
        <label className="forgotPassword">
          <a href="">Sifremi unuttum</a>
        </label>
      </div>

      <div className="login-btn">Giris Yap</div>
      <div>
        <label className="uyeDegilMisiniz">
          Uye degil misiniz?
          <Link className="uyeOl">Katilmak icin tiklayiniz</Link>
        </label>
      </div>
    </div>
  );
}

export default LoginForm;
