// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZef6ai_qJCcIc0W-CYJ2-i05vO80jOMc",
    authDomain: "the-dragon-news-c0ba9.firebaseapp.com",
    projectId: "the-dragon-news-c0ba9",
    storageBucket: "the-dragon-news-c0ba9.appspot.com",
    messagingSenderId: "854921849771",
    appId: "1:854921849771:web:27b30fa4b13dce680880ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;