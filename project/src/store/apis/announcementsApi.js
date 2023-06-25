import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const announcementsApi = createApi({
  reducerPath: "announcements",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchAnnouncements: builder.query({
        providesTags: ["Announcements"],
        query: () => {
          return {
            url: "/announcements",
            method: "GET",
          };
        },
      }),
      addAnnouncements: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Announcements" }];
        },
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
        invalidatesTags: () => {
          return [{ type: "Announcements" }];
        },
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
