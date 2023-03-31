import { db } from "./firebase.config";
import { collection } from "firebase/firestore";

export const boardsCollectionRef = collection(db, "boards");
