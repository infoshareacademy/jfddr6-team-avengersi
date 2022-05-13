import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import moment from "moment";

const LabelWalk = ({ id }) => {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const allWalks = doc.data().walks;

      const date = new Date(allWalks[allWalks.length - 1].date);

      const oneDog = {
        walk: moment(date).fromNow(),
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
        sx={{ m: 0.2 }}
      >
        {dog.walk}
      </Button>
    </>
  );
};

export default LabelWalk;
