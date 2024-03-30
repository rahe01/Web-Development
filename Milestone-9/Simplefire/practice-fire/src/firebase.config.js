// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnaBs80wqrK5rxHo0za5IhkNUovUclbA",
  authDomain: "fireeeeeeeeee-de40a.firebaseapp.com",
  projectId: "fireeeeeeeeee-de40a",
  storageBucket: "fireeeeeeeeee-de40a.appspot.com",
  messagingSenderId: "474078156255",
  appId: "1:474078156255:web:8881f2d7d89c760791a06a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}