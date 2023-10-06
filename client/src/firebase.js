// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4f61a.firebaseapp.com",
  projectId: "mern-estate-4f61a",
  storageBucket: "mern-estate-4f61a.appspot.com",
  messagingSenderId: "882774839088",
  appId: "1:882774839088:web:c04299484e9bdc4ac642f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);