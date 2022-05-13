import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import moment from "moment";

function WalksHistory({ getDogs, walksList }) {
  useEffect(() => {
    getDogs();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,

        fontFamily: "Roboto, Helvetica, Arial,sans-serif",
        ml: 2,
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
