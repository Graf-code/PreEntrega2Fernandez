import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFeRc76_K2DJs1L28dY5gwgWpbA6_mVqo",
  authDomain: "lucode-6ad6c.firebaseapp.com",
  projectId: "lucode-6ad6c",
  storageBucket: "lucode-6ad6c.appspot.com",
  messagingSenderId: "1054700015191",
  appId: "1:1054700015191:web:7837364c8a6cd29aca9d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export const initFirestore = () => app
export { db };