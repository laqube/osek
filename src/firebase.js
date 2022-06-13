
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAabA5NavbKGGX67w7SCRSXn5P8k5xeA7Y",
  authDomain: "osek2-42d17.firebaseapp.com",
  projectId: "osek2-42d17",
  storageBucket: "osek2-42d17.appspot.com",
  messagingSenderId: "698045052356",
  appId: "1:698045052356:web:30f283cac149535b49e091"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);