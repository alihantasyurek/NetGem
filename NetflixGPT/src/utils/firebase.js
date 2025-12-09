// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACDrd2At8wBS0zVGdtJ5ef-vg1KhWd2aQ",
  authDomain: "netflixgpt-b4f68.firebaseapp.com",
  projectId: "netflixgpt-b4f68",
  storageBucket: "netflixgpt-b4f68.firebasestorage.app",
  messagingSenderId: "403468345026",
  appId: "1:403468345026:web:0b0a4e6edd7cc1a387e55b",
  measurementId: "G-BQ95F8JMMT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
