
import { initializeApp } from '@firebase/app';
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRxIqerIxIe1p8j7UyfhRsbiwhhOV34Hk",
    authDomain: "almadinaapp-a535d.firebaseapp.com",
    projectId: "almadinaapp-a535d",
    storageBucket: "almadinaapp-a535d.appspot.com",
    messagingSenderId: "355324712438",
    appId: "1:355324712438:web:85f804729e17cc3eb563d7",
    measurementId: "G-QPSWKR46CS"
  };
  
  // Initialize Firebase
   const app = initializeApp(firebaseConfig);
 
//Initialize firebase Authentication
const auth = getAuth();

//SignUp

export function signup(email,password) {
   return createUserWithEmailAndPassword(auth ,email ,password)

}

//LogIn
export function login(email ,password) {
  return signInWithEmailAndPassword(auth ,email ,password)
}
  