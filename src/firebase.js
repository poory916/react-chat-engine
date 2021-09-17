import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD6Gjvt_O_nV5BSSAuyyJyNh6u34XRwkvk",
    authDomain: "react-unichat-2c3f9.firebaseapp.com",
    projectId: "react-unichat-2c3f9",
    storageBucket: "react-unichat-2c3f9.appspot.com",
    messagingSenderId: "300999702517",
    appId: "1:300999702517:web:350564d1fc2ab9ca6852bc"
  }).auth();