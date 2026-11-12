// lib/firebase.ts
// service/firebase.ts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI332TBL9q1baq0N87_4TAFRp_qlDDv9I",
  authDomain: "amd-task-app.firebaseapp.com",
  projectId: "amd-task-app",
  storageBucket: "amd-task-app.firebasestorage.app",
  messagingSenderId: "177892688209",
  appId: "1:177892688209:web:0f2515c0b76c8b46d45370"
};

// Initialize Firebase // Tastk List
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app)
export const db = getFirestore(app)