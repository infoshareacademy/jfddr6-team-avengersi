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
  // console.log("HERE " + id);
  const [commentValue, setCommentValue] = useState(dog.comment);

  const submitComment = React.useCallback(async () => {
    const result = await updateDoc(doc(db, "dogs", dog.id), {
      comments: arrayUnion({ comment: commentValue, date: Date.now() }),
    });

    console.log(result);
    setCommentValue(commentValue);
  }, [commentValue]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      submitComment();
      getDogs();
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={commentValue === ""}
          >
            Zapisz
          </Button>
        </Box>
      </form>
    </Container>
  );
}
