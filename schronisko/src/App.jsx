import "./App.css";
import { Footer } from "./components/Footer/Footer";
import ResponsiveAppBar from "./components/Topbar/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { theme } from "./themes/Themes";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<div>Strona główna</div>} />
          <Route
            path="/wolontariat"
            element={<div>Panel Wolontariusza logowanie i rejestracja</div>}
          />
          <Route
            path="/psy"
            element={<div>Lista psów dla wolonatriusza</div>}
          />
          <Route
            path="/psy/:id"
            element={<div>Strona konkretnego psa dla wolontariusza</div>}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
