import React from "react";
import "../styles/SignupForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { TailSpin } from "react-loader-spinner";
import { useAddUserMutation } from "../store";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const [addUser, addUserResults] = useAddUserMutation();

  const onSubmit = async (values, actions) => {
    try {
      const addUserResult = await addUser(values);
      // Kullanıcıyı kaydetme işlemi başarılı oldu
      console.log("User added:", addUserResult);

      navigate("/login");

      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema,
      onSubmit,
    });

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="form-div">
        <h1>Kayit Ekrani</h1>
        <div className="input-divs">
          <input
            type="text"
            placeholder="Ad"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
            className={errors.firstName ? "input-error" : ""}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="input-divs">
          <input
            type="text"
            placeholder="Soyad"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            className={errors.lastName ? "input-error" : ""}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="input-divs">
          <input
            type="email"
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
        <div className="input-divs">
          <input
            type="password"
            placeholder="Sifre (Tekrar)"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button disabled={isSubmitting} type="submit" className="signup-btn">
          {isSubmitting ? (
            <TailSpin
              height="30"
              width="30"
              color="#white"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Kayit Ol"
          )}
        </button>

        <Link className="to-login" to="/login">
          Zaten hesabim var
        </Link>
      </div>
    </form>
  );
}

export default SignupForm;
