import { useDispatch } from "react-redux/alternate-renderers";
import { API_OPTIONS } from "../constants.js";
import { useEffect } from "react";

const useGetMovies = (URL, reducer) => {
	const dispatch = useDispatch();
	const getMovies = async () => {
		const response = await fetch(URL, API_OPTIONS);
		if (!response.ok) return;
		const json = await response.json();
		dispatch(reducer(json.results));
		console.log(json);
	};

	useEffect(() => {
		getMovies().catch((err) => console.error(err));
	}, []);
};

export default useGetMovies;
