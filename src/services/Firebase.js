import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import "@react-native-firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMHWDdGgIdtIR0dHdLqWj1NOxaWAsRhyE", // Your Web API Key
  authDomain: "savi-c8739.firebaseapp.com", // Based on Project ID
  projectId: "savi-c8739", // Your Project ID
  storageBucket: "savi-c8739.appspot.com", // Based on Project ID
  messagingSenderId: "1064534235427", // Your Project number
appId:"1:1064534235427:android:5f868f439bfc8fae5b9496" // Find this in Firebase Console
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();