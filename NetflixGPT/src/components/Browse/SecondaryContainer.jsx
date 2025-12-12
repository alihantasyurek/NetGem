import { useSelector } from "react-redux/alternate-renderers";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-gray-950">
      <div className="-mt-60 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topratedMovies} />
        <MovieList title="Popular Shows" movies={movies.popularShows} />
      </div>
    </div>
  );
};

/* MovieList - Popular;
  MovieCard * n
MovieList - Now Playing;
  MovieCard * n
MovieList - Trending;
  MovieCard * n
MovieList - Horror;
  MovieCard * n
*/

export default SecondaryContainer;
