import Header from "./Header.jsx";
import MainContainer from "./Browse/MainContainer.jsx";
import SecondaryContainer from "./Browse/SecondaryContainer.jsx";
import useGetMovies from "../utils/hooks/useGetMovies.js";
import { API_URLS } from "../utils/constants.js";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addPopularShows,
  addtopratedMovies,
  addUpcomingMovies,
} from "../redux/moviesSlice.js";

const Browse = () => {
  useGetMovies(API_URLS.PLAYING, addNowPlayingMovies);
  useGetMovies(API_URLS.POPULAR, addPopularMovies);
  useGetMovies(API_URLS.UPCOMING, addUpcomingMovies);
  useGetMovies(API_URLS.TOP_RATED, addtopratedMovies);
  useGetMovies(API_URLS.POPULAR_TV, addPopularShows);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        /*
        MainContainer (movieTrailer, movieTitle, movieDescription)
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * N
            - cards * n

      */
      }
    </div>
  );
};

export default Browse;
