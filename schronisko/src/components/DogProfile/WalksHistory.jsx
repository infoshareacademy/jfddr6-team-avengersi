import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function WalksHistory() {
  const [dogs, setDogs] = useState([]);

  const GetDogs = async () => {
    const dogsCollection = collection(db, "dogs");
    const dogsDocuments = await getDocs(dogsCollection);

    const dogsData = dogsDocuments.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setDogs(dogsData);
  };

  useEffect(() => {
    GetDogs();
  }, []);

  const walksList = dogs.map((element) => element.data.walk)[0];

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
          {walksList.map((walk) => {
            return (
              <ListItem disablePadding key={walk}>
                <ListItemText primary={walk} />
                <Divider />
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

export default WalksHistory;
