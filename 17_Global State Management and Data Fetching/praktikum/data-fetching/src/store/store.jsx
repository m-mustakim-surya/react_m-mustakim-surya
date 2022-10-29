import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features/combineReducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;