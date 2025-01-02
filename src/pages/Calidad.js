import React from 'react';
import { Link } from 'react-router-dom';

const ConformidadYCalidad = () => {
    return (
        <div className="relative min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Conformidad y Calidad</h1>
            <p className="text-center mb-4">
                Nos enfocamos en cumplir con altos estándares de calidad para garantizar la satisfacción de nuestros usuarios.
            </p>
            {/* Botones de Navegación */}
            <Link
                to="/servicios"
                className="fixed bottom-4 left-4 bg-gray-500 hover:bg-gray-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                ⬅ Atrás
            </Link>
            <Link
                to="/contacto"
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                ➡ Siguiente
            </Link>
        </div>
    );
};

export default ConformidadYCalidad;
