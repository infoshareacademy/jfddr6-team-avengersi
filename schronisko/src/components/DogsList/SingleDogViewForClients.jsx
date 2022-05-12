import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconNameBreed from "../IconNameBreed/IconNameBreed.jsx";
import BoxNumber from "../Box/Box";
import { GetDogPhotoForList } from "../DogProfile/GetDogPhotoForList";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import DescriptionWithoutEdit from "./DescriptionWithoutEdit.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f6f7fa",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#82009f",
  fontFamily: "Roboto, Helvetica, Arial,sans-serif",
}));

const SingleDogViewForClients = ({ id }) => {
  return (
    <Container
      sx={{
        width: "100vw",
        backgroundColor: "#f6f7fa",
        marginTop: "10px",
      }}
    >
      <Grid container spacing={0} columns={16}>
        <Grid item xs={16} sm={6} md={3}>
          {/* <Box sx={{ flexGrow: 1, boxShadow: 2 }}> */}
          <Grid container spacing={0} columns={3}>
            <Grid item xs={3} sm={3} md={3}>
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
          </Grid>
        </Grid>

        <Grid item xs={16} sm={4} md={2}>
          <Grid container spacing={0} columns={2}>
            <Grid item xs={1} sm={2} md={2}>
              <Item
                sx={{
                  padding: "0",
                }}
                elevation={0}
              >
                <IconNameBreed id={id} />
              </Item>
            </Grid>
            <Grid item xs={1} sm={2} md={2}>
              <Item
                sx={{
                  padding: "0",
                }}
                elevation={0}
              >
                <BoxNumber id={id} />
              </Item>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={16} sm={4} md={6}>
          <Grid container spacing={0} columns={6}>
            <Grid item xs={6} sm={6} md={6}>
              <Item
                sx={{
                  padding: "0",
                }}
                elevation={0}
              >
                <DescriptionWithoutEdit id={id} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Box> */}
    </Container>
  );
};

export default SingleDogViewForClients;
