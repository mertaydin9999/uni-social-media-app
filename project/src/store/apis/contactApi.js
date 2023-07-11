import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      getContact: builder.query({
        query: () => {
          return {
            url: "/contacts",
            method: "GET",
          };
        },
      }),
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

export const { useAddContactMutation ,useGetContactQuery} = contactApi;

export { contactApi };
