import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import styles from "./AgeWeight.module.css";
import moment from "moment";

const AgeWeight = () => {
  const [dog, setDog] = useState({});

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        dateOfBirth: doc.data().dateOfBirth,
        weight: doc.data().weight,
        // age: moment(doc.data().ageTest.toDate()).fromNow(),
        age: moment().diff(doc.data().ageTest.toDate(), "years"),
      };
      setDog(oneDog);
    });
  }, []);

  // const age = dog.age?.toDate();
  // const age = moment(dog.age.toDate()).fromNow();
  console.log(typeof dog.age);

  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <InfoIcon fontSize="large" />
      </div>
      <div>
        {/* <Typography variant="h6">{dog.dateOfBirth}</Typography> */}
        <Typography variant="h6">Waga: {dog.weight} kg</Typography>
        <Typography variant="h6">
          {dog.age} {dog.age < 1 ? "rok" : "lat"}
        </Typography>
      </div>
    </div>
  );
};

export default AgeWeight;
