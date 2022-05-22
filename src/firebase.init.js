// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT_F9mcn7T1bhYaxpZbJLHrxoCBezzXfI",
  authDomain: "manufacturer-website-3e3a7.firebaseapp.com",
  projectId: "manufacturer-website-3e3a7",
  storageBucket: "manufacturer-website-3e3a7.appspot.com",
  messagingSenderId: "246913343170",
  appId: "1:246913343170:web:e6ede733bb47782cd6a55b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;