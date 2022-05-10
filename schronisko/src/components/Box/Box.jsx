import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import styles from "./Box.module.css";

const BoxNumber = () => {
  const [dog, setDog] = useState([]);

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        box: doc.data().box,
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <HomeIcon fontSize="large" />
      </div>
      <div>
        <Typography variant="h6">BOX: {dog.box}</Typography>
      </div>
    </div>
  );
};

export default BoxNumber;
