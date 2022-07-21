// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2QKpHjfj5DlrvwA9br2cINmrvggkSGow",
  authDomain: "clone-eb5b1.firebaseapp.com",
  projectId: "clone-eb5b1",
  storageBucket: "clone-eb5b1.appspot.com",
  messagingSenderId: "831005380811",
  appId: "1:831005380811:web:43ab2ff075fadca75ecb4e",
  measurementId: "G-Y27PTLRET7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
