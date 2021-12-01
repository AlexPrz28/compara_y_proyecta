// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAopY-7i8MNX-jJOImD-fV47HvVmykQj2M",
  authDomain: "finproject-13c97.firebaseapp.com",
  projectId: "finproject-13c97",
  storageBucket: "finproject-13c97.appspot.com",
  messagingSenderId: "649797910676",
  appId: "1:649797910676:web:b3fee3b40f4762efbdb481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
