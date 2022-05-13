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
import DogsListForClients from "./components//DogsList/DogsListForClients";
import { Home } from "./Routes/Home";
import { Dashboard } from "./Routes/Dashboard";
import moment from "moment";
import pl from "moment/locale/pl";
import { ClientsForm } from "./components/ClientsForm/ClientsForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./db";
import { useState } from "react";

function App() {
  moment.locale("pl");

  const [isAuth, setIsAuth] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user.email);
    } else {
      setIsAuth(false);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dogs"
            element={isAuth ? <DogList /> : <DogsListForClients />}
          />
          <Route path="/dog/:id" element={<SingleDogViewWithEdition />} />
          <Route path="/addDog" element={<AddDogForm />} />
          <Route path="/adopt" element={<ClientsForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
