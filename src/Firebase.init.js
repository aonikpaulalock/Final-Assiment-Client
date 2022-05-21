// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQxaqS6sFdJJJSShsUR7Me_u3o478Howk",
  authDomain: "final-assiment.firebaseapp.com",
  projectId: "final-assiment",
  storageBucket: "final-assiment.appspot.com",
  messagingSenderId: "718621654317",
  appId: "1:718621654317:web:ab19bfc83aab2f3cce27a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)