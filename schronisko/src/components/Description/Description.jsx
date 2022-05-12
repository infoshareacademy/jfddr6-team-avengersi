import React from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { db, auth } from "../../db";
import { updateDoc, doc } from "firebase/firestore";

export default function Description({
  id,
  getDogs,
  dogsDescriptionValue,
  setDogsDescriptionValue,
}) {
  const [editMode, setEditMode] = useState(false);

  const handleClickEdit = () => {
    setEditMode((prev) => !prev);
  };

  const editDescription = async () => {
    const description = dogsDescriptionValue;

    await updateDoc(doc(db, "dogs", id), {
      description,
    });
    setDogsDescriptionValue(description);

    setEditMode(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editDescription();
    getDogs();
  };

  const handleChangeDescription = (e) => {
    setDogsDescriptionValue(e.target.value);
  };

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Opis psiaka"
          variant="outlined"
          color="primary"
          fullWidth
          multiline
          rows={7}
          value={dogsDescriptionValue}
          disabled={!editMode}
          onChange={handleChangeDescription}
          sx={{ mb: 1 }}
        />
        <Button variant="contained" onClick={handleSubmit} disabled={!editMode}>
          Zapisz
        </Button>
        <Button onClick={handleClickEdit} mt={1}>
          {editMode ? <>Zakończ edycję</> : <>Edytuj</>}
        </Button>
      </form>
    </Container>
  );
}
