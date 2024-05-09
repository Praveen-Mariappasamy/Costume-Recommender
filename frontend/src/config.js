// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJR7zl0g_arZxknCq3feUPYbcoPKIAKCg",
  authDomain: "wardrobe-55ef1.firebaseapp.com",
  projectId: "wardrobe-55ef1",
  storageBucket: "wardrobe-55ef1.appspot.com",
  messagingSenderId: "396785782503",
  appId: "1:396785782503:web:71a577e55cb2fa7a511c42",
  measurementId: "G-YW765GZDF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app);

export {auth , firestore};