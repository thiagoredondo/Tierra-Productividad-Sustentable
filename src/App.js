import { Routes, Route } from "react-router-dom";
import Home from "./js/pages/Home";
import About from "./js/pages/About";
import Navbar from "./js/components/Navbar/Navbar";
import Footer from "./js/components/Footer/Footer";
import SocialMedia from "./js/components/SocialMedia/SocialMedia";
import Seguridad from "./js/pages/Seguridad";
import Capacitaciones from "./js/pages/Capacitaciones";
import GestionAmbiental from "./js/pages/Gestion";
import Agenda from "./js/components/Servicios/Agenda";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gestionambiental" element={<GestionAmbiental />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
        <Route path="/#agenda" element={<Agenda />} />
      </Routes>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
