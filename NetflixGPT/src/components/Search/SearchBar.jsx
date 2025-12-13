import { useSelector } from "react-redux/alternate-renderers";
import lang from "../../utils/languageConstants.js";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-4 m-4 bg-white col-span-9"
        />
        <button className="py-2 px-4 m-4 bg-red-700 rounded-lg text-white col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
