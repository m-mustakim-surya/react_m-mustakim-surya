import { combineReducers } from "@reduxjs/toolkit";
import about from "./SliceAbout";

const rootReducers = combineReducers({
  about,
});

export default rootReducers;
