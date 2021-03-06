import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { db } from "../../db";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

export default function AddComment({ id, getDogs }) {
  const dog = {
    id: id,
    comment: "",
  };

  const [commentValue, setCommentValue] = useState(dog.comment);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "dogs", dog.id), {
      comments: arrayUnion({ comment: commentValue, date: Date.now() }),
    });
    setCommentValue("");
    getDogs();
  };

  const handleChangeComment = (e) => setCommentValue(e.target.value);

  return (
    <Container style={{ paddingLeft: 0 }}>
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={commentValue.trim().length === 0}
          >
            Zapisz
          </Button>
        </Box>
      </form>
    </Container>
  );
}
