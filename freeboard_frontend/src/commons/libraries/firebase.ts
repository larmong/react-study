// ///////////////////// 파이어베이스 ////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-l6dgJcDubCbC8H5KMXXKgCNe165ZaY",
  authDomain: "codecamp-study.firebaseapp.com",
  projectId: "codecamp-study",
  storageBucket: "codecamp-study.appspot.com",
  messagingSenderId: "569557469983",
  appId: "1:569557469983:web:89887e486215610e177e2a",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// /////////////////////////////////////////////////////////

export const db = getFirestore(firebaseApp);
