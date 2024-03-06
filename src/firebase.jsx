import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDstBsazB4RX5gadpRwPazKcPQubYUpGE0",
  authDomain: "react-netflix-clone-fd104.firebaseapp.com",
  projectId: "react-netflix-clone-fd104",
  storageBucket: "react-netflix-clone-fd104.appspot.com",
  messagingSenderId: "661746950583",
  appId: "1:661746950583:web:10a640ca6b081b25944832"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

