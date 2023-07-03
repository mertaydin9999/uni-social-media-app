import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useAddEventsMutation } from "../store/apis/eventsApi";
import { TailSpin } from "react-loader-spinner";

function EditorEventForm() {
  const [addEventsMutation] = useAddEventsMutation();
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
    },

    onSubmit: async (values, actions) => {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      values.date = formattedDate;

      await addEventsMutation(values);
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
      <h3 style={{ textAlign: "center" }}> Duyuru Oluşturma </h3>
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
      <div>
        <label htmlFor="university">Üniversite:</label>
        <input
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          value={values.university}
        />
      </div>
      <div>
        <label htmlFor="university">Tarih:</label>
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

export default EditorEventForm;
