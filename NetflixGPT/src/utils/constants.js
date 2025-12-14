export const LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG =
	"https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/SE-en-20251201-TRIFECTA-perspective_10c476f8-8bd5-42cb-a7ce-bb0a5471ffd1_large.jpg";

export const USER_AVATAR =
	"https://styles.redditmedia.com/t5_117tzg/styles/communityIcon_2khszu8hodt41.png?width=128&frame=1&auto=webp&s=511948cbaeaf65d3213c003acb55772d404383c9";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: import.meta.env.VITE_TMBD_API,
	},
};

export const API_URLS = {
	PLAYING:
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
	IMG_CDN: "https://image.tmdb.org/t/p/w780",
	GET_MOVIE: "https://api.themoviedb.org/3/search/movie?query=",
	POPULAR: "https://api.themoviedb.org/3/movie/popular",
	UPCOMING: "https://api.themoviedb.org/3/movie/upcoming",
	TOP_RATED: "https://api.themoviedb.org/3/movie/top_rated",
	POPULAR_TV: "https://api.themoviedb.org/3/tv/popular",
};
