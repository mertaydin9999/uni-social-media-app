import React, { useState, useEffect } from "react";

import { useFetchPostsQuery } from "../store/apis/postsApi";
import { useGetLoginQuery } from "../store/apis/loginApi";
function MyPosts() {
  const { data: posts, isLoading } = useFetchPostsQuery();
  const [images, setImages] = useState([]);
  const { data: loginData } = useGetLoginQuery();
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    if (loginData) {
      const foundProfileData = loginData[loginData.length - 1];
      setProfileData(foundProfileData);
    }
  }, [loginData]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="solidatiry-posts">
          {posts
            ?.filter((post) => post.email == profileData?.email)
            .map((post) => (
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
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default MyPosts;
