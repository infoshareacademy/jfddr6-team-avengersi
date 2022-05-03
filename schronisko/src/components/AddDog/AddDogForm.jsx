import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/Themes";
import CastratedChkbx from "../Checkboxes/CastrartedChkbx.jsx";

export default function AddDogForm() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "35ch",
          },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TextField
          id="outlined-basic"
          label="Imię"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Rasa"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Wiek"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Waga"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="BOX"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Leki"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="WŚCIEKLIZNA"
          variant="outlined"
          size="small"
        />
        <CastratedChkbx />
      </Box>
    </ThemeProvider>
  );
}
