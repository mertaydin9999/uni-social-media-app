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
const calculatedAge = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const currentDate = new Date();
  let age = currentDate.getFullYear() - year;
  return age;
};
function EditMyProfile() {
  const { data: usersData, isLoading: isUsersLoading } = useFetchUsersQuery();
  const { data: loginData } = useGetLoginQuery();
  const [updateUser] = useUpdateUserMutation();
  const [profileLoginData, setProfileLoginData] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && usersData) {
      const lastLogin = loginData.data[loginData.length - 1];
      const foundProfileData = usersData.data.find(
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
      password: profileLoginData?.password || "",
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
          password: profileLoginData?.password,
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
          <label htmlFor="">{profileLoginData?.address}</label>
          <br />
          <label htmlFor="">{profileLoginData?.university}</label> <br />
          <label htmlFor="">{calculatedAge(profileLoginData?.birthdate)}</label>
        </div>

        <div className="create-advert-links-div">
          <Link to="/profile" className="">
            Profili Gor
          </Link>
        </div>
      </div>
      <div className="middle-div-advert-create">
        <h3 className="create-advert-title">Profili Duzenleme </h3>

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
                {errors.surname && <p className="error">{errors.surname}</p>}
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
                <select
                  id="university"
                  name="university"
                  className="profile-select"
                  value={values.university}
                  onChange={handleChange}
                >
                  <option value="">Seçin</option>
                  {universities
                    .sort((a, b) => a.localeCompare(b))
                    .map((university) => (
                      <option key={university} value={university}>
                        {university}
                      </option>
                    ))}
                </select>
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
        <Link to="/advert" className="">
          Ilanlar
        </Link>
        <Link to="/my-adverts" className="">
          Ilanlarim
        </Link>
        <Link to="/profile" className="">
          Profilim
        </Link>
        <Link to="/" className="">
          Anasayfa
        </Link>
      </div>
    </div>
  );
}

export default EditMyProfile;
