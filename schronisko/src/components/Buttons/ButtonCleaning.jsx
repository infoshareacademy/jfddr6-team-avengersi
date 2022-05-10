import { Button, Modal, TextField, Typography } from "@mui/material";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import moment from "moment";
import { Box } from "@mui/system";

const ButtonCleaning = () => {
  moment.locale("fr", {
    // customizations.
  });

  const [dog, setDog] = useState([]);

  const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        cleaning: moment(doc.data().cleaningTest.toDate()).fromNow(),
      };
      setDog(oneDog);
    });
  }, []);

  //modal:

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

  //timePicker
  const [dateTime, setDateTime] = useState(new Date());
  // const [dateTime, setDateTime] = useState("");

  console.log(dateTime);

  const addTime = async () => {
    const dateTestPiotr = dateTime;

    await setDoc(doc(db, "dogs", id), {
      dateTestPiotr,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTime();
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<CleaningServicesIcon />}
        size="large"
        onClick={handleOpen}
      >
        {dog.cleaning}
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
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="outlined" type="submit">
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonCleaning;
