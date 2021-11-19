import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_reBvEfrl4pTxC9w2AP0Ovg69wYF9srs",
  authDomain: "alunaburger.firebaseapp.com",
  projectId: "alunaburger",
  storageBucket: "alunaburger.appspot.com",
  messagingSenderId: "429048647320",
  appId: "1:429048647320:web:50be3e0dfc88b5b0ec4aed"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
/* export default app; */