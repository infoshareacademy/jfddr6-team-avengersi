import { Footer } from "./components/Footer/Footer";
import { Topbar } from "./components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { themes } from "./themes";

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <BrowserRouter>
          <Topbar />
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
    </>
  );
}

export default App;
