import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import checkValidData from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { addUser } from "../redux/userSlice.js";
import { useDispatch } from "react-redux/alternate-renderers";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants.js";

const Login = () => {
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
            photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error);
          });
          //console.log(user);
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
          //console.log(user);
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
          src={BACKGROUND_IMG}
        />
      </div>
      <form
        className="w-3/12 p-12 bg-black/80 text-white absolute my-36 mx-auto right-0 left-0 bg-opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? "Sign in(Login)" : "Sign up"}
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
          className="py-4 my-6 bg-[#c11119] w-full font-bold rounded-lg cursor-pointer"
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
