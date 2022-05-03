import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/Themes";
import CastratedChkbx from "../Checkboxes/CastrartedChkbx.jsx";

export default function AddDogForm() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Imię" variant="outlined" />
      <TextField id="outlined-basic" label="Rasa" variant="outlined" />
      <TextField id="outlined-basic" label="Wiek" variant="outlined" />
      <TextField id="outlined-basic" label="Waga" variant="outlined" />
      <TextField id="outlined-basic" label="BOX" variant="outlined" />
      <TextField id="outlined-basic" label="LEKI" variant="outlined" />
      <TextField id="outlined-basic" label="WŚCIEKLIZNA" variant="outlined" />
      <CastratedChkbx />
    </Box>
  );
}
