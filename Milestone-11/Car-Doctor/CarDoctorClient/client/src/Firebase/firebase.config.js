// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQriand5r3Vvv_Z4Iq31es1RUaxNTuuVI",
  authDomain: "car-doctor-009.firebaseapp.com",
  projectId: "car-doctor-009",
  storageBucket: "car-doctor-009.appspot.com",
  messagingSenderId: "450425527062",
  appId: "1:450425527062:web:9fa7b5afd180049e758e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app