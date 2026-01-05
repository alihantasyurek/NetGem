import { useDispatch, useSelector } from "react-redux/alternate-renderers";
import { useEffect } from "react";
import tmdb from "../../utils/tmdb.js";

const useGetMovies = (URL, reducer, state) => {
  const urlHandler = (URL) => {};
  const dispatch = useDispatch();
  const currState = useSelector((store) => store.movies[state]);
  const getMovies = async () => {
    const response = await tmdb(URL);
    if (!response.ok) return;
    const json = await response.json();
    dispatch(reducer(json.results));
  };

  useEffect(() => {
    if (!currState) {
      getMovies().catch((err) => console.error(err));
    }
  }, []);
};

export default useGetMovies;
