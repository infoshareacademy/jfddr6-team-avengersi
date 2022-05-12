import React from "react";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { db, auth } from "../../db";
import { collection, getDocs } from "firebase/firestore";

export default function DescriptionWithoutEdit({ id }) {
  const [dogs, setDogs] = useState([]);
  const [description, setDescription] = useState([]);

  const GetDogs = async () => {
    const dogsCollection = collection(db, "dogs");
    const dogsDocuments = await getDocs(dogsCollection);

    const dogsData = dogsDocuments.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setDogs(dogsData);

    setDescription(
      dogsData.filter((element) => element.id === id)[0].data.dogsDescription
    );
  };

  useEffect(() => {
    GetDogs();
  }, []);
  console.log(description);

  return (
    <Container>
      <TextField
        label="Opis psiaka"
        variant="filled"
        color="primary"
        fullWidth
        disabled
        multiline
        rows={7}
        defaultValue={description}
        sx={{ mb: 1 }}
      />
    </Container>
  );
}
