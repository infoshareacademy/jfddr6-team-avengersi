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
import { useEffect, useState } from "react";

export const AddDogForm = () => {
  const [isRequired, setIsRequired] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

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
    const dateOfBirth = formState.dateOfBirth;
    const weight = formState.weight;
    const box = formState.box;
    const pills = formState.pills;
    const rabiesVaccination = formState.rabiesVaccination;
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
    console.log("dog added");
  };

  const [imageUpload, setImageUpload] = useState(null);

  const uploadPhotos = () => {
    const imageRef = ref(storage, `DogPhotos/${dogId}/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload);
    console.log("image uploaded");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDog();
    uploadPhotos();
  };

  const handleRequired = () => {
    if (
      !isRequired &&
      formState.name.trim() &&
      formState.breed.trim() &&
      formState.sex.trim() &&
      formState.dateOfBirth.trim() &&
      formState.rabiesVaccination.trim() &&
      formState.weight.trim() &&
      formState.box.trim()
    ) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  };

  useEffect(() => {
    handleRequired();
  }, []);

  return (
    <>
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
            <Box>
              <Typography>Krok 2 z 2</Typography>
            </Box>
            <TextField
              color="secondary"
              type="text"
              value={formState.pills}
              onChange={(e) =>
                setFormState({ ...formState, pills: e.target.value })
              }
              id="outlined-basic"
              label="Leki"
              variant="outlined"
              size="small"
            />
            <TextField
              color="secondary"
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
              color="secondary"
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
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "400",
                },
              }}
              control={
                <Checkbox
                  color="secondary"
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
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "400",
                },
              }}
              control={
                <Checkbox
                  color="secondary"
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
              color="secondary"
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
              Dodaj zdjęcie
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={(e) => {
                handleRequired();
              }}
            >
              WRÓĆ
            </Button>
            <Button
              color="secondary"
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
              <Typography>Krok 1 z 2</Typography>
            </Box>
            <TextField
              color="secondary"
              type="text"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              id="outlined-basic"
              label="Imię"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              color="secondary"
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
              color="secondary"
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <InputLabel color="secondary" id="demo-select-small">
                Płeć
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                variant="outlined"
                id="outlined-basic"
                defaultValue={"male"}
                value={formState.sex}
                label="Płeć"
                onChange={(e) =>
                  setFormState({ ...formState, sex: e.target.value })
                }
              >
                <MenuItem value={"male"}>pies</MenuItem>
                <MenuItem value={"female"}>suczka</MenuItem>
              </Select>
            </FormControl>
            <TextField
              color="secondary"
              type="string"
              value={formState.dateOfBirth}
              onChange={(e) =>
                setFormState({ ...formState, dateOfBirth: e.target.value })
              }
              id="outlined-basic"
              label="Data urodzenia"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              color="secondary"
              type="string"
              value={formState.rabiesVaccination}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  rabiesVaccination: e.target.value,
                })
              }
              id="outlined-basic"
              label="Wścieklizna"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              variant="outlined"
              onClick={() => {
                handleRequired();
              }}
            >
              DALEJ
            </Button>
          </>
        )}
      </Box>
    </>
  );
};
