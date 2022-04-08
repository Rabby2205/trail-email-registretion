// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARIetOGhikFNGDcOOGg7ZRy7M1MGwfy98",
    authDomain: "email-password-auth-9eed0.firebaseapp.com",
    projectId: "email-password-auth-9eed0",
    storageBucket: "email-password-auth-9eed0.appspot.com",
    messagingSenderId: "36160999086",
    appId: "1:36160999086:web:2d38ac475fa669fd8f673f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;