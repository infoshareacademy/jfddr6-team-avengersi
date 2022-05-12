import { Button, Container, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../db";
import { v4 as uuidv4 } from "uuid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const ClientsForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
    message: "",
  });
  const messId = uuidv4();
  const dogId = "9d0336a9-e338-4bdd-8aa1-44f7ab25c217";

  const sendMessage = async () => {
    const email = formState.email;
    const message = formState.message;
    const dogsId = dogId;

    await setDoc(doc(db, "messages", uuidv4()), {
      email,
      message,
      dogId,
    });

    setFormState({
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/dogs");
  };
  return (
    <Container
      component="div"
      sx={{
        padding: "10px",
        width: "95vw",
        height: "95vh",
        marginTop: "20px",
      }}
    >
      <Box sx={{ boxShadow: 0 }}>
        <Typography component="p" variant="h6" sx={{ textAlign: "center" }}>
          Napisz do nas!
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "35ch",
            boxShadow: 2,
            fontFamily: "Roboto, Helvetica, Arial,sans-serif",
          },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onSubmit={handleSubmit}
      >
        <TextField
          color="secondary"
          id="text"
          label="Adres email"
          type="text"
          variant="outlined"
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          sx={{ width: 330 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          color="secondary"
          id="email"
          label="Treść wiadomości"
          type="email"
          variant="outlined"
          value={formState.message}
          onChange={(e) =>
            setFormState({
              ...formState,
              message: e.target.value,
            })
          }
          sx={{ width: 330 }}
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          rows={10}
        />
        <Button color="secondary" variant="outlined" type="submit">
          WYŚLIJ WIADOMOŚĆ{" "}
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color="primary">
          {"Wiadmość została wysłana"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Odezwiemy się najszybciej jak to możliwe :)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
