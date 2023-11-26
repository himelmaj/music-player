import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Artistspage } from "./pages/ArtistsPage";
import { Playerpage } from "./pages/Playerpage";
import { Artistpage } from "./pages/Artistpage";
import { useParams } from "react-router-dom";
import { Footer } from "./components/Footer";


function App() {
    const params = useParams();
    console.log(params);
  return (
    <BrowserRouter>
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to={"/player"} />} />
          <Route path="/player" element={<Playerpage />} />
          <Route path="/artists" element={<Artistspage />} />
          <Route path="/artist/:id" element={<Artistpage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
