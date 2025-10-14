import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "video-f66b8.firebaseapp.com",
  projectId: "video-f66b8",
  storageBucket: "video-f66b8.firebasestorage.app",
  messagingSenderId: "532960581145",
  appId: "1:532960581145:web:a9dba452266900b28afc88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;