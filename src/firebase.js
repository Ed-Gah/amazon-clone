// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2QKpHjfj5DlrvwA9br2cINmrvggkSGow",
  authDomain: "clone-eb5b1.firebaseapp.com",
  projectId: "clone-eb5b1",
  storageBucket: "clone-eb5b1.appspot.com",
  messagingSenderId: "831005380811",
  appId: "1:831005380811:web:43ab2ff075fadca75ecb4e",
  measurementId: "G-Y27PTLRET7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };
