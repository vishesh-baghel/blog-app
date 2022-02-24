import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, googleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsUNLVXTLIxBzp0DOzjgvoSW84VsJZPLY",
  authDomain: "blog-app-fcb85.firebaseapp.com",
  projectId: "blog-app-fcb85",
  storageBucket: "blog-app-fcb85.appspot.com",
  messagingSenderId: "991866749635",
  appId: "1:991866749635:web:75c9b31e55a1d641e15876",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
