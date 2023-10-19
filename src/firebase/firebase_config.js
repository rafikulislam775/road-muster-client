import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//
const firebaseConfig = {
  apiKey: "AIzaSyDoQqbacvO2E-A9nM-93WElHtC-paJ1h4o",
  authDomain: "road-muster.firebaseapp.com",
  projectId: "road-muster",
  storageBucket: "road-muster.appspot.com",
  messagingSenderId: "378195480057",
  appId: "1:378195480057:web:cc9ef7b1bf0b955dd54128",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
