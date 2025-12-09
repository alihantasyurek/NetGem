import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
      // An error happened.
    });
  };
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black w-screen flex justify-between items-center">
      <img
        className="w-44"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user &&
        (
          <div className="flex gap-3">
            <img
              className="w-12 h-12"
              src={user?.photoURL}
              alt="user-icon"
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white"
              type="button"
            >
              (Sign out)
            </button>
          </div>
        )}
    </div>
  );
};

export default Header;
