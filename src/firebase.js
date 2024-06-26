// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDMJhcMYuC4u_rwCs1GBtcOm0EzDT1ltE",
  authDomain: "dinein-8dcbb.firebaseapp.com",
  projectId: "dinein-8dcbb",
  storageBucket: "dinein-8dcbb.appspot.com",
  messagingSenderId: "700711024925",
  appId: "1:700711024925:web:bcee414d948063b05fc9f4",
  databaseURL: "https://dinein-8dcbb-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);