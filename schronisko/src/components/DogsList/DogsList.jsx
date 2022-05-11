import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db";
import SingleDogView from "./SingleDogView";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DogsList() {
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
      <SingleDogView key={dog.id} id={dog.id} refreshList={getDogs} />
    ));

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        size="large"
        onClick={() => navigate("/addDog")}
      >
        Dodaj nowego psiaka
      </Button>

      {listOfDogs()}
    </>
  );
}
export default DogsList;
