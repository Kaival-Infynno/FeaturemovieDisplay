import { configureStore } from "@reduxjs/toolkit";
import movieSclice from "./movieSclice";

export default configureStore({
  reducer: {
    movieData: movieSclice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
