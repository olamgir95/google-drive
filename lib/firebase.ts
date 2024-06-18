import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-a88b4.firebaseapp.com",
  projectId: "drive-a88b4",
  storageBucket: "drive-a88b4.appspot.com",
  messagingSenderId: "278869091735",
  appId: "1:278869091735:web:9e12e4e48defc0818a50d2",
  measurementId: "G-X54WYBPJRH",
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { db };
