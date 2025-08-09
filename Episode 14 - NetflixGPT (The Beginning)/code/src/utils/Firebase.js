// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI0ku1_RYcoz-v4SBs9N8kA8r2AvEBSu8",
  authDomain: "netflixgptcloud.firebaseapp.com",
  projectId: "netflixgptcloud",
  storageBucket: "netflixgptcloud.firebasestorage.app",
  messagingSenderId: "420242432151",
  appId: "1:420242432151:web:dca008e5acc589d27cc9d2",
  measurementId: "G-94CZMSWVBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
