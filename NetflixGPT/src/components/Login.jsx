import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import checkValidData from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../redux/userSlice.js";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  function handleButtonClick() {
    // validate the form data
    const errMessage = checkValidData(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(errMessage);
    if (errMessage) return;

    //sign up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://styles.redditmedia.com/t5_117tzg/styles/communityIcon_2khszu8hodt41.png?width=128&frame=1&auto=webp&s=511948cbaeaf65d3213c003acb55772d404383c9",
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));

            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error);
          });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
      //Sign in/login
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          alt="background-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/SE-en-20251201-TRIFECTA-perspective_10c476f8-8bd5-42cb-a7ce-bb0a5471ffd1_large.jpg"
        />
      </div>
      <form
        className="w-3/12 p-12 bg-black/80 text-white absolute my-36 mx-auto right-0 left-0 bg-opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? "Sign in(Login)" : "Sing up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[hsl(120,6%,7%)] text-[#b9b9b8] roudned-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[hsl(120,6%,7%)] text-[#b9b9b8] roudned-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[hsl(120,6%,7%)] text-[#b9b9b8] rounded-lg"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="py-4 my-6 bg-[#c11119] w-full font-bold rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

const HocLogin = (Login) => {
  return (/*props*/) => {
    return (
      <div>
        <h1 className="w-7xl text-9xl text-red-700">HELLO FROM HOC</h1>
        <Login />
      </div>
    );
  };
  //hoc is a function that takes a component and returns a higher component
};
