import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import moment from "moment";

const ButtonWalk = () => {
  const [dog, setDog] = useState([]);

  const id = "0839429b-a4e0-4481-9783-8696974a37d0"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        walk: moment(doc.data().walkTest.toDate()).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<TransferWithinAStationIcon />}
        size="large"
      >
        {dog.walk}
      </Button>
    </>
  );
};

export default ButtonWalk;
