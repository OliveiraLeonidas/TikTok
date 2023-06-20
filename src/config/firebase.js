// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite"
// eslint-disable-next-line no-unused-vars
import { getDatabase } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyCyT10uoM0iL4S0gwR6yNHUDUMmp94J-Ac",
  authDomain: "tiktok-cb8b5.firebaseapp.com",
  projectId: "tiktok-cb8b5",
  storageBucket: "tiktok-cb8b5.appspot.com",
  messagingSenderId: "787776220895",
  appId: "1:787776220895:web:a90b67a4678e996fa4c36a",
  measurementId: "G-50412YQ4V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default db;