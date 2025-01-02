import React from 'react';
import { Link } from 'react-router-dom';

const Servicios = () => {
    return (
        <div className="relative min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h1>
            <p className="text-center mb-4">
                En MDV&SCLL ofrecemos servicios personalizados para garantizar la integración y el desarrollo personal.
            </p>
            {/* Botones de Navegación */}
            <Link
                to="/"
                className="fixed bottom-4 left-4 bg-gray-500 hover:bg-gray-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                ⬅ Atrás
            </Link>
            <Link
                to="/calidad"
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                ➡ Siguiente
            </Link>
        </div>
    );
};

export default Servicios;
