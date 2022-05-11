import React from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { db } from "../../db";
import { updateDoc, doc, collection, arrayUnion } from "firebase/firestore";

const dog = {
  id: "d6a027ba-3de2-4e66-82ba-d5fff99ccbad",
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
      arrayComment: arrayUnion(commentValue),
    });

    console.log(result);
    setCommentValue(commentValue);

    setEditMode(false);
  }, [commentValue]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      submitComment();
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
          sx={{ mb: 1 }}
        />
        <Box>
          <Button variant="contained" color="primary" type="submit">
            Ok
          </Button>
        </Box>
      </form>
    </Container>
  );
}
