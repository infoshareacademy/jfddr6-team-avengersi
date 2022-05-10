import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import moment from "moment";

const ButtonPills = () => {
  const [dog, setDog] = useState([]);

  const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        pills: moment(doc.data().pillsTest.toDate()).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <>
      <Button variant="outlined" startIcon={<LocalHospitalIcon />} size="large">
        {dog.pills}
      </Button>
    </>
  );
};

export default ButtonPills;