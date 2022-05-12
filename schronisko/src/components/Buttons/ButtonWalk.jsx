import { Box, Button, Modal, TextField } from "@mui/material";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import moment from "moment";

const ButtonWalk = ({ id, getDogs }) => {
  const [dog, setDog] = useState([]);

  //pobieranie danych:

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const allWalks = doc.data().walks;
      // console.log("allWalks", allWalks);
      const date = new Date(allWalks[allWalks.length - 1].date);
      // console.log("date", date);
      const oneDog = {
        walk: moment(date).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [dateTime, setDateTime] = useState(new Date());

  const addTime = async () => {
    const walk = new Date(dateTime).getTime();

    await updateDoc(doc(db, "dogs", id), {
      walks: arrayUnion({ date: walk }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTime();
    handleClose();
    getDogs();
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<TransferWithinAStationIcon />}
        size="large"
        onClick={handleOpen}
        fullWidth
      >
        {dog.walk}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <TextField
            id="datetime-local"
            label="Ustaw datę"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            sx={{ width: 330 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonWalk;
