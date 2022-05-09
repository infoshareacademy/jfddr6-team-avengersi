import React from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { db, auth } from "../../db";
import { updateDoc, doc } from "firebase/firestore";

const dogDescription = {
  id: '25f6188c-1f41-4894-81a2-ecf376ec0b9f',
  description: "nieGrzeczny pies"
}

export default function Description() {
  const [dogsDescriptionValue, setDogsDescriptionValue] = useState(dogDescription.description);
  const [editMode, setEditMode] = useState(false);

  
  const handleClickEdit = () => {
    setEditMode((prev) => !prev);
  };

  const editDescription = async () => {
    const dogsDescription = dogsDescriptionValue;
    
    await updateDoc(doc(db, "dogs", dogDescription.id), {
      dogsDescription
    });
  setDogsDescriptionValue(dogsDescription)

    setEditMode(false);
  };
const handleSubmit = (e) => {
  e.preventDefault();
  editDescription();
};
 
  
  const handleChangeDescription = (e) => {
    setDogsDescriptionValue(e.target.value)
  }
  
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
          disabled={false}
          onChange={ handleChangeDescription }
          
        />
        <Button onClick={handleSubmit}>Ok</Button>
        
      </form>
    </Container>
  );
}

