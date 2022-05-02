import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/Themes";

const CastratedChkbx = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        label="Kastracja"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontFamily: "Roboto, Helvetica, Arial,sans-serif",
            fontWeight: "500",
            color: "#E28CA0",
          },
        }}
        control={
          <Checkbox
            defaultChecked
            color="secondary"
            //   onChange={handleChange}
          />
        }
      />
    </ThemeProvider>
  );
};

export default CastratedChkbx;
