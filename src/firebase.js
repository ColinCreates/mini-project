// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Use your actual Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyCqW7wIDqd6By6qiQugmupM_WKYHgcs4Wg",
  authDomain: "digital-detox-companion-8bf78.firebaseapp.com",
  projectId: "digital-detox-companion-8bf78",
  storageBucket: "digital-detox-companion-8bf78.firebasestorage.app",
  messagingSenderId: "14799686015",
  appId: "1:14799686015:web:d9ba8fcf76e10ac6bbf24a",
  measurementId: "G-H5GEXK9JP1"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Connect to Firestore
const db = getFirestore(app);

// ✅ Export the database so we can use it in App.js
export { db };
