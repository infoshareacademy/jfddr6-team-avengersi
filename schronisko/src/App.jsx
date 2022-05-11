import "./App.css";
import { Footer } from "./components/Footer/Footer";
import ResponsiveAppBar from "./components/Topbar/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { theme } from "./themes/Themes";
import { ThemeProvider } from "@mui/material/styles";
import Slider from "./components/Slider/Slider";
import { AddDogForm } from "./components/AddDog/AddDogForm";
import SingleDogViewWithEdition from "./components/SingleDogViewWithEdition/SingleDogViewWithEdition";
import { DogList } from "./Routes/DogList";
import { Home } from "./Routes/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/wolontariat"
            element={<div>Panel Wolontariusza logowanie i rejestracja</div>}
          />
          <Route path="/psy" element={<DogList />} />
          <Route path="/dog/:id" element={<SingleDogViewWithEdition />} />
          <Route path="/test" element={<SingleDogViewWithEdition />} />
          <Route path="/addDog" element={<AddDogForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
