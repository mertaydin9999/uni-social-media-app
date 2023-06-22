import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query: () => {
          return {
            url: "/posts",
            method: "GET",
          };
        },
      }),
      addPost: builder.mutation({
        query: (post) => {
          return {
            url: "/posts",
            method: "POST",
            body: post,
          };
        },
      }),
      updatePost: builder.mutation({
        query: (updatedPost) => {
          return {
            url: `/posts/${updatedPost.id}`,
            method: "PUT",
            body: updatedPost,
          };
        },
      }),
      deletePost: builder.mutation({
        query: (postId) => {
          return {
            url: `/posts/${postId}`,
            method: "DELETE",
          };
        },
      }),
      addComment: builder.mutation({
        query: (postId) => {
          return {
            url: `/posts/${postId}`,
            method: "DELETE",
          };
        },
      }),
      addLike: builder.mutation({
        query: (postId) => {
          return {
            url: `/posts/${postId}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useAddCommentMutation,
  useAddLikeMutation,
} = postsApi;

export { postsApi };
