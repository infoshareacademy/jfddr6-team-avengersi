import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import styles from "./IconNameBreed.module.css";

const IconNameBreed = () => {
  const [dog, setDog] = useState([]);

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props
  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        name: doc.data().name,
        breed: doc.data().breed,
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <PetsIcon fontSize="large" />
      </div>
      <div>
        <Typography variant="h5">{dog.name}</Typography>
        <Typography variant="body2">{dog.breed}</Typography>
      </div>
    </div>
  );
};

export default IconNameBreed;
