import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconNameBreed from "../IconNameBreed/IconNameBreed.jsx";
import BoxNumber from "../Box/Box";
import { GetDogPhotoForList } from "../DogProfile/GetDogPhotoForList";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import DescriptionWithoutEdit from "./DescriptionWithoutEdit.jsx";
import AskButton from "./AskButton.jsx";

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
        width: "70%",
        backgroundColor: "#f6f7fa",
        marginTop: "10px",
      }}
    >
      <Grid container spacing={0} columns={14}>
        <Grid item xs={14} sm={6} md={3}>
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

        <Grid item xs={14} sm={4} md={3}>
          <Grid container spacing={0} columns={3}>
            <Grid item xs={1} sm={3} md={3}>
              <Item
                sx={{
                  padding: "0",
                }}
                elevation={0}
              >
                <IconNameBreed id={id} />
              </Item>
            </Grid>
            <Grid item xs={1} sm={3} md={3}>
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

        <Grid item xs={14} sm={4} md={4}>
          <Grid container spacing={0} columns={5}>
            <Grid item xs={5} sm={5} md={4}>
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
        <Grid item xs={14} sm={4} md={3}>
          <Grid container spacing={0} columns={3}>
            <Grid item xs={3} sm={3} md={3}>
              <Item
                sx={{
                  padding: "0",
                  //   ml: "-50%",
                }}
                elevation={0}
              >
                <AskButton />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleDogViewForClients;
