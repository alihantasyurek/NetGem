import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import searchReducer from "./searchSlice.js";
import configReducer from "./configSlice.js";

const store = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		search: searchReducer,
		config: configReducer,
	},
});

export default store;
