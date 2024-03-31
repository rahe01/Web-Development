// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqEXv91KvW34wMrTZjoJ0h3YIPT4-ngJ8",
  authDomain: "auth-moha-milon-ebee1.firebaseapp.com",
  projectId: "auth-moha-milon-ebee1",
  storageBucket: "auth-moha-milon-ebee1.appspot.com",
  messagingSenderId: "289774481942",
  appId: "1:289774481942:web:dd762018c835f809a77b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };