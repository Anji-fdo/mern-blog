// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogapp-1beef.firebaseapp.com",
  projectId: "mern-blogapp-1beef",
  storageBucket: "mern-blogapp-1beef.appspot.com",
  messagingSenderId: "915026718794",
  appId: "1:915026718794:web:fdad14cc9e866a397b36b3",
  measurementId: "G-TTN638VWTK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);