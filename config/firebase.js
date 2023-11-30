// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq-WgkLs06VL_URqWgaZc5btJkOI1pTBI",
  authDomain: "resturantfinderapp-efe76.firebaseapp.com",
  projectId: "resturantfinderapp-efe76",
  storageBucket: "resturantfinderapp-efe76.appspot.com",
  messagingSenderId: "416049097411",
  appId: "1:416049097411:web:fa24221149980c1bbed076",
  measurementId: "G-TQ6E42815S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);