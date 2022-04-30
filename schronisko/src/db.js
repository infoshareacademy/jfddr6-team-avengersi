import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1IDfuGqPMuS3-ZwIPPwW9uUanjPLsHT0",
  authDomain: "schronisko-81e1d.firebaseapp.com",
  projectId: "schronisko-81e1d",
  storageBucket: "schronisko-81e1d.appspot.com",
  messagingSenderId: "769157073591",
  appId: "1:769157073591:web:aba4c55838779327ea5b32",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };
