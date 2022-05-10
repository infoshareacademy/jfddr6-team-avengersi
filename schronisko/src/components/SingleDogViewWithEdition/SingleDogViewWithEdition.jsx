import IconNameBreed from "../IconNameBreed/IconNameBreed";
import BoxNumber from "../Box/Box";
import AgeWeight from "../AgeWeight/AgeWeight";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonFeeding from "../Buttons/ButtonFeeding";
import ButtonWalk from "../Buttons/ButtonWalk";
import ButtonCleaning from "../Buttons/ButtonCleaning";
import ButtonPills from "../Buttons/ButtonPills";
import { GetDogPhotoOnlyUrl } from "../DogProfile/GetDogPhotoOnlyUrl";
import ButtonRabies from "../Buttons/ButtonRabies";
import Container from "@mui/material/Container";
import WalksHistory from "../DogProfile/WalksHistory";
import Description from "../Description/Description";

const SingleDogViewWithEdition = () => {
  const styles = {
    paperImageContainer: {
      backgroundImage: `HERE: url(${(<GetDogPhotoOnlyUrl />)})`,
    },
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
            <Paper
              style={{
                backgroundImage: `url(${{ GetDogPhotoOnlyUrl }})`,
              }}
            >
              <GetDogPhotoOnlyUrl />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <BoxNumber />
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
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
          <Grid item xs={12} sm={12} md={2}>
            <ButtonRabies />
          </Grid>
        </Grid>
      </Container>
      <Description />
    </>
  );
};

export default SingleDogViewWithEdition;
