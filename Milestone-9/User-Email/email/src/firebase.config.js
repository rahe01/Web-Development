// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqF-f5WbDS3U3xGmU7gUslz0N8I3gZhyg",
  authDomain: "email-47410.firebaseapp.com",
  projectId: "email-47410",
  storageBucket: "email-47410.appspot.com",
  messagingSenderId: "221906210586",
  appId: "1:221906210586:web:510d04b59ad2a17ca2e6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };