import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1y95dY5NzA26Np9N_Dj0h1kx8D09s1eE",
  authDomain: "prepwise-defa7.firebaseapp.com",
  projectId: "prepwise-defa7",
  storageBucket: "prepwise-defa7.firebasestorage.app",
  messagingSenderId: "61331059267",
  appId: "1:61331059267:web:fbc004d906695edc22daf6",
  measurementId: "G-05JHZW5RST",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
