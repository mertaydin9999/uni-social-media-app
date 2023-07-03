import React, { useState, useEffect } from "react";
import "../styles/EditMyProfile.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useGetLoginQuery } from "../store";
import { TailSpin } from "react-loader-spinner";
import {
  useFetchUsersQuery,
  useUpdateUserMutation,
} from "../store/apis/usersApi";

function EditMyProfile() {
  const { data: usersData, isLoading: isUsersLoading } = useFetchUsersQuery();
  const { data: loginData } = useGetLoginQuery();
  const [updateUser] = useUpdateUserMutation();
  const [profileLoginData, setProfileLoginData] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && usersData) {
      const lastLogin = loginData[loginData.length - 1];
      const foundProfileData = usersData.find(
        (user) => user.email === lastLogin.email
      );
      setProfileLoginData(foundProfileData);

      console.log(foundProfileData);
    }
  }, [loginData, usersData]);
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: profileLoginData?.name || "",
      surname: profileLoginData?.surname || "",
      email: profileLoginData?.email || "",
      university: profileLoginData?.university || "",
      address: profileLoginData?.address || "",
      birthdate: profileLoginData?.birthdate || "",
      profilePicture: profileLoginData?.profilePicture || [],
    },
    onSubmit: async (values, actions) => {
      try {
        const updatedData = {
          id: profileLoginData?.id, // Varsayılan olarak 'usersData' nesnesinde bir 'id' özelliği olduğunu varsayalım
          name: values.name,
          surname: values.surname,
          email: values.email,
          university: values.university,
          profilePicture: values.profilePicture,
          address: values.address,
          birthdate: values.birthdate,
        };

        const response = await updateUser(updatedData);
        // Başarılı yanıtı ele al

        console.log(response); // İsteğin başarılı bir şekilde tamamlanması durumunda alınan yanıtı kontrol edebilirsiniz

        actions.resetForm();
      } catch (error) {
        // Hata durumunu ele al
        console.error(error);
      }
    },
  });
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
      setFieldValue("profilePicture", newImages);
      setImages(newImages);
    });
  };
  return (
    <div className="root-create-advert">
      <div className="left-div-advert-create">
        <img
          className="advert-create-image"
          src={profileLoginData?.profilePicture || ""}
        />
        <div className="left-profile-infos">
          <label htmlFor="">
            {profileLoginData?.name + " " + profileLoginData?.surname}
          </label>
          <br />
          <label htmlFor="">Yalova</label>
          <br />
          <label htmlFor="">{profileLoginData?.university}</label> <br />
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
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Soyad</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="surname"
                  value={values.surname}
                  onChange={handleChange}
                  className={errors.surname ? "input-error" : ""}
                />
                {errors.titsurnamele && (
                  <p className="error">{errors.surname}</p>
                )}
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Email</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
            <div className="basic-info basic-info2">
              <label>Universite</label>
              <div className="advert-title-and-label">
                <input
                  type="text"
                  placeholder="Ilan icin bir baslik giriniz"
                  id="university"
                  value={values.university}
                  onChange={handleChange}
                  className={errors.university ? "input-error" : ""}
                />
                {errors.university && (
                  <p className="error">{errors.university}</p>
                )}
              </div>
            </div>

            <div className="basic-info basic-info2">
              <label>Profil Fotografi</label>
              <div className="advert-title-and-label">
                <input
                  type="file"
                  name="profilePicture"
                  id="profilePicture"
                  accept="image/*" // Sadece resim dosyalarını kabul et
                  onChange={handleImageChange}
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
                    errors.birthdate ? "price-input input-error" : "price-input"
                  }
                  type="date"
                  id="birthdate"
                  value={values.birthdate}
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
