// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchRatedFilms = createAsyncThunk(
//   "ratedFilms/fetchRatedFilms",
//   async () => {
//     const response = await axios.get(
//       "https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies?language=en-US&page=1&sort_by=created_at.asc",
//       {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTg5OTc2MC4yOTQ0MzksInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RbYHHzFgC-tgQALfqAkESS5m0NPymJJHu3Kc_xyLf5c`
//         }
//       }
//     );
//     return response.data.results;
//   }
// );

// const ratedFilmsSlice = createSlice({
//   name: "ratedFilms",
//   initialState: {
//     ratedFilms: [],
//     loading: false,
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRatedFilms.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchRatedFilms.fulfilled, (state, action) => {
//         state.loading = false;
//         state.ratedFilms = action.payload;
//       })
//       .addCase(fetchRatedFilms.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export default ratedFilmsSlice.reducer;
