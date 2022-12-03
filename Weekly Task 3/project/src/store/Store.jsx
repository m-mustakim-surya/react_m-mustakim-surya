import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./ReducerAbout";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
