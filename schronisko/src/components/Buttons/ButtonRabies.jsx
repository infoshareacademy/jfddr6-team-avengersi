import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import moment from "moment";

const ButtonRabies = () => {
  const [dog, setDog] = useState([]);

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        rabies: moment(doc.data().rabiesVaccTest.toDate()).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <>
      <Button variant="outlined" startIcon={<VaccinesIcon />} size="large">
        {dog.rabies}
      </Button>
    </>
  );
};

export default ButtonRabies;
