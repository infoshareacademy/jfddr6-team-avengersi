import { Footer } from "./components/Footer/Footer";
import { Topbar } from "./components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={<div>Strona główna z listą psów i opisem</div>}
          />
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
    </>
  );
}

export default App;
