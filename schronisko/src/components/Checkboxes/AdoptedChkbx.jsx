import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/Themes";

const AdoptedChkbx = () => {
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
            defaultChecked
            color="primary"
            //   onChange={handleChange}
          />
        }
      />
    </ThemeProvider>
  );
};

export default AdoptedChkbx;
