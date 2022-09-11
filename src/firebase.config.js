
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDblEgjRn0iuQ4d4JdL6OWuBEWse0x01n0",
  authDomain: "house-marketplace-app-4601b.firebaseapp.com",
  projectId: "house-marketplace-app-4601b",
  storageBucket: "house-marketplace-app-4601b.appspot.com",
  messagingSenderId: "328412824332",
  appId: "1:328412824332:web:92991a5624c701848a7f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()