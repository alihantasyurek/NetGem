import { BACKGROUND_IMG } from "../../utils/constants.js";
import MovieSuggestions from "./MovieSuggestions.jsx";
import SearchBar from "./SearchBar.jsx";

/* Search bar
movie suggestions */
const Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          alt="background-image"
          src={BACKGROUND_IMG}
        />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default Search;
