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
import { useSelector } from "react-redux/alternate-renderers";
import SearchPage from "./Search/SearchPage.jsx";

const Browse = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  useGetMovies(API_URLS.PLAYING, addNowPlayingMovies);
  useGetMovies(API_URLS.POPULAR, addPopularMovies);
  useGetMovies(API_URLS.UPCOMING, addUpcomingMovies);
  useGetMovies(API_URLS.TOP_RATED, addtopratedMovies);
  useGetMovies(API_URLS.POPULAR_TV, addPopularShows);

  return (
    <div>
      <Header />
      {showSearch ? <SearchPage /> : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
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
