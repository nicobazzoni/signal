// Import the functions you need from the SDKs you need


import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import  'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7T5FqCKF4TbZfhoodFO5viS-mimAx3U",
  authDomain: "signal-67209.firebaseapp.com",
  projectId: "signal-67209",
  storageBucket: "signal-67209.appspot.com",
  messagingSenderId: "368256378081",
  appId: "1:368256378081:web:e2db7fc16f30252826c3a0"
};

let app;

// Initialize Firebase
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()

const auth = firebase.auth()

export { db, auth }