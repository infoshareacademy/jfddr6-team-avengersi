import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../db";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../db";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router-dom";

export const AddDogForm = () => {
  const navigate = useNavigate();
  const [isRequired, setIsRequired] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    breed: "",
    dateOfBirth: "",
    weight: "",
    box: "",
    pills: "",
    rabiesVaccination: "",
    description: "",
    comment: "",
    sex: "",
    fixed: true,
    adopted: true,
  });

  const dogId = uuidv4();

  const addDog = async () => {
    const name = formState.name;
    const breed = formState.breed;
    const dateOfBirth = new Date(formState.dateOfBirth).getTime();
    const weight = formState.weight;
    const box = formState.box;
    const pills = new Date(formState.pills).getTime();
    const rabiesVaccination = new Date(formState.rabiesVaccination).getTime();
    const sex = formState.sex;
    const description = formState.description;
    const comment = formState.comment;
    const fixed = formState.fixed;
    const adopted = formState.adopted;

    await setDoc(doc(db, "dogs", dogId), {
      name,
      breed,
      dateOfBirth,
      weight,
      box,
      pills,
      rabiesVaccination,
      sex,
      fixed,
      adopted,
      description,
      comment,
    });

    setFormState({
      name: "",
      breed: "",
      dateOfBirth: "",
      weight: "",
      box: "",
      pills: "",
      rabiesVaccination: "",
      sex: "",
      fixed: "",
      adopted: "",
      description: "",
      comment: "",
    });
  };

  const [imageUpload, setImageUpload] = useState(null);

  const uploadPhotos = () => {
    const imageRef = ref(storage, `DogPhotos/${dogId}/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDog();
    navigate("/dogs");
    uploadPhotos();
  };

  const handleRequired = (e) => {
    const requiredKeys = [
      "name",
      "breed",
      "sex",
      "dateOfBirth",
      "rabiesVaccination",
      "weight",
      "box",
    ];
    const isValid = Object.entries(formState)
      .filter(([key, _]) => requiredKeys.includes(key))
      .every(([_, value]) => value.trim());
    if (!isRequired && isValid) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
      setAnchorEl(e);
    }
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Box
        component="div"
        sx={{
          padding: "10px",
          width: "95vw",
          height: "95vh",
          marginTop: "20px",
        }}
      >
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
        >
          {isRequired ? (
            <>
              {" "}
              <Box sx={{ boxShadow: 0 }}>
                <Typography
                  component="p"
                  variant="h6"
                  sx={{ textAlign: "center" }}
                >
                  Krok 2 z 2
                </Typography>
              </Box>
              <TextField
                color="primary"
                id="date"
                label="Leki"
                type="date"
                variant="outlined"
                value={formState.pills}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    pills: e.target.value,
                  })
                }
                sx={{ width: 330 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                color="primary"
                type="text"
                value={formState.description}
                onChange={(e) =>
                  setFormState({ ...formState, description: e.target.value })
                }
                id="outlined-basic"
                label="Opis"
                variant="outlined"
                size="small"
                multiline
                rows={5}
              />
              <TextField
                color="primary"
                type="text"
                value={formState.comment}
                onChange={(e) =>
                  setFormState({ ...formState, comment: e.target.value })
                }
                id="outlined-basic"
                label="Komentarz"
                variant="outlined"
                size="small"
                multiline
                rows={5}
              />
              <FormControlLabel
                label="Kastracja"
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        fixed: e.target.checked ? true : false,
                      })
                    }
                  />
                }
              />
              <FormControlLabel
                label="Adoptowany"
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        adopted: e.target.checked ? true : false,
                      })
                    }
                  />
                }
              />
              <Button
                color="primary"
                component="label"
                startIcon={<AddAPhotoIcon />}
              >
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  hidden
                  onChange={(e) => {
                    setImageUpload(e.target.files[0]);
                  }}
                />
                Dodaj zdj??cie
              </Button>
              <Button
                color="primary"
                variant="outlined"
                onClick={(e) => {
                  handleRequired();
                }}
              >
                WR????
              </Button>
              <Button
                color="primary"
                variant="outlined"
                type="submit"
                onClick={handleSubmit}
              >
                DODAJ PSIAKA
              </Button>
            </>
          ) : (
            <>
              <Box>
                <Typography
                  component="p"
                  variant="h6"
                  sx={{ textAlign: "center" }}
                >
                  Krok 1 z 2
                </Typography>
              </Box>
              <TextField
                color="primary"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                id="outlined-basic"
                label="Imi??"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                color="primary"
                type="text"
                value={formState.breed}
                onChange={(e) =>
                  setFormState({ ...formState, breed: e.target.value })
                }
                id="outlined-basic"
                label="Rasa"
                variant="outlined"
                size="small"
                required
              />
              <FormControl
                color="primary"
                sx={{ m: 1, minWidth: 120 }}
                size="small"
              >
                <InputLabel color="primary" id="demo-select-small">
                  P??e??
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  variant="outlined"
                  id="outlined-basic"
                  defaultValue={"male"}
                  value={formState.sex}
                  label="P??e??"
                  onChange={(e) =>
                    setFormState({ ...formState, sex: e.target.value })
                  }
                >
                  <MenuItem value={"male"}>pies</MenuItem>
                  <MenuItem value={"female"}>suczka</MenuItem>
                </Select>
              </FormControl>
              <TextField
                color="primary"
                id="date"
                label="Data urodzenia"
                type="date"
                variant="outlined"
                value={formState.dateOfBirth}
                onChange={(e) =>
                  setFormState({ ...formState, dateOfBirth: e.target.value })
                }
                sx={{ width: 330 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                color="primary"
                id="date"
                label="Data szczepienia p/w??ciekli??nie"
                type="date"
                variant="outlined"
                value={formState.rabiesVaccination}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    rabiesVaccination: e.target.value,
                  })
                }
                sx={{ width: 330 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                color="primary"
                type="number"
                value={formState.weight}
                onChange={(e) =>
                  setFormState({ ...formState, weight: e.target.value })
                }
                id="outlined-basic"
                label="Waga kg"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                color="primary"
                type="number"
                value={formState.box}
                onChange={(e) =>
                  setFormState({ ...formState, box: e.target.value })
                }
                id="outlined-basic"
                label="Numer boksu"
                variant="outlined"
                size="small"
                required
              />
              <Button
                aria-describedby={id}
                color="primary"
                variant="outlined"
                onClick={(e) => {
                  handleRequired(e.target);
                }}
              >
                DALEJ
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>Wype??nij wszystkie pola</Typography>
              </Popover>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
