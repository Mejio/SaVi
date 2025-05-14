// services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAMHWDdGgIdtIR0dHdLqWj1NOxaWAsRhyE",
  authDomain: "savi-c8739.firebaseapp.com",
  projectId: "savi-c8739",
  storageBucket: "savi-c8739.appspot.com",
  messagingSenderId: "1064534235427",
  appId: "1:1064534235427:android:5f868f439bfc8fae5b9496",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Firebase Auth instance

export { db, auth };
