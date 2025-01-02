// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('ruta-a-tu-imagen.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Capa oscura sobre la imagen */}

            <div className="relative z-10 p-8 text-center text-white">
                <h2 className="text-3xl font-bold">Bienvenido a MDV&SCLL</h2>
                <p className="mt-4">Somos una empresa dedicada a soluciones para la inclusión y el bienestar.</p>

                <div className="mt-8">
                    <Link to="/formulario" className="bg-orange-500 text-white p-2 rounded mr-4">Conocer más</Link>
                    <Link to="/contacto" className="bg-orange-500 text-white p-2 rounded">Contactar</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
