import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqW7wIDqd6By6qiQugmupM_WKYHgcs4Wg",
    authDomain: "digital-detox-companion-8bf78.firebaseapp.com",
    projectId: "digital-detox-companion-8bf78",
    storageBucket: "digital-detox-companion-8bf78.firebasestorage.app",
    messagingSenderId: "14799686015",
    appId: "1:14799686015:web:d9ba8fcf76e10ac6bbf24a",
    measurementId: "G-H5GEXK9JP1"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };