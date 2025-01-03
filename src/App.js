import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Asegúrate de que Header exista
import Footer from './components/Footer'; // Asegúrate de que Footer exista
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Conformidad from './pages/Conformidad';
import Contacto from './pages/Contacto';
import Visitas from './pages/Visitas';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header /> {/* Encabezado */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/calidad" element={<Conformidad />} />
                        <Route path="/visitas" element={<Visitas />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </main>
                <Footer /> {/* Pie de página */}
            </div>
        </Router>
    );
};

export default App;
