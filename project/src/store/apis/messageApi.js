import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      getMessage: builder.query({
        providesTags: ["Message"],
        query: () => {
          return {
            url: "/messages",
            method: "GET",
          };
        },
      }),
      addMessage: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Message" }];
        },
        query: (message) => {
          return {
            url: "/messages",
            method: "POST",
            body: message,
          };
        },
      }),
    };
  },
});

export const { useAddMessageMutation, useGetMessageQuery } = messageApi;

export { messageApi };
