import "./App.css";
import { Footer } from "./components/Footer/Footer";
import ResponsiveAppBar from "./components/Topbar/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./themes/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./Routes/Home";
import { DogList } from "./Routes/DogList";
import { Dashboard } from "./Routes/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wolontariat" element={<Dashboard />} />
          <Route path="/psy" element={<DogList />} />
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
