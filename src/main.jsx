import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAYaa-Yhb2wrcHx9yAr2TNf3-dcxxi0odI",
//   authDomain: "proyecto-react-coderhous-91888.firebaseapp.com",
//   projectId: "proyecto-react-coderhous-91888",
//   storageBucket: "proyecto-react-coderhous-91888.firebasestorage.app",
//   messagingSenderId: "520712076065",
//   appId: "1:520712076065:web:0673137cc3501f7f3e9c60",
//   measurementId: "G-VT30NHH21E"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>
  ,
)