import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import styles from "./IconNameBreed.module.css";

const IconNameBreed = ({ id }) => {
  const [dog, setDog] = useState([]);

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
