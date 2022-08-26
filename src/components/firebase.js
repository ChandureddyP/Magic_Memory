// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWmzpx7ng2PVo-mIwDur9aExi3cAV7Ziw",
  authDomain: "magic-memory-a1094.firebaseapp.com",
  projectId: "magic-memory-a1094",
  storageBucket: "magic-memory-a1094.appspot.com",
  messagingSenderId: "281235173314",
  appId: "1:281235173314:web:975fb05d2dfe0606ebf05b",
  measurementId: "G-GVV53LJCG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);