import React from "react";
import { useState, useEffect } from "react";
import {
  useFetchPostsQuery,
  useAddPostMutation,
  useAddCommentMutation,
  useAddLikeMutation,
} from "../store/apis/postsApi";
import { useGetLoginQuery } from "../store";
import { useFetchUsersQuery } from "../store";
import { useFormik } from "formik";
import { createPostSchema } from "../schemas";
import "../styles/Solidatiry.css";
import { Link } from "react-router-dom";

function Solidatiry() {
  const { data: posts, isLoading } = useFetchPostsQuery();
  const { data: loginData } = useGetLoginQuery();
  const { data: users } = useFetchUsersQuery();
  const [profileData, setProfileData] = useState(null);
  const [addPost, { isLoading: isAddingPost }] = useAddPostMutation();
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [addLike, { isLoading: isAddingLike }] = useAddLikeMutation();
  const [images, setImages] = useState([]);

  useEffect(() => {
    // loginData ve users değiştiğinde tetiklenecek
    if (loginData && users) {
      const lastLogin = loginData.data[loginData.length - 1];
      const foundProfileData = users.data.find(
        (user) => user.email === lastLogin.email
      );
      setProfileData(foundProfileData);
      console.log();
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
      setFieldValue("postImages", newImages);
      setImages(newImages);
    });
  };
  const handleCommentSubmit = async (postId, values, { resetForm }) => {
    try {
      await addComment({ postId, comment: values.comment }); // Yorum eklemek için mutation'u çağır
      resetForm(); // Formu sıfırla
    } catch (error) {
      console.error("Yorum eklenirken bir hata oluştu:", error);
    }
  };

  const handleLikeClick = async (postId) => {
    try {
      await addLike(postId); // Beğeni eklemek için mutation'u çağır
    } catch (error) {
      console.error("Beğeni eklenirken bir hata oluştu:", error);
    }
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
      email: "",
      authorName: "",
      postImages: [],
      createdDate: "",
      postText: "",
    },
    validationSchema: createPostSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        values.createdDate = formattedDate;
        values.email = profileData.email;
        values.authorName = profileData.name + " " + profileData.surname;
        await addPost(values); // Gönderi eklemek için mutation'u çağır
        resetForm(); // Formu sıfırla
        setImages([]);
      } catch (error) {
        console.error("Gönderi eklenirken bir hata oluştu:", error);
      }
    },
  });
  function getTimeDifference(timestamp) {
    const currentDate = new Date();
    const postedDate = new Date(timestamp);
    console.log(postedDate);
    const timeDifference = currentDate - postedDate;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    if (years > 1) {
      return years + " yıllık önce";
    }

    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    if (months > 1) {
      return months + " aylık önce";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (days > 1) {
      return days + " günlük önce";
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours > 1) {
      return hours + " saatlik önce";
    }

    return "Yeni paylaşım";
  }

  const timestamp = "2023-06-26T19:59:50.273Z";
  const timeDifferenceText = getTimeDifference(timestamp);
  console.log(timeDifferenceText);

  return (
    <div className="root-solidatiry">
      <div className="solidatiry-profile-root-div">
        <div className="solidatiry-profile-root">
          <img
            className="advert-create-image"
            src={profileData?.profilePicture || ""}
          />
          <div className="left-profile-infos">
            <label htmlFor="">
              {profileData?.name + " " + profileData?.surname}
            </label>
            <br />
            <label htmlFor="">Yalova</label>
            <br />
            <label htmlFor="">{profileData?.university}</label> <br />
            <label htmlFor="">23</label>
          </div>

          <div className="create-advert-links-div event-links-my-events">
            <Link to="/my-posts" className="">
              Gonderilerim
            </Link>
            <Link to="/profile" className="">
              Profili Gor
            </Link>
          </div>
        </div>
      </div>
      <div className="solidatiry-profile-right-side">
        <form className="solidatiry-share-form" onSubmit={handleSubmit}>
          <div className="solidatiry-top-form">
            <div className="solidatiry-profile-img-div ">
              <img
                src={profileData?.profilePicture}
                alt=""
                className="solidatiry-profile-img"
              />
            </div>
            <div className="">
              <textarea
                type="text"
                cols={50}
                rows={2}
                placeholder="Ne dusunuyorsun ?"
                id="postText"
                value={values.postText}
                onChange={handleChange}
                className={errors.postText ? "input-error" : ""}
              />
              {errors.postText && <p className="error">{errors.postText}</p>}
            </div>
          </div>
          <div className="solidatiry-file-share">
            <div className="basic-info solidatiry-basic-info">
              <div className="advert-title-and-label">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    backgroundColor: "white",
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
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  name="images"
                  id="images"
                  onChange={handleImageChange}
                  className="file-input solidatiry-file-input"
                />
              </div>
            </div>
            <button
              className="solidatiry-share-button"
              type="submit"
              disabled={isSubmitting}
            >
              Paylas
            </button>
          </div>
        </form>
                      
        <hr />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="solidatiry-posts">
            {posts?.data.map((post) => (
              <li key={post.id} className="solidatiry-post">
                <div className="solidatiry-post-user-image-and-user">
                  <img
                    className="solidatiry-post-user-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BtsxnA5YZs6GpCx5KVorQlhEJ_QOq1lIqg&usqp=CAU"
                    alt=""
                    style={{
                      objectFit: "cover",
                      borderRadius: "50%",
                      aspectRatio: 2 / 2,
                      height: "4em",
                      width: "4em",
                    }}
                  />

                  <div className="solidatiry-name-and-date">
                    <p className="solidatiry-post-username">
                      {post.authorName}
                    </p>
                    <p className="solidatiry-date">
                      {getTimeDifference(post.createdDate)}
                    </p>
                  </div>
                </div>
                <div className="solidatiry-post-text">
                  <p>{post.postText}</p>
                </div>
                <div className="solidatiry-post-images">
                  {post.postImages?.map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "250px",
                          objectFit: "cover",
                          margin: "10px",
                          aspectRatio: 3 / 2,
                          borderRadius: ".5em",
                        }}
                      />
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Solidatiry;
