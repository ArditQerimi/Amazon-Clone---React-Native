import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInAnonymously,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAcWUpGyNECXl7PGtPpO6x8dojow7Qegc",
  authDomain: "fir-6def6.firebaseapp.com",
  projectId: "fir-6def6",
  storageBucket: "fir-6def6.appspot.com",
  messagingSenderId: "1079708570852",
  appId: "1:1079708570852:web:3124c6e029aee08be408f1",
  measurementId: "G-3FXBCQ54GP",
};

if (!getApps().length) initializeApp(firebaseConfig);

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInAnonymously,
};
