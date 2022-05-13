import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db";
import { theme } from "../../themes/Themes";

const CastratedChkbx = ({ id }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const docRef = doc(db, "dogs", id);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      const fixed = doc.data().fixed;
      setIsFixed(fixed);
      // console.log(adopted);
    });
    return unsubscribe;
  }, []);

  const handleChange = async () => {
    await updateDoc(doc(db, "dogs", id), {
      fixed: !isFixed,
    });
    setIsFixed(!isFixed);
    // console.log(isFixed);
  };
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
        control={
          <Checkbox color="primary" checked={isFixed} onChange={handleChange} />
        }
      />
    </ThemeProvider>
  );
};

export default CastratedChkbx;
