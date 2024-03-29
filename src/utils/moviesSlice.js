import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.trailerVideo = action.payload
        },
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies} = moviesSlice.actions
export default moviesSlice.reducer;

