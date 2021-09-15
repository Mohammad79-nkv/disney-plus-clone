import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newDisney: null,
  original: null,
  recommends: null,
  trending: null,
};

const movieslice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.recommends = action.payload.recommends;
      state.trending = action.payload.trending;
    },
  },
});

export const {setMovie} = movieslice.actions;

export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectRecommends = (state) => state.movie.recommends;
export const selectTrending = (state) => state.movie.trending;

export default movieslice.reducer;