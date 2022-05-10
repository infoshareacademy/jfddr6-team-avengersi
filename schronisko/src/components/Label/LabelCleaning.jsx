import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import CleaningServicesIcon from "@mui/icons-material/TransferWithinAStation";
import moment from "moment";

const LabelCleaning = () => {
  const [dog, setDog] = useState([]);

  const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        walk: moment(doc.data().cleaningTest.toDate()).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<CleaningServicesIcon />}
        size="large"
      >
        {dog.walk}
      </Button>
    </>
  );
};

export default LabelCleaning;
