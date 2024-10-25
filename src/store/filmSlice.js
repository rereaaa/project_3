// store/filmSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filmSlice = createSlice({
  name: 'film',
  initialState: {
    nowPlaying: [],
    upComing: [],
    popular: [],
    topRated: [],
    filmDetails: null,  
    userRating: null,   
    
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    setUpComing: (state, action) => {
      state.upComing = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setFilmDetails: (state, action) => {
      state.filmDetails = action.payload;
    },
    setUserRating: (state, action) => {
      state.userRating = action.payload;
    },
  },
});

export const { setNowPlaying, setUpComing, setPopular, setTopRated, setFilmDetails, setUserRating } = filmSlice.actions;
export default filmSlice.reducer;
