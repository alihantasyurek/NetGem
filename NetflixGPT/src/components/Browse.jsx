import Header from "./Header.jsx";
import MainContainer from "./Browse/MainContainer.jsx";
import SecondaryContainer from "./Browse/SecondaryContainer.jsx";
import useGetMovies from "../utils/hooks/useGetMovies.js";
import { API_URLS } from "../utils/constants.js";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addtopratedMovies,
  addUpcomingMovies,
} from "../redux/moviesSlice.js";
import { useSelector } from "react-redux/alternate-renderers";
import SearchPage from "./Search/SearchPage.jsx";

const Browse = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  useGetMovies(API_URLS.PLAYING, addNowPlayingMovies, "nowPlayingMovies");
  useGetMovies(API_URLS.POPULAR, addPopularMovies, "popularMovies");
  useGetMovies(API_URLS.UPCOMING, addUpcomingMovies, "upcomingMovies");
  useGetMovies(API_URLS.TOP_RATED, addtopratedMovies, "topratedMovies");

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
