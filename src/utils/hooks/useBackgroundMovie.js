import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../redux/moviesSlice.js";
import tmdb from "../../utils/tmdb.js";

const useBackgroundMovie = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideos = async () => {
      const resp = await tmdb("/movie/videos", { movieId });
      if (!resp.ok) return;
      const data = await resp.json();
      const trailer = data?.results.find(
        (obj) => obj?.type.toLowerCase() === "trailer",
      );
      dispatch(addTrailerVideo(trailer?.key));
    };

    getMovieVideos().catch((err) => console.error(err));
  }, []);
};

export default useBackgroundMovie;
