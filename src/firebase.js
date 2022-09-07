import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB71-xdTSPeG4rDgjCUax_SSkBn9rGUPFU",
  authDomain: "portfolio-49294.firebaseapp.com",
  projectId: "portfolio-49294",
  storageBucket: "portfolio-49294.appspot.com",
  messagingSenderId: "728865260315",
  appId: "1:728865260315:web:ef7cd7012fa542360009be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth,provider);