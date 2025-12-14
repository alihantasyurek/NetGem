import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice.js";
import { LOGO } from "../utils/constants.js";
import { closeSearch, toggleSearchView } from "../redux/searchSlice.js";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants.js";
import { changeLang } from "../redux/configSlice.js";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(() => {
    // call it only once and not everytime the component re-renders
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  function handleSearchClick() {
    dispatch(toggleSearchView());
  }
  function handleLanguageChange(e) {
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className="absolute z-50 px-8 py-2 bg-linear-to-b from-black w-screen flex flex-col justify-between items-center md:flex-row">
      <div className="cursor-pointer" onClick={() => dispatch(closeSearch())}>
        <img
          className="w-44"
          alt="logo"
          src={LOGO}
        />
      </div>
      {user && (
        <div className="flex gap-3">
          {showSearch &&
            (
              <select
                className="p-2 m-2 bg-black/30 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
          <button
            onClick={handleSearchClick}
            className="text-white mx-2 cursor-pointer"
          >
            {showSearch ? "Home" : "Search"}
          </button>
          <img
            className="sm:hidden w-12 h-12"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
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
