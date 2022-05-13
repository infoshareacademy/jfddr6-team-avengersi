import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db";
import SingleDogViewForClients from "./SingleDogViewForClients";

function DogsListForClients() {
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

  return <>{listOfDogs()}</>;
}
export default DogsListForClients;
