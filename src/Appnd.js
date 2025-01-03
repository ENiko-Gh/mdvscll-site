// src/App.js
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Calidad from "./pages/Calidad";
import Blog from "./pages/Blog";
import Formulario from "./pages/Formulario";
import Contacto from "./pages/Contacto";
import Visitas from "./pages/Visitas"; // No es necesario agregar la extensión .jsx si la configuración de webpack lo permite
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Cabecera del sitio */}
        <Header />

        {/* Contenido principal */}
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/calidad" element={<Calidad />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/visitas" element={<Visitas />} /> {/* Nueva ruta */}
          </Routes>
        </main>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
