import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconNameBreed from "../IconNameBreed/IconNameBreed.jsx";
import BoxNumber from "../Box/Box";
import { GetDogPhotoForList } from "../DogProfile/GetDogPhotoForList";
import Container from "@mui/material/Container";
import LabelFeeding from "../Label/LabelFeeding";
import LabelWalk from "../Label/LabelWalk";
import LabelPills from "../Label/LabelPills";
import LabelCleaning from "../Label/LabelCleaning";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f6f7fa",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#82009f",
  fontFamily: "Roboto, Helvetica, Arial,sans-serif",
}));

const SingleDogView = ({ id }) => {
  return (
    <Container
      sx={{
        width: "100vw",
        backgroundColor: "#f6f7fa",
        marginTop: "10px",
      }}
    >
      <Box sx={{ flexGrow: 1, boxShadow: 2 }}>
        <Grid container spacing={0} columns={16}>
          <Grid item xs={16} sm={8} md={3}>
            <Item
              sx={{
                paddingBottom: "10px",
              }}
              elevation={0}
            >
              <GetDogPhotoForList id={id} />
              <Link to={`/dog/${id}`}>More info...</Link>
            </Item>
          </Grid>
          <Grid item xs={8} sm={4} md={3}>
            <Item
              sx={{
                padding: "0",
              }}
              elevation={0}
            >
              <IconNameBreed id={id} />
              <BoxNumber id={id} />
            </Item>
          </Grid>
          <Grid item xs={8} sm={4} md={10}>
            <Item
              sx={{
                padding: "0",
                mt: "12%",
                mb: "10%",
              }}
              elevation={0}
            >
              <LabelFeeding />
              <LabelWalk />
              <LabelPills />
              <LabelCleaning />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SingleDogView;
