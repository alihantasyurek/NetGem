import { API_URLS } from "./constants.js";
import tmdb from "../utils/tmdb.js";

const fetchSearchedMovies = async (movie) => {
  const response = await tmdb(API_URLS.GET_MOVIE, { query: movie });
  if (!response.ok) return;
  const json = response.json();
  return json;
};

export default fetchSearchedMovies;
