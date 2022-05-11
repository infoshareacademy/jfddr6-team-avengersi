import "./App.css";
import { Footer } from "./components/Footer/Footer";
import ResponsiveAppBar from "./components/Topbar/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { theme } from "./themes/Themes";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./routes/HomePage";
import DogsList from "./components/DogsList/DogsList.jsx";
import Slider from "./components/Slider/Slider";
import { AddDogForm } from "./components/AddDog/AddDogForm";
import SingleDogViewWithEdition from "./components/SingleDogViewWithEdition/SingleDogViewWithEdition";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route
            path="/wolontariat"
            element={<div>Panel Wolontariusza logowanie i rejestracja</div>}
          />
          <Route path="/psy" element={<DogsList />} />
          <Route
            path="/psy/:id"
            element={<div>Strona konkretnego psa dla wolontariusza</div>}
          />
          <Route path="/test" element={<SingleDogViewWithEdition />} />
          <Route path="/addDog" element={<AddDogForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
