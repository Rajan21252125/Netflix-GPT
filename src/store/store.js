import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import nowPlayingMovieSlice from "./nowPlayingMovieSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        nowPlayingMovie : nowPlayingMovieSlice,
    }
});


export default store;