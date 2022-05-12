import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db";
import SingleDogViewForClients from "./SingleDogViewForClients";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DogsListForClients() {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    const dogsCollection = collection(db, "dogs");
    const dogsDocuments = await getDocs(dogsCollection);

    const dogsData = dogsDocuments.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setDogs(dogsData);
  };

  useEffect(() => {
    getDogs();
  }, []);

  const listOfDogs = () =>
    dogs.map((dog) => (
      <SingleDogViewForClients key={dog.id} id={dog.id} refreshList={getDogs} />
    ));

  return (
    <>
      <Container sx={{ mt: 1 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          onClick={() => navigate("/addDog")}
          color="success"
        >
          Dodaj nowego psiaka
        </Button>
      </Container>

      {listOfDogs()}
    </>
  );
}
export default DogsListForClients;
