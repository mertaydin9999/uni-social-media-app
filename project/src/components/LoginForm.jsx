import React from "react";
import "../styles/LoginForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { TailSpin } from "react-loader-spinner";
import {
  useAddLoginMutation,
  useUpdateLoginMutation,
  useGetLoginQuery,
} from "../store/apis/loginApi";
import { useFetchUsersQuery } from "../store/apis/usersApi";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  let navigate = useNavigate();
  const [addLogin] = useAddLoginMutation();
  const { data: users } = useFetchUsersQuery();
  const [updateLogin] = useUpdateLoginMutation();
  const { data: loginData } = useGetLoginQuery();
  const onSubmit = async (values, actions) => {
    const user = users.find((user) => user.email === values.email);

    if (user && user.password === values.password) {
      if (user) {
        const addLogins = await addLogin(values);
        console.log(addLogins);
      } else {
        console.log("Login data is not available");
      }

      console.log("Success");
      navigate("/user-profile");
    } else {
      console.log("Invalid email or password");
    }

    actions.resetForm();
  };

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

        <button disabled={isSubmitting} type="submit" className="login-btn">
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
            "Giris Yap"
          )}
        </button>
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
