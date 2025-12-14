import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute z-50 px-8 py-2 bg-linear-to-b from-black w-screen flex flex-col justify-between items-center md:flex-row">
      <div className="cursor-pointer" onClick={() => navigate("/browse")}>
        <img
          className="w-44"
          alt="logo"
          src={LOGO}
        />
      </div>
    </div>
  );
};

export default NavBar;
