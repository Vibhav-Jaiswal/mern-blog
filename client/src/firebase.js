// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8c8c5.firebaseapp.com",
  projectId: "mern-blog-8c8c5",
  storageBucket: "mern-blog-8c8c5.appspot.com",
  messagingSenderId: "38831591094",
  appId: "1:38831591094:web:e2b5662746d26e8acea017"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);