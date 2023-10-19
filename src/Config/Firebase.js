// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3JwwwwTAuIJR_3RPTXomDd2nhPAI8QDA",
  authDomain: "fir-app-54b55.firebaseapp.com",
  projectId: "fir-app-54b55",
  storageBucket: "fir-app-54b55.appspot.com",
  messagingSenderId: "921631056227",
  appId: "1:921631056227:web:1a03ce5d1e39e1f485b356",
  measurementId: "G-J991XXSQCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);