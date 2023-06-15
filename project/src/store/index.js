import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./apis/usersApi";
import { advertsApi } from "./apis/advertsApi";
import { newsApi } from "./apis/newsApi";
import { announcementsApi } from "./apis/announcementsApi";
import { eventsApi } from "./apis/eventsApi";


export const store = configureStore({
  reducer: {
    
    [usersApi.reducerPath]: usersApi.reducer,
    [advertsApi.reducerPath]: advertsApi.reducer,
    [announcementsApi.reducerPath]: announcementsApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: getDefaultMiddleware()
    .concat(usersApi.middleware)
    .concat(advertsApi.middleware)
    .concat(announcementsApi.middleware)
    .concat(eventsApi.middleware)
    .concat(newsApi.middleware),
});

setupListeners(store.dispatch);

export {
  useAddUserMutation,
  useFetchUsersQuery,
  useRemoveUserMutation,
} from "./apis/usersApi";

export {
  useAddAdvertsMutation,
  useFetchAdvertsQuery,
  useRemoveAdvertMutation,
} from "./apis/advertsApi";

export {
  useFetchAnnouncementsQuery,
  useAddAnnouncementsMutation,
  useRemoveAnnouncementMutation,
} from "./apis/announcementsApi";
export {
  useFetchEventsQuery,
  useAddEventsMutation,
  useRemoveEventMutation,
} from "./apis/eventsApi";
export {
  useFetchNewsQuery,
  useAddNewsMutation,
  useRemoveNewsMutation,
} from "./apis/newsApi";
