import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyA-048Gmg-eU4pCHnFaBLSqSv46K1N1MeU",
  authDomain: "dilishop-6cd38.firebaseapp.com",
  projectId: "dilishop-6cd38",
  storageBucket: "dilishop-6cd38.appspot.com",
  messagingSenderId: "475894910381",
  appId: "1:475894910381:web:69cd281765b597e200a524",
  measurementId: "G-RVC9HSRDSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app
