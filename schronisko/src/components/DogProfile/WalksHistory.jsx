import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../db";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import moment from "moment";

function WalksHistory({ id }) {
  const [walksList, setWalksList] = useState([]);
  // let id = "0839429b-a4e0-4481-9783-8696974a37d0"; // propsy

  const getDogs = async () => {
    const docReferrence = doc(db, "dogs", id);
    console.log(id);
    const dogDocument = await getDoc(docReferrence);

    const dogData = {
      id: dogDocument.id,
      walks: dogDocument.data().walks,
    };
    console.log(id);
    setWalksList(dogData.walks.slice(-3).reverse());
  };

  useEffect(() => {
    getDogs();
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
          {walksList.map((walk) => {
            return (
              <ListItem disablePadding key={walk.date}>
                <ListItemText
                  primary={moment(new Date(walk.date)).format("LLL")}
                />
                {/* <ListItemText primary={walk.walk} /> */}
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
