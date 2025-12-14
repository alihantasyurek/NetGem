import { useSelector } from "react-redux/alternate-renderers";
import MovieList from "../Browse/MovieList.jsx";

const MovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.search);
  if (!movieNames) return null; //or shimmer ui, initially names will not be present they need to get fetched

  return (
    <div className="p-4 m-4 bg-black/70 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index].results}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestions;
