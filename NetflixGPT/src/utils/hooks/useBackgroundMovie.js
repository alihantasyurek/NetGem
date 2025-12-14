import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../redux/moviesSlice.js";

const useBackgroundMovie = (movieId) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getMovieVideos = async () => {
			const resp = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}/videos`,
				API_OPTIONS,
			);
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
