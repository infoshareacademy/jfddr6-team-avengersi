import IconNameBreed from "../IconNameBreed/IconNameBreed";
import Box from "../Box/Box";
import AgeWeight from "../AgeWeight/AgeWeight";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonFeeding from "../Buttons/ButtonFeeding";
import ButtonWalk from "../Buttons/ButtonWalk";
import ButtonCleaning from "../Buttons/ButtonCleaning";
import ButtonPills from "../Buttons/ButtonPills";
import { GetDogPhoto } from "../DogProfile/GetDogPhoto";
import ButtonRabies from "../Buttons/ButtonRabies";
import Container from "@mui/material/Container";
import WalksHistory from "../DogProfile/WalksHistory";

const SingleDogViewWithEdition = () => {
  const styles = {
    paperImageContainer: {},
  };
  return (
    <>
      <Container sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper>
              <IconNameBreed />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <AgeWeight />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={styles.paperImageContainer}>
              <GetDogPhoto />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Box />
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={6} md={2}>
            <ButtonFeeding />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonWalk />
            {/* <WalksHistory /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonCleaning />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonPills />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonRabies />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleDogViewWithEdition;
