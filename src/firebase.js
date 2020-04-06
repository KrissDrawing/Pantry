// import firebase from "firebase";
// import "firebase/firestore";

import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClqlZeuv3Er-f_677hfdNZdRCN8XDuEbY",
  authDomain: "pantry-31aed.firebaseapp.com",
  databaseURL: "https://pantry-31aed.firebaseio.com",
  projectId: "pantry-31aed",
  storageBucket: "pantry-31aed.appspot.com",
  messagingSenderId: "1001179315869",
  appId: "1:1001179315869:web:9c5ad5801d1349d4f79e74",
  measurementId: "G-PGPQR5JWM5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
