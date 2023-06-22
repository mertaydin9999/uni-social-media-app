import React from "react";
import { useState } from "react";
import {
  useFetchPostsQuery,
  useAddPostMutation,
  useAddCommentMutation,
  useAddLikeMutation,
} from "../store/apis/postsApi";
import { useFormik } from "formik";
import { createPostSchema } from "../schemas";
import "../styles/Solidatiry.css";

function Solidatiry() {
  const { data: posts, isLoading } = useFetchPostsQuery();
  const [addPost, { isLoading: isAddingPost }] = useAddPostMutation();
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [addLike, { isLoading: isAddingLike }] = useAddLikeMutation();
  const [images, setImages] = useState([]);
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
      postText: "",
    },
    validationSchema: createPostSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addPost(values); // Gönderi eklemek için mutation'u çağır
        resetForm(); // Formu sıfırla
        setImages([]);
      } catch (error) {
        console.error("Gönderi eklenirken bir hata oluştu:", error);
      }
    },
  });

  return (
    <div className="root-solidatiry">
      <form className="solidatiry-share-form" onSubmit={handleSubmit}>
        <div className="solidatiry-top-form">
          <div className="solidatiry-profile-img-div ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BtsxnA5YZs6GpCx5KVorQlhEJ_QOq1lIqg&usqp=CAU"
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
      <h2 className="solidatiry-posts-title">Gönderiler</h2>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="solidatiry-posts">
          {posts?.map((post) => (
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
                  <p className="solidatiry-post-username">Mert Aydin</p>
                  <p className="solidatiry-date">1 saat once paylasti</p>
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

              {/* <button onClick={() => handleLikeClick(post.id)}>Beğen</button>
              <p>Beğeni Sayısı: {post.postLike}</p> */}

              {/* {({ isSubmitting }) => (
                <form>
                  <div></div>
                  <button type="submit" disabled={isSubmitting}>
                    Yorum Yap
                  </button>
                </form>
              )} */}

              {/* <ul>
                {post.comments?.map((comment) => (
                  <li key={comment.id}>{comment.postComment}</li>
                ))}
              </ul> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Solidatiry;
