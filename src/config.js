// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAtkq6o2vhgAzMe7tF7F5Bw1HN2bpcdnM",
  authDomain: "insurance-99b95.firebaseapp.com",
  projectId: "insurance-99b95",
  storageBucket: "insurance-99b95.appspot.com",
  messagingSenderId: "318103808228",
  appId: "1:318103808228:web:bbcddbb23e38a2610aa4f1",
  measurementId: "G-XLYBEKQFY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider();
const db = getFirestore(app)
export{auth, provider, db}