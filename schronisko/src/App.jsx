import { Footer } from "./components/Footer/Footer";
// import { Topbar } from "./components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { theme } from "./themes/Themes";
import { ThemeProvider } from "@mui/material/styles";
import SingleDogViewWithEdition from "./components/SingleDogViewWithEdition/SingleDogViewWithEdition";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <Topbar /> */}
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
            <Route
              path="/pies/"
              element={
                <>
                  <div>Strona konkretnego psa dla wolontariusza TEST</div>
                  <SingleDogViewWithEdition />
                </>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
