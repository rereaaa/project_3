import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ratedFilmsSlice = createSlice({
  name: "ratedFilms",
  initialState: {
    ratedFilms: [],
    loading: false,
    error: null,
  },
  reducers: {
    setRatedFilms: (state, action) => {
      state.ratedFilms = action.payload;
    },
    addRatedFilm: (state, action) => {
      const existingFilm = state.ratedFilms.find(film => film.id === action.payload.id);
      if (!existingFilm) {
        state.ratedFilms.push(action.payload);
      }
    },
  },
});

export const { setRatedFilms, addRatedFilm } = ratedFilmsSlice.actions;
export const fetchRatedFilms = () => async (dispatch) => {
  dispatch({ type: "loading" });
  try {
    const response = await axios.get("https://api.themoviedb.org/3/account/21559331/rated/movies?language=en-US&page=1&sort_by=created_at.asc", {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTg5OTc2MC4yOTQ0MzksInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RbYHHzFgC-tgQALfqAkESS5m0NPymJJHu3Kc_xyLf5c` },
    });
    dispatch(setRatedFilms(response.data.results));
  } catch (error) {
    dispatch({ type: "error", payload: error.message });
  }
};

export default ratedFilmsSlice.reducer;
