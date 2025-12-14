import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		showSearch: false,
		movieNames: null,
		movieResults: null,
	},
	reducers: {
		toggleSearchView: (state) => {
			state.showSearch = !state.showSearch;
		},
		closeSearch: (state) => {
			state.showSearch = false;
		},
		addSearchResults: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
	},
});

export const { toggleSearchView, addSearchResults, closeSearch } =
	searchSlice.actions;
export default searchSlice.reducer;
