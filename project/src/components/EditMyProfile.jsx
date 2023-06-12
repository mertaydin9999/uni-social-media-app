import React from "react";
import "../styles/EditMyProfile.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { createAdvertSchema } from "../schemas";
import { TailSpin } from "react-loader-spinner";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function EditMyProfile() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        images: "",
        address: "",
        price: "",
        date: "",
      },
      validationSchema: createAdvertSchema,
      onSubmit,
    });
  return (
    <div className="root-create-advert">
      <div className="left-div-advert-create">
        <img
          className="advert-create-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz86WkB3GhlJaFAfYpRAogTerlrxHMWivNWQ&usqp=CAU"
        />
        <div>
          <label htmlFor="">Mert Aydin</label>
          <br />
          <label htmlFor="">Yalova</label>
          <br />
          <label htmlFor="">Yalova Universitesi</label> <br />
          <label htmlFor="">23</label>
        </div>

        <div className="create-advert-links-div">
          <Link to="/profile" className="">
            Profili Gor
          </Link>
        </div>
      </div>
      <div className="middle-div-advert-create">
        <h3 className="create-advert-title">Profili Duzenleme </h3>

        <hr />
        <div className="create-advert-inputs">
          <form className="inputs-form" onSubmit={handleSubmit}>
            <div className="basic-info basic-info2">
              <label>Ad</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <p className="error">{errors.title}</p>}
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Soyad</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <p className="error">{errors.title}</p>}
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Email</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <p className="error">{errors.title}</p>}
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Universite</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <p className="error">{errors.title}</p>}
              </div>
            </div>

            <div className="basic-info basic-info2">
              <label>Profil Fotografi</label>
              <div className="advert-title-and-label">
                <input
                  type="file"
                  name=""
                  id="images"
                  value={values.images}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Adres </label>
              <div className="advert-title-and-label">
                <textarea
                  name=""
                  cols="30"
                  rows="3"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="basic-info basic-info2 basic-info-price ">
              <label>Dogum Tarihi</label>
              <div className="advert-title-and-label">
                <input
                  className={
                    errors.price ? "price-input input-error" : "price-input"
                  }
                  type="date"
                  id="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="create-advert-button-div">
              <button>Vazgec</button>
              <button disabled={isSubmitting} type="submit">
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
                  "Degisiklikleri Kaydet!"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-div-advert-create">
        <Link to="/edit-my-profile" className="">
          Ilanlar
        </Link>
        <Link to="/profile" className="">
          Ilanlarim
        </Link>
        <Link to="/profile" className="">
          Profilim
        </Link>
        <Link to="/profile" className="">
          Anasayfa
        </Link>
      </div>
    </div>
  );
}

export default EditMyProfile;
