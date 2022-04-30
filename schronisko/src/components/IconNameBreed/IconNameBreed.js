import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../db";

const IconNameBreed = () => {
  const [dog, setDog] = useState([]);

  const id = "egKLOmZq8r7pvNfNAdNC"; //props

  const docRef = doc(db, "dogs", id);
  onSnapshot(docRef, (doc) => {
    const oneDog = {
      name: doc.data().name,
      breed: doc.data().breed,
    };
    setDog(oneDog);
  });

  //styled:

  const mainStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0px 10px",
  };

  return (
    <div style={mainStyle}>
      <div style={iconStyle}>
        <PetsIcon fontSize="large" />
      </div>
      <div>
        <Typography variant="h5">{dog.name}</Typography>
        <Typography variant="body2">{dog.breed}</Typography>
      </div>
    </div>
  );
};

export default IconNameBreed;
