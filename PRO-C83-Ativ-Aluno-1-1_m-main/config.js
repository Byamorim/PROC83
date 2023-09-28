//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN5oBT2x_XJD4aSH7TLsW75A0bhOA-uIQ",
  authDomain: "bibliotecaeletronica-7b505.firebaseapp.com",
  databaseURL: "https://bibliotecaeletronica-7b505-default-rtdb.firebaseio.com",
  projectId: "bibliotecaeletronica-7b505",
  storageBucket: "bibliotecaeletronica-7b505.appspot.com",
  messagingSenderId: "889420600419",
  appId: "1:889420600419:web:7a96060d5f851dcbefd456"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
