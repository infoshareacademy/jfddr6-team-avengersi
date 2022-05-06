import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNC-RpND3HaxLlAkuPrmF0nZK_TQdpPnU",
  authDomain: "blog-cbf37.firebaseapp.com",
  projectId: "blog-cbf37",
  storageBucket: "blog-cbf37.appspot.com",
  messagingSenderId: "888036904455",
  appId: "1:888036904455:web:a607728cdadabbd8e8a4a2",
  measurementId: "G-668DQPT5QZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };
