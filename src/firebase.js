import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh5BEIrvyrUTd17quUBKIzHBQ7Gk6dQEA",
  authDomain: "clone-a055b.firebaseapp.com",
  projectId: "clone-a055b",
  storageBucket: "clone-a055b.appspot.com",
  messagingSenderId: "763593310413",
  appId: "1:763593310413:web:c869e4124985a9cd32e984",
  measurementId: "G-WCX5MFFEMP",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
