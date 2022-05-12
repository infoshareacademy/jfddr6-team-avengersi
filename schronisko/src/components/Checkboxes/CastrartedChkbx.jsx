import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../db";
import { theme } from "../../themes/Themes";

const CastratedChkbx = ({ id }) => {
  const [isFixed, setisFixed] = useState("");
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        fixed: doc.data().fixed,
      };
      setisFixed(oneDog);
    });
  }, []);

  const handleChange = async (e) => {
    await setDoc(doc(db, "dogs", id), {
      fixed: e.trget.checked ? true : false,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        label="Kastracja"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontFamily: "Roboto, Helvetica, Arial,sans-serif",
            fontWeight: "500",
            color: "primary",
          },
        }}
        control={
          <Checkbox
            color="primary"
            checked={isFixed}
            onChange={(e) => handleChange}
          />
        }
      />
    </ThemeProvider>
  );
};

export default CastratedChkbx;
