import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import CookieIcon from "@mui/icons-material/Cookie";
import moment from "moment";

const ButtonFeeding = () => {
  const [dog, setDog] = useState([]);

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        feeding: moment(doc.data().feedingTest.toDate()).fromNow(),
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

export default ButtonFeeding;
