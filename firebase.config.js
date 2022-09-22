import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzWmfV3258yKgXSBe2wJRWEBY17hzK-88",
  authDomain: "developer-projects-6cb67.firebaseapp.com",
  projectId: "developer-projects-6cb67",
  storageBucket: "developer-projects-6cb67.appspot.com",
  messagingSenderId: "64802964066",
  appId: "1:64802964066:web:62865419c5b931ae37c73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);