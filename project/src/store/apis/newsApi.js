import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchNews: builder.query({
        query: () => {
          return {
            url: "/news",
            method: "GET",
          };
        },
      }),
      addNews: builder.mutation({
        query: () => {
          return {
            url: "/news",
            method: "POST",
            body: {
              name: "Can",
            },
          };
        },
      }),
      removeNews: builder.mutation({
        query: (news) => {
          return {
            url: `/news/${news.id}`,
            method: "DELETE",
          };
        },
      }),
      
    };
  },
});

export const { useFetchNewsQuery, useAddNewsMutation, useRemoveNewsMutation } =
  newsApi;
export { newsApi };
