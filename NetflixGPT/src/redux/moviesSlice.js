import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		upcomingMovies: null,
		topratedMovies: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addtopratedMovies: (state, action) => {
			state.topratedMovies = action.payload;
		},
		removeMovies: (state) => {
			state.nowPlayingMovies = null;
		},
	},
});

export default moviesSlice.reducer;
export const {
	addNowPlayingMovies,
	addPopularMovies,
	addTrailerVideo,
	addUpcomingMovies,
	removeMovies,
	addtopratedMovies,
	addSearchedMovies,
} = moviesSlice.actions;
