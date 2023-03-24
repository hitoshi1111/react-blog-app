// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXqxEo8iZrZlhtlhYnVCPonfoQmzJuFNQ",
  authDomain: "blgo-46c66.firebaseapp.com",
  projectId: "blgo-46c66",
  storageBucket: "blgo-46c66.appspot.com",
  messagingSenderId: "42370309782",
  appId: "1:42370309782:web:06a4215a471571559cecb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
