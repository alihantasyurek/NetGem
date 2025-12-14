import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";
import { useMemo } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const mainMovie = useMemo(() => {
    if (!movies?.length) return null;
    return movies[Math.floor(Math.random() * movies.length)];
  }, [movies]);

  if (!mainMovie) return null;

  //const mainMovie = movies[0]; 1180831
  const { original_title, overview, id } = mainMovie;
  console.log(mainMovie);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
