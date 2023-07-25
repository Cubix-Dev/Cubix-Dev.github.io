// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/firebase-auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUw_AFGzf6LfvkfCMnswH_8Z06UhLQ2jE",
  authDomain: "snext-sverse.firebaseapp.com",
  databaseURL: "https://snext-sverse-default-rtdb.firebaseio.com",
  projectId: "snext-sverse",
  storageBucket: "snext-sverse.appspot.com",
  messagingSenderId: "1091633315944",
  appId: "1:1091633315944:web:4dab13b7d41145e802bbdd",
  measurementId: "G-G2N2XNZPR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}