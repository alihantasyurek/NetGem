import { useNavigate } from "react-router";
import { IMG_CDN } from "../../utils/constants";
const MovieCard = ({ backdropPath, movieId }) => {
  const navigate = useNavigate();
  if (!backdropPath) return;

  return (
    <div
      className="cursor-pointer hover:opacity-85 "
      onClick={() => navigate(`/watch/${movieId}`)}
    >
      <img src={IMG_CDN + backdropPath} alt="movie poster" width="240" />
    </div>
  );
};

export default MovieCard;
