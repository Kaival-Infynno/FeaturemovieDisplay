import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovieData = createAsyncThunk(
  "movieData/getMovieData",
  async () => {
    let api_key = "e6bb026f9640361d78c28ce87089206d";
    return await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
  }
);
console.log({ getMovieData: getMovieData.fulfilled() });
const movieSclice = createSlice({
  name: "movieData",
  initialState: {
    letestMovieData: [],

    isLoading: false,
  },
  extraReducers: {
    [getMovieData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMovieData.fulfilled]: (state, { payload }) => {
      state.letestMovieData = payload.data;

      state.isLoading = false;
    },
    [getMovieData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
  reducers: {},
});

export const {} = movieSclice.actions;
export default movieSclice.reducer;
