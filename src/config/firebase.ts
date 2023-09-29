// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgJzwk8Yy60UiZigSdm5-pfTG7ZytirRo",
  authDomain: "react-social-media-app-yana.firebaseapp.com",
  projectId: "react-social-media-app-yana",
  storageBucket: "react-social-media-app-yana.appspot.com",
  messagingSenderId: "359886898187",
  appId: "1:359886898187:web:984ac7353781ec0d9bb30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)