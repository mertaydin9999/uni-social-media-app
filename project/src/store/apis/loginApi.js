import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      addLogin: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Login" }];
        },
        query: (loginData) => {
          return {
            url: "/login",
            method: "POST",
            body: loginData,
          };
        },
      }),
      getLogin: builder.query({
        providesTags: ["Login"],
        query: () => {
          return {
            url: "/login",
            method: "GET",
          };
        },
      }),
      updateLogin: builder.mutation({
        query: (updatedLogin) => {
          return {
            url: `/login/${updatedLogin.email}`,
            method: "PUT",
            body: {
              id: updatedLogin.id,
              email: updatedLogin.email,
              password: updatedLogin.password,
            },
          };
        },
      }),
      deleteLogin: builder.mutation({
        query: (email) => {
          return {
            url: `/login/${email}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const { useAddLoginMutation, useGetLoginQuery, useUpdateLoginMutation } =
  loginApi;

export { loginApi };
