import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";

const App = () => {
  return (
    <div className="text-zinc-100 bg-zinc-950">
      <NavBar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;