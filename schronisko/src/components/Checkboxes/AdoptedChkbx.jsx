import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import { theme } from "../../themes/Themes";

const AdoptedChkbx = ({ id }) => {
  const [isAdopted, setIsAdopted] = useState(false);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      const adopted = doc.data().adopted;
      setIsAdopted(adopted);
    });
    return unsubscribe;
  }, []);

  const handleChange = async () => {
    await updateDoc(doc(db, "dogs", id), {
      adopted: !isAdopted,
    });
    setIsAdopted(!isAdopted);
  };
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
        control={
          <Checkbox
            color="primary"
            checked={isAdopted}
            onChange={handleChange}
          />
        }
      />
    </ThemeProvider>
  );
};

export default AdoptedChkbx;
