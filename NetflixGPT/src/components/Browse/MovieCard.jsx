import { API_URLS } from "../../utils/constants";
const MovieCard = ({ backdropPath }) => {
  return (
    <div className="cursor-pointer hover:opacity-85 ">
      <img
        src={API_URLS.IMG_CDN + backdropPath}
        alt="movie poster"
        width="240"
      />
    </div>
  );
};

export default MovieCard;
