// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0ifwEnmEihEjnzKOpjWWW7IRHOv8KyYw",
  authDomain: "prhs-tsa-hub.firebaseapp.com",
  projectId: "prhs-tsa-hub",
  storageBucket: "prhs-tsa-hub.appspot.com", // ✅ fixed typo (.app → .app**spot.com**)
  messagingSenderId: "522020225270",
  appId: "1:522020225270:web:cde225b3e8116ce5156cd7",
  measurementId: "G-Z384MG73YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and db
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;