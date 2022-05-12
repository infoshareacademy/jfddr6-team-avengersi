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
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ButtonDelete from "../Buttons/ButtonDelete";
import ListOfComments from "../Comment/ListOfComments";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../db";

const SingleDogViewWithEdition = () => {
  const params = useParams();
  const id = params.id;

  const [walksList, setWalksList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [dogsDescriptionValue, setDogsDescriptionValue] = useState("");

  const getDogs = async () => {
    const docReferrence = doc(db, "dogs", id);
    console.log(id);
    const dogDocument = await getDoc(docReferrence);

    const dogData = {
      id: dogDocument.id,
      walks: dogDocument.data().walks,
      comments: dogDocument.data().comments,
      description: dogDocument.data().description,
    };
    console.log(id);
    setWalksList(dogData.walks.slice(-3).reverse());
    setCommentList(dogData.comments.slice(-3).reverse());
    setDogsDescriptionValue(dogData.description);
  };

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} sx={{ mb: 2 }}>
            <GetDogPhotoOnlyUrl id={id} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper>
              <IconNameBreed id={id} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <AgeWeight id={id} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <BoxNumber id={id} />
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
            <ButtonFeeding id={id} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonWalk id={id} getDogs={getDogs} />
            <WalksHistory id={id} getDogs={getDogs} walksList={walksList} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonCleaning id={id} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonPills id={id} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ButtonRabies id={id} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Comment id={id} getDogs={getDogs} />
            <ListOfComments
              id={id}
              getDogs={getDogs}
              commentList={commentList}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Description
              id={id}
              dogsDescriptionValue={dogsDescriptionValue}
              setDogsDescriptionValue={setDogsDescriptionValue}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{ textAlign: "center" }}>
            <CastratedChkbx id={id} />
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{ textAlign: "center" }}>
            <AdoptedChkbx id={id} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              marginTop: "20px",
              textAlign: "right",
            }}
          >
            <ButtonDelete id={id} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleDogViewWithEdition;
