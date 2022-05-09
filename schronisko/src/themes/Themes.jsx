import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#0B5C4C",
      main: "#5CDBC2",
      dark: "#47A895",
      contrastText: "#fff",
    },
    secondary: {
      light: "#DFADE1",
      main: "#D567DB",
      dark: "#A44FA8",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});
