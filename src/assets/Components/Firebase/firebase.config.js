// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv4igbAUzXbFy_pJr7wpETgdlPEW8YuHI",
  authDomain: "assignment-11-baa86.firebaseapp.com",
  projectId: "assignment-11-baa86",
  storageBucket: "assignment-11-baa86.appspot.com",
  messagingSenderId: "453677573496",
  appId: "1:453677573496:web:1695c2396943ef52cd548d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);