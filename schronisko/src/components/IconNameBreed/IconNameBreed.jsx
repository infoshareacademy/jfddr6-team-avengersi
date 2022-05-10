import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import styles from "./IconNameBreed.module.css";

const IconNameBreed = () => {
  const [dog, setDog] = useState([]);

  const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props
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
