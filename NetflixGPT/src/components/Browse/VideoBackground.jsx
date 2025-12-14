import { useSelector } from "react-redux/alternate-renderers";
import useBackgroundMovie from "../../utils/hooks/useBackgroundMovie.js";

const VideoBackground = ({ movieId }) => {
  useBackgroundMovie(movieId);

  const trailerKey = useSelector((store) => store.movies.trailerVideo);
  if (!trailerKey) return;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
        src={"https://www.youtube.com/embed/" + trailerKey +
          "?&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&enablejsapi=0&playlist=" +
          trailerKey}
        title="Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
      >
      </iframe>
    </div>
  );
};

export default VideoBackground;
