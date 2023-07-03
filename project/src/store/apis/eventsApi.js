import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const eventsApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchEvents: builder.query({
        providesTags: ["Events"],
        query: () => {
          return {
            url: "/events",
            method: "GET",
          };
        },
      }),
      addEvents: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Events" }];
        },
        query: (event) => {
          return {
            url: "/events",
            method: "POST",
            body: event,
          };
        },
      }),
      removeEvent: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "Events" }];
        },
        query: (events) => {
          return {
            url: `/events/${events.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchEventsQuery,
  useAddEventsMutation,
  useRemoveEventMutation,
} = eventsApi;
export { eventsApi };
