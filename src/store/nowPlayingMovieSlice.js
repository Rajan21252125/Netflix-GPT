import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        nowPlaying: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
    },
});
export const { setNowPlaying } = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;