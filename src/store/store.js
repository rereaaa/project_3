import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import userReducer from "./reducer/userReducer";
import filmReducer from "./filmSlice";
import ratedFilmsReducer from "./ratedFilmsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    user: userReducer,
    films: filmReducer,
    ratedFilms: ratedFilmsReducer,
  },
});

export default store;
