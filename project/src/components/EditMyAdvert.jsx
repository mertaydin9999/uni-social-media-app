import React from "react";

import "../styles/CreateAdvert.css";
import { useFormik } from "formik";
import { updateAdvertSchema } from "../schemas";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function EditMyAdvert() {
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
      validationSchema: updateAdvertSchema,
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
        <h3 className="create-advert-title">Ilan Duzenle </h3>

        <hr />
        <div className="create-advert-inputs">
          <form className="inputs-form" onSubmit={handleSubmit}>
            <div className="basic-info">
              <label>Ilan Basligi</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  className={errors.title ? "input-error" : ""}
                />
              </div>
              {errors.title && <p className="error">{errors.title}</p>}
              <label className="advert-title-label">
                Basliginizi kisa ve net olmasi daha dikkat cekici olmasini
                saglar.
              </label>
            </div>
            <div className="basic-info">
              <label>Ilan Aciklamasi</label>
              <div className="advert-title-and-label">
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Ilan detaylarini giriniz"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  className={errors.description ? "input-error" : ""}
                ></textarea>
              </div>
              {errors.description && (
                <p className="error">{errors.description}</p>
              )}
              <label className="advert-title-label">
                Ilan aciklamasini yaparken ilaninizin tum inceliklerini ve
                detaylarini paylasmaniz hem sizin hem de karsi taraf icin
                mukemmel olur.
              </label>
            </div>
            <div className="basic-info">
              <label>Fotograflar</label>
              <div className="advert-title-and-label">
                <input
                  type="file"
                  name=""
                  id="images"
                  value={values.images}
                  onChange={handleChange}
                />
              </div>
              <label className="advert-title-label">
                Ilaniniza dair fotograflari yukleyiniz
              </label>
            </div>
            <div className="basic-info">
              <label>Adres Bilgileri</label>
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
              <label className="advert-title-label">
                Adresinizi acik bir sekilde belirtmek zorunda degilsiniz.
                Yalnizca acik bir adres vermeniz yeterli olacaktir.
              </label>
            </div>
            <div className="basic-info basic-price-advert">
              <label>Fiyat</label>
              <div className="advert-title-and-label">
                <input
                  className={
                    errors.price ? "price-input input-error" : "price-input"
                  }
                  type="text"
                  id="price"
                  value={values.price}
                  onChange={handleChange}
                />
                {errors.price && (
                  <label className="error">{errors.price}</label>
                )}
                <label className="advert-title-label">
                  Ilanin fiyatini belirleyiniz.
                </label>
              </div>
            </div>
            <div className="create-advert-button-div">
              <button>Vazgec</button>
              <button>Degisiklikleri Kaydet</button>
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

export default EditMyAdvert;
