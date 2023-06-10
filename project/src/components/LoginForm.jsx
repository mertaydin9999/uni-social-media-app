import React from "react";
import "../styles/LoginForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { TailSpin } from "react-loader-spinner";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function LoginForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  return (
    <form className="root-login-form" onSubmit={handleSubmit}>
      <div className="login-inner-div">
        <h1>Giris Ekrani</h1>
        <div className="input-divs">
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-divs">
          <input
            type="password"
            placeholder="Sifre"
            id="password"
            value={values.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <Link className="lost-password">Sifremi unuttum</Link>

        <Link className="login-btn">Giris Yap</Link>
        <div className="is-member-div">
          <label className="is-member">
            Uye degil misiniz?
            <Link to="/signup" className="to-join">
              Katilmak icin tiklayiniz
            </Link>
          </label>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
