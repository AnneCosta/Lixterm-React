import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut 
} from "firebase/auth";
import { 
  getFirestore, 
  getDocs,
  collection,
  setDoc,
  doc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: "lixterm-c4c8f",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const userCollectionRef = collection(db, "users");
const commandCollectionRef = collection(db, "commands");

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error(err);
  }
}

const logout = () => {
  signOut(auth);
}

export {
  auth,
  signInWithGoogle,
  logout,
  db,
  getDocs,
  userCollectionRef,
  commandCollectionRef,
  setDoc,
  doc
}