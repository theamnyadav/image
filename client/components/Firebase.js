// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5VTGIdpeDx51o55ifyiE1bn6pcBEVTfY",
  authDomain: "imagelib-cb19e.firebaseapp.com",
  projectId: "imagelib-cb19e",
  storageBucket: "imagelib-cb19e.appspot.com",
  messagingSenderId: "205263775069",
  appId: "1:205263775069:web:344a54d38a75957ba474b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);
const db = getFirestore(app);
export { storage, database, db };
