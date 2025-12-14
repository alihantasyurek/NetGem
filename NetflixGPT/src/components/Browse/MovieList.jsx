import { Navigate } from "react-router";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="pl-12">
      <h1 className="text-lg md:text-3xl pt-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll py-6">
        <div className="flex shrink-0 gap-2">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              backdropPath={movie.backdrop_path}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
