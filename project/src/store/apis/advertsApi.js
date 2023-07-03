import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const advertsApi = createApi({
  reducerPath: "adverts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchAdverts: builder.query({
        providesTags: ["Advert"],
        query: () => {
          return {
            url: "/adverts",
            method: "GET",
          };
        },
      }),
      addAdverts: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Advert" }];
        },
        query: (advert) => {
          return {
            url: "/adverts",
            method: "POST",
            body: advert,
          };
        },
      }),
      removeAdvert: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Advert" }];
        },
        query: (advert) => {
          return {
            url: `/adverts/${advert.id}`,
            method: "DELETE",
          };
        },
      }),
      updateAdvert: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Advert" }];
        },
        query: (advert) => {
          return {
            url: `/adverts/${advert.id}`,
            method: "PUT",
            body: advert,
          };
        },
      }),
    };
  },
});

export const {
  useFetchAdvertsQuery,
  useAddAdvertsMutation,
  useRemoveAdvertMutation,
  useUpdateAdvertMutation,
} = advertsApi;
export { advertsApi };
