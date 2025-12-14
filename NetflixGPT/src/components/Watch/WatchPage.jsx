import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useBackgroundMovie from "../../utils/hooks/useBackgroundMovie.js";
import NavBar from "../Navbar.jsx";

const WatchPage = () => {
  const { videoId } = useParams();
  useBackgroundMovie(videoId);
  const trailerKey = useSelector((store) => store.movies.trailerVideo);

  return (
    <div>
      <NavBar />
      <div className="relative w-full h-screen inset-0 overflow-hidden">
        <iframe
          className="absolute w-full h-full"
          src={"https://www.youtube.com/embed/" + trailerKey +
            "?&autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=0&playlist=" +
            trailerKey}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
};

export default WatchPage;
