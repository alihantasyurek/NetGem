const API_PATH = "https://api.themoviedb.org/3";

export default async (request, context) => {
  try {
    const key = process.env.TMDB_API_KEY;
    if (!key) return new Response("Invalid TMDB KEY", { status: 500 });
    console.log("TMDB KEY PRESENT:", Boolean(process.env.TMDB_API_KEY));

    //get the endpoint
    const url = new URL(request.url);
    const path = url.searchParams.get("path");
    const params = new URLSearchParams(url.searchParams);
    params.delete("path");

    const allowedPaths = new Set([
      "/movie/now_playing",
      "/search/movie",
      "/movie/popular",
      "/movie/top_rated",
      "/movie/upcoming",
      "/tv/popular",
      "/movie/videos",
    ]);

    if (!path || !allowedPaths.has(path))
      return new Response("Path is not allowed: " + (path || " "), {
        status: 403,
      });

    let completeUrl;
    if (params.get("movieId")) {
      completeUrl = new URL(
        API_PATH + "/movie/" + params.get("movieId") + "/videos",
      );
    } else {
      completeUrl = new URL(API_PATH + path + "?" + params);
    }
    if (!completeUrl)
      return new Response("Can't create Url to fetch" + { status: 400 });

    const upstream = await fetch(completeUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_API_KEY,
      },
    });
    const body = await upstream.json();

    return new Response(JSON.stringify(body), {
      status: upstream.status,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    return new Response(error.toString(), { status: 500 });
  }
};
