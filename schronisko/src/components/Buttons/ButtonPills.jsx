import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import moment from "moment";

const ButtonPills = () => {
  const [dog, setDog] = useState([]);

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props

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
