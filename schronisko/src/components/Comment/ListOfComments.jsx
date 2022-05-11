import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function ListOfComments() {
  const [dogs, setDogs] = useState([]);
  const [commentList, setCommentList] = useState([]);
  let id = "d6a027ba-3de2-4e66-82ba-d5fff99ccbad"; // propsy

  const GetDogs = async () => {
    const dogsCollection = collection(db, "dogs");
    const dogsDocuments = await getDocs(dogsCollection);

    const dogsData = dogsDocuments.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setDogs(dogsData);

    setCommentList(
      dogsData.filter((element) => element.id === id)[0].data.arrayComment
    );
  };

  useEffect(() => {
    GetDogs();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        fontFamily: "Roboto, Helvetica, Arial,sans-serif",
      }}
    >
      <nav>
        <List>
          {commentList.map((arrayComment) => {
            return (
              <ListItem disablePadding key={arrayComment}>
                <ListItemText primary={arrayComment} />
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
