import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useAddEventsMutation } from "../store/apis/eventsApi";
import { TailSpin } from "react-loader-spinner";
const universities = [
  "İstanbul Teknik Üniversitesi",
  "Orta Doğu Teknik Üniversitesi",
  "Boğaziçi Üniversitesi",
  "Koç Üniversitesi",
  "Sabancı Üniversitesi",
  "Bilkent Üniversitesi",
  "Hacettepe Üniversitesi",
  "İstanbul Üniversitesi",
  "Ankara Üniversitesi",
  "Ege Üniversitesi",
  "Dokuz Eylül Üniversitesi",
  "Yıldız Teknik Üniversitesi",
  "İzmir Yüksek Teknoloji Enstitüsü",
  "ODTÜ İleri Teknolojiler Araştırma Enstitüsü",
  "Marmara Üniversitesi",
  "Gazi Üniversitesi",
  "Çukurova Üniversitesi",
  "İstanbul Bilgi Üniversitesi",
  "İstanbul Medeniyet Üniversitesi",
  "Anadolu Üniversitesi",
  "Erciyes Üniversitesi",
  "Akdeniz Üniversitesi",
  "Selçuk Üniversitesi",
  "Uludağ Üniversitesi",
  "Pamukkale Üniversitesi",
  "Kocaeli Üniversitesi",
  "Adnan Menderes Üniversitesi",
  "Doğuş Üniversitesi",
  "Karadeniz Teknik Üniversitesi",
  "Çanakkale Onsekiz Mart Üniversitesi",
  "Haliç Üniversitesi",
  "Kadir Has Üniversitesi",
  "Eskişehir Teknik Üniversitesi",
  "Sakarya Üniversitesi",
  "Atatürk Üniversitesi",
  "Isparta Uygulamalı Bilimler Üniversitesi",
  "Abdullah Gül Üniversitesi",
  "Maltepe Üniversitesi",
  "Kahramanmaraş Sütçü İmam Üniversitesi",
  "KTO Karatay Üniversitesi",
  "Niğde Ömer Halisdemir Üniversitesi",
  "Eskişehir Osmangazi Üniversitesi",
  "Balıkesir Üniversitesi",
  "Nevşehir Hacı Bektaş Veli Üniversitesi",
  "Süleyman Demirel Üniversitesi",
  "Batman Üniversitesi",
  "Kahramanmaraş İstiklal Üniversitesi",
  "Trakya Üniversitesi",
  "Kırklareli Üniversitesi",
  "Düzce Üniversitesi",
  "Aksaray Üniversitesi",
  "Yalova Üniversitesi",
];
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
      category: "",
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
      <h3 style={{ textAlign: "center" }}> Etkinlik Oluşturma </h3>
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
        <label htmlFor="advertDesc">Kategori:</label>
        <select
          id="category"
          name="category"
          value={values.category}
          onChange={handleChange}
          className={errors.category ? "input-error" : ""}
        >
          <option value="">Kategori Seçin</option>
          <option value="meeting">Tanisma</option>
          <option value="school">Okul</option>
          <option value="clup">Kulup</option>
          <option value="concert">Konser</option>
          <option value="opening">Acilis</option>
          <option value="help">Yardim</option>
          <option value="challenge">Yarisma</option>
          <option value="party">Parti</option>
          <option value="travel">Gezi</option>
          <option value="game">Oyun</option>
          <option value="tournament">Turnuva</option>
          <option value="other">Diger</option>
        </select>
      </div>

      <div>
        <label htmlFor="university">Üniversite:</label>
        <select
          id="university"
          name="university"
          value={values.university}
          onChange={handleChange}
        >
          <option value="">Seçin</option>
          {universities
            .sort((a, b) => a.localeCompare(b)) // A'dan Z'ye sıralama
            .map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
        </select>
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
