import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../db";

export const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const getDogsData = async () => {
    const getDogsCollection = collection(db, "dogs");
    const dogsDocs = await getDocs(getDogsCollection);

    const dogs = dogsDocs.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    console.log(dogs);
    setDogs(dogs);
  };
  useEffect(() => {
    getDogsData();
  }, []);

  const renderDogs = () =>
    dogs.map((el) => (
      <div key={el.id}>
        <p>{el.data.name}</p>
        <p>{el.data.breed}</p>
        <p>{el.data.sex}</p>
        <p>{el.data.dateOfBirth}</p>
        <p>{el.data.weight}</p>
        <p>{el.data.box}</p>
        <p>{el.data.pills}</p>
        <p>{el.data.rabiesVaccination}</p>
        <p>{el.data.description}</p>
        <p>{el.data.comment}</p>
      </div>
    ));

  return <>{renderDogs()}</>;
};
