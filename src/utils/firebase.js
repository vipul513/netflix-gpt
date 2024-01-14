// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0WjJznrTLVgpvpQv4_fM_I6DeGLdxZMQ",
  authDomain: "netflixgpt-aaf6c.firebaseapp.com",
  projectId: "netflixgpt-aaf6c",
  storageBucket: "netflixgpt-aaf6c.appspot.com",
  messagingSenderId: "608470809715",
  appId: "1:608470809715:web:3cdb88b59dc03549ef3e06",
  measurementId: "G-6ZNCSV8RSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();