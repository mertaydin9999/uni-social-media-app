import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const announcementsApi = createApi({
  reducerPath: "announcements",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchAnnouncements: builder.query({
        query: () => {
          return {
            url: "/announcements",
            method: "GET",
          };
        },
      }),
      addAnnouncements: builder.mutation({
        query: () => {
          return {
            url: "/announcements",
            method: "POST",
            body: {
              name: "Can",
            },
          };
        },
      }),
      removeAnnouncement: builder.mutation({
        query: (announcement) => {
          return {
            url: `/announcements/${announcement.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAnnouncementsQuery,
  useAddAnnouncementsMutation,
  useRemoveAnnouncementMutation,
} = announcementsApi;
export { announcementsApi };
