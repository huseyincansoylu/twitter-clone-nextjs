// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-nLdTaorhpbKO5MpGGZNs_yBhvJcAcSA",
  authDomain: "twitter-clone-54a8b.firebaseapp.com",
  projectId: "twitter-clone-54a8b",
  storageBucket: "twitter-clone-54a8b.appspot.com",
  messagingSenderId: "349966403184",
  appId: "1:349966403184:web:61945141c5d818b1e996b5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
