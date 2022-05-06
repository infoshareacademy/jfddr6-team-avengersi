import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#5CDBC2",
      main: "#118F76",
      dark: "#0B5C4C",
      contrastText: "#fff",
    },
    secondary: {
      light: "#D567DB",
      main: "#89188F",
      dark: "#58105C",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});
