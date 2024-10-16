import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuJmRnp2mk8Vy4jHpP2KlsSyxmClFgwXM",
  authDomain: "portfolio-8bd55.firebaseapp.com",
  projectId: "portfolio-8bd55",
  storageBucket: "portfolio-8bd55.appspot.com",
  messagingSenderId: "727752148539",
  appId: "1:727752148539:web:f19a584197f2e8736dfe1e",
  measurementId: "G-878H05PGHD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);