import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../db";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ButtonDelete = ({ id }) => {
  const navigate = useNavigate();

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

  const deleteDog = async () => {
    await deleteDoc(doc(db, "dogs", id));
    console.log("Usunięto");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleClose();
    deleteDog();
    navigate("/dogs");
  };

  return (
    <>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteForeverIcon />}
        onClick={handleOpen}
      >
        Usuń psa z bazy
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography>Czy na pewno?</Typography>

          <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonDelete;
