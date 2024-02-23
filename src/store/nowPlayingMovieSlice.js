import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []

    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        setPopular: (state, action) => {
            state.popular = action.payload;
        },
        setTopRated : (state,action) => {
            state.topRated = action.payload;
        },
        setUpcoming : (state,action) => {
            state.upcoming = action.payload;
        }
    },
});
export const { setNowPlaying , setPopular , setTopRated , setUpcoming } = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;