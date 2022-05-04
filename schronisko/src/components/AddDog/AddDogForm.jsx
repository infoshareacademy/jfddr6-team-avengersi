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

export default function AddDogForm() {
  const [nameValue, setNameValue] = useState("");
  const [breedValue, setBreedValue] = useState("");
  const [dateOfBirthValue, setDateOfBirthValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [boxValue, setBoxValue] = useState("");
  const [pillsValue, setPillsValue] = useState("");
  const [rabiesVaccinationValue, setRabiesVaccinationValue] = useState("");
  const [sexValue, setSexValue] = useState("");
  const [isFixed, setIsFixed] = useState(true);
  const [isAdopted, setIsAdopted] = useState(true);

  const dogId = uuidv4();

  const addDog = async () => {
    const name = nameValue;
    const breed = breedValue;
    const dateOfBirth = dateOfBirthValue;
    const weight = weightValue;
    const box = boxValue;
    const pills = pillsValue;
    const rabiesVaccination = rabiesVaccinationValue;
    const sex = sexValue;
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
    });

    setNameValue("");
    setBreedValue("");
    setDateOfBirthValue("");
    setWeightValue("");
    setBoxValue("");
    setPillsValue("");
    setRabiesVaccinationValue("");
    setSexValue("");
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
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          id="outlined-basic"
          label="Imię"
          variant="outlined"
          size="small"
        />
        <TextField
          type="text"
          value={breedValue}
          onChange={(e) => setBreedValue(e.target.value)}
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
            value={sexValue}
            label="Płeć"
            onChange={(e) => setSexValue(e.target.value)}
          >
            <MenuItem value={"male"}>pies</MenuItem>
            <MenuItem value={"female"}>suczka</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="string"
          value={dateOfBirthValue}
          onChange={(e) => setDateOfBirthValue(e.target.value)}
          id="outlined-basic"
          label="Data urodzenia"
          variant="outlined"
          size="small"
        />
        <TextField
          type="number"
          value={weightValue}
          onChange={(e) => setWeightValue(e.target.value)}
          id="outlined-basic"
          label="Waga kg"
          variant="outlined"
          size="small"
        />
        <TextField
          type="number"
          value={boxValue}
          onChange={(e) => setBoxValue(e.target.value)}
          id="outlined-basic"
          label="Numer boksu"
          variant="outlined"
          size="small"
        />
        <TextField
          type="text"
          value={pillsValue}
          onChange={(e) => setPillsValue(e.target.value)}
          id="outlined-basic"
          label="Leki"
          variant="outlined"
          size="small"
        />
        <TextField
          type="string"
          value={rabiesVaccinationValue}
          onChange={(e) => setRabiesVaccinationValue(e.target.value)}
          id="outlined-basic"
          label="Wścieklizna"
          variant="outlined"
          size="small"
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
}
