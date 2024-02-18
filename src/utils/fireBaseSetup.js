/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiKf2KpzORGvViS1dnk2txZOyPXnX7sFc",
  authDomain: "netflixgpt-ee2f4.firebaseapp.com",
  projectId: "netflixgpt-ee2f4",
  storageBucket: "netflixgpt-ee2f4.appspot.com",
  messagingSenderId: "454757839614",
  appId: "1:454757839614:web:bd28d543a2c8ade247abaf",
  measurementId: "G-S7DSHSF0Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);