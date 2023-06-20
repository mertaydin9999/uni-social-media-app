import React from "react";
import "../styles/CreateAdvert.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createAdvertSchema } from "../schemas";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import { useAddAdvertsMutation } from "../store";

function CreateAdvert() {
  let navigate = useNavigate();
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((imageUrls) => {
      const newImages = [...images, ...imageUrls];
      setFieldValue("images", newImages);
      setImages(newImages);
    });
  };
  const [images, setImages] = useState([]);
  const [addAdvert, results] = useAddAdvertsMutation();
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      images: [],
      address: "",
      price: "",
      date: "",
      category: "",
    },
    validationSchema: createAdvertSchema,
    onSubmit: async (values, actions) => {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      values.date = formattedDate;

      await addAdvert(values);
      console.log(values);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      actions.resetForm();
      navigate("/my-adverts");
    },
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
        <h3 className="create-advert-title">Yeni Ilan </h3>

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
                {errors.title && <p className="error">{errors.title}</p>}
                <label className="advert-title-label">
                  Basliginizi kisa ve net olmasi daha dikkat cekici olmasini
                  saglar.
                </label>
              </div>
            </div>
            <div className="basic-info">
              <label htmlFor="category">Kategori</label>
              <div className="advert-title-and-label">
                <select
                  id="category"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  className={errors.category ? "input-error" : ""}
                >
                  <option value="">Kategori Seçin</option>
                  <option value="house">Ev</option>
                  <option value="house-staff">Ev Eşyaları</option>
                  <option value="clothes">Giyim</option>
                  <option value="other">Diger</option>
                </select>
              </div>
              {errors.category && <p className="error">{errors.category}</p>}
              <label className="advert-title-label">
                İlanınızın kategorisini seçiniz.
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
                  accept="image/*"
                  multiple
                  type="file"
                  name="images"
                  id="images"
                  onChange={handleImageChange}
                  className="file-input"
                />
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    backgroundColor: "var(--botticelli)",
                    borderRadius: ".3em",
                    padding: ".5em",
                    marginTop: "1em",
                  }}
                >
                  {images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      style={{
                        width: "100px",
                        objectFit: "cover",
                        margin: "10px",
                        aspectRatio: 2 / 2,
                      }}
                    />
                  ))}
                </div>
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
            <div className="basic-info basic-info-price ">
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
                  "Ilan Ver!"
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

export default CreateAdvert;
