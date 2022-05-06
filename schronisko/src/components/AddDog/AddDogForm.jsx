import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/Themes";
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
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../db";
import { useState } from "react";

export const AddDogForm = () => {
  const [formState, setFormState] = useState({
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

  // const [nameValue, setNameValue] = useState("");
  // const [breedValue, setBreedValue] = useState("");
  // const [dateOfBirthValue, setDateOfBirthValue] = useState("");
  // const [weightValue, setWeightValue] = useState("");
  // const [boxValue, setBoxValue] = useState("");
  // const [pillsValue, setPillsValue] = useState("");
  // const [rabiesVaccinationValue, setRabiesVaccinationValue] = useState("");
  // const [sexValue, setSexValue] = useState("");
  // const [descriptionValue, setDescriptionValue] = useState("");
  // const [commentValue, setCommentValue] = useState("");

  const [isFixed, setIsFixed] = useState(true);
  const [isAdopted, setIsAdopted] = useState(true);

  const dogId = uuidv4();

  const addDog = async () => {
    const name = formState.name;
    const breed = formState.breed;
    const dateOfBirth = formState.dateOfBirth;
    const weight = formState.weight;
    const box = formState.box;
    const pills = formState.pills;
    const rabiesVaccination = formState.RabiesVaccination;
    const sex = formState.sex;
    const description = formState.description;
    const comment = formState.comment;
    const fixed = isFixed;
    const adopted = isAdopted;

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

  return (
    <ThemeProvider theme={theme}>
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
          type="text"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          id="outlined-basic"
          label="Imię"
          variant="outlined"
          size="small"
        />
        <TextField
          type="text"
          value={formState.breed}
          onChange={(e) =>
            setFormState({ ...formState, breed: e.target.value })
          }
          id="outlined-basic"
          label="Rasa"
          variant="outlined"
          size="small"
        />{" "}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Płeć</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            variant="outlined"
            id="outlined-basic"
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
          type="string"
          value={formState.dateOfBirth}
          onChange={(e) =>
            setFormState({ ...formState, dateOfBirth: e.target.value })
          }
          id="outlined-basic"
          label="Data urodzenia"
          variant="outlined"
          size="small"
        />
        <TextField
          type="number"
          value={formState.weight}
          onChange={(e) =>
            setFormState({ ...formState, weight: e.target.value })
          }
          id="outlined-basic"
          label="Waga kg"
          variant="outlined"
          size="small"
        />
        <TextField
          type="number"
          value={formState.box}
          onChange={(e) => setFormState({ ...formState, box: e.target.value })}
          id="outlined-basic"
          label="Numer boksu"
          variant="outlined"
          size="small"
        />
        <TextField
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
          type="string"
          value={formState.rabiesVaccination}
          onChange={(e) =>
            setFormState({ ...formState, rabiesVaccination: e.target.value })
          }
          id="outlined-basic"
          label="Wścieklizna"
          variant="outlined"
          size="small"
        />
        <TextField
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
              fontFamily: "Roboto, Helvetica, Arial,sans-serif",
              fontWeight: "500",
            },
          }}
          control={
            <Checkbox
              defaultChecked
              onChange={(e) => setIsFixed(e.target.checked ? true : false)}
            />
          }
        />
        <FormControlLabel
          label="Adoptowany"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "Roboto, Helvetica, Arial,sans-serif",
              fontWeight: "500",
            },
          }}
          control={
            <Checkbox
              defaultChecked
              onChange={(e) => setIsAdopted(e.target.checked ? true : false)}
            />
          }
        />
        <Button
          variant="outlined"
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
        <Button variant="text" type="submit">
          DODAJ PSIAKA
        </Button>
      </Box>
    </ThemeProvider>
  );
};
