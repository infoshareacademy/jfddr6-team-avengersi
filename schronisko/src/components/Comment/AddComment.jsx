import React from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { db } from "../../db";
import { updateDoc, doc, collection } from "firebase/firestore";

const dog = {
  id: "25f6188c-1f41-4894-81a2-ecf376ec0b9f",
  comment: "",
};

export default function AddComment() {
  const [commentValue, setCommentValue] = useState(dog.comment);
  const [editMode, setEditMode] = useState(false);

  const handleClickEdit = React.useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

  const submitComment = React.useCallback(async () => {
    const result = await updateDoc(doc(db, "dogs", dog.id), {
      commentValue,
    });

    console.log(result);
    setCommentValue(commentValue);

    setEditMode(false);
  }, [commentValue]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      submitComment();
      console.log("Ania");
    },
    [submitComment]
  );

  const handleChangeComment = React.useCallback((e) => {
    setCommentValue(e.target.value);
  }, []);

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Komentarz"
          variant="outlined"
          color="primary"
          fullWidth
          multiline
          rows={7}
          value={commentValue}
          onChange={handleChangeComment}
        />
        <Box mt={1}>
          <Button variant="contained" color="primary" type="submit">
            Ok
          </Button>
        </Box>
      </form>
    </Container>
  );
}
