import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW-l6dgJcDubCbC8H5KMXXKgCNe165ZaY",
  authDomain: "codecamp-study.firebaseapp.com",
  projectId: "codecamp-study",
  storageBucket: "codecamp-study.appspot.com",
  messagingSenderId: "569557469983",
  appId: "1:569557469983:web:89887e486215610e177e2a",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
