import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      addContact: builder.mutation({
        query: (message) => {
          return {
            url: "/contacts",
            method: "POST",
            body: message,
          };
        },
      }),
    };
  },
});

export const { useAddContactMutation } = contactApi;

export { contactApi };
