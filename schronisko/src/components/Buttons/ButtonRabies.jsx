import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import moment from "moment";

const ButtonRabies = () => {
  const [dog, setDog] = useState([]);

  const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props

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
