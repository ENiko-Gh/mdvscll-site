// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

    // Función para alternar el estado del menú
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-orange-500 text-white p-4">
            <div className="flex items-center justify-between">
                {/* Logo y Nombre de la Empresa */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-10" /> {/* Ruta del logo */}
                    <div className="ml-4">
                        <h1 className="text-xl font-bold">MDV&SCLL</h1>
                        <p className="text-sm italic">Soluciones para la inclusión y bienestar</p>
                    </div>
                </div>

                {/* Menú de navegación para pantallas grandes */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white">Inicio</Link>
                    <Link to="/servicios" className="text-white">Servicios</Link>
                    <Link to="/calidad" className="text-white">Calidad y Compromiso</Link>
                    <Link to="/blog" className="text-white">Blog</Link>
                    <Link to="/contacto" className="text-white">Contacto</Link>
                    <Link to="/formulario" className="text-white">Formulario</Link>
                </div>

                {/* Botón de menú hamburguesa para pantallas pequeñas */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <img src="/hamburger-icon.png" alt="Menú" className="w-6 h-6" /> {/* Imagen de menú hamburguesa */}
                    </button>
                </div>
            </div>

            {/* Menú desplegable para pantallas pequeñas */}
            {menuOpen && (
                <nav className="md:hidden mt-4 bg-orange-500">
                    <ul className="space-y-2 px-4">
                        <li><Link to="/" className="text-white block p-2" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                        <li><Link to="/servicios" className="text-white block p-2" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
                        <li><Link to="/calidad" className="text-white block p-2" onClick={() => setMenuOpen(false)}>Calidad y Compromiso</Link></li>
                        <li><Link to="/blog" className="text-white block p-2" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/contacto" className="text-white block p-2" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                        <li><Link to="/formulario" className="text-white block p-2" onClick={() => setMenuOpen(false)}>Formulario</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
