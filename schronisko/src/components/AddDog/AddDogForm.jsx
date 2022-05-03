import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/Themes";
import CastratedChkbx from "../Checkboxes/CastrartedChkbx.jsx";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../db";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

export default function AddDogForm({ refreshList }) {
  const [nameValue, setNameValue] = useState("");
  const [breedValue, setBreedValue] = useState("");
  const [dateOfBirthValue, setDateOfBirthValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [boxValue, setBoxValue] = useState("");
  const [pillsValue, setPillsValue] = useState("");
  const [rabiesVaccinationValue, setRabiesVaccinationValue] = useState("");

  const addDog = async () => {
    const name = nameValue;
    const breed = breedValue;
    const dateOfBirth = dateOfBirthValue;
    const weight = weightValue;
    const box = boxValue;
    const pills = pillsValue;
    const rabiesVaccination = rabiesVaccinationValue;

    await setDoc(doc(db, "dogs", uuidv4()), {
      name,
      breed,
      dateOfBirth,
      weight,
      box,
      pills,
      rabiesVaccination,
    });

    setNameValue("");
    setBreedValue("");
    setDateOfBirthValue("");
    setWeightValue("");
    setBoxValue("");
    setPillsValue("");
    setRabiesVaccinationValue("");
    refreshList();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDog();
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
        />
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
          label="Waga"
          variant="outlined"
          size="small"
        />
        <TextField
          type="number"
          value={boxValue}
          onChange={(e) => setBoxValue(e.target.value)}
          id="outlined-basic"
          label="BOX"
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

        <CastratedChkbx />
        <Button variant="text" type="submit" color="secondary">
          DODAJ PSIAKA
        </Button>
      </Box>
    </ThemeProvider>
  );
}
