import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKPkIHxjfW37TBh1GOaLmuVXNWyVk07s4",
  authDomain: "portfolio-pbouchet3.firebaseapp.com",
  projectId: "portfolio-pbouchet3",
  storageBucket: "portfolio-pbouchet3.firebasestorage.app",
  messagingSenderId: "29905587753",
  appId: "1:29905587753:web:e30b924eb271139dee9638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
