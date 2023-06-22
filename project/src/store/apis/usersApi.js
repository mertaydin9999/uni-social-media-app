import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: ["User"],
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (user) => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: user.firstName,
              surname: user.lastName,
              email: user.email,
              password: user.password,
              age: user.age,
              address: user.address,
              profileImage: user.profileImage,
              university: user.university,
            },
          };
        },
      }),
      updateUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (updatedUser) => {
          return {
            url: `/users/${updatedUser.id}`,
            method: "PUT",
            body: updatedUser,
          };
        },
      }),
      removeUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
  useUpdateUserMutation,
} = usersApi;
export { usersApi };
