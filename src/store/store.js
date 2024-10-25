import { configureStore,  } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import userReducer from "./reducer/userReducer";
import filmReducer from "./filmSlice"
// import detailReducer from "./reducer/detailReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    user: userReducer,
    films: filmReducer, 
    // detail: detailReducer, 
  },
});

export default store;
