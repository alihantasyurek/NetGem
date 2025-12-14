import { API_OPTIONS, API_URLS } from "./constants.js";

const fetchSearchedMovies = async (movie) => {
	const response = await fetch(API_URLS.GET_MOVIE + movie, API_OPTIONS);
	if (!response.ok) return;
	const json = response.json();
	return json;
};

export default fetchSearchedMovies;
