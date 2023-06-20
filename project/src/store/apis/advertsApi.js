import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const advertsApi = createApi({
  reducerPath: "adverts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchAdverts: builder.query({
        query: () => {
          return {
            url: "/adverts",
            method: "GET",
          };
        },
      }),
      addAdverts: builder.mutation({
        query: (advert) => {
          return {
            url: "/adverts",
            method: "POST",
            body: {
              title: advert.title,
              advertDesc: advert.description,
              imgUrl: advert.images,
              price: advert.price,
              address: advert.address,
              category: advert.category,
              date: advert.date,
            },
          };
        },
      }),
      removeAdvert: builder.mutation({
        query: (advert) => {
          return {
            url: `/adverts/${advert.id}`,
            method: "DELETE",
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
} = advertsApi;
export { advertsApi };
