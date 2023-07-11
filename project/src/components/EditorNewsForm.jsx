import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useAddNewsMutation } from "../store/apis/newsApi";
import { TailSpin } from "react-loader-spinner";
const cities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];
function EditorNewsForm() {
  const [addNewsMutation] = useAddNewsMutation();
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
      university: "",
      date: "",
      createDate: "",
      category: "",
      address:"",
    },

    onSubmit: async (values, actions) => {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      values.createDate = formattedDate;

      await addNewsMutation(values);
      console.log(values);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      actions.resetForm();
      setImages([]);
    },
  });

  return (
    <form className="editor-form-details" onSubmit={handleSubmit}>
      <h3 style={{ textAlign: "center" }}> Haber Oluşturma </h3>
      <div>
        <label htmlFor="title">Başlık:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={values.title}
        />
      </div>
      <div>
        <label htmlFor="advertDesc">Açıklama:</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={values.description}
          rows="10"
          cols="30"
        ></textarea>
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
            <option value="help">Yardim</option>
            <option value="city">Sehir</option>
            <option value="transport">Ulasim</option>
            <option value="other">Diger</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="address">Sehir:</label>
        <select
          id="address"
          name="address"
          value={values.address}
          onChange={handleChange}
        >
          <option value="" disabled>
            Şehir Seçin
          </option>
          {cities.map((address) => (
            <option key={address} value={address}>
              {address}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">Tarih:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          value={values.date}
        />
      </div>
      <label htmlFor="file">Fotoğraflar:</label>
      <input type="file" id="file" name="file" onChange={handleImageChange} />
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
          "Degisiklikleri Kaydet"
        )}
      </button>
    </form>
  );
}

export default EditorNewsForm;
