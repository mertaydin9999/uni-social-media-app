import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useGetLoginQuery } from "../store";
import { useFetchUsersQuery } from "../store";
import { useAddEventsMutation } from "../store/apis/eventsApi";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
const calculatedAge = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const currentDate = new Date();
  let age = currentDate.getFullYear() - year;
  return age;
};

function CreateEvent() {
  const { data: loginData } = useGetLoginQuery();
  const { data: users } = useFetchUsersQuery();

  const [addEventsMutation] = useAddEventsMutation();

  const [profileData, setProfileData] = useState(null);
  const [images, setImages] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && users) {
      const lastLogin = loginData[loginData.length - 1];
      const foundProfileData = users.find(
        (user) => user.email === lastLogin.email
      );
      setProfileData(foundProfileData);
      console.log(foundProfileData);
    }
  }, [loginData, users]);

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

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: profileData?.email || "",
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
      values.email = profileData?.email;

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
    <div className="root-create-advert">
      <div className="left-div-advert-create">
        <img
          className="advert-create-image"
          src={profileData?.profilePicture}
        />
        <div className="create-event-profile-side-infos">
          <label htmlFor="">
            {profileData?.name + " " + profileData?.surname}
          </label>
          <br />
          <label htmlFor="">{profileData?.address}</label>
          <br />
          <label htmlFor="">{profileData?.university}</label> <br />
          <label htmlFor="">{calculatedAge(profileData?.birthdate)}</label>
        </div>

        <div className="create-advert-links-div event-links-my-events">
          <Link to="/my-events" className="">
            Etkinliklerim
          </Link>
          <Link to="/profile" className="">
            Profili Gor
          </Link>
        </div>
      </div>
      <form
        className="editor-form-details create-event-form-my-event"
        onSubmit={handleSubmit}
      >
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
    </div>
  );
}

export default CreateEvent;
