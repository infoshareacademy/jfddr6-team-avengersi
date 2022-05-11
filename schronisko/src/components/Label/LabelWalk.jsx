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
      const timeStamp = doc.data().walk;
      const date = new Date(timeStamp);

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
      >
        {dog.walk}
      </Button>
    </>
  );
};

export default LabelWalk;
