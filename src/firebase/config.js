// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgtJ-7EAMESYTSxb_KTgxfNeQoGq-BQHo",
  authDomain: "ecommerce-erdefrisch.firebaseapp.com",
  projectId: "ecommerce-erdefrisch",
  storageBucket: "ecommerce-erdefrisch.appspot.com",
  messagingSenderId: "670941992372",
  appId: "1:670941992372:web:9eea8adea18da18a3acee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)