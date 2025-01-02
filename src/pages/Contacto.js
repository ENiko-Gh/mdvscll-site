// src/pages/Contacto.js
import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
    return (
        <div className="relative min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
            <p className="text-center mb-4">
                Ponte en contacto con nosotros para obtener más información o resolver tus dudas. Estamos aquí para ayudarte.
            </p>
            <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">Nombre:</label>
                    <input type="text" id="nombre" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block text-gray-700">Correo:</label>
                    <input type="email" id="correo" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="mensaje" className="block text-gray-700">Mensaje:</label>
                    <textarea id="mensaje" className="w-full p-2 border rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-300 ease-in-out">
                    Enviar
                </button>
            </form>
            {/* Botón Atrás */}
            <Link
                to="/calidad"
                className="fixed bottom-4 left-4 bg-gray-500 hover:bg-gray-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                ⬅ Atrás
            </Link>
        </div>
    );
};

export default Contacto;
