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
import styles from "./SingleDogViewWithEdition.module.css";
import AdoptedChkbx from "../../components/Checkboxes/AdoptedChkbx";
import CastratedChkbx from "../../components/Checkboxes/CastrartedChkbx";
import Comment from "../../components/Comment/AddComment";

const SingleDogViewWithEdition = () => {
  const dogId = "25f6188c-1f41-4894-81a2-ecf376ec0b9f";

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} sx={{ mb: 2 }}>
            <GetDogPhotoOnlyUrl id={dogId} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper>
              <IconNameBreed id={dogId} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <AgeWeight id={dogId} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <BoxNumber id={dogId} />
            </Paper>
          </Grid>
        </Grid>
        {/* </Grid> */}

        <Grid
          container
          columns={10}
          spacing={2}
          sx={{
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Grid item xs={12} sm={6} md={2}>
            <ButtonFeeding id={dogId} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonWalk id={dogId} />
            {/* <WalksHistory /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonCleaning id={dogId} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonPills id={dogId} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonRabies id={dogId} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Comment id={dogId} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Description id={dogId} />
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{ textAlign: "center" }}>
            <CastratedChkbx id={dogId} />
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{ textAlign: "center" }}>
            <AdoptedChkbx id={dogId} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleDogViewWithEdition;
