// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzg9Tz7tv3KB-flxFQ_1r4zos3nP2X-MQ",
  authDomain: "react-task-app-54e01.firebaseapp.com",
  projectId: "react-task-app-54e01",
  storageBucket: "react-task-app-54e01.appspot.com",
  messagingSenderId: "543031358880",
  appId: "1:543031358880:web:57558024a6e531d788a0c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app