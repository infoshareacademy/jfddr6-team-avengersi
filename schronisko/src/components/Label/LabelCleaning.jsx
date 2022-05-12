import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import moment from "moment";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const LabelCleaning = ({ id }) => {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const timeStamp = doc.data().cleaning;
      const date = new Date(timeStamp);

      const oneDog = {
        cleaning: moment(date).fromNow(),
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
        sx={{ m: 0.2 }}
      >
        {dog.cleaning}
      </Button>
    </>
  );
};

export default LabelCleaning;
