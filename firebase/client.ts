import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBIFxTjQBcUkieo65627igVKLDfTE7eoDE",
  authDomain: "prepnow-95f84.firebaseapp.com",
  projectId: "prepnow-95f84",
  storageBucket: "prepnow-95f84.firebasestorage.app",
  messagingSenderId: "711710589400",
  appId: "1:711710589400:web:e8c395a9ae13be06a6b2ad",
  measurementId: "G-V6CHJFMTM5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);