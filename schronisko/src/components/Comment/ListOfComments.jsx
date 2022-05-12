import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import moment from "moment";

function ListOfComments({ id, getDogs, commentList }) {
  // let id = "d6a027ba-3de2-4e66-82ba-d5fff99ccbad"; // propsy

  // const getDogs = async () => {
  //   const docReferrence = doc(db, "dogs", id);

  //   const dogDocument = await getDoc(docReferrence);

  //   const dogData = {
  //     id: dogDocument.id,
  //     comments: dogDocument.data().comments,
  //   };

  //   setCommentList(dogData.comments.slice(-3).reverse());
  // };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        // bgcolor: "background.paper",
        fontFamily: "Roboto, Helvetica, Arial,sans-serif",
      }}
    >
      <nav>
        <List>
          {commentList.map((comment) => {
            return (
              <ListItem disablePadding key={comment.date}>
                <ListItemText
                  primary={moment(new Date(comment.date)).format("LLL")}
                />
                <ListItemText primary={comment.comment} />
                <Divider />
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

export default ListOfComments;
