
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFhv2Jum0PWP2YVjmkc4vObOnf3e2XI7E",
  authDomain: "myfirstapp7d6d8.firebaseapp.com",
  projectId: "myfirstapp7d6d8",
  storageBucket: "myfirstapp7d6d8.appspot.com",
  messagingSenderId: "677979253438",
  appId: "1:677979253438:web:67c2f29ce88751644a8cef"
};
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB, auth}