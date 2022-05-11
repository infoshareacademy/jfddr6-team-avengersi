import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import CookieIcon from "@mui/icons-material/Cookie";
import moment from "moment";
import { Box } from "@mui/system";

const LabelFeeding = () => {
  const [dog, setDog] = useState([]);

  const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const timeStamp = doc.data().feeding;
      const date = new Date(timeStamp);

      const oneDog = {
        feeding: moment(date).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <>
      <Button variant="outlined" startIcon={<CookieIcon />} size="large">
        {dog.feeding}
      </Button>
    </>
  );
};

export default LabelFeeding;
