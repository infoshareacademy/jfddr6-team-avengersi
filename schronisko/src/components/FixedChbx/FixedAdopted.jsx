import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import { theme } from "../../themes/Themes";

export const FixedAdopted = ({ id }) => {
  const [isAdopted, setIsAdopted] = useState(false);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        adopted: doc.data().fixed,
      };
      setIsAdopted(oneDog);
      // console.log(oneDog);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        label="Adoptowany"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontFamily: "Roboto, Helvetica, Arial,sans-serif",
            fontWeight: "500",
            color: "primary",
          },
        }}
        control={<Checkbox color="primary" checked={isAdopted} />}
      />
    </ThemeProvider>
  );
};
