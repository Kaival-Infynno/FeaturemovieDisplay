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
//Upcoming movie API
export const getUCMovieData = createAsyncThunk(
  "movieData/getUCMovieData",
  async () => {
    let api_key = "e6bb026f9640361d78c28ce87089206d";
    return await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
    );
  }
);
//vidios
export const getVidios = createAsyncThunk("movieData/getVidios", async () => {
  let api_key = "e6bb026f9640361d78c28ce87089206d";
  return await axios.get(
    `https://api.themoviedb.org/3/movie/297761/videos?api_key=${api_key}`
  );
});
//cast
export const getCastData = createAsyncThunk(
  "movieData/getCastData",
  async () => {
    let api_key = "e6bb026f9640361d78c28ce87089206d";
    return await axios.get(
      `https://api.themoviedb.org/3/movie/297761/credits?api_key=${api_key}`
    );
  }
);
const movieSclice = createSlice({
  name: "movieData",
  initialState: {
    letestMovieData: [],
    upcomingMdata: [],
    allVidios: [],
    allCast: [],
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
    //upComing Movie
    [getUCMovieData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUCMovieData.fulfilled]: (state, { payload }) => {
      state.upcomingMdata = payload.data;
      state.isLoading = false;
    },
    [getUCMovieData.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //vidios
    [getVidios.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVidios.fulfilled]: (state, { payload }) => {
      state.allVidios = payload.data;
      state.isLoading = false;
    },
    [getVidios.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // Cast
    [getCastData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCastData.fulfilled]: (state, { payload }) => {
      state.allCast = payload.data;
      state.isLoading = false;
    },
    [getCastData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
  reducers: {},
});

export default movieSclice.reducer;
