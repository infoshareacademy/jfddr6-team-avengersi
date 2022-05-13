import { Box, Button, Modal, TextField } from "@mui/material";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import moment from "moment";

const ButtonRabies = ({ id }) => {
  const [dog, setDog] = useState([]);

  // const id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f"; //props

  //pobieranie danych:

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const timeStamp = doc.data().rabiesVaccination;
      const date = new Date(timeStamp);

      const oneDog = {
        rabiesVaccination: moment(date).fromNow(),
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
    const rabiesVaccination = new Date(dateTime).getTime();

    await updateDoc(doc(db, "dogs", id), {
      rabiesVaccination,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTime();
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<VaccinesIcon />}
        size="large"
        onClick={handleOpen}
        fullWidth
      >
        {dog.rabiesVaccination}
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

export default ButtonRabies;
