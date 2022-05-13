import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import { theme } from "../../themes/Themes";

export const FixedFixed = ({ id }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    onSnapshot(docRef, (doc) => {
      const oneDog = {
        fixed: doc.data().fixed,
      };
      setIsFixed(oneDog);
      // console.log(oneDog);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        label="Kastrowany"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontFamily: "Roboto, Helvetica, Arial,sans-serif",
            fontWeight: "500",
            color: "primary",
          },
        }}
        control={<Checkbox color="primary" checked={isFixed} />}
      />
    </ThemeProvider>
  );
};
