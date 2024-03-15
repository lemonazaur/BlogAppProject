// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuYRwzQgIrAgiLBe7Js3w5H8MMZ9kFaTI",
    authDomain: "blogapp-af697.firebaseapp.com",
    projectId: "blogapp-af697",
    storageBucket: "blogapp-af697.appspot.com",
    messagingSenderId: "371196010659",
    appId: "1:371196010659:web:068ef0e3853871b22d9f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
