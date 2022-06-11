import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtP8mzM7rc2HOrGDIs5LQYFxxeSpRilPQ",
    authDomain: "o-sek-d9a9f.firebaseapp.com",
    projectId: "o-sek-d9a9f",
    storageBucket: "o-sek-d9a9f.appspot.com",
    messagingSenderId: "487189114907",
    appId: "1:487189114907:web:85b8658d88adced04b48be"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);