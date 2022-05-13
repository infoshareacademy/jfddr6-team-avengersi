import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import styles from "./AgeWeight.module.css";
import moment from "moment";

const AgeWeight = ({ id }) => {
  const [dog, setDog] = useState({});

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const timeStamp = doc.data().dateOfBirth;
      const date = new Date(timeStamp);

      const oneDog = {
        dateOfBirth: moment().diff(moment(date, "DD MMM YYYY"), "years"),
        weight: doc.data().weight,
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <InfoIcon fontSize="large" />
      </div>
      <div>
        {/* <Typography variant="h6">{dog.dateOfBirth}</Typography> */}
        <Typography variant="h6">Waga: {dog.weight} kg</Typography>
        <Typography variant="h6">
          Wiek: {dog.dateOfBirth} {dog.age < 1 ? "rok" : "lat"}
        </Typography>
      </div>
    </div>
  );
};

export default AgeWeight;
