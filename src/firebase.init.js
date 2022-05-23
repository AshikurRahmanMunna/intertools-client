// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoppGOb4JsuUNYmgPSge3m4gYdBZBNeOU",
  authDomain: "intertools-1402d.firebaseapp.com",
  projectId: "intertools-1402d",
  storageBucket: "intertools-1402d.appspot.com",
  messagingSenderId: "29887677341",
  appId: "1:29887677341:web:6a9d79a2c0b5a8bdaa6574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;