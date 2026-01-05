import { useDispatch, useSelector } from "react-redux/alternate-renderers";
import lang from "../../utils/languageConstants.js";
import { useRef } from "react";
import { addSearchResults } from "../../redux/searchSlice.js";
import fetchSearchedMovies from "../../utils/fetchSearchedMovies.js";
import generateAnswer from "../../../src/utils/generateAnswer.js";

const SearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleSearchClick = async () => {
    const query =
      "Act as movies recommendation system and recommend some movies for query : " +
      searchText.current.value +
      ". give only five movies name in comma separated format. your response should look like Movieresult1|Movieresult|Movieresult3|Movieresult4|Movieresult5";
    const response = await generateAnswer(query);
    const responseArr = [];
    if (!response) {
      responseArr.push("Gemini API failure: No response");
    } else {
      responseArr.push(...response.split("|"));
      const promiseArr = responseArr.map((movie) => fetchSearchedMovies(movie));
      const movieResult = await Promise.all(promiseArr);
      dispatch(
        addSearchResults({
          movieNames: responseArr,
          movieResults: movieResult,
        }),
      );
    }
  };

  return (
    <div className="pt-[60%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-4 m-0 md:m-4 bg-white md:col-span-9 col-span-8"
          ref={searchText}
        />
        <button
          className="py-2 px-0 md:px-4 m-0 md:m-4 cursor-pointer bg-red-700 rounded-lg text-white col-span-4 md:col-span-3"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
