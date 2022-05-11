import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SingleDogView from "./SingleDogView";

function DogsList() {
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

  console.log(listOfDogs());

  return (
    <>
      {dogs.length > 0 ? (
        <>{listOfDogs()}</>
      ) : (
        console.log("No dogs here, buddy!")
      )}
    </>
  );
}
export default DogsList;
